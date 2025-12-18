import React, { useEffect, useState, useRef, useMemo } from 'react';
import { useReading } from '../context/ReadingContext';
import { Clock, ChevronLeft, ChevronRight, Pause, Play, CheckCircle, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const TestPlayer: React.FC = () => {
  const {
    moduleData, currentPassage, currentPassageIndex, totalPassages, timeLeft,
    userAnswers, checkedTypes, setAnswer, checkQuestionType,
    nextPassage, prevPassage, submitTest, startTest, togglePause,
    isSubmitted, isTimerPaused, allQuestions, setPassage, isTimerActive
  } = useReading();

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'text' | 'questions'>('text');

  useEffect(() => {
    if (!isTimerActive && !isSubmitted) startTest();
  }, []);

  const formatTime = (s: number) => `${Math.floor(s / 60).toString().padStart(2, '0')}:${(s % 60).toString().padStart(2, '0')}`;

  // Grouping logic
  const questionsByType = useMemo(() => {
    const groups: any[] = [];
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

  return (
    <div className="h-screen bg-[#050b14] text-white flex flex-col overflow-hidden relative font-sans">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* Pause Overlay */}
      <AnimatePresence>
        {isTimerPaused && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="absolute inset-0 z-50 bg-black/80 flex items-center justify-center"
          >
            <motion.div 
                initial={{ scale: 0.8 }} animate={{ scale: 1 }}
                className="bg-slate-900 border border-blue-500/30 p-12 rounded-3xl shadow-[0_0_100px_rgba(59,130,246,0.3)] text-center max-w-md"
            >
                <div className="w-24 h-24 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse border border-blue-500/50">
                    <Pause className="w-10 h-10 text-blue-400" />
                </div>
                <h2 className="text-4xl font-black text-white mb-2 uppercase tracking-widest">Simulation Halted</h2>
                <p className="text-blue-300 mb-8 font-mono text-sm">CHRONOMETER FROZEN</p>
                <button onClick={togglePause} className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl uppercase tracking-widest transition-all shadow-lg hover:shadow-blue-500/50">Resume Protocol</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header HUD */}
      <header className="h-20 bg-slate-900/80 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-6 z-40 shadow-2xl">
        <div className="flex items-center gap-6">
            <button onClick={togglePause} className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center border border-white/10 transition-colors">
                {isTimerPaused ? <Play className="fill-current text-emerald-400" /> : <Pause className="fill-current text-amber-400" />}
            </button>
            <div className={`flex items-center gap-3 px-6 py-2 rounded-xl border ${timeLeft < 300 ? 'bg-red-900/20 border-red-500/50 animate-pulse' : 'bg-blue-900/20 border-blue-500/50'}`}>
                <Clock className={`w-5 h-5 ${timeLeft < 300 ? 'text-red-400' : 'text-blue-400'}`} />
                <span className="font-mono text-2xl font-bold tracking-widest">{formatTime(timeLeft)}</span>
            </div>
        </div>
        <div className="flex-grow text-center hidden md:block">
            <h1 className="text-sm font-bold text-slate-400 uppercase tracking-[0.3em]">IELTS Simulation Protocol</h1>
            <div className="text-white font-bold text-lg truncate max-w-md mx-auto">{currentPassage.title}</div>
        </div>
        <button 
            onClick={() => { if(window.confirm("Abort?")) { submitTest(); navigate('/reading/results'); } }}
            className="px-6 py-3 bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white border border-red-600/30 rounded-xl font-bold uppercase text-xs tracking-widest transition-all"
        >
            Terminate
        </button>
      </header>

      {/* Main Split Screen */}
      <main className="flex-1 flex overflow-hidden relative">
        {/* Left Pane (Passage) */}
        <motion.div 
            className={`flex-1 bg-slate-900/50 border-r border-white/5 overflow-y-auto custom-scrollbar p-10 ${activeTab === 'questions' ? 'hidden md:block' : 'block'}`}
            initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}
        >
            <div className="prose prose-invert prose-lg max-w-none font-light leading-relaxed text-slate-300">
                <h2 className="font-black text-3xl mb-8 text-white">{currentPassage.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: currentPassage.content }} />
            </div>
        </motion.div>

        {/* Right Pane (Questions) */}
        <motion.div 
            className={`w-full md:w-[600px] bg-[#0b1221] overflow-y-auto custom-scrollbar p-8 ${activeTab === 'text' ? 'hidden md:block' : 'block'}`}
            initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }}
        >
            <AnimatePresence mode="wait">
                <motion.div key={currentPassageIndex} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-12 pb-20">
                    {questionsByType.map((group, idx) => (
                        <div key={idx} className="bg-slate-800/30 rounded-3xl p-6 border border-white/5 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
                            <div className="absolute top-0 left-0 w-1 h-full bg-blue-600"></div>
                            <h3 className="text-xs font-black text-blue-400 uppercase tracking-widest mb-6 bg-blue-900/20 inline-block px-3 py-1 rounded">{group.type.replace(/_/g, ' ')}</h3>
                            
                            <div className="space-y-6">
                                {group.questions.map((q: any) => (
                                    <div key={q.id} className="relative pl-4">
                                        <div className="absolute -left-2 top-0 w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center text-xs font-bold shadow-lg border border-white/10">{q.id}</div>
                                        <div className="pl-8">
                                            {q.text && <p className="mb-3 text-slate-200 font-medium">{q.text}</p>}
                                            
                                            {(q.type === 'TFNG' || q.type === 'YES_NO_NOT_GIVEN' || q.type === 'MATCHING_HEADINGS') && (
                                                <select 
                                                    className="w-full bg-black/40 border border-slate-600 rounded-lg p-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                                                    value={userAnswers[q.id] || ''}
                                                    onChange={(e) => setAnswer(q.id, e.target.value)}
                                                    disabled={(checkedTypes[currentPassageIndex] || []).includes(group.type)}
                                                >
                                                    <option value="">Select Option...</option>
                                                    {(q.options || ['TRUE', 'FALSE', 'NOT GIVEN']).map((o: string) => (
                                                        <option key={o} value={o}>{o}</option>
                                                    ))}
                                                </select>
                                            )}

                                            {(q.type === 'GAP_FILL' || q.type === 'SHORT_ANSWER') && (
                                                <input 
                                                    type="text" 
                                                    className="w-full bg-black/40 border border-slate-600 rounded-lg p-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all font-mono text-blue-300"
                                                    placeholder="Type Answer..."
                                                    value={userAnswers[q.id] || ''}
                                                    onChange={(e) => setAnswer(q.id, e.target.value)}
                                                    disabled={(checkedTypes[currentPassageIndex] || []).includes(group.type)}
                                                />
                                            )}
                                            
                                            {/* Feedback Logic */}
                                            {(checkedTypes[currentPassageIndex] || []).includes(group.type) && (
                                                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="mt-2 text-sm">
                                                    {userAnswers[q.id]?.toLowerCase() === q.correctAnswer.toLowerCase() ? 
                                                        <span className="text-emerald-400 font-bold flex items-center"><CheckCircle className="w-4 h-4 mr-1"/> Correct</span> : 
                                                        <span className="text-red-400 font-bold flex items-center"><AlertTriangle className="w-4 h-4 mr-1"/> Answer: {q.correctAnswer}</span>
                                                    }
                                                </motion.div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            {!((checkedTypes[currentPassageIndex] || []).includes(group.type)) && (
                                <button 
                                    onClick={() => checkQuestionType(currentPassageIndex, group.type)}
                                    className="mt-6 w-full py-3 bg-slate-700/50 hover:bg-emerald-600/20 hover:text-emerald-300 hover:border-emerald-500/50 border border-white/5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all"
                                >
                                    Verify Section
                                </button>
                            )}
                        </div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </motion.div>
      </main>

      {/* Footer Navigation */}
      <footer className="h-20 bg-slate-900 border-t border-white/10 flex items-center justify-between px-6 z-40 relative">
         <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-50"></div>
         
         <div className="flex gap-4">
            <button onClick={prevPassage} disabled={currentPassageIndex === 0} className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 disabled:opacity-30 transition-colors"><ChevronLeft /></button>
            <div className="flex flex-col justify-center px-4">
                <span className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Passage Protocol</span>
                <span className="text-white font-mono font-bold text-xl">{currentPassageIndex + 1} / {totalPassages}</span>
            </div>
            <button onClick={nextPassage} disabled={currentPassageIndex === totalPassages - 1} className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 disabled:opacity-30 transition-colors"><ChevronRight /></button>
         </div>

         {/* Question Palette (Staggered) */}
         <div className="flex gap-2 overflow-x-auto px-4 custom-scrollbar">
            {allQuestions.map((q, i) => {
                const isActive = q.id >= currentPassage.questions[0].id && q.id <= currentPassage.questions[currentPassage.questions.length-1].id;
                const isAnswered = !!userAnswers[q.id];
                return (
                    <motion.button
                        key={q.id}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: i * 0.05 }}
                        onClick={() => setPassage(moduleData.testData.passages.findIndex(p => p.questions.some(pq => pq.id === q.id)))}
                        className={`w-8 h-8 rounded flex items-center justify-center text-xs font-bold transition-all ${
                            isActive ? 'bg-white text-black scale-110 shadow-[0_0_10px_white]' : 
                            isAnswered ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-500'
                        }`}
                    >
                        {q.id}
                    </motion.button>
                )
            })}
         </div>
      </footer>
    </div>
  );
};

export default TestPlayer;