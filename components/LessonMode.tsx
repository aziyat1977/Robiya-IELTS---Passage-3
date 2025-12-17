import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, XCircle, RefreshCw, Layers } from 'lucide-react';
import { useReading } from '../context/ReadingContext';
import { motion, AnimatePresence } from 'framer-motion';

const LessonMode: React.FC = () => {
  const { moduleData } = useReading();
  const location = useLocation();
  const isVocab = location.pathname.includes('vocab');
  
  const [activeTab, setActiveTab] = useState<'learn' | 'quiz'>('learn');
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    setActiveTab('learn');
    setQuizAnswers({});
    setShowResults(false);
  }, [location.pathname]);

  const title = isVocab ? "Vocabulary Focus" : "Grammar Focus";
  const items = isVocab ? moduleData.vocabSection : [];
  const grammar = moduleData.grammarSection;

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
      <header className="sticky top-0 z-20 px-6 py-4 flex items-center justify-between bg-[#0f172a]/70 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center gap-4">
          <Link to="/reading" className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
            {title}
          </h1>
        </div>
        <div className="flex bg-black/40 p-1 rounded-xl border border-white/5 relative">
          <motion.div 
              layoutId="tab-bg"
              className="absolute bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg rounded-lg"
              initial={false}
              animate={{ 
                  x: activeTab === 'learn' ? 0 : '100%', 
                  width: '50%'
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ height: 'calc(100% - 8px)', top: 4, left: 0 }}
          />
          <button 
            onClick={() => setActiveTab('learn')}
            className={`px-8 py-2 rounded-lg text-sm font-bold tracking-wide transition-colors relative z-10 ${activeTab === 'learn' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
          >
            LEARN
          </button>
          <button 
            onClick={() => setActiveTab('quiz')}
            className={`px-8 py-2 rounded-lg text-sm font-bold tracking-wide transition-colors relative z-10 ${activeTab === 'quiz' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
          >
            QUIZ
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6 md:p-8 max-w-5xl mx-auto w-full relative z-10">
        <AnimatePresence mode="wait">
        {activeTab === 'learn' && (
          <motion.div 
            key="learn"
            initial={{ opacity: 0, rotateY: 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: -90 }}
            transition={{ duration: 0.5 }}
            className="perspective-1000"
          >
            {isVocab ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 50, rotateX: 20 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ delay: idx * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.02, rotateX: 5 }}
                    className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all group"
                  >
                    <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2 group-hover:scale-105 origin-left transition-transform">
                        {item.word}
                    </h3>
                    <div className="h-0.5 w-10 bg-gradient-to-r from-blue-500 to-transparent mb-4"></div>
                    <p className="text-slate-300 leading-relaxed text-lg">{item.definition}</p>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -mr-10 -mt-10"></div>
                    <h2 className="text-4xl font-black text-white mb-6 flex items-center gap-3">
                        <Layers className="w-8 h-8 text-purple-400" />
                        {grammar.topic}
                    </h2>
                    <div className="prose prose-invert prose-lg max-w-none text-slate-200" dangerouslySetInnerHTML={{ __html: grammar.content }} />
                </div>
                
                <div className="grid gap-6">
                    {grammar.examples.map((ex, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + (idx * 0.1) }}
                            className="bg-slate-900/80 p-6 rounded-xl border-l-4 border-purple-500 shadow-lg"
                        >
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Original</span>
                                    <p className="text-lg text-slate-300 mt-1 font-medium">{ex.original}</p>
                                </div>
                                <div className="md:border-l border-white/10 md:pl-6">
                                    <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">Transformed</span>
                                    <p className="text-lg text-white font-bold mt-1" dangerouslySetInnerHTML={{ __html: ex.nominalized }} />
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-white/5 flex items-start gap-2 text-sm text-slate-400 italic">
                                <span className="not-italic">💡</span> {ex.explanation}
                            </div>
                        </motion.div>
                    ))}
                </div>
              </div>
            )}
          </motion.div>
        )}

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

              <div className="space-y-10">
                {(isVocab ? items.map(i => i.quiz) : grammar.quiz).map((q, idx) => {
                  const isCorrect = quizAnswers[idx] === q.correct; 
                  const isAnswerCorrect = 
                    isCorrect || 
                    (q.answer && quizAnswers[idx]?.trim().toLowerCase() === q.answer.trim().toLowerCase()) || 
                    (quizAnswers[idx]?.trim() === q.correct);

                  return (
                    <div key={idx} className="relative">
                      <p className="text-xl font-medium mb-5 text-white leading-loose">
                        <span className="inline-block w-8 h-8 text-center leading-8 rounded bg-white/5 text-sm font-mono mr-3 text-slate-400">{idx + 1}</span>
                        {isVocab ? (
                            <>
                            {q.question.split('____').map((part, i, arr) => (
                                <React.Fragment key={i}>
                                    {part}
                                    {i < arr.length - 1 && (
                                        <span className="inline-block w-32 border-b-2 border-dashed border-slate-600 mx-2"></span>
                                    )}
                                </React.Fragment>
                            ))}
                            </>
                        ) : (
                            <>
                                {q.transform?.split('____').map((part, i, arr) => (
                                <React.Fragment key={i}>
                                    {part}
                                    {i < arr.length - 1 && (
                                        <span className="inline-block w-32 border-b-2 border-dashed border-slate-600 mx-2"></span>
                                    )}
                                </React.Fragment>
                            ))}
                            </>
                        )}
                      </p>

                      <div className="pl-11">
                        {q.options ? (
                          <div className="flex gap-4 flex-wrap">
                            {q.options.map((opt) => (
                              <button
                                key={opt}
                                disabled={showResults}
                                onClick={() => setQuizAnswers(prev => ({ ...prev, [idx]: opt }))}
                                className={`px-6 py-3 rounded-xl border font-bold transition-all transform hover:scale-105 ${
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
                          <input 
                            type="text" 
                            disabled={showResults}
                            value={quizAnswers[idx] || ''}
                            onChange={(e) => setQuizAnswers(prev => ({ ...prev, [idx]: e.target.value }))}
                            className="bg-slate-800/50 border border-slate-600 text-white rounded-xl px-4 py-3 w-full max-w-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            placeholder="Input data..."
                          />
                        )}

                        <AnimatePresence>
                        {showResults && (
                           <motion.div 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className={`mt-4 inline-flex items-center px-4 py-2 rounded-lg text-sm font-bold border ${isAnswerCorrect ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-red-500/10 border-red-500/30 text-red-400'}`}
                           >
                             { isAnswerCorrect ? (
                                 <>
                                  <CheckCircle className="w-5 h-5 mr-2" /> CORRECT
                                 </>
                             ) : (
                                 <>
                                  <XCircle className="w-5 h-5 mr-2" /> INCORRECT — REF: {q.correct || q.answer}
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
        </AnimatePresence>
      </main>
    </div>
  );
};

export default LessonMode;