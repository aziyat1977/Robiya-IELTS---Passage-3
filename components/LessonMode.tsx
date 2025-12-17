import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, XCircle, RefreshCw, Layers, Mic, Square, Play, Download, ChevronRight, ChevronLeft } from 'lucide-react';
import { useReading } from '../context/ReadingContext';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { VocabItem, GrammarVisual, GrammarExample } from '../types';

// --- Utility: Shuffle Array ---
const shuffle = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

// --- Component: Audio Recorder ---
const AudioRecorder = ({ questionId }: { questionId: string }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      chunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        // Persist "recorded" status (not the blob itself due to limits) to local storage
        localStorage.setItem(`rec_${questionId}`, 'true');
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (err) {
      alert("Microphone access denied or not available.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const downloadAudio = () => {
    if (audioUrl) {
      const a = document.createElement('a');
      a.href = audioUrl;
      a.download = `recording_${questionId}.webm`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div className="bg-slate-800/50 p-4 rounded-xl border border-white/10 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        {!isRecording ? (
          <button 
            onClick={startRecording}
            className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-500 flex items-center justify-center shadow-lg transition-colors"
          >
            <Mic className="w-6 h-6 text-white" />
          </button>
        ) : (
          <button 
            onClick={stopRecording}
            className="w-12 h-12 rounded-full bg-slate-700 hover:bg-slate-600 flex items-center justify-center shadow-lg transition-colors border-2 border-red-500 animate-pulse"
          >
            <Square className="w-5 h-5 text-white" />
          </button>
        )}
        
        {audioUrl && !isRecording && (
          <audio src={audioUrl} controls className="h-10 w-48" />
        )}
      </div>

      <div className="flex gap-2">
        {audioUrl && (
          <button onClick={downloadAudio} className="p-2 bg-blue-600 rounded-lg hover:bg-blue-500 text-white transition-colors" title="Download Recording">
            <Download className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};

// --- Component: Animated Grammar Visualizer ---
const GrammarVisualizer: React.FC<{ visual: GrammarVisual }> = ({ visual }) => {
  const [step, setStep] = useState(0);

  const currentStep = visual.steps[step];
  const words = currentStep.text.split(" ");

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % visual.steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [visual]);

  return (
    <div className="bg-slate-900/80 rounded-2xl p-6 border border-purple-500/30 shadow-2xl relative overflow-hidden mb-8 w-full">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500" />
      <h4 className="text-sm font-bold text-purple-300 uppercase tracking-widest mb-6 text-center">{visual.title}</h4>
      
      <div className="h-24 flex items-center justify-center relative">
        <LayoutGroup>
          <motion.div layout className="flex gap-3 flex-wrap justify-center">
            {words.map((word, i) => {
              const isHighlighted = currentStep.highlightIndices.includes(i);
              return (
                <motion.div
                  key={`${word}-${i}`} // simple key for demo, normally unique ID
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: isHighlighted ? 1.2 : 1,
                    color: isHighlighted ? '#a78bfa' : '#cbd5e1',
                    fontWeight: isHighlighted ? 800 : 400
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="text-2xl md:text-3xl"
                >
                  {word}
                </motion.div>
              );
            })}
          </motion.div>
        </LayoutGroup>
      </div>

      <motion.div 
        key={step}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-blue-200 font-mono mt-4 bg-blue-900/30 inline-block px-4 py-1 rounded-full mx-auto block w-max"
      >
        {currentStep.annotation}
      </motion.div>
    </div>
  );
};

// --- Types for Grammar Slides ---
type GrammarSlide = 
  | { type: 'INTRO'; id: string; title: string; content: string }
  | { type: 'VISUAL'; id: string; title: string; data: GrammarVisual }
  | { type: 'EXAMPLE'; id: string; title: string; data: GrammarExample };

const LessonMode: React.FC = () => {
  const { moduleData } = useReading();
  const location = useLocation();
  const isVocab = location.pathname.includes('vocab');
  
  const [activeTab, setActiveTab] = useState<'learn' | 'quiz' | 'practice'>('learn');
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [currentVocabIndex, setCurrentVocabIndex] = useState(0);
  const [currentGrammarIndex, setCurrentGrammarIndex] = useState(0);

  // Randomize quiz options on mount or when switching to quiz tab
  const [randomizedItems, setRandomizedItems] = useState<any[]>([]);

  useEffect(() => {
    setActiveTab('learn');
    setQuizAnswers({});
    setShowResults(false);
    setCurrentVocabIndex(0);
    setCurrentGrammarIndex(0);
  }, [location.pathname]);

  useEffect(() => {
    if (activeTab === 'quiz') {
      const items = isVocab ? moduleData.vocabSection.flatMap(v => v.quiz) : moduleData.grammarSection.quiz;
      const randomized = items.map(q => ({
        ...q,
        options: q.options ? shuffle(q.options) : undefined
      }));
      setRandomizedItems(randomized);
    }
  }, [activeTab, isVocab, moduleData]);

  const title = isVocab ? "Vocabulary Focus" : "Grammar Focus";
  const vocabItems = moduleData.vocabSection;
  const grammar = moduleData.grammarSection;

  // Pre-calculate Grammar Slides
  const grammarSlides: GrammarSlide[] = useMemo(() => {
    if (!grammar) return [];
    return [
      { type: 'INTRO', id: 'intro', title: grammar.topic, content: grammar.content },
      ...grammar.visuals.map((v, i) => ({ type: 'VISUAL', id: `vis-${i}`, title: v.title, data: v } as GrammarSlide)),
      ...grammar.examples.map((e, i) => ({ type: 'EXAMPLE', id: `ex-${i}`, title: `Example ${i + 1}`, data: e } as GrammarSlide))
    ];
  }, [grammar]);

  const handleQuizSubmit = () => setShowResults(true);
  const resetQuiz = () => {
    setQuizAnswers({});
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans flex flex-col relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>

      {/* Glass Header */}
      <header className="sticky top-0 z-20 px-4 py-4 md:px-6 flex flex-col md:flex-row items-center justify-between bg-[#0f172a]/90 backdrop-blur-xl border-b border-white/10 gap-4">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <Link to="/reading" className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
            {title}
          </h1>
        </div>
        <div className="flex bg-black/40 p-1 rounded-xl border border-white/5 relative w-full md:w-auto overflow-hidden">
          <motion.div 
              layoutId="tab-bg"
              className="absolute bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg rounded-lg"
              initial={false}
              animate={{ 
                  x: activeTab === 'learn' ? 0 : activeTab === 'quiz' ? '100%' : '200%', 
                  width: isVocab ? '33.33%' : '50%'
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ height: 'calc(100% - 8px)', top: 4, left: 0 }}
          />
          <button 
            onClick={() => setActiveTab('learn')}
            className={`flex-1 md:flex-none px-6 py-2 rounded-lg text-sm font-bold tracking-wide transition-colors relative z-10 ${activeTab === 'learn' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
          >
            LEARN
          </button>
          <button 
            onClick={() => setActiveTab('quiz')}
            className={`flex-1 md:flex-none px-6 py-2 rounded-lg text-sm font-bold tracking-wide transition-colors relative z-10 ${activeTab === 'quiz' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
          >
            QUIZ
          </button>
          {isVocab && (
            <button 
              onClick={() => setActiveTab('practice')}
              className={`flex-1 md:flex-none px-6 py-2 rounded-lg text-sm font-bold tracking-wide transition-colors relative z-10 ${activeTab === 'practice' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
            >
              SPEAKING
            </button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6 md:p-8 max-w-6xl mx-auto w-full relative z-10">
        <AnimatePresence mode="wait">
        
        {/* === LEARN TAB === */}
        {activeTab === 'learn' && (
          <motion.div 
            key="learn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="perspective-1000"
          >
            {isVocab ? (
              // === PAGINATED VOCAB VIEW ===
              <div className="flex flex-col items-center justify-center min-h-[60vh] relative">
                 {/* Navigation Controls */}
                 <div className="absolute top-1/2 left-0 -translate-y-1/2 z-20 hidden md:block">
                    <button 
                       onClick={() => setCurrentVocabIndex(prev => Math.max(0, prev - 1))}
                       disabled={currentVocabIndex === 0}
                       className="p-4 rounded-full bg-slate-800/50 hover:bg-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all border border-white/10 shadow-lg backdrop-blur-sm group"
                    >
                       <ChevronLeft className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                    </button>
                 </div>
                 <div className="absolute top-1/2 right-0 -translate-y-1/2 z-20 hidden md:block">
                    <button 
                       onClick={() => setCurrentVocabIndex(prev => Math.min(vocabItems.length - 1, prev + 1))}
                       disabled={currentVocabIndex === vocabItems.length - 1}
                       className="p-4 rounded-full bg-slate-800/50 hover:bg-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all border border-white/10 shadow-lg backdrop-blur-sm group"
                    >
                       <ChevronRight className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                    </button>
                 </div>

                 <AnimatePresence mode="wait">
                   <motion.div
                      key={currentVocabIndex}
                      initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
                      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                      exit={{ opacity: 0, scale: 0.9, rotateX: -10 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className="text-center max-w-5xl w-full"
                   >
                      <motion.h2 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-[4rem] sm:text-[6rem] md:text-[8rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-200 via-white to-purple-200 leading-tight drop-shadow-[0_0_50px_rgba(59,130,246,0.3)] mb-8 select-none"
                      >
                         {vocabItems[currentVocabIndex].word}
                      </motion.h2>
                      
                      <motion.div 
                         initial={{ width: 0 }}
                         animate={{ width: 150 }}
                         transition={{ delay: 0.3 }}
                         className="h-2 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-12"
                      />
                      
                      <motion.p 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl md:text-4xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto"
                      >
                         {vocabItems[currentVocabIndex].definition}
                      </motion.p>
                   </motion.div>
                 </AnimatePresence>

                 {/* Pagination Dots & Mobile Controls */}
                 <div className="mt-16 flex flex-col items-center gap-6">
                    <div className="flex md:hidden gap-8">
                       <button 
                          onClick={() => setCurrentVocabIndex(prev => Math.max(0, prev - 1))}
                          disabled={currentVocabIndex === 0}
                          className="p-3 rounded-full bg-slate-800 disabled:opacity-30"
                       >
                          <ChevronLeft className="w-6 h-6" />
                       </button>
                       <button 
                          onClick={() => setCurrentVocabIndex(prev => Math.min(vocabItems.length - 1, prev + 1))}
                          disabled={currentVocabIndex === vocabItems.length - 1}
                          className="p-3 rounded-full bg-slate-800 disabled:opacity-30"
                       >
                          <ChevronRight className="w-6 h-6" />
                       </button>
                    </div>

                    <div className="flex gap-3">
                      {vocabItems.map((_, idx) => (
                         <button 
                           key={idx}
                           onClick={() => setCurrentVocabIndex(idx)}
                           className={`h-2 rounded-full transition-all duration-300 ${idx === currentVocabIndex ? 'w-12 bg-blue-500 shadow-[0_0_10px_#3b82f6]' : 'w-2 bg-slate-700 hover:bg-slate-600'}`} 
                         />
                      ))}
                    </div>
                 </div>
              </div>
            ) : (
              // === PAGINATED GRAMMAR VIEW ===
              <div className="flex flex-col items-center justify-center min-h-[60vh] relative">
                 {/* Navigation Controls */}
                 <div className="absolute top-1/2 left-0 -translate-y-1/2 z-20 hidden md:block">
                    <button 
                       onClick={() => setCurrentGrammarIndex(prev => Math.max(0, prev - 1))}
                       disabled={currentGrammarIndex === 0}
                       className="p-4 rounded-full bg-slate-800/50 hover:bg-purple-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all border border-white/10 shadow-lg backdrop-blur-sm group"
                    >
                       <ChevronLeft className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                    </button>
                 </div>
                 <div className="absolute top-1/2 right-0 -translate-y-1/2 z-20 hidden md:block">
                    <button 
                       onClick={() => setCurrentGrammarIndex(prev => Math.min(grammarSlides.length - 1, prev + 1))}
                       disabled={currentGrammarIndex === grammarSlides.length - 1}
                       className="p-4 rounded-full bg-slate-800/50 hover:bg-purple-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all border border-white/10 shadow-lg backdrop-blur-sm group"
                    >
                       <ChevronRight className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                    </button>
                 </div>

                 <AnimatePresence mode="wait">
                   <motion.div
                      key={currentGrammarIndex}
                      initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
                      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                      exit={{ opacity: 0, scale: 0.9, rotateX: -10 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className="text-center max-w-6xl w-full"
                   >
                     {(() => {
                        const slide = grammarSlides[currentGrammarIndex];
                        if (!slide) return null;

                        if (slide.type === 'INTRO') {
                           return (
                              <>
                                 <motion.h2 
                                    className="text-[4rem] sm:text-[6rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-200 via-white to-pink-200 leading-tight drop-shadow-[0_0_50px_rgba(147,51,234,0.3)] mb-8"
                                 >
                                    {slide.title}
                                 </motion.h2>
                                 <div className="h-2 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-12 w-[150px]" />
                                 <motion.div 
                                    className="prose prose-invert prose-2xl mx-auto text-slate-300 font-light"
                                    dangerouslySetInnerHTML={{ __html: slide.content }} 
                                 />
                              </>
                           );
                        }

                        if (slide.type === 'VISUAL') {
                           return (
                              <>
                                 <motion.h2 className="text-[3rem] md:text-[5rem] font-black text-white/90 mb-8 leading-tight">
                                    {slide.title}
                                 </motion.h2>
                                 <div className="h-2 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-12 w-[150px]" />
                                 <div className="max-w-4xl mx-auto">
                                    <GrammarVisualizer visual={slide.data} />
                                 </div>
                              </>
                           );
                        }

                        if (slide.type === 'EXAMPLE') {
                           return (
                              <>
                                 <motion.h2 className="text-[3rem] md:text-[5rem] font-black text-white/90 mb-8 leading-tight">
                                    {slide.title}
                                 </motion.h2>
                                 <div className="h-2 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-12 w-[150px]" />
                                 
                                 <div className="grid md:grid-cols-2 gap-8 text-left bg-slate-900/80 p-8 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md">
                                     <div className="flex flex-col justify-center">
                                         <span className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Original Input</span>
                                         <p className="text-2xl md:text-3xl text-slate-300 font-medium leading-relaxed">"{slide.data.original}"</p>
                                     </div>
                                     <div className="md:border-l border-white/10 md:pl-8 flex flex-col justify-center relative">
                                         <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center shadow-[0_0_15px_#9333ea] hidden md:flex">
                                            <ChevronRight className="w-5 h-5 text-white" />
                                         </div>
                                         <span className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-4">Academic Output</span>
                                         <p className="text-2xl md:text-3xl text-white font-bold leading-relaxed" dangerouslySetInnerHTML={{ __html: slide.data.nominalized }} />
                                     </div>
                                 </div>
                                 <p className="mt-8 text-slate-400 text-lg italic flex justify-center items-center gap-2">
                                    <span className="not-italic text-2xl">💡</span> {slide.data.explanation}
                                 </p>
                              </>
                           );
                        }
                     })()}
                   </motion.div>
                 </AnimatePresence>

                 {/* Pagination Dots & Mobile Controls */}
                 <div className="mt-16 flex flex-col items-center gap-6">
                    <div className="flex md:hidden gap-8">
                       <button 
                          onClick={() => setCurrentGrammarIndex(prev => Math.max(0, prev - 1))}
                          disabled={currentGrammarIndex === 0}
                          className="p-3 rounded-full bg-slate-800 disabled:opacity-30"
                       >
                          <ChevronLeft className="w-6 h-6" />
                       </button>
                       <button 
                          onClick={() => setCurrentGrammarIndex(prev => Math.min(grammarSlides.length - 1, prev + 1))}
                          disabled={currentGrammarIndex === grammarSlides.length - 1}
                          className="p-3 rounded-full bg-slate-800 disabled:opacity-30"
                       >
                          <ChevronRight className="w-6 h-6" />
                       </button>
                    </div>

                    <div className="flex gap-3">
                      {grammarSlides.map((_, idx) => (
                         <button 
                           key={idx}
                           onClick={() => setCurrentGrammarIndex(idx)}
                           className={`h-2 rounded-full transition-all duration-300 ${idx === currentGrammarIndex ? 'w-12 bg-purple-500 shadow-[0_0_10px_#a855f7]' : 'w-2 bg-slate-700 hover:bg-slate-600'}`} 
                         />
                      ))}
                    </div>
                 </div>
              </div>
            )}
          </motion.div>
        )}

        {/* === QUIZ TAB === */}
        {activeTab === 'quiz' && (
          <motion.div 
            key="quiz"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-slate-900/50 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl">
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
                <h2 className="text-2xl font-bold text-white">Assessment Matrix</h2>
                {showResults && (
                   <button onClick={resetQuiz} className="flex items-center text-sm text-blue-400 hover:text-blue-300 font-bold uppercase tracking-wide">
                     <RefreshCw className="w-4 h-4 mr-2"/> Reboot Quiz
                   </button>
                )}
              </div>

              <div className="space-y-12">
                {randomizedItems.map((q, idx) => {
                  const isCorrect = quizAnswers[idx] === q.correct; 
                  const isAnswerCorrect = 
                    isCorrect || 
                    (q.answer && quizAnswers[idx]?.trim().toLowerCase() === q.answer.trim().toLowerCase()) || 
                    (quizAnswers[idx]?.trim() === q.correct);

                  return (
                    <div key={idx} className="relative bg-white/5 p-6 rounded-2xl border border-white/5">
                       <span className="absolute -top-3 -left-3 w-8 h-8 text-center leading-8 rounded-lg bg-blue-600 text-sm font-bold text-white shadow-lg">{idx + 1}</span>
                      
                      <p className="text-xl font-medium mb-6 text-white leading-loose mt-2">
                        {isVocab ? (
                            <>
                            {q.question.split('____').map((part: string, i: number, arr: string[]) => (
                                <React.Fragment key={i}>
                                    {part}
                                    {i < arr.length - 1 && (
                                        <span className="inline-block min-w-[100px] border-b-2 border-dashed border-slate-500 mx-2 text-blue-300 text-center">
                                           {showResults && !q.options ? (isAnswerCorrect ? q.answer : <span className="text-red-400">{quizAnswers[idx] || "..."}</span>) : ""}
                                        </span>
                                    )}
                                </React.Fragment>
                            ))}
                            </>
                        ) : (
                            <>
                                {q.transform?.split('____').map((part: string, i: number, arr: string[]) => (
                                <React.Fragment key={i}>
                                    {part}
                                    {i < arr.length - 1 && (
                                         <span className="inline-block min-w-[100px] border-b-2 border-dashed border-slate-500 mx-2 text-blue-300 text-center">
                                           {showResults && !q.options ? (isAnswerCorrect ? q.answer : <span className="text-red-400">{quizAnswers[idx] || "..."}</span>) : ""}
                                        </span>
                                    )}
                                </React.Fragment>
                            ))}
                            </>
                        )}
                      </p>

                      <div className="">
                        {q.options ? (
                          <div className="flex gap-4 flex-wrap">
                            {q.options.map((opt: string) => (
                              <button
                                key={opt}
                                disabled={showResults}
                                onClick={() => setQuizAnswers(prev => ({ ...prev, [idx]: opt }))}
                                className={`px-6 py-3 rounded-xl border font-bold transition-all transform hover:scale-105 flex-1 min-w-[150px] ${
                                  quizAnswers[idx] === opt
                                    ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]'
                                    : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-800'
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        ) : (
                          <div className="flex flex-col gap-2">
                            <input 
                              type="text" 
                              disabled={showResults}
                              value={quizAnswers[idx] || ''}
                              onChange={(e) => setQuizAnswers(prev => ({ ...prev, [idx]: e.target.value }))}
                              className="bg-slate-800/50 border border-slate-600 text-white rounded-xl px-4 py-3 w-full max-w-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                              placeholder="Type answer here..."
                            />
                            {!isVocab && <div className="text-sm text-slate-400 mt-1">Original: <em>{q.original}</em></div>}
                          </div>
                        )}

                        <AnimatePresence>
                        {showResults && (
                           <motion.div 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className={`mt-4 inline-flex items-center px-4 py-3 rounded-lg text-sm font-bold border w-full ${isAnswerCorrect ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-red-500/10 border-red-500/30 text-red-400'}`}
                           >
                             { isAnswerCorrect ? (
                                 <>
                                  <CheckCircle className="w-5 h-5 mr-3" /> CORRECT
                                 </>
                             ) : (
                                 <>
                                  <XCircle className="w-5 h-5 mr-3" /> INCORRECT — ANSWER: <span className="text-white ml-2 uppercase tracking-wider">{q.correct || q.answer}</span>
                                 </>
                             )}
                           </motion.div>
                        )}
                        </AnimatePresence>
                      </div>
                    </div>
                  );
                })}
              </div>

              {!showResults && (
                <div className="mt-12 pt-8 border-t border-white/10">
                    <motion.button 
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(79, 70, 229, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleQuizSubmit}
                        className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-4 rounded-xl font-bold tracking-widest uppercase shadow-xl transition-all"
                    >
                        Verify Data
                    </motion.button>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* === PRACTICE TAB (Vocab Only) === */}
        {activeTab === 'practice' && isVocab && (
          <motion.div
            key="practice"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-slate-900/50 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-2">Speaking Lab</h2>
              <p className="text-slate-400 mb-8">Record your answers to practice using these vocabulary words in context. Download your recordings to review later.</p>

              <div className="space-y-12">
                {vocabItems.map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6 flex items-center">
                       <span className="bg-blue-600/20 text-blue-300 text-sm font-bold px-2 py-1 rounded mr-3 uppercase">Word</span>
                       {item.word}
                    </h3>
                    
                    <div className="grid gap-6">
                      {item.speakingQuestions.map((question, qIdx) => (
                        <div key={qIdx} className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                          <p className="text-lg text-slate-200 mb-4 font-medium">"{question}"</p>
                          <AudioRecorder questionId={`${item.word}_${qIdx}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        </AnimatePresence>
      </main>
    </div>
  );
};

export default LessonMode;