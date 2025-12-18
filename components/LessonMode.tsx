import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, XCircle, RefreshCw, Layers, Mic, Square, Play, Download, ChevronRight, ChevronLeft, Globe, Volume2, Brain, Puzzle, Zap, Trophy, Timer, Star } from 'lucide-react';
import { useReading } from '../context/ReadingContext';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { VocabItem, GrammarVisual, GrammarExample, TranslationSet, GrammarPracticeTest } from '../types';

// --- Utility: Shuffle Array ---
const shuffle = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

// --- Component: Teacher Avatar & Pronunciation ---
const TeacherAvatar: React.FC<{ word: string; avatarUrl: string }> = ({ word, avatarUrl }) => {
    // ... (No changes to logic, keeping existing)
    const [speaking, setSpeaking] = useState(false);
    const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);

    useEffect(() => {
        const loadVoices = () => {
            const voices = window.speechSynthesis.getVoices();
            if (voices.length > 0) {
                let selected = voices.find(v => v.name === 'Google UK English Female');
                if (!selected) selected = voices.find(v => v.name.includes('Zira') || v.name.includes('Samantha'));
                if (!selected) selected = voices.find(v => v.lang.startsWith('en') && v.name.toLowerCase().includes('female'));
                if (!selected) selected = voices.find(v => v.lang === 'en-GB');
                if (!selected) selected = voices.find(v => v.lang.startsWith('en'));
                setVoice(selected || null);
            }
        };
        loadVoices();
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = loadVoices;
        }
    }, []);

    const speak = () => {
        if (!window.speechSynthesis) return;
        setSpeaking(true);
        const utterance = new SpeechSynthesisUtterance(word);
        if (voice) utterance.voice = voice;
        else utterance.lang = 'en-GB'; 
        utterance.rate = 0.8;
        utterance.pitch = 1.05;
        utterance.onend = () => setSpeaking(false);
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div className="flex flex-col items-center justify-center mb-8">
            <div className="relative">
                <motion.div
                    animate={speaking ? { 
                        scale: [1, 1.05, 1],
                        boxShadow: ["0 0 0 0 rgba(59, 130, 246, 0)", "0 0 0 20px rgba(59, 130, 246, 0.2)", "0 0 0 0 rgba(59, 130, 246, 0)"]
                    } : {}}
                    transition={speaking ? { duration: 1, repeat: Infinity } : {}}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/20 overflow-hidden shadow-2xl z-10 relative bg-slate-800"
                >
                   <img src={avatarUrl} alt="Teacher" className="w-full h-full object-cover" />
                </motion.div>
                {speaking && (
                     <div className="absolute -right-12 top-1/2 -translate-y-1/2 flex gap-1">
                        {[1,2,3].map(i => (
                            <motion.div key={i} animate={{ height: [10, 40, 10] }} transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }} className="w-1.5 bg-blue-400 rounded-full" />
                        ))}
                     </div>
                )}
            </div>
            <button onClick={speak} disabled={speaking} className="mt-6 flex items-center gap-2 px-6 py-2 bg-slate-800 hover:bg-blue-600 rounded-full transition-all border border-white/10 shadow-lg text-sm font-bold uppercase tracking-widest text-white disabled:opacity-50 disabled:cursor-not-allowed">
                <Volume2 className={`w-4 h-4 ${speaking ? 'animate-pulse' : ''}`} /> {speaking ? "Speaking..." : "Listen"}
            </button>
        </div>
    );
}

// --- Component: Audio Recorder ---
const AudioRecorder = ({ questionId }: { questionId: string }) => {
  // ... (Keeping existing implementation)
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      chunksRef.current = [];
      mediaRecorderRef.current.ondataavailable = (e) => { if (e.data.size > 0) chunksRef.current.push(e.data); };
      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        setAudioUrl(URL.createObjectURL(blob));
        localStorage.setItem(`rec_${questionId}`, 'true');
      };
      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (err) { alert("Microphone access denied or not available."); }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) { mediaRecorderRef.current.stop(); setIsRecording(false); }
  };

  const downloadAudio = () => {
    if (audioUrl) {
      const a = document.createElement('a'); a.href = audioUrl; a.download = `recording_${questionId}.webm`;
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
    }
  };

  return (
    <div className="bg-slate-800/50 p-4 rounded-xl border border-white/10 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        {!isRecording ? (
          <button onClick={startRecording} className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-500 flex items-center justify-center shadow-lg transition-colors"><Mic className="w-6 h-6 text-white" /></button>
        ) : (
          <button onClick={stopRecording} className="w-12 h-12 rounded-full bg-slate-700 hover:bg-slate-600 flex items-center justify-center shadow-lg transition-colors border-2 border-red-500 animate-pulse"><Square className="w-5 h-5 text-white" /></button>
        )}
        {audioUrl && !isRecording && <audio src={audioUrl} controls className="h-10 w-48" />}
      </div>
      <div className="flex gap-2">
        {audioUrl && <button onClick={downloadAudio} className="p-2 bg-blue-600 rounded-lg hover:bg-blue-500 text-white transition-colors"><Download className="w-5 h-5" /></button>}
      </div>
    </div>
  );
};

