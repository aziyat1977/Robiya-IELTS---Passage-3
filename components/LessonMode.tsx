import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, XCircle, RefreshCw, Layers, Mic, Square, Play, Download, ChevronRight, ChevronLeft, Globe, Volume2, Brain, Puzzle, Zap, Trophy, Timer, Star, PenTool } from 'lucide-react';
import { useReading } from '../context/ReadingContext';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { VocabItem, GrammarVisual, GrammarExample, TranslationSet, GrammarPracticeTest, WordFormationExercise } from '../types';

// --- Utility: Shuffle Array ---
const shuffle = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

// --- Animations ---
const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 90 },
    visible: { opacity: 1, scale: 1, rotateY: 0, transition: { type: "spring", stiffness: 100 } },
    exit: { opacity: 0, scale: 0.8, rotateY: -90, transition: { duration: 0.2 } }
};

// --- Component: Teacher Avatar (Refined) ---
const TeacherAvatar: React.FC<{ word: string; avatarUrl: string }> = ({ word, avatarUrl }) => {
    const [speaking, setSpeaking] = useState(false);
    
    const speak = () => {
        if (!window.speechSynthesis) return;
        setSpeaking(true);
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-GB';
        utterance.rate = 0.8;
        utterance.onend = () => setSpeaking(false);
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div className="flex flex-col items-center justify-center mb-8 relative z-10">
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
            >
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
                <motion.div
                    animate={speaking ? { 
                        boxShadow: ["0 0 0 0 rgba(59, 130, 246, 0)", "0 0 0 20px rgba(59, 130, 246, 0.4)", "0 0 0 40px rgba(59, 130, 246, 0)"]
                    } : {}}
                    transition={speaking ? { duration: 1.5, repeat: Infinity } : {}}
                    className="w-40 h-40 rounded-full border-4 border-white/20 overflow-hidden shadow-2xl relative bg-slate-800 z-10"
                >
                   <img src={avatarUrl} alt="Teacher" className="w-full h-full object-cover" />
                </motion.div>
            </motion.div>

            <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
                whileTap={{ scale: 0.95 }}
                onClick={speak} 
                disabled={speaking} 
                className="mt-6 flex items-center gap-2 px-8 py-3 bg-slate-800/80 backdrop-blur-md rounded-full border border-white/20 shadow-lg text-sm font-bold uppercase tracking-widest text-white disabled:opacity-50"
            >
                <Volume2 className={`w-4 h-4 ${speaking ? 'animate-pulse text-cyan-400' : ''}`} /> 
                {speaking ? "Transmitting..." : "Audio Playback"}
            </motion.button>
        </div>
    );
}

// --- Component: Audio Recorder (Ultra) ---
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
        mediaRecorderRef.current.ondataavailable = (e) => { if (e.data.size > 0) chunksRef.current.push(e.data); };
        mediaRecorderRef.current.onstop = () => {
            const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
            setAudioUrl(URL.createObjectURL(blob));
        };
        mediaRecorderRef.current.start();
        setIsRecording(true);
      } catch(e) { alert("Mic Error"); }
  };
  const stopRecording = () => { mediaRecorderRef.current?.stop(); setIsRecording(false); };

  return (
    <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center justify-between gap-4 backdrop-blur-sm shadow-inner">
      <div className="flex items-center gap-4">
        <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={isRecording ? stopRecording : startRecording}
            className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-blue-600'}`}
        >
            {isRecording ? <Square className="w-6 h-6 text-white" /> : <Mic className="w-6 h-6 text-white" />}
        </motion.button>
        
        {audioUrl && !isRecording && (
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="h-10 w-48 bg-slate-900 rounded-lg flex items-center justify-center border border-white/10">
                <span className="text-xs text-slate-400 font-mono">AUDIO CAPTURED</span>
            </motion.div>
        )}
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
            <div className="flex gap-3 mt-6 justify-center md:justify-start">
                {['ru', 'uz'].map((l) => (
                    <motion.button 
                        key={l}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setLang(lang === l ? null : l as any)}
                        className={`px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest border transition-all ${lang === l ? (l === 'ru' ? 'bg-blue-600 border-blue-500 text-white' : 'bg-emerald-600 border-emerald-500 text-white') : 'bg-slate-800/50 border-slate-600 text-slate-400 hover:border-white hover:text-white'}`}
                    >
                        {l}
                    </motion.button>
                ))}
            </div>
            <AnimatePresence>
                {lang && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0, y: -10 }} 
                        animate={{ height: 'auto', opacity: 1, y: 0 }} 
                        exit={{ height: 0, opacity: 0, y: -10 }} 
                        className="overflow-hidden"
                    >
                        <div className={`mt-4 p-6 rounded-2xl text-base border-l-4 leading-relaxed shadow-2xl backdrop-blur-md ${lang === 'ru' ? 'bg-blue-900/40 border-blue-500 text-blue-100' : 'bg-emerald-900/40 border-emerald-500 text-emerald-100'}`}>
                            <span className="block text-[10px] uppercase font-bold opacity-50 mb-2 tracking-widest">{lang === 'ru' ? 'Russian' : 'Uzbek'} Translation</span>
                            {lang === 'ru' ? content.ru : content.uz}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// --- Grammar Visualizer (Enhanced) ---
