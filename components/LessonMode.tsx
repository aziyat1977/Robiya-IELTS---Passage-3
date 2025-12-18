
import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, ChevronLeft, Globe, Volume2, Brain, Zap, Trophy, Timer, Star, PenTool, Layout, Box, GraduationCap, XCircle, ArrowRight, Play, CheckCircle } from 'lucide-react';
import { useReading } from '../context/ReadingContext';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { VocabItem, GrammarVisual, GrammarPracticeTest, GrammarUnit, GrammarExample } from '../types';

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

// --- Helper Components ---
const TranslateWrapper: React.FC<{ content: any; className?: string }> = ({ content, className = "" }) => {
    const [lang, setLang] = useState<'ru' | 'uz' | null>(null);
    return (
        <div className={`flex flex-col ${className}`}>
            <div dangerouslySetInnerHTML={{ __html: content.en }} />
            <div className="flex gap-3 mt-4 justify-center md:justify-start">
                {['ru', 'uz'].map((l) => (
                    <motion.button 
                        key={l}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setLang(lang === l ? null : l as any)}
                        className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest border transition-all ${lang === l ? (l === 'ru' ? 'bg-blue-600 border-blue-500 text-white' : 'bg-emerald-600 border-emerald-500 text-white') : 'bg-slate-800/50 border-slate-600 text-slate-400 hover:border-white hover:text-white'}`}
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
                        <div className={`mt-4 p-4 rounded-xl text-sm border-l-4 leading-relaxed shadow-2xl backdrop-blur-md ${lang === 'ru' ? 'bg-blue-900/40 border-blue-500 text-blue-100' : 'bg-emerald-900/40 border-emerald-500 text-emerald-100'}`}>
                            {lang === 'ru' ? content.ru : content.uz}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// --- ULTRA SLOW MOTION TIMELINE ---
const TimelineVisual: React.FC<{ data: { label: string; time: number; active: boolean }[] }> = ({ data }) => {
    // Sort data by time just in case
    const sortedData = [...data].sort((a, b) => a.time - b.time);
    
    return (
        <div className="relative h-72 w-full bg-slate-900/80 rounded-3xl border border-white/10 flex items-center px-10 overflow-hidden shadow-2xl isolate">
             {/* Deep Space Background Grid - Slow Drift */}
             <motion.div 
                className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" 
                animate={{ backgroundPosition: ["0px 0px", "30px 30px"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
             />

             {/* Connecting Line (SVG for drawing effect) - Super Slow Draw */}
             <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                {/* Static base line */}
                <motion.line 
                    x1="10%" y1="50%" x2="90%" y2="50%" 
                    stroke="#1e293b" 
                    strokeWidth="6" 
                    strokeLinecap="round"
                />
                
                {/* Animated gradient line */}
                <motion.line 
                    x1="10%" y1="50%" x2="90%" y2="50%" 
                    stroke="url(#gradient-line)" 
                    strokeWidth="6" 
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 5, ease: "easeInOut" }} // 5s draw time
                />
                
                {/* Scanner Glow Effect moving along the line */}
                <motion.circle 
                    r="8" fill="#60a5fa" filter="url(#glow)"
                    initial={{ cx: "10%", cy: "50%" }}
                    animate={{ cx: "90%" }}
                    transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} // 8s scan
                />

                <defs>
                    <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="50%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>
             </svg>
             
             {sortedData.map((point, idx) => (
                 <div
                    key={idx}
                    className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10"
                    style={{ left: `${point.time}%` }}
                 >
                     <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: idx * 1.5 + 0.5, type: "spring", stiffness: 100, damping: 20 }} // Slower staggered entrance
                        className="relative group cursor-pointer"
                     >
                        {/* Slow Pulse Effect for Active Nodes */}
                        {point.active && (
                            <motion.div 
                                className="absolute -inset-6 rounded-full bg-blue-500/20 blur-xl z-[-1]"
                                animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} // 4s pulse
                            />
                        )}
                        
                        {/* Node Dot with Slow Rotation */}
                        <motion.div 
                            className={`w-10 h-10 rounded-full border-4 transition-all duration-500 ${point.active ? 'bg-slate-900 border-blue-400 shadow-[0_0_30px_#3b82f6]' : 'bg-slate-800 border-slate-600 group-hover:border-slate-400'}`}
                            whileHover={{ scale: 1.2, rotate: 90 }}
                            transition={{ duration: 0.5 }}
                        >
                            {point.active && <motion.div className="w-full h-full bg-blue-400/30 rounded-full" animate={{ scale: [0, 1] }} transition={{ duration: 1, repeat: Infinity }} />}
                        </motion.div>
                        
                        {/* Label with Float Animation */}
                        <motion.div 
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: idx * 1.5 + 1.2, duration: 1 }}
                            className={`absolute top-16 left-1/2 -translate-x-1/2 w-48 text-center space-y-2 pointer-events-none`}
                        >
                            <div className={`text-sm font-bold uppercase tracking-widest ${point.active ? 'text-blue-300 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]' : 'text-slate-500'}`}>
                                {point.label}
                            </div>
                            {point.active && (
                                <motion.div 
                                    className="text-[10px] text-blue-200/50 font-mono border border-blue-500/30 rounded px-2 py-1 inline-block bg-blue-900/20"
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    T-MINUS 00:00
                                </motion.div>
                            )}
                        </motion.div>
                     </motion.div>
                 </div>
             ))}
        </div>
    )
}

// --- ULTRA SLOW MOTION FORMULA ---
const FormulaVisual: React.FC<{ items: { label: string; color: string }[] }> = ({ items }) => {
    return (
        <div className="flex flex-wrap justify-center gap-8 items-center p-16 bg-slate-900/50 rounded-[3rem] border border-white/5 relative overflow-hidden perspective-1000">
            {/* Ambient Background Particles - Super Slow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div 
                        key={i}
                        className="absolute w-1 h-1 bg-white/20 rounded-full"
                        initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%", scale: 0 }}
                        animate={{ 
                            y: [null, Math.random() * -200], 
                            opacity: [0, 0.8, 0],
                            scale: [0, Math.random() * 3, 0]
                        }}
                        transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear" }} // 10-20s duration
                    />
                ))}
            </div>

            {items.map((item, idx) => (
                <motion.div
                    key={idx}
                    initial={{ scale: 0, rotateX: -90, opacity: 0, y: 50 }}
                    animate={{ scale: 1, rotateX: 0, opacity: 1, y: 0 }}
                    transition={{ 
                        delay: idx * 0.8, // Slower stagger
                        type: "spring", 
                        stiffness: 100, // Looser spring
                        damping: 20,
                        mass: 2
                    }}
                    whileHover={{ 
                        scale: 1.15, 
                        rotate: 2, 
                        zIndex: 20,
                        transition: { duration: 0.5 }
                    }}
                    className={`relative px-10 py-8 rounded-2xl text-3xl font-black text-white shadow-2xl backdrop-blur-xl border border-white/10 ${item.color} transform-style-3d group`}
                >
                    {/* Inner Glow Pulse */}
                    <motion.div 
                        className="absolute inset-0 bg-white/20 rounded-2xl"
                        animate={{ opacity: [0, 0.3, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: idx }}
                    />
                    
                    {/* Glass Shine */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none opacity-50" />
                    
                    <span className="relative z-10 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] group-hover:text-white transition-colors">
                        {item.label}
                    </span>
                    
                    {/* Floating Label Effect */}
                    <motion.div
                         className="absolute -bottom-10 left-0 w-full text-center text-[10px] font-mono text-white/30 opacity-0 group-hover:opacity-100 transition-opacity"
                         animate={{ y: [0, 5, 0] }}
                         transition={{ duration: 2, repeat: Infinity }}
                    >
                        COMPONENT {idx + 1}
                    </motion.div>
                </motion.div>
            ))}
        </div>
    )
}

// --- ULTRA SLOW MOTION TRANSFORMATION ---
const TransformationVisual: React.FC<{ steps: any[] }> = ({ steps }) => {
    const [step, setStep] = useState(0);
    
    // Auto-advance with visual progress - Slower Cycle
    useEffect(() => {
        const timer = setInterval(() => {
            setStep((prev) => (prev + 1) % steps.length);
        }, 8000); // 8 Seconds per step
        return () => clearInterval(timer);
    }, [steps]);

    return (
        <div className="min-h-[300px] flex items-center justify-center flex-col bg-slate-900/60 rounded-[2.5rem] p-12 border border-white/10 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:50px_50px]" />
            
            {/* Cinematic Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-800">
                <motion.div 
                    key={step}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 8, ease: "linear" }}
                    className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_20px_#8b5cf6]"
                />
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }} // Slow fade in/out
                    className="relative z-10 text-center w-full max-w-3xl"
                >
                    <div className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-12 leading-tight">
                        {steps[step].text.split(/(\[.*?\])/).map((part: string, i: number) => {
                            const isHighlighted = part.startsWith('[');
                            const cleanText = part.replace(/[\[\]]/g, '');
                            return (
                                <motion.span 
                                    key={i} 
                                    initial={isHighlighted ? { color: "#94a3b8", y: 0 } : {}}
                                    animate={isHighlighted ? { 
                                        color: ["#94a3b8", "#a855f7", "#3b82f6", "#94a3b8"],
                                        y: [0, -10, 0],
                                        scale: [1, 1.1, 1],
                                        textShadow: ["0 0 0px rgba(0,0,0,0)", "0 0 40px rgba(168,85,247,0.8)", "0 0 0px rgba(0,0,0,0)"]
                                    } : {}}
                                    transition={{ duration: 4, times: [0, 0.2, 0.8, 1], repeat: Infinity, repeatDelay: 2 }}
                                    className={`inline-block mx-1.5 ${isHighlighted ? 'font-black relative' : 'text-slate-500 font-medium'}`}
                                >
                                    {cleanText}
                                    {isHighlighted && <motion.span className="absolute -bottom-2 left-0 w-full h-1 bg-purple-500/50 rounded-full" layoutId={`underline-${i}`} />}
                                </motion.span>
                            )
                        })}
                    </div>
                    
                    <motion.div 
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="inline-flex items-center px-8 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg"
                    >
                        <Zap className="w-5 h-5 text-yellow-400 mr-3 animate-[pulse_3s_infinite]" />
                        <span className="text-base font-mono text-purple-200 uppercase tracking-[0.25em]">{steps[step].annotation}</span>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

// --- MAIN GRAMMAR VISUALIZER CONTAINER ---
const GrammarVisualizer: React.FC<{ visual: GrammarVisual }> = ({ visual }) => {
  return (
    <div className="bg-black/40 rounded-[3rem] p-10 border border-white/10 shadow-[0_0_60px_rgba(139,92,246,0.1)] relative overflow-hidden mb-12 w-full max-w-5xl mx-auto">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x" />
      <h4 className="text-xs font-black text-purple-400 uppercase tracking-[0.3em] mb-12 text-center border-b border-white/5 pb-6">{visual.title}</h4>
      
      {visual.type === 'TIMELINE' && visual.timelineData && <TimelineVisual data={visual.timelineData} />}
      {visual.type === 'FORMULA' && visual.formulaItems && <FormulaVisual items={visual.formulaItems} />}
      {visual.type === 'TRANSFORMATION' && <TransformationVisual steps={visual.steps} />}
    </div>
  );
};

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
                    <button onClick={() => setSubmitted(true)} className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-bold uppercase tracking-widest shadow-lg hover:scale-105 transition-transform text-white">Submit Test</button>
                ) : (
                    <button onClick={onExit} className="px-8 py-3 bg-slate-700 rounded-xl font-bold uppercase tracking-widest hover:bg-slate-600 transition-colors text-white">Close</button>
                )}
            </div>
        </div>
    );
};

// --- Unit Selector for Grammar ---
const GrammarUnitSelector: React.FC<{ units: GrammarUnit[], onSelect: (u: GrammarUnit) => void }> = ({ units, onSelect }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 px-4">
            {units.map((unit, idx) => (
                <motion.div
                    key={unit.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    onClick={() => onSelect(unit)}
                    className="cursor-pointer group relative h-80"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-900 rounded-[2rem] transform -skew-y-3 shadow-2xl border border-white/10 group-hover:skew-y-0 transition-all duration-500"></div>
                    <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl rounded-[2rem] p-8 flex flex-col border border-white/10 group-hover:border-purple-500/50 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-6 border border-purple-500/30 text-purple-300">
                            <Box className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-black text-white mb-2">{unit.title}</h3>
                        <p className="text-slate-400 leading-relaxed flex-grow">{unit.description}</p>
                        <div className="flex items-center text-purple-400 font-bold uppercase tracking-widest text-xs mt-4">
                            Start Module <ChevronRight className="w-4 h-4 ml-1" />
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

// --- Main Component ---
const LessonMode: React.FC = () => {
  const { moduleData } = useReading();
  const location = useLocation();
  const isVocab = location.pathname.includes('vocab');
  
  const [activeTab, setActiveTab] = useState<string>('learn');
  const [mfpStage, setMfpStage] = useState<'MEANING' | 'FORM' | 'PRACTICE'>('MEANING');

  const [selectedGrammarUnit, setSelectedGrammarUnit] = useState<GrammarUnit | null>(null);
  const [activeGrammarTest, setActiveGrammarTest] = useState<GrammarPracticeTest | null>(null);
  const [currentVocabIndex, setCurrentVocabIndex] = useState(0);
  
  // Quiz State
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [randomizedItems, setRandomizedItems] = useState<any[]>([]);

  // Initialize Data
  const title = isVocab ? "Vocabulary Core" : (selectedGrammarUnit ? selectedGrammarUnit.title : "Grammar Matrix");
  const vocabItems = moduleData.vocabSection;

  useEffect(() => {
    if (activeTab === 'quiz') {
      const items = isVocab 
        ? vocabItems.flatMap(v => v.quiz) 
        : (selectedGrammarUnit ? selectedGrammarUnit.quiz : []);
      const randomized = items.map(q => ({ ...q, options: q.options ? shuffle(q.options) : undefined }));
      setRandomizedItems(randomized);
      setQuizAnswers({});
      setShowResults(false);
    }
  }, [activeTab, isVocab, vocabItems, selectedGrammarUnit]);

  // Define tabs
  const tabs = isVocab 
    ? ['learn', 'quiz', 'formation', 'arcade'] 
    : ['learn', 'quiz', 'tests'];

  const handleGrammarUnitSelect = (unit: GrammarUnit) => {
      setSelectedGrammarUnit(unit);
      setActiveTab('learn');
      setMfpStage('MEANING');
  }

  // --- RENDER MFP GRAMMAR STAGES ---
  const renderGrammarStage = () => {
      if(!selectedGrammarUnit) return null;
      
      return (
          <div className="w-full max-w-6xl mx-auto">
              {/* Stepper */}
              <div className="flex justify-center mb-12">
                  {['MEANING', 'FORM', 'PRACTICE'].map((s, i) => (
                      <div key={s} className="flex items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${mfpStage === s ? 'bg-blue-600 text-white shadow-[0_0_15px_#2563eb]' : 'bg-slate-800 text-slate-500'}`}>
                              {i + 1}
                          </div>
                          {i < 2 && <div className="w-16 h-1 bg-slate-800 mx-2" />}
                      </div>
                  ))}
              </div>

              <AnimatePresence mode="wait">
                  {mfpStage === 'MEANING' && (
                      <motion.div key="m" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }} className="text-center">
                          <h2 className="text-4xl font-black text-white mb-8">Conceptual Core</h2>
                          <div className="bg-slate-900/50 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl inline-block max-w-3xl">
                              <p className="text-xl leading-relaxed text-slate-300 mb-6 font-light">"{selectedGrammarUnit.meaning.context}"</p>
                              <TranslateWrapper content={selectedGrammarUnit.meaning.text} />
                          </div>
                          <div className="mt-12">
                              <button onClick={() => setMfpStage('FORM')} className="px-8 py-4 bg-blue-600 rounded-full font-bold uppercase tracking-widest hover:bg-blue-500 shadow-lg transition-all flex items-center mx-auto">
                                  Analyze Structure <ArrowRight className="ml-2" />
                              </button>
                          </div>
                      </motion.div>
                  )}

                  {mfpStage === 'FORM' && (
                      <motion.div key="f" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }} className="text-center">
                           <h2 className="text-4xl font-black text-white mb-8">Structural Blueprint</h2>
                           <div className="mb-8 font-mono text-2xl text-purple-300 bg-purple-900/20 py-4 px-8 rounded-xl inline-block border border-purple-500/30">
                               {selectedGrammarUnit.form.structure}
                           </div>
                           
                           <GrammarVisualizer visual={selectedGrammarUnit.form.visual} />
                           
                           <div className="mt-8 max-w-2xl mx-auto text-slate-400">
                               <TranslateWrapper content={selectedGrammarUnit.form.explanation} />
                           </div>

                           <div className="mt-12 flex justify-center gap-4">
                               <button onClick={() => setMfpStage('MEANING')} className="px-6 py-3 bg-slate-800 rounded-full font-bold uppercase tracking-widest text-slate-400 hover:text-white">Back</button>
                               <button onClick={() => setMfpStage('PRACTICE')} className="px-8 py-3 bg-blue-600 rounded-full font-bold uppercase tracking-widest hover:bg-blue-500 shadow-lg flex items-center">
                                   Verify Knowledge <ArrowRight className="ml-2" />
                               </button>
                           </div>
                      </motion.div>
                  )}

                  {mfpStage === 'PRACTICE' && (
                      <motion.div key="p" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }} className="text-center">
                          <h2 className="text-4xl font-black text-white mb-8">Simulation Check</h2>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
                              {selectedGrammarUnit.examples.map((ex, i) => (
                                  <div key={i} className="bg-slate-800 p-6 rounded-2xl border border-white/5 text-left">
                                      <div className="text-xs font-bold text-slate-500 uppercase mb-2">Standard Input</div>
                                      <div className="text-slate-300 mb-4 pb-4 border-b border-white/5">{ex.original}</div>
                                      <div className="text-xs font-bold text-emerald-500 uppercase mb-2">Academic Output</div>
                                      <div className="text-white text-lg font-medium" dangerouslySetInnerHTML={{__html: ex.nominalized}} />
                                  </div>
                              ))}
                          </div>

                          <div className="flex justify-center gap-4">
                               <button onClick={() => setMfpStage('FORM')} className="px-6 py-3 bg-slate-800 rounded-full font-bold uppercase tracking-widest text-slate-400 hover:text-white">Review Structure</button>
                               <button onClick={() => setActiveTab('quiz')} className="px-8 py-3 bg-emerald-600 rounded-full font-bold uppercase tracking-widest hover:bg-emerald-500 shadow-lg flex items-center">
                                   Start Assessment <CheckCircle className="ml-2" />
                               </button>
                           </div>
                      </motion.div>
                  )}
              </AnimatePresence>
          </div>
      )
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans flex flex-col relative overflow-hidden">
      {/* Dynamic BG */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none animate-pulse"></div>

      {/* Header */}
      <header className="sticky top-0 z-50 px-6 py-4 flex flex-col md:flex-row items-center justify-between bg-[#0f172a]/80 backdrop-blur-xl border-b border-white/10 gap-4">
        <div className="flex items-center gap-4">
          <Link to="/reading" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors"><ArrowLeft className="w-5 h-5 text-white" /></Link>
          {!isVocab && selectedGrammarUnit && (
              <button onClick={() => setSelectedGrammarUnit(null)} className="p-2 bg-purple-500/20 hover:bg-purple-500/40 rounded-full text-purple-300">
                  <Layout className="w-5 h-5" />
              </button>
          )}
          <h1 className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300 uppercase tracking-widest truncate max-w-md">
              {title}
          </h1>
        </div>
        
        {(isVocab || selectedGrammarUnit) && (
            <div className="flex bg-black/40 p-1 rounded-full border border-white/10 relative overflow-x-auto">
            {tabs.map((tab) => (
                <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-colors z-10 whitespace-nowrap ${activeTab === tab ? 'text-white' : 'text-slate-400 hover:text-white'}`}
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
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow p-6 max-w-7xl mx-auto w-full relative z-10">
        
        {!isVocab && !selectedGrammarUnit && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-black text-white mb-4">Select Training Module</h2>
                    <p className="text-slate-400">Choose a syntax protocol to begin analysis.</p>
                </div>
                <GrammarUnitSelector units={moduleData.grammarUnits} onSelect={handleGrammarUnitSelect} />
            </motion.div>
        )}

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
                       <div className="w-full max-w-4xl relative">
                            {/* Vocab Card Logic Reuse */}
                            <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 md:p-16 shadow-[0_0_50px_rgba(0,0,0,0.5)] text-center relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                                <h2 className="text-6xl font-black text-white mb-8">{vocabItems[currentVocabIndex].word}</h2>
                                <TranslateWrapper content={vocabItems[currentVocabIndex].definition} />
                            </div>
                            
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
                        renderGrammarStage()
                    )}
                </motion.div>
            )}

            {/* QUIZ TAB */}
            {activeTab === 'quiz' && (isVocab || selectedGrammarUnit) && (
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

            {/* TESTS TAB (GRAMMAR) */}
            {activeTab === 'tests' && !isVocab && selectedGrammarUnit && (
                <motion.div key="tests" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    {activeGrammarTest ? (
                        <GrammarTestRunner test={activeGrammarTest} onExit={() => setActiveGrammarTest(null)} />
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {selectedGrammarUnit.practiceTests.map((test, idx) => (
                                <button 
                                    key={test.id}
                                    onClick={() => setActiveGrammarTest(test)}
                                    className="bg-slate-800 p-8 rounded-3xl text-left border border-white/10 hover:bg-slate-700 hover:scale-105 transition-all group"
                                >
                                    <div className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-2">Practice Module {idx + 1}</div>
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