// --- Component: Translation Toggle ---
const TranslateWrapper: React.FC<{ content: TranslationSet; className?: string }> = ({ content, className = "" }) => {
    const [lang, setLang] = useState<'ru' | 'uz' | null>(null);
    return (
        <div className={`flex flex-col ${className}`}>
            <div dangerouslySetInnerHTML={{ __html: content.en }} />
            <div className="flex gap-2 mt-4 select-none justify-center md:justify-start">
                <button onClick={() => setLang(lang === 'ru' ? null : 'ru')} className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${lang === 'ru' ? 'bg-blue-600 border-blue-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'}`}>Ru</button>
                <button onClick={() => setLang(lang === 'uz' ? null : 'uz')} className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${lang === 'uz' ? 'bg-emerald-600 border-emerald-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'}`}>Uz</button>
            </div>
            <AnimatePresence>
                {lang && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <div className={`mt-3 p-4 rounded-xl text-sm border-l-4 leading-relaxed shadow-inner ${lang === 'ru' ? 'bg-blue-900/30 border-blue-500 text-blue-100' : 'bg-emerald-900/30 border-emerald-500 text-emerald-100'}`}>
                            <span className="block text-[10px] uppercase font-bold opacity-50 mb-1">{lang === 'ru' ? 'Russian' : 'Uzbek'} Translation</span>
                            {lang === 'ru' ? content.ru : content.uz}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// --- Grammar Visualizer ---
const GrammarVisualizer: React.FC<{ visual: GrammarVisual }> = ({ visual }) => {
  const [step, setStep] = useState(0);
  const currentStep = visual.steps[step];
  const words = currentStep.text.split(" ");

  useEffect(() => {
    const interval = setInterval(() => { setStep((prev) => (prev + 1) % visual.steps.length); }, 4000);
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
                <motion.div key={`${word}-${i}`} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, scale: isHighlighted ? 1.2 : 1, color: isHighlighted ? '#a78bfa' : '#cbd5e1', fontWeight: isHighlighted ? 800 : 400 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="text-2xl md:text-3xl">
                  {word}
                </motion.div>
              );
            })}
          </motion.div>
        </LayoutGroup>
      </div>
      <motion.div key={step} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center text-blue-200 font-mono mt-4 bg-blue-900/30 inline-block px-4 py-1 rounded-full mx-auto block w-max">
        {currentStep.annotation}
      </motion.div>
    </div>
  );
};