const GrammarVisualizer: React.FC<{ visual: GrammarVisual }> = ({ visual }) => {
  const [step, setStep] = useState(0);
  const currentStep = visual.steps[step];
  
  useEffect(() => {
    const interval = setInterval(() => { setStep((prev) => (prev + 1) % visual.steps.length); }, 3500);
    return () => clearInterval(interval);
  }, [visual]);

  return (
    <div className="bg-black/40 rounded-3xl p-8 border border-white/10 shadow-[0_0_40px_rgba(139,92,246,0.15)] relative overflow-hidden mb-8 w-full max-w-4xl mx-auto">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x" />
      <h4 className="text-xs font-black text-purple-400 uppercase tracking-[0.2em] mb-8 text-center border-b border-white/5 pb-4">{visual.title}</h4>
      
      <div className="h-32 flex items-center justify-center relative">
        <LayoutGroup>
          <motion.div layout className="flex gap-4 flex-wrap justify-center">
            {currentStep.text.split(" ").map((word, i) => {
              const isHighlighted = currentStep.highlightIndices.includes(i);
              return (
                <motion.div 
                    key={`${word}-${i}-${step}`} 
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ 
                        scale: isHighlighted ? 1.3 : 1, 
                        opacity: 1,
                        color: isHighlighted ? '#a78bfa' : '#94a3b8',
                        textShadow: isHighlighted ? "0 0 20px rgba(167,139,250,0.5)" : "none",
                        y: isHighlighted ? -5 : 0
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className={`text-2xl md:text-4xl font-medium ${isHighlighted ? 'font-black' : ''}`}
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
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="text-center"
      >
          <span className="inline-block px-6 py-2 rounded-full bg-purple-500/20 border border-purple-500/50 text-purple-200 font-mono text-sm shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            {currentStep.annotation}
          </span>
      </motion.div>
    </div>
  );
};

// --- Grammar Practice Test Runner ---
const GrammarTestRunner: React.FC<{ test: GrammarPracticeTest, onExit: () => void }> = ({ test, onExit }) => {
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [submitted, setSubmitted] = useState(false);

    const score = Object.keys(answers).reduce((acc, qId) => {
        const q = test.questions.find(q => q.id === parseInt(qId));
        return q && answers[parseInt(qId)] === q.correct ? acc + 1 : acc;
    }, 0);

    return (
        <div className="bg-slate-900/90 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl relative max-w-4xl mx-auto">
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
                    <button onClick={() => setSubmitted(true)} className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-bold uppercase tracking-widest shadow-lg hover:scale-105 transition-transform text-white">
                        Submit Test
                    </button>
                ) : (
                    <button onClick={onExit} className="px-8 py-3 bg-slate-700 rounded-xl font-bold uppercase tracking-widest hover:bg-slate-600 transition-colors text-white">
                        Close
                    </button>
                )}
            </div>
        </div>
    );
};

// --- Game Center ---
const VocabGameCenter: React.FC<{ items: VocabItem[] }> = ({ items }) => {
    const [mode, setMode] = useState<'menu' | 'memory' | 'wordSmith' | 'blitz'>('menu');
    const [score, setScore] = useState(0);
    const [gameState, setGameState] = useState<any>(null);

    // Memory Logic
    const startMemory = () => {
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
                c1.matched = true; c2.matched = true;
                setGameState({ ...state, cards: newCards, flipped: [], matchesFound: state.matchesFound + 1 });
                setScore(s => s + 100);
            } else {
                setGameState({ ...state, cards: newCards, flipped: newFlipped });
                setTimeout(() => {
                    const resetCards = [...newCards];
                    resetCards[newFlipped[0]].flipped = false; resetCards[newFlipped[1]].flipped = false;
                    setGameState(prev => ({ ...prev, cards: resetCards, flipped: [] }));
                }, 1000);
            }
        } else { setGameState({ ...state, cards: newCards, flipped: newFlipped }); }
    };

    // Word Smith Logic
    const startWordSmith = () => {
        const exercises = items.flatMap(item => item.wordFormation || []);
        if (exercises.length === 0) { alert("No word formation exercises available."); return; }
        setGameState({ exercises: shuffle(exercises), currentIdx: 0, userInput: '', feedback: null, ended: false });
        setScore(0);
        setMode('wordSmith');
    }

    const handleWordSmithSubmit = () => {
        const currentEx = gameState.exercises[gameState.currentIdx];
        const isCorrect = gameState.userInput.trim().toLowerCase() === currentEx.correct.toLowerCase();
        setGameState(prev => ({ ...prev, feedback: isCorrect ? 'correct' : 'incorrect' }));
        if (isCorrect) setScore(s => s + 50);
        setTimeout(() => {
            if (gameState.currentIdx < gameState.exercises.length - 1) {
                setGameState(prev => ({ ...prev, currentIdx: prev.currentIdx + 1, userInput: '', feedback: null }));
            } else {
                setGameState(prev => ({ ...prev, ended: true }));
            }
        }, 1500);
    }

    // Blitz Logic
    const startBlitz = () => {
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

    useEffect(() => {
        let interval: any;
        if (mode === 'blitz' && !gameState?.ended && gameState?.timeLeft > 0) {
            interval = setInterval(() => {
                setGameState(prev => ({ ...prev, timeLeft: prev.timeLeft - 1 }));
            }, 1000);
        } else if (mode === 'blitz' && gameState?.timeLeft === 0 && !gameState?.ended) {
             const currentQ = gameState.questions[gameState.currentIdx];
             handleBlitzAnswer(null);
        }
        return () => clearInterval(interval);
    }, [mode, gameState?.timeLeft, gameState?.ended]);

    const handleBlitzAnswer = (ans: string | null) => {
        const currentQ = gameState.questions[gameState.currentIdx];
        let points = 0;
        if (ans === currentQ.correct) points = 100 + (gameState.timeLeft * 10);
        setScore(s => s + points);
        if (gameState.currentIdx < gameState.questions.length - 1) {
            setGameState(prev => ({ ...prev, currentIdx: prev.currentIdx + 1, timeLeft: 15 }));
        } else {
            setGameState(prev => ({ ...prev, ended: true }));
        }
    };

    // --- RENDER GAME MODES ---
    if (mode === 'menu') {
        return (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { title: "Memory Matrix", icon: Brain, desc: "Neural matching protocol", action: startMemory, color: "from-blue-600 to-indigo-600" },
                    { title: "Word Smith", icon: PenTool, desc: "Morphology engine", action: startWordSmith, color: "from-purple-600 to-pink-600" },
                    { title: "Vocab Blitz", icon: Zap, desc: "Speed endurance test", action: startBlitz, color: "from-amber-500 to-orange-600" }
                ].map((game, i) => (
                    <motion.button 
                        key={i}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={game.action}
                        className={`relative overflow-hidden rounded-3xl p-8 text-left bg-gradient-to-br ${game.color} shadow-2xl border border-white/10 group`}
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700" />
                        <game.icon className="w-12 h-12 text-white mb-4 relative z-10" />
                        <h3 className="text-2xl font-black text-white mb-2 relative z-10">{game.title}</h3>
                        <p className="text-white/70 text-sm relative z-10 font-medium">{game.desc}</p>
                    </motion.button>
                ))}
            </div>
        );
    }

    if (mode === 'memory') {
        return (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
                <div className="flex justify-between w-full mb-8 items-center bg-black/20 p-4 rounded-xl border border-white/5">
                    <h3 className="text-xl font-bold flex items-center text-white"><Brain className="mr-2 text-blue-400"/> Memory Matrix</h3>
                    <div className="text-2xl font-black text-blue-400 font-mono">{score}</div>
                    <button onClick={() => setMode('menu')} className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-bold text-white">EXIT</button>
                </div>
                <div className="grid grid-cols-4 md:grid-cols-6 gap-4 w-full perspective-1000">
                    {gameState.cards.map((card: any, idx: number) => (
                        <motion.div 
                            key={card.id}
                            initial={{ rotateY: 180 }}
                            animate={{ rotateY: card.flipped || card.matched ? 0 : 180 }}
                            transition={{ duration: 0.4 }}
                            onClick={() => handleMemoryClick(idx)}
                            className="aspect-square relative cursor-pointer transform-style-3d"
                        >
                            <div className="absolute inset-0 bg-slate-800 rounded-xl border border-white/10 flex items-center justify-center backface-hidden" style={{ transform: "rotateY(180deg)" }}>
                                <div className="w-8 h-8 rounded-full bg-blue-500/20 animate-pulse"></div>
                            </div>
                            <div className={`absolute inset-0 rounded-xl border flex items-center justify-center p-2 text-center text-xs md:text-sm font-bold shadow-lg backface-hidden ${card.type === 'word' ? 'bg-blue-600 border-blue-400 text-white' : 'bg-purple-600 border-purple-400 text-white'}`}>
                                {card.content}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        );
    }

    if (mode === 'wordSmith') {
        if (gameState.ended) {
            return (
                <div className="text-center py-12">
                    <Trophy className="w-24 h-24 text-purple-400 mx-auto mb-6" />
                    <h2 className="text-4xl font-black text-white mb-4">Training Complete!</h2>
                    <p className="text-2xl text-slate-300 mb-8">Final Score: <span className="text-emerald-400 font-mono">{score}</span></p>
                    <button onClick={() => setMode('menu')} className="px-8 py-3 bg-purple-600 rounded-full font-bold text-white">Return to Lobby</button>
                </div>
            );
        }
        const currentEx = gameState.exercises[gameState.currentIdx];
        const parts = currentEx.sentence.split('____');
        return (
            <div className="max-w-3xl mx-auto text-center">
                 <div className="flex justify-between items-center mb-8 text-white">
                    <h3 className="text-2xl font-bold">Word Smith</h3>
                    <div className="text-xl font-bold">Score: {score}</div>
                </div>
                <div className="bg-slate-800 p-10 rounded-3xl border border-white/10 shadow-2xl mb-8">
                    <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Root Word</div>
                    <div className="text-4xl font-black text-purple-400 mb-8">{currentEx.root}</div>
                    <div className="text-2xl md:text-3xl leading-relaxed text-slate-200 mb-8">
                        {parts[0]}
                        <span className="inline-block min-w-[150px] border-b-4 border-dashed border-slate-500 mx-2 text-blue-300">
                            {gameState.userInput || (gameState.feedback ? currentEx.correct : "")}
                        </span>
                        {parts[1]}
                    </div>
                    <div className="flex justify-center gap-4">
                        <input 
                            type="text" 
                            value={gameState.userInput}
                            onChange={(e) => setGameState(prev => ({...prev, userInput: e.target.value}))}
                            disabled={!!gameState.feedback}
                            className="bg-black/30 border border-slate-600 text-white text-center text-xl rounded-xl px-6 py-3 w-64 focus:ring-2 focus:ring-purple-500 outline-none"
                            placeholder="Type transformed word..."
                            onKeyDown={(e) => e.key === 'Enter' && !gameState.feedback && handleWordSmithSubmit()}
                        />
                        <button 
                            onClick={handleWordSmithSubmit}
                            disabled={!!gameState.feedback || !gameState.userInput}
                            className="bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-bold"
                        >
                            Check
                        </button>
                    </div>
                    {gameState.feedback && (
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`mt-6 text-lg font-bold ${gameState.feedback === 'correct' ? 'text-emerald-400' : 'text-red-400'}`}
                        >
                            {gameState.feedback === 'correct' ? 'Correct Transformation!' : `Incorrect. Answer: ${currentEx.correct}`}
                        </motion.div>
                    )}
                </div>
            </div>
        );
    }

    if (mode === 'blitz') {
        if (gameState.ended) {
            return (
                <div className="text-center py-12">
                    <Trophy className="w-24 h-24 text-yellow-400 mx-auto mb-6" />
                    <h2 className="text-4xl font-black text-white mb-4">Blitz Complete!</h2>
                    <p className="text-2xl text-slate-300 mb-8">Final Score: <span className="text-emerald-400 font-mono">{score}</span></p>
                    <button onClick={() => setMode('menu')} className="px-8 py-3 bg-blue-600 rounded-full font-bold text-white">Return to Lobby</button>
                </div>
            );
        }
        const currentQ = gameState.questions[gameState.currentIdx];
        return (
            <div className="max-w-2xl mx-auto">
                <div className="flex justify-between items-center mb-8 text-white">
                    <div className="flex items-center gap-2 text-xl font-mono text-amber-400">
                        <Timer className="w-6 h-6" /> {gameState.timeLeft}s
                    </div>
                    <div className="text-xl font-bold">Score: {score}</div>
                </div>
                <div className="bg-white/10 p-8 rounded-3xl border border-white/10 text-center mb-8 h-48 flex items-center justify-center">
                    <p className="text-2xl md:text-3xl font-medium leading-relaxed text-white">{currentQ.q}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {currentQ.options.map((opt: string) => (
                        <button 
                            key={opt}
                            onClick={() => handleBlitzAnswer(opt)}
                            className="bg-slate-800 hover:bg-blue-600 p-6 rounded-xl text-xl font-bold transition-all border border-white/5 hover:scale-105 text-white"
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            </div>
        );
    }
    
    return null;
};

// --- Main Component ---
const LessonMode: React.FC = () => {
  const { moduleData } = useReading();
  const location = useLocation();
  const isVocab = location.pathname.includes('vocab');
  
  const [activeTab, setActiveTab] = useState<string>('learn');
  const [currentVocabIndex, setCurrentVocabIndex] = useState(0);
  const [currentGrammarIndex, setCurrentGrammarIndex] = useState(0);
  const [activeGrammarTest, setActiveGrammarTest] = useState<GrammarPracticeTest | null>(null);

  // Initialize Data
  const title = isVocab ? "Vocabulary Core" : "Grammar Matrix";
  const vocabItems = moduleData.vocabSection;
  const grammar = moduleData.grammarSection;

  // Grammar Slides logic...
  const grammarSlides = useMemo(() => {
    if (!grammar) return [];
    return [
      { type: 'INTRO', id: 'intro', title: grammar.topic, content: grammar.content },
      ...grammar.visuals.map((v, i) => ({ type: 'VISUAL', id: `vis-${i}`, title: v.title, data: v })),
      ...grammar.examples.map((e, i) => ({ type: 'EXAMPLE', id: `ex-${i}`, title: `Example ${i + 1}`, data: e }))
    ];
  }, [grammar]);

  // Quiz State
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [randomizedItems, setRandomizedItems] = useState<any[]>([]);

  useEffect(() => {
    if (activeTab === 'quiz') {
      const items = isVocab ? vocabItems.flatMap(v => v.quiz) : grammar.quiz;
      const randomized = items.map(q => ({
        ...q,
        options: q.options ? shuffle(q.options) : undefined
      }));
      setRandomizedItems(randomized);
    }
  }, [activeTab, isVocab, vocabItems, grammar]);

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans flex flex-col relative overflow-hidden">
      {/* Dynamic BG */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none animate-pulse"></div>

      {/* Header */}
      <header className="sticky top-0 z-50 px-6 py-4 flex flex-col md:flex-row items-center justify-between bg-[#0f172a]/80 backdrop-blur-xl border-b border-white/10 gap-4">
        <div className="flex items-center gap-4">
          <Link to="/reading" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors"><ArrowLeft className="w-5 h-5 text-white" /></Link>
          <h1 className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300 uppercase tracking-widest">{title}</h1>
        </div>
        
        {/* Animated Tabs */}
        <div className="flex bg-black/40 p-1 rounded-full border border-white/10 relative">
          {['learn', 'quiz', isVocab ? 'practice' : 'tests'].map((tab) => (
             <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-colors z-10 ${activeTab === tab ? 'text-white' : 'text-slate-400 hover:text-white'}`}
             >
                {activeTab === tab && (
                    <motion.div 
                        layoutId="activeTab"
                        className="absolute inset-0 bg-blue-600 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                )}
                <span className="relative z-10">{tab}</span>
             </button>
          ))}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow p-6 max-w-7xl mx-auto w-full relative z-10">
        <AnimatePresence mode="wait">
            
            {/* LEARN TAB */}
            {activeTab === 'learn' && (
                <motion.div 
                    key="learn" 
                    initial={{ opacity: 0, x: -20 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    exit={{ opacity: 0, x: 20 }}
                    className="flex flex-col items-center"
                >
                    {isVocab ? (
                        // VOCAB CARD
                        <div className="w-full max-w-4xl relative">
                            <AnimatePresence mode="wait">
                                <motion.div 
                                    key={currentVocabIndex}
                                    variants={cardVariants}
                                    initial="hidden" animate="visible" exit="exit"
                                    className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 md:p-16 shadow-[0_0_50px_rgba(0,0,0,0.5)] text-center relative overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                                    <TeacherAvatar word={vocabItems[currentVocabIndex].word} avatarUrl={vocabItems[currentVocabIndex].avatarUrl} />
                                    
                                    <motion.h2 
                                        initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                                        className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter drop-shadow-2xl"
                                    >
                                        {vocabItems[currentVocabIndex].word}
                                    </motion.h2>
                                    
                                    <div className="text-2xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
                                        <TranslateWrapper content={vocabItems[currentVocabIndex].definition} />
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                            
                            {/* Navigation Buttons */}
                            <div className="flex justify-between items-center mt-8">
                                <button onClick={() => setCurrentVocabIndex(i => Math.max(0, i-1))} disabled={currentVocabIndex === 0} className="p-4 rounded-full bg-white/5 hover:bg-blue-600 transition-all disabled:opacity-20"><ChevronLeft className="w-8 h-8" /></button>
                                <div className="flex gap-2">
                                    {vocabItems.map((_, i) => (
                                        <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === currentVocabIndex ? 'w-8 bg-blue-500 shadow-[0_0_10px_#3b82f6]' : 'w-2 bg-slate-700'}`} />
                                    ))}
                                </div>
                                <button onClick={() => setCurrentVocabIndex(i => Math.min(vocabItems.length-1, i+1))} disabled={currentVocabIndex === vocabItems.length-1} className="p-4 rounded-full bg-white/5 hover:bg-blue-600 transition-all disabled:opacity-20"><ChevronRight className="w-8 h-8" /></button>
                            </div>
                        </div>
                    ) : (
                        // GRAMMAR VIEW
                        <div className="w-full max-w-6xl">
                            <div className="text-center">
                                <h1 className="text-5xl font-black mb-8 text-white">Grammar Module Loaded</h1>
                                <GrammarVisualizer visual={grammarSlides[currentGrammarIndex]?.data || grammar.visuals[0]} />
                            </div>
                             {/* Navigation Buttons */}
                             <div className="flex justify-center gap-4 mt-8">
                                <button onClick={() => setCurrentGrammarIndex(i => Math.max(0, i-1))} className="px-6 py-3 bg-purple-600 rounded-xl font-bold text-white">PREV</button>
                                <button onClick={() => setCurrentGrammarIndex(i => Math.min(grammarSlides.length-1, i+1))} className="px-6 py-3 bg-purple-600 rounded-xl font-bold text-white">NEXT</button>
                             </div>
                        </div>
                    )}
                </motion.div>
            )}

            {/* QUIZ TAB */}
            {activeTab === 'quiz' && (
                <motion.div key="quiz" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                    {randomizedItems.map((q, idx) => {
                       const isAnswerCorrect = quizAnswers[idx]?.trim().toLowerCase() === (q.correct || q.answer).toLowerCase();
                       return (
                        <div key={idx} className="bg-slate-800/50 p-6 rounded-2xl border border-white/5">
                            <p className="text-xl text-white mb-4">{q.question || q.transform}</p>
                            <div className="flex gap-2 flex-wrap">
                                {q.options ? q.options.map((opt: string) => (
                                    <button 
                                        key={opt}
                                        onClick={() => setQuizAnswers(p => ({...p, [idx]: opt}))}
                                        disabled={showResults}
                                        className={`px-4 py-2 rounded-lg border ${quizAnswers[idx] === opt ? 'bg-blue-600 border-blue-500 text-white' : 'bg-slate-900 border-slate-700'}`}
                                    >
                                        {opt}
                                    </button>
                                )) : <input className="bg-slate-900 border border-slate-700 p-2 rounded text-white" value={quizAnswers[idx] || ''} onChange={(e) => setQuizAnswers(p => ({...p, [idx]: e.target.value}))} />}
                            </div>
                            {showResults && (
                                <div className={`mt-2 font-bold ${isAnswerCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
                                    {isAnswerCorrect ? "Correct" : `Incorrect: ${q.correct || q.answer}`}
                                </div>
                            )}
                        </div>
                       )
                    })}
                    <button onClick={() => setShowResults(true)} className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-bold text-white uppercase tracking-widest shadow-lg">Submit Assessment</button>
                </motion.div>
            )}

            {/* PRACTICE (GAMES) TAB */}
            {activeTab === 'practice' && isVocab && (
                <motion.div key="games" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-5xl mx-auto">
                    <VocabGameCenter items={vocabItems} />
                </motion.div>
            )}

            {/* TESTS TAB (GRAMMAR) */}
            {activeTab === 'tests' && !isVocab && (
                <motion.div key="tests" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    {activeGrammarTest ? (
                        <GrammarTestRunner test={activeGrammarTest} onExit={() => setActiveGrammarTest(null)} />
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {grammar.practiceTests.map((test, idx) => (
                                <button 
                                    key={test.id}
                                    onClick={() => setActiveGrammarTest(test)}
                                    className="bg-slate-800 p-8 rounded-3xl text-left border border-white/10 hover:bg-slate-700 hover:scale-105 transition-all group"
                                >
                                    <div className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-2">Test Module {idx + 1}</div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300">{test.title}</h3>
                                    <div className="flex items-center text-slate-400 text-sm"><Star className="w-4 h-4 mr-1 text-yellow-500" /> {test.questions.length} Questions</div>
                                </button>
                            ))}
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