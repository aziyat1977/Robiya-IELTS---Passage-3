import React, { useEffect, useState, useRef, useMemo } from 'react';
import { useReading } from '../context/ReadingContext';
import { Clock, ChevronLeft, ChevronRight, BookOpen, HelpCircle, Pause, Play, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Question } from '../types';

// --- 3D Button Component ---
const ActionButton = ({ onClick, children, disabled, variant = 'primary', className = '' }: any) => {
  const variants = {
    primary: "bg-blue-600 border-blue-800 text-white shadow-[0_4px_0_rgb(30,64,175)] hover:shadow-[0_2px_0_rgb(30,64,175)] hover:translate-y-[2px]",
    secondary: "bg-slate-700 border-slate-900 text-slate-200 shadow-[0_4px_0_rgb(15,23,42)] hover:shadow-[0_2px_0_rgb(15,23,42)] hover:translate-y-[2px]",
    danger: "bg-rose-600 border-rose-800 text-white shadow-[0_4px_0_rgb(159,18,57)] hover:shadow-[0_2px_0_rgb(159,18,57)] hover:translate-y-[2px]",
    success: "bg-emerald-600 border-emerald-800 text-white shadow-[0_4px_0_rgb(6,95,70)] hover:shadow-[0_2px_0_rgb(6,95,70)] hover:translate-y-[2px]",
  };

  return (
    <motion.button
      whileTap={{ y: 4, boxShadow: "0 0px 0 rgb(0,0,0)" }}
      disabled={disabled}
      onClick={onClick}
      className={`
        relative px-4 py-2 rounded-lg font-bold uppercase tracking-wider text-sm transition-all border-b-4
        disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:translate-y-1 disabled:border-b-0
        ${variants[variant as keyof typeof variants]}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
};

const TestPlayer: React.FC = () => {
  const {
    moduleData,
    currentPassage,
    currentPassageIndex,
    totalPassages,
    timeLeft,
    userAnswers,
    checkedTypes,
    setAnswer,
    checkQuestionType,
    nextPassage,
    prevPassage,
    submitTest,
    startTest,
    togglePause,
    isSubmitted,
    isTimerPaused,
    allQuestions,
    setPassage,
    isTimerActive
  } = useReading();

  const navigate = useNavigate();
  const leftPaneRef = useRef<HTMLDivElement>(null);
  const rightPaneRef = useRef<HTMLDivElement>(null);
  const [mobileTab, setMobileTab] = useState<'passage' | 'questions'>('passage');
  const [scrollTargetQuestionId, setScrollTargetQuestionId] = useState<number | null>(null);

  useEffect(() => {
    if (!isTimerActive && !isSubmitted) {
      startTest();
    }
  }, []);

  // Group questions by type for the current passage
  const questionsByType = useMemo(() => {
    const groups: { type: string; questions: Question[] }[] = [];
    let currentType = '';
    
    currentPassage.questions.forEach(q => {
      if (q.type !== currentType) {
        groups.push({ type: q.type, questions: [] });
        currentType = q.type;
      }
      groups[groups.length - 1].questions.push(q);
    });
    return groups;
  }, [currentPassage]);

  useEffect(() => {
    if (scrollTargetQuestionId !== null) {
      setTimeout(() => {
        const element = document.getElementById(`question-${scrollTargetQuestionId}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setMobileTab('questions');
        }
        setScrollTargetQuestionId(null);
      }, 150);
    }
  }, [scrollTargetQuestionId, currentPassageIndex]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleFinish = () => {
    if (window.confirm("Abort simulation and submit results?")) {
      submitTest();
      navigate('/reading/results');
    }
  };

  useEffect(() => {
      if(isSubmitted) navigate('/reading/results');
  }, [isSubmitted, navigate]);

  const handlePaletteClick = (qId: number) => {
    const targetPassageIndex = moduleData.testData.passages.findIndex(p => p.questions.some(q => q.id === qId));
    if (targetPassageIndex !== -1) {
      setPassage(targetPassageIndex);
      setScrollTargetQuestionId(qId);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col h-screen bg-[#0f172a] text-slate-200 font-sans overflow-hidden relative"
    >
      {/* PAUSE OVERLAY */}
      <AnimatePresence>
        {isTimerPaused && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="absolute inset-0 z-50 bg-black/60 flex items-center justify-center flex-col"
          >
            <motion.div 
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-slate-900 border border-white/10 p-12 rounded-3xl shadow-2xl text-center max-w-md mx-4"
            >
              <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Pause className="w-10 h-10 text-blue-400" />
              </div>
              <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-widest">Simulation Paused</h2>
              <p className="text-slate-400 mb-8">Time is frozen. Press resume to continue your assessment.</p>
              <ActionButton onClick={togglePause} variant="primary" className="w-full py-4 text-lg">
                RESUME SESSION
              </ActionButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D HEADER */}
      <header className="h-20 flex-shrink-0 z-30 px-6 flex items-center justify-between bg-[#1e293b]/80 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
             <button 
                onClick={togglePause}
                className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center hover:bg-slate-700 transition-colors"
                title={isTimerPaused ? "Resume" : "Pause"}
             >
                {isTimerPaused ? <Play className="w-4 h-4 text-emerald-400" /> : <Pause className="w-4 h-4 text-amber-400" />}
             </button>

             <div className="relative group">
              <div className={`absolute inset-0 rounded-lg blur opacity-40 ${timeLeft < 300 ? 'bg-red-600 animate-pulse' : 'bg-blue-600'}`}></div>
              <div className={`relative px-4 py-2 bg-slate-900 border ${timeLeft < 300 ? 'border-red-500/50' : 'border-blue-500/50'} rounded-lg flex items-center gap-3 shadow-inner`}>
                <Clock className={`w-5 h-5 ${timeLeft < 300 ? 'text-red-400' : 'text-blue-400'}`} />
                <span className={`font-mono text-xl font-bold tracking-widest ${timeLeft < 300 ? 'text-red-400' : 'text-blue-100'}`}>
                  {formatTime(timeLeft)}
                </span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex flex-col">
            <span className="text-xs text-slate-400 uppercase tracking-widest">Active Simulation</span>
            <span className="text-sm font-semibold text-white truncate max-w-xs">{currentPassage.title}</span>
          </div>

           {/* Mobile Tab Toggles */}
           <div className="flex md:hidden bg-slate-800 rounded-lg p-1">
            <button 
              onClick={() => setMobileTab('passage')}
              className={`p-2 rounded-md transition-colors ${mobileTab === 'passage' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400'}`}
            >
              <BookOpen className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setMobileTab('questions')}
              className={`p-2 rounded-md transition-colors ${mobileTab === 'questions' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400'}`}
            >
              <HelpCircle className="w-5 h-5" />
            </button>
          </div>
        </div>

        <ActionButton onClick={handleFinish} variant="danger">
           Submit Test
        </ActionButton>
      </header>

      {/* COCKPIT SPLIT SCREEN */}
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 overflow-hidden relative">
        
        {/* LEFT PANE (Passage) - Glass Panel */}
        <section 
          ref={leftPaneRef}
          className={`
            overflow-y-auto p-6 md:p-8 custom-scrollbar absolute md:relative w-full h-full transition-transform duration-500 ease-spring
            bg-slate-900/50 border-r border-white/5
            ${mobileTab === 'passage' ? 'translate-x-0 z-10' : '-translate-x-full md:translate-x-0'}
          `}
        >
          <div className="max-w-prose mx-auto">
             <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 md:hidden">
              {currentPassage.title}
            </h2>
            <AnimatePresence mode="wait">
              <motion.div
                  key={currentPassageIndex}
                  initial={{ opacity: 0, y: 10, rotateX: 10 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="prose prose-invert prose-lg max-w-none text-slate-300 leading-8"
                  dangerouslySetInnerHTML={{ __html: currentPassage.content }}
              />
            </AnimatePresence>
          </div>
        </section>

        {/* RIGHT PANE (Questions) - Glass Panel */}
        <section 
          ref={rightPaneRef}
          className={`
            overflow-y-auto p-4 md:p-8 custom-scrollbar absolute md:relative w-full h-full bg-slate-800/30 transition-transform duration-500 ease-spring
            ${mobileTab === 'questions' ? 'translate-x-0 z-10' : 'translate-x-full md:translate-x-0'}
          `}
        >
          <div className="max-w-3xl mx-auto space-y-12 pb-10">
            <AnimatePresence mode="wait">
            <motion.div
                 key={currentPassageIndex}
                 initial={{ opacity: 0, x: 50 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -50 }}
                 transition={{ duration: 0.3, type: "spring" }}
                 className="space-y-12"
            >
            {questionsByType.map((group, gIdx) => {
              const isTypeChecked = (checkedTypes[currentPassageIndex] || []).includes(group.type);
              
              return (
              <div key={gIdx} className="space-y-6">
                <div className="flex items-center gap-4 mb-4">
                   <div className="h-px bg-white/10 flex-grow"></div>
                   <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">{group.type.replace(/_/g, ' ')}</span>
                   <div className="h-px bg-white/10 flex-grow"></div>
                </div>

                {group.questions.map((q) => {
                  const isCorrect = userAnswers[q.id]?.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();
                  
                  return (
                  <div 
                    key={q.id} 
                    id={`question-${q.id}`} 
                    className={`
                      relative bg-[#1e293b] p-6 rounded-xl border transition-all duration-300 shadow-xl
                      ${isTypeChecked 
                          ? (isCorrect ? 'border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)]' : 'border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.1)]')
                          : 'border-white/5 before:absolute before:inset-0 before:rounded-xl before:border before:border-white/10 before:bg-gradient-to-b before:from-white/5 before:to-transparent before:pointer-events-none'
                      }
                    `}
                  >
                    {/* 3D Question Label */}
                    <div className={`
                        absolute -left-2 -top-2 w-10 h-10 rounded-lg shadow-lg flex items-center justify-center border border-white/20 transform rotate-3 transition-colors
                        ${isTypeChecked
                            ? (isCorrect ? 'bg-emerald-600' : 'bg-red-600')
                            : 'bg-gradient-to-br from-blue-600 to-indigo-600'
                        }
                    `}>
                      <span className="font-bold text-white text-sm">Q{q.id}</span>
                    </div>

                    <div className="pl-6 pt-2">
                      {(q.type === 'TFNG' || q.type === 'YES_NO_NOT_GIVEN' || q.type === 'MATCHING_HEADINGS') && (
                        <>
                            <p className="text-slate-200 font-medium mb-4 text-lg">{q.text || `Heading for ${q.target}`}</p>
                            <div className="relative">
                              <select
                                className="w-full bg-slate-900 text-white border border-slate-700 rounded-lg p-3 appearance-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow shadow-inner disabled:opacity-70 disabled:cursor-not-allowed"
                                value={userAnswers[q.id] || ''}
                                onChange={(e) => setAnswer(q.id, e.target.value)}
                                disabled={isTypeChecked}
                              >
                                <option value="">Select Answer...</option>
                                {q.options?.map(o => <option key={o} value={o}>{o}</option>) || 
                                (q.type === 'TFNG' ? ['TRUE', 'FALSE', 'NOT GIVEN'] : ['YES', 'NO', 'NOT GIVEN']).map(o => <option key={o} value={o}>{o}</option>)
                                }
                              </select>
                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                              </div>
                            </div>
                        </>
                      )}

                      {(q.type === 'GAP_FILL' || q.type === 'SHORT_ANSWER') && (
                        <>
                          <p className="text-slate-200 font-medium mb-4 text-lg leading-relaxed">
                            {q.text} 
                            {q.limit && <span className="ml-2 inline-block px-2 py-0.5 rounded text-[10px] bg-rose-500/20 text-rose-300 border border-rose-500/30 uppercase tracking-widest">{q.limit.replace(/_/g, ' ')}</span>}
                          </p>
                          <input
                            type="text"
                            className="w-full bg-slate-900 text-white border border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none shadow-inner disabled:opacity-70 disabled:cursor-not-allowed"
                            placeholder="Type your answer..."
                            value={userAnswers[q.id] || ''}
                            onChange={(e) => setAnswer(q.id, e.target.value)}
                            disabled={isTypeChecked}
                          />
                        </>
                      )}

                      {q.type === 'MCQ' && (
                          <>
                            <p className="text-slate-200 font-medium mb-4 text-lg">{q.text}</p>
                            <div className="space-y-3">
                              {q.options?.map((opt) => {
                                const val = opt.charAt(0);
                                const isSelected = userAnswers[q.id] === val;
                                return (
                                  <label 
                                    key={opt} 
                                    className={`
                                      relative flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-all duration-200 border
                                      ${isSelected 
                                        ? 'bg-blue-600/20 border-blue-500/50 shadow-[0_0_15px_rgba(37,99,235,0.2)]' 
                                        : 'bg-slate-900 border-slate-800 hover:bg-slate-800 hover:border-slate-700'
                                      }
                                      ${isTypeChecked ? 'cursor-not-allowed opacity-80' : ''}
                                    `}
                                  >
                                    <div className={`
                                      w-5 h-5 rounded-full border-2 flex items-center justify-center
                                      ${isSelected ? 'border-blue-400' : 'border-slate-500'}
                                    `}>
                                      {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />}
                                    </div>
                                    <input
                                      type="radio"
                                      name={`q-${q.id}`}
                                      className="hidden"
                                      value={val}
                                      checked={isSelected}
                                      onChange={() => !isTypeChecked && setAnswer(q.id, val)}
                                      disabled={isTypeChecked}
                                    />
                                    <span className="text-slate-300">{opt}</span>
                                  </label>
                                )
                              })}
                            </div>
                          </>
                      )}

                      {/* Immediate Feedback Block */}
                      {isTypeChecked && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            className="mt-4 pt-4 border-t border-white/5 flex flex-col gap-2"
                          >
                             <div className={`text-sm font-bold flex items-center ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
                                {isCorrect ? 'Correct' : 'Incorrect'}
                             </div>
                             {!isCorrect && (
                                <div className="text-xs text-slate-400">
                                    Correct Answer: <span className="text-white font-mono font-bold ml-1">{q.correctAnswer}</span>
                                </div>
                             )}
                          </motion.div>
                      )}
                    </div>
                  </div>
                )})}
                
                {/* Section Check Button */}
                {!isTypeChecked && !isSubmitted && (
                    <div className="flex justify-end">
                        <ActionButton 
                            onClick={() => checkQuestionType(currentPassageIndex, group.type)} 
                            variant="success"
                            className="flex items-center"
                        >
                            <CheckCircle className="w-4 h-4 mr-2" /> Check {group.type.replace(/_/g, ' ')} Answers
                        </ActionButton>
                    </div>
                )}
              </div>
              )
            })}
            </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>

      {/* FOOTER CONTROL DECK */}
      <footer className="h-24 bg-[#0f172a] border-t border-white/10 flex items-center justify-between px-6 flex-shrink-0 z-40 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 pointer-events-none"></div>
        
        <div className="relative z-10 flex items-center gap-4">
           <ActionButton onClick={prevPassage} disabled={currentPassageIndex === 0} variant="secondary">
             <ChevronLeft className="w-5 h-5" />
           </ActionButton>
           
           <div className="flex flex-col items-center">
             <span className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">Sector</span>
             <span className="font-mono text-xl text-white font-bold">{currentPassageIndex + 1} <span className="text-slate-600">/</span> {totalPassages}</span>
           </div>

           <ActionButton onClick={nextPassage} disabled={currentPassageIndex === totalPassages - 1} variant="secondary">
             <ChevronRight className="w-5 h-5" />
           </ActionButton>
        </div>

        {/* 3D QUESTION PALETTE */}
        <div className="relative z-10 flex-1 overflow-x-auto mx-8 custom-scrollbar pb-2">
           <div className="flex gap-2 items-center h-full pt-1">
             {allQuestions.map(q => {
               const isActive = q.id >= currentPassage.questions[0].id && q.id <= currentPassage.questions[currentPassage.questions.length-1].id;
               const isAnswered = !!userAnswers[q.id];
               
               // Find passage index for this question to check if its type section is checked
               const pIndex = moduleData.testData.passages.findIndex(p => p.questions.some(pq => pq.id === q.id));
               const isCheckedSection = checkedTypes[pIndex]?.includes(q.type);
               const isCorrect = userAnswers[q.id]?.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();

               return (
                 <button
                   key={q.id}
                   onClick={() => handlePaletteClick(q.id)}
                   className={`
                     group relative w-10 h-10 flex-shrink-0 flex items-center justify-center font-bold text-sm rounded-lg transition-all duration-300
                     ${isCheckedSection 
                        ? (isCorrect ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white') 
                        : (isAnswered 
                            ? 'bg-blue-600 text-white shadow-[0_0_10px_rgba(37,99,235,0.4)]' 
                            : 'bg-slate-800 text-slate-400 hover:bg-slate-700')
                     }
                     ${isActive ? 'ring-2 ring-blue-400 ring-offset-2 ring-offset-slate-900 -translate-y-1 scale-110' : ''}
                   `}
                 >
                   {q.id}
                   {isActive && <div className="absolute -bottom-2 w-1 h-1 bg-blue-400 rounded-full shadow-[0_0_5px_#60a5fa]"></div>}
                 </button>
               )
             })}
           </div>
        </div>

        <div className="relative z-10 hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/50 border border-white/5">
          <div className={`w-2 h-2 rounded-full animate-pulse ${isTimerPaused ? 'bg-amber-500' : 'bg-emerald-500'}`}></div>
          <span className="text-xs text-slate-400 font-mono">{isTimerPaused ? 'SYSTEM IDLE' : 'SYSTEM ONLINE'}</span>
        </div>
      </footer>
    </motion.div>
  );
};

export default TestPlayer;