// --- NEW COMPONENT: Grammar Practice Test Runner ---
const GrammarTestRunner: React.FC<{ test: GrammarPracticeTest, onExit: () => void }> = ({ test, onExit }) => {
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [submitted, setSubmitted] = useState(false);

    const score = Object.keys(answers).reduce((acc, qId) => {
        const q = test.questions.find(q => q.id === parseInt(qId));
        return q && answers[parseInt(qId)] === q.correct ? acc + 1 : acc;
    }, 0);

    return (
        <div className="bg-slate-900/90 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl relative">
            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                <h3 className="text-2xl font-bold text-white">{test.title}</h3>
                {submitted && (
                    <div className="text-xl font-black text-emerald-400">
                        Score: {score} / {test.questions.length}
                    </div>
                )}
                <button onClick={onExit} className="text-slate-400 hover:text-white"><XCircle /></button>
            </div>

            <div className="space-y-8 max-h-[60vh] overflow-y-auto custom-scrollbar pr-2">
                {test.questions.map((q, idx) => {
                    const isCorrect = answers[q.id] === q.correct;
                    return (
                        <div key={q.id} className="bg-white/5 p-6 rounded-xl border border-white/5">
                            <p className="text-lg font-medium text-slate-200 mb-4"><span className="text-purple-400 font-bold mr-2">{idx + 1}.</span> {q.question}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {q.options.map(opt => (
                                    <button
                                        key={opt}
                                        disabled={submitted}
                                        onClick={() => setAnswers(p => ({...p, [q.id]: opt}))}
                                        className={`p-3 rounded-lg text-left transition-all border ${
                                            answers[q.id] === opt 
                                                ? 'bg-purple-600 border-purple-500 text-white' 
                                                : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                                        } ${submitted && opt === q.correct ? '!bg-emerald-600 !border-emerald-500 !text-white' : ''}
                                          ${submitted && answers[q.id] === opt && opt !== q.correct ? '!bg-red-600 !border-red-500' : ''}
                                        `}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                            {submitted && (
                                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="mt-4 pt-3 border-t border-white/10 text-sm text-slate-400">
                                    <span className="font-bold text-slate-300">Analysis:</span> {q.explanation}
                                </motion.div>
                            )}
                        </div>
                    )
                })}
            </div>

            <div className="mt-8 flex justify-center">
                {!submitted ? (
                    <button onClick={() => setSubmitted(true)} className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-bold uppercase tracking-widest shadow-lg hover:scale-105 transition-transform">
                        Submit Test
                    </button>
                ) : (
                    <button onClick={onExit} className="px-8 py-3 bg-slate-700 rounded-xl font-bold uppercase tracking-widest hover:bg-slate-600 transition-colors">
                        Close
                    </button>
                )}
            </div>
        </div>
    );
};

// --- NEW COMPONENT: Vocab Game Center ---
const VocabGameCenter: React.FC<{ items: VocabItem[] }> = ({ items }) => {
    const [mode, setMode] = useState<'menu' | 'memory' | 'matching' | 'blitz'>('menu');
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(0);
    const [gameState, setGameState] = useState<any>(null); // Flexible state based on game

    // --- MEMORY GAME LOGIC ---
    const startMemory = () => {
        // Create pairs: Word Card & Def Card
        const cards = items.flatMap((item, idx) => [
            { id: `w-${idx}`, content: item.word, type: 'word', matchId: idx, flipped: false, matched: false },
            { id: `d-${idx}`, content: item.definition.en, type: 'def', matchId: idx, flipped: false, matched: false }
        ]);
        setGameState({ cards: shuffle(cards), flipped: [], matchesFound: 0 });
        setScore(0);
        setMode('memory');
    };

    const handleMemoryClick = (idx: number) => {
        const state = gameState;
        if (state.flipped.length >= 2 || state.cards[idx].matched || state.cards[idx].flipped) return;

        const newCards = [...state.cards];
        newCards[idx].flipped = true;
        const newFlipped = [...state.flipped, idx];

        if (newFlipped.length === 2) {
            const c1 = newCards[newFlipped[0]];
            const c2 = newCards[newFlipped[1]];
            if (c1.matchId === c2.matchId) {
                // Match
                c1.matched = true;
                c2.matched = true;
                setGameState({ ...state, cards: newCards, flipped: [], matchesFound: state.matchesFound + 1 });
                setScore(s => s + 100);
            } else {
                // Mismatch
                setGameState({ ...state, cards: newCards, flipped: newFlipped });
                setTimeout(() => {
                    const resetCards = [...newCards];
                    resetCards[newFlipped[0]].flipped = false;
                    resetCards[newFlipped[1]].flipped = false;
                    setGameState(prev => ({ ...prev, cards: resetCards, flipped: [] }));
                }, 1000);
            }
        } else {
            setGameState({ ...state, cards: newCards, flipped: newFlipped });
        }
    };

    // --- BLITZ (Kahoot) LOGIC ---
    const startBlitz = () => {
        // Generate questions: Definition -> Select Word
        const questions = items.map(item => {
            const distractors = shuffle<VocabItem>(items.filter((i: VocabItem) => i.word !== item.word)).slice(0, 3).map((i: VocabItem) => i.word);
            return {
                q: item.definition.en,
                correct: item.word,
                options: shuffle<string>([item.word, ...distractors])
            };
        });
        setGameState({ questions: shuffle(questions), currentIdx: 0, timeLeft: 15, ended: false });
        setScore(0);
        setMode('blitz');
    };

    // Blitz Timer
    useEffect(() => {
        let interval: any;
        if (mode === 'blitz' && !gameState?.ended && gameState?.timeLeft > 0) {
            interval = setInterval(() => {
                setGameState(prev => ({ ...prev, timeLeft: prev.timeLeft - 1 }));
            }, 1000);
        } else if (mode === 'blitz' && gameState?.timeLeft === 0 && !gameState?.ended) {
             // Time out logic -> Next question
             handleBlitzAnswer(null);
        }
        return () => clearInterval(interval);
    }, [mode, gameState?.timeLeft, gameState?.ended]);

    const handleBlitzAnswer = (ans: string | null) => {
        const currentQ = gameState.questions[gameState.currentIdx];
        let points = 0;
        if (ans === currentQ.correct) {
            points = 100 + (gameState.timeLeft * 10);
        }
        
        setScore(s => s + points);
        
        if (gameState.currentIdx < gameState.questions.length - 1) {
            setGameState(prev => ({ ...prev, currentIdx: prev.currentIdx + 1, timeLeft: 15 }));
        } else {
            setGameState(prev => ({ ...prev, ended: true }));
        }
    };

    // --- RENDER GAME MENU ---
    if (mode === 'menu') {
        return (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <button onClick={startMemory} className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform group text-left relative overflow-hidden">
                    <Brain className="w-12 h-12 text-white/80 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-black text-white mb-2">Memory Matrix</h3>
                    <p className="text-blue-100 text-sm">Flip cards to match vocabulary with definitions.</p>
                </button>
                <button className="bg-gradient-to-br from-purple-600 to-pink-700 p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform group text-left relative overflow-hidden opacity-50 cursor-not-allowed">
                    <Puzzle className="w-12 h-12 text-white/80 mb-4" />
                    <h3 className="text-2xl font-black text-white mb-2">Link Master</h3>
                    <p className="text-purple-100 text-sm">Coming Soon: Drag and drop matching.</p>
                </button>
                <button onClick={startBlitz} className="bg-gradient-to-br from-amber-500 to-orange-600 p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform group text-left relative overflow-hidden">
                    <Zap className="w-12 h-12 text-white/80 mb-4 group-hover:animate-pulse" />
                    <h3 className="text-2xl font-black text-white mb-2">Vocab Blitz</h3>
                    <p className="text-amber-100 text-sm">Fast-paced quiz against the clock.</p>
                </button>
            </div>
        );
    }

    // --- RENDER MEMORY ---
    if (mode === 'memory') {
        return (
            <div className="flex flex-col items-center">
                <div className="flex justify-between w-full mb-6 items-center">
                    <h3 className="text-2xl font-bold">Memory Matrix</h3>
                    <div className="text-xl font-mono text-emerald-400">Score: {score}</div>
                    <button onClick={() => setMode('menu')} className="text-sm text-slate-400 hover:text-white">Exit Game</button>
                </div>
                <div className="grid grid-cols-4 md:grid-cols-6 gap-3 w-full">
                    {gameState.cards.map((card: any, idx: number) => (
                        <motion.div 
                            key={card.id}
                            initial={{ rotateY: 0 }}
                            animate={{ rotateY: card.flipped || card.matched ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => handleMemoryClick(idx)}
                            className="aspect-square relative perspective-1000 cursor-pointer"
                        >
                            {/* Front (Hidden) */}
                            <div className="absolute inset-0 bg-slate-800 rounded-xl border border-white/10 flex items-center justify-center backface-hidden" style={{ backfaceVisibility: 'hidden' }}>
                                <div className="w-8 h-8 rounded-full bg-blue-500/20"></div>
                            </div>
                            {/* Back (Revealed) */}
                            <div className="absolute inset-0 bg-blue-600 rounded-xl border border-blue-400 flex items-center justify-center p-2 text-center text-xs md:text-sm font-bold shadow-lg" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                                {card.content}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        );
    }

    // --- RENDER BLITZ ---
    if (mode === 'blitz') {
        if (gameState.ended) {
            return (
                <div className="text-center py-12">
                    <Trophy className="w-24 h-24 text-yellow-400 mx-auto mb-6" />
                    <h2 className="text-4xl font-black text-white mb-4">Blitz Complete!</h2>
                    <p className="text-2xl text-slate-300 mb-8">Final Score: <span className="text-emerald-400 font-mono">{score}</span></p>
                    <button onClick={() => setMode('menu')} className="px-8 py-3 bg-blue-600 rounded-full font-bold">Return to Lobby</button>
                </div>
            );
        }
        const currentQ = gameState.questions[gameState.currentIdx];
        return (
            <div className="max-w-2xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-2 text-xl font-mono text-amber-400">
                        <Timer className="w-6 h-6" /> {gameState.timeLeft}s
                    </div>
                    <div className="text-xl font-bold text-white">Score: {score}</div>
                </div>
                <div className="bg-white/10 p-8 rounded-3xl border border-white/10 text-center mb-8 h-48 flex items-center justify-center">
                    <p className="text-2xl md:text-3xl font-medium leading-relaxed">{currentQ.q}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {currentQ.options.map((opt: string) => (
                        <button 
                            key={opt}
                            onClick={() => handleBlitzAnswer(opt)}
                            className="bg-slate-800 hover:bg-blue-600 p-6 rounded-xl text-xl font-bold transition-all border border-white/5 hover:scale-105"
                        >
                            {opt}
                        </button>
                    ))}
                </div>
                <div className="mt-6 text-center text-slate-500 text-sm">
                    Question {gameState.currentIdx + 1} / {gameState.questions.length}
                </div>
            </div>
        );
    }

    return null;
};

// --- Types for Grammar Slides ---
type GrammarSlide = 
  | { type: 'INTRO'; id: string; title: string; content: TranslationSet }
  | { type: 'VISUAL'; id: string; title: string; data: GrammarVisual }
  | { type: 'EXAMPLE'; id: string; title: string; data: GrammarExample };

const LessonMode: React.FC = () => {
  const { moduleData } = useReading();
  const location = useLocation();
  const isVocab = location.pathname.includes('vocab');
  
  // Tabs: 'learn' | 'quiz' | 'practice' (Vocab) | 'tests' (Grammar)
  const [activeTab, setActiveTab] = useState<string>('learn');
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [currentVocabIndex, setCurrentVocabIndex] = useState(0);
  const [currentGrammarIndex, setCurrentGrammarIndex] = useState(0);
  const [activeGrammarTest, setActiveGrammarTest] = useState<GrammarPracticeTest | null>(null);

  // Randomize quiz options on mount or when switching to quiz tab
  const [randomizedItems, setRandomizedItems] = useState<any[]>([]);

  useEffect(() => {
    setActiveTab('learn');
    setQuizAnswers({});
    setShowResults(false);
    setCurrentVocabIndex(0);
    setCurrentGrammarIndex(0);
    setActiveGrammarTest(null);
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
                  width: '33.33%'
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ height: 'calc(100% - 8px)', top: 4, left: 0 }}
          />
          <button onClick={() => setActiveTab('learn')} className={`flex-1 md:flex-none px-6 py-2 rounded-lg text-sm font-bold tracking-wide transition-colors relative z-10 ${activeTab === 'learn' ? 'text-white' : 'text-slate-400 hover:text-white'}`}>LEARN</button>
          <button onClick={() => setActiveTab('quiz')} className={`flex-1 md:flex-none px-6 py-2 rounded-lg text-sm font-bold tracking-wide transition-colors relative z-10 ${activeTab === 'quiz' ? 'text-white' : 'text-slate-400 hover:text-white'}`}>QUIZ</button>
          
          {isVocab ? (
            <button onClick={() => setActiveTab('practice')} className={`flex-1 md:flex-none px-6 py-2 rounded-lg text-sm font-bold tracking-wide transition-colors relative z-10 ${activeTab === 'practice' ? 'text-white' : 'text-slate-400 hover:text-white'}`}>ARCADE</button>
          ) : (
            <button onClick={() => setActiveTab('tests')} className={`flex-1 md:flex-none px-6 py-2 rounded-lg text-sm font-bold tracking-wide transition-colors relative z-10 ${activeTab === 'tests' ? 'text-white' : 'text-slate-400 hover:text-white'}`}>TESTS</button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6 md:p-8 max-w-6xl mx-auto w-full relative z-10">
        <AnimatePresence mode="wait">
        
        {/* === LEARN TAB === */}
        {activeTab === 'learn' && (
          <motion.div key="learn" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            {isVocab ? (
              // ... VOCAB LEARNING ... (Same as before)
              <div className="flex flex-col items-center justify-center min-h-[60vh] relative">
                 <div className="absolute top-1/2 left-0 -translate-y-1/2 z-20 hidden md:block">
                    <button onClick={() => setCurrentVocabIndex(prev => Math.max(0, prev - 1))} disabled={currentVocabIndex === 0} className="p-4 rounded-full bg-slate-800/50 hover:bg-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all border border-white/10 shadow-lg backdrop-blur-sm group"><ChevronLeft className="w-8 h-8 text-white group-hover:scale-110 transition-transform" /></button>
                 </div>
                 <div className="absolute top-1/2 right-0 -translate-y-1/2 z-20 hidden md:block">
                    <button onClick={() => setCurrentVocabIndex(prev => Math.min(vocabItems.length - 1, prev + 1))} disabled={currentVocabIndex === vocabItems.length - 1} className="p-4 rounded-full bg-slate-800/50 hover:bg-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all border border-white/10 shadow-lg backdrop-blur-sm group"><ChevronRight className="w-8 h-8 text-white group-hover:scale-110 transition-transform" /></button>
                 </div>
                 <AnimatePresence mode="wait">
                   <motion.div key={currentVocabIndex} initial={{ opacity: 0, scale: 0.9, rotateX: 10 }} animate={{ opacity: 1, scale: 1, rotateX: 0 }} exit={{ opacity: 0, scale: 0.9, rotateX: -10 }} transition={{ type: "spring", stiffness: 200, damping: 20 }} className="text-center max-w-5xl w-full">
                      <TeacherAvatar word={vocabItems[currentVocabIndex].word} avatarUrl={vocabItems[currentVocabIndex].avatarUrl} />
                      <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="text-[4rem] sm:text-[6rem] md:text-[8rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-200 via-white to-purple-200 leading-tight drop-shadow-[0_0_50px_rgba(59,130,246,0.3)] mb-8 select-none">{vocabItems[currentVocabIndex].word}</motion.h2>
                      <motion.div initial={{ width: 0 }} animate={{ width: 150 }} transition={{ delay: 0.3 }} className="h-2 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-12" />
                      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-2xl md:text-4xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto flex flex-col items-center"><TranslateWrapper content={vocabItems[currentVocabIndex].definition} className="text-center items-center" /></motion.div>
                   </motion.div>
                 </AnimatePresence>
                 <div className="mt-16 flex flex-col items-center gap-6">
                    <div className="flex md:hidden gap-8">
                       <button onClick={() => setCurrentVocabIndex(prev => Math.max(0, prev - 1))} disabled={currentVocabIndex === 0} className="p-3 rounded-full bg-slate-800 disabled:opacity-30"><ChevronLeft className="w-6 h-6" /></button>
                       <button onClick={() => setCurrentVocabIndex(prev => Math.min(vocabItems.length - 1, prev + 1))} disabled={currentVocabIndex === vocabItems.length - 1} className="p-3 rounded-full bg-slate-800 disabled:opacity-30"><ChevronRight className="w-6 h-6" /></button>
                    </div>
                    <div className="flex gap-3">
                      {vocabItems.map((_, idx) => ( <button key={idx} onClick={() => setCurrentVocabIndex(idx)} className={`h-2 rounded-full transition-all duration-300 ${idx === currentVocabIndex ? 'w-12 bg-blue-500 shadow-[0_0_10px_#3b82f6]' : 'w-2 bg-slate-700 hover:bg-slate-600'}`} /> ))}
                    </div>
                 </div>
              </div>
            ) : (
              // ... GRAMMAR LEARNING ... (Same as before)
              <div className="flex flex-col items-center justify-center min-h-[60vh] relative">
                 <div className="absolute top-1/2 left-0 -translate-y-1/2 z-20 hidden md:block">
                    <button onClick={() => setCurrentGrammarIndex(prev => Math.max(0, prev - 1))} disabled={currentGrammarIndex === 0} className="p-4 rounded-full bg-slate-800/50 hover:bg-purple-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all border border-white/10 shadow-lg backdrop-blur-sm group"><ChevronLeft className="w-8 h-8 text-white group-hover:scale-110 transition-transform" /></button>
                 </div>
                 <div className="absolute top-1/2 right-0 -translate-y-1/2 z-20 hidden md:block">
                    <button onClick={() => setCurrentGrammarIndex(prev => Math.min(grammarSlides.length - 1, prev + 1))} disabled={currentGrammarIndex === grammarSlides.length - 1} className="p-4 rounded-full bg-slate-800/50 hover:bg-purple-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all border border-white/10 shadow-lg backdrop-blur-sm group"><ChevronRight className="w-8 h-8 text-white group-hover:scale-110 transition-transform" /></button>
                 </div>
                 <AnimatePresence mode="wait">
                   <motion.div key={currentGrammarIndex} initial={{ opacity: 0, scale: 0.9, rotateX: 10 }} animate={{ opacity: 1, scale: 1, rotateX: 0 }} exit={{ opacity: 0, scale: 0.9, rotateX: -10 }} transition={{ type: "spring", stiffness: 200, damping: 20 }} className="text-center max-w-6xl w-full">
                     {(() => {
                        const slide = grammarSlides[currentGrammarIndex];
                        if (!slide) return null;
                        if (slide.type === 'INTRO') return ( <> <motion.h2 className="text-[4rem] sm:text-[6rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-200 via-white to-pink-200 leading-tight drop-shadow-[0_0_50px_rgba(147,51,234,0.3)] mb-8">{slide.title}</motion.h2> <div className="h-2 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-12 w-[150px]" /> <motion.div className="prose prose-invert prose-2xl mx-auto text-slate-300 font-light flex flex-col items-center"><TranslateWrapper content={slide.content} className="items-center" /></motion.div> </> );
                        if (slide.type === 'VISUAL') return ( <> <motion.h2 className="text-[3rem] md:text-[5rem] font-black text-white/90 mb-8 leading-tight">{slide.title}</motion.h2> <div className="h-2 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-12 w-[150px]" /> <div className="max-w-4xl mx-auto"><GrammarVisualizer visual={slide.data} /></div> </> );
                        if (slide.type === 'EXAMPLE') return ( <> <motion.h2 className="text-[3rem] md:text-[5rem] font-black text-white/90 mb-8 leading-tight">{slide.title}</motion.h2> <div className="h-2 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-12 w-[150px]" /> <div className="grid md:grid-cols-2 gap-8 text-left bg-slate-900/80 p-8 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md"> <div className="flex flex-col justify-center"> <span className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Original Input</span> <p className="text-2xl md:text-3xl text-slate-300 font-medium leading-relaxed">"{slide.data.original}"</p> </div> <div className="md:border-l border-white/10 md:pl-8 flex flex-col justify-center relative"> <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center shadow-[0_0_15px_#9333ea] hidden md:flex"> <ChevronRight className="w-5 h-5 text-white" /> </div> <span className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-4">Academic Output</span> <p className="text-2xl md:text-3xl text-white font-bold leading-relaxed" dangerouslySetInnerHTML={{ __html: slide.data.nominalized }} /> </div> </div> <div className="mt-8 text-slate-400 text-lg italic flex justify-center items-center gap-2"> <span className="not-italic text-2xl">💡</span> <div className="flex-1 max-w-lg"><TranslateWrapper content={slide.data.explanation} className="text-left not-italic" /></div> </div> </> );
                     })()}
                   </motion.div>
                 </AnimatePresence>
                 <div className="mt-16 flex flex-col items-center gap-6">
                    <div className="flex gap-3"> {grammarSlides.map((_, idx) => ( <button key={idx} onClick={() => setCurrentGrammarIndex(idx)} className={`h-2 rounded-full transition-all duration-300 ${idx === currentGrammarIndex ? 'w-12 bg-purple-500 shadow-[0_0_10px_#a855f7]' : 'w-2 bg-slate-700 hover:bg-slate-600'}`} /> ))} </div>
                 </div>
              </div>
            )}
          </motion.div>
        )}

        {/* === QUIZ TAB === */}
        {activeTab === 'quiz' && (
          <motion.div key="quiz" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }} transition={{ duration: 0.4 }} className="space-y-8">
            <div className="bg-slate-900/50 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl">
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
                <h2 className="text-2xl font-bold text-white">Assessment Matrix</h2>
                {showResults && ( <button onClick={resetQuiz} className="flex items-center text-sm text-blue-400 hover:text-blue-300 font-bold uppercase tracking-wide"> <RefreshCw className="w-4 h-4 mr-2"/> Reboot Quiz </button> )}
              </div>
              <div className="space-y-12">
                {randomizedItems.map((q, idx) => {
                  const isCorrect = quizAnswers[idx] === q.correct; 
                  const isAnswerCorrect = isCorrect || (q.answer && quizAnswers[idx]?.trim().toLowerCase() === q.answer.trim().toLowerCase()) || (quizAnswers[idx]?.trim() === q.correct);
                  return (
                    <div key={idx} className="relative bg-white/5 p-6 rounded-2xl border border-white/5">
                       <span className="absolute -top-3 -left-3 w-8 h-8 text-center leading-8 rounded-lg bg-blue-600 text-sm font-bold text-white shadow-lg">{idx + 1}</span>
                      <p className="text-xl font-medium mb-6 text-white leading-loose mt-2">
                        {isVocab ? ( <> {q.question.split('____').map((part: string, i: number, arr: string[]) => ( <React.Fragment key={i}> {part} {i < arr.length - 1 && ( <span className="inline-block min-w-[100px] border-b-2 border-dashed border-slate-500 mx-2 text-blue-300 text-center"> {showResults && !q.options ? (isAnswerCorrect ? q.answer : <span className="text-red-400">{quizAnswers[idx] || "..."}</span>) : ""} </span> )} </React.Fragment> ))} </> ) : ( <> {q.transform?.split('____').map((part: string, i: number, arr: string[]) => ( <React.Fragment key={i}> {part} {i < arr.length - 1 && ( <span className="inline-block min-w-[100px] border-b-2 border-dashed border-slate-500 mx-2 text-blue-300 text-center"> {showResults && !q.options ? (isAnswerCorrect ? q.answer : <span className="text-red-400">{quizAnswers[idx] || "..."}</span>) : ""} </span> )} </React.Fragment> ))} </> )}
                      </p>
                      <div className="">
                        {q.options ? ( <div className="flex gap-4 flex-wrap"> {q.options.map((opt: string) => ( <button key={opt} disabled={showResults} onClick={() => setQuizAnswers(prev => ({ ...prev, [idx]: opt }))} className={`px-6 py-3 rounded-xl border font-bold transition-all transform hover:scale-105 flex-1 min-w-[150px] ${quizAnswers[idx] === opt ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]' : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-800'}`}> {opt} </button> ))} </div> ) : ( <div className="flex flex-col gap-2"> <input type="text" disabled={showResults} value={quizAnswers[idx] || ''} onChange={(e) => setQuizAnswers(prev => ({ ...prev, [idx]: e.target.value }))} className="bg-slate-800/50 border border-slate-600 text-white rounded-xl px-4 py-3 w-full max-w-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="Type answer here..." /> {!isVocab && <div className="text-sm text-slate-400 mt-1">Original: <em>{q.original}</em></div>} </div> )}
                        <AnimatePresence> {showResults && ( <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className={`mt-4 inline-flex items-center px-4 py-3 rounded-lg text-sm font-bold border w-full ${isAnswerCorrect ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-red-500/10 border-red-500/30 text-red-400'}`}> { isAnswerCorrect ? ( <> <CheckCircle className="w-5 h-5 mr-3" /> CORRECT </> ) : ( <> <XCircle className="w-5 h-5 mr-3" /> INCORRECT — ANSWER: <span className="text-white ml-2 uppercase tracking-wider">{q.correct || q.answer}</span> </> )} </motion.div> )} </AnimatePresence>
                      </div>
                    </div>
                  );
                })}
              </div>
              {!showResults && ( <div className="mt-12 pt-8 border-t border-white/10"> <motion.button whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(79, 70, 229, 0.4)" }} whileTap={{ scale: 0.95 }} onClick={handleQuizSubmit} className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-4 rounded-xl font-bold tracking-widest uppercase shadow-xl transition-all"> Verify Data </motion.button> </div> )}
            </div>
          </motion.div>
        )}

        {/* === PRACTICE (Vocab Games) === */}
        {activeTab === 'practice' && isVocab && (
          <motion.div key="practice" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }} className="space-y-8">
            <div className="bg-slate-900/50 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-2">Arcade Center</h2>
              <p className="text-slate-400 mb-8">Choose a training simulation to enhance retention.</p>
              <VocabGameCenter items={vocabItems} />
            </div>
            {/* Speaking (Legacy) */}
            <div className="bg-slate-900/50 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-6">Voice Analysis</h3>
                <div className="space-y-6">
                    {vocabItems.map((item, idx) => (
                    <div key={idx} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                        <h4 className="text-lg font-bold text-blue-300 mb-4 flex items-center"><span className="bg-blue-600/20 text-blue-300 text-xs font-bold px-2 py-1 rounded mr-3 uppercase">Target</span> {item.word}</h4>
                        <div className="grid gap-6">
                        {item.speakingQuestions.slice(0, 1).map((question, qIdx) => (
                            <div key={qIdx} className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                            <p className="text-sm text-slate-300 mb-4">"{question}"</p>
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

        {/* === TESTS (Grammar Tests) === */}
        {activeTab === 'tests' && !isVocab && (
            <motion.div key="tests" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }} className="space-y-8">
                {activeGrammarTest ? (
                    <GrammarTestRunner test={activeGrammarTest} onExit={() => setActiveGrammarTest(null)} />
                ) : (
                    <div className="bg-slate-900/50 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl">
                        <h2 className="text-2xl font-bold text-white mb-2">Practice Test Matrix</h2>
                        <p className="text-slate-400 mb-8">Select a test module to validate your understanding of {moduleData.grammarSection.topic}.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {moduleData.grammarSection.practiceTests.map((test, idx) => (
                                <button
                                    key={test.id}
                                    onClick={() => setActiveGrammarTest(test)}
                                    className="bg-slate-800 hover:bg-slate-700 p-6 rounded-2xl border border-white/10 text-left transition-all hover:scale-105 group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-500/20 transition-colors"></div>
                                    <div className="relative z-10">
                                        <div className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-2">Module {idx + 1}</div>
                                        <h3 className="text-xl font-bold text-white mb-2">{test.title}</h3>
                                        <div className="flex items-center text-slate-400 text-sm">
                                            <Star className="w-4 h-4 mr-1 text-yellow-500" />
                                            {test.questions.length} Questions
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </motion.div>
        )}

        </AnimatePresence>
      </main>
    </div>
  );
};

export default LessonMode;