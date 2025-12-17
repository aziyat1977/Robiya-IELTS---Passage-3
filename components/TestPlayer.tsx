import React, { useEffect, useState, useRef } from 'react';
import { useReading } from '../context/ReadingContext';
import { Clock, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const TestPlayer: React.FC = () => {
  const {
    moduleData,
    currentPassage,
    currentPassageIndex,
    totalPassages,
    timeLeft,
    userAnswers,
    setAnswer,
    nextPassage,
    prevPassage,
    submitTest,
    startTest,
    isSubmitted,
    allQuestions,
    setPassage,
    isTimerActive
  } = useReading();

  const navigate = useNavigate();
  const leftPaneRef = useRef<HTMLDivElement>(null);
  const rightPaneRef = useRef<HTMLDivElement>(null);

  // Initialize test on mount
  useEffect(() => {
    if (!isTimerActive && !isSubmitted) {
      startTest();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Reset scroll position when passage changes
  useEffect(() => {
    if (leftPaneRef.current) leftPaneRef.current.scrollTop = 0;
    if (rightPaneRef.current) rightPaneRef.current.scrollTop = 0;
  }, [currentPassageIndex]);

  // Format Timer
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleFinish = () => {
    if (window.confirm("Are you sure you want to submit your test?")) {
      submitTest();
      navigate('/reading/results');
    }
  };

  // If we are finished but landed back here, go to results
  useEffect(() => {
      if(isSubmitted) {
          navigate('/reading/results');
      }
  }, [isSubmitted, navigate]);

  const getPassageIndexForQuestion = (qId: number) => {
    return moduleData.testData.passages.findIndex(p => p.questions.some(q => q.id === qId));
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 font-sans overflow-hidden">
      {/* HEADER */}
      <header className="h-16 bg-white border-b border-gray-300 flex items-center justify-between px-6 flex-shrink-0 z-20 shadow-sm">
        <motion.div 
            key={timeLeft < 300 ? 'urgent' : 'normal'}
            initial={{ scale: 1 }}
            animate={timeLeft < 300 ? { scale: [1, 1.1, 1], opacity: [1, 0.8, 1] } : {}}
            transition={timeLeft < 300 ? { repeat: Infinity, duration: 1 } : {}}
            className={`text-xl font-bold font-mono flex items-center gap-2 ${timeLeft < 300 ? 'text-red-600' : 'text-gray-800'}`}
        >
          <Clock className="w-5 h-5" />
          {formatTime(timeLeft)}
        </motion.div>
        
        <div className="text-gray-900 font-semibold truncate max-w-xl hidden md:block">
            <AnimatePresence mode="wait">
                <motion.span
                    key={currentPassage.title}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                >
                    {currentPassage.title}
                </motion.span>
            </AnimatePresence>
        </div>
        
        <div>
          <button 
            onClick={handleFinish}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-semibold transition-colors shadow-sm"
          >
            Submit Test
          </button>
        </div>
      </header>

      {/* SPLIT SCREEN MAIN */}
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 overflow-hidden h-full">
        {/* LEFT PANE: PASSAGE */}
        <section 
          ref={leftPaneRef}
          className="bg-white border-r border-gray-300 overflow-y-auto h-full p-8 custom-scrollbar relative"
        >
          <h2 className="text-xl font-bold mb-4 md:hidden">{currentPassage.title}</h2>
          <AnimatePresence mode="wait">
            <motion.div
                key={currentPassageIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="prose max-w-none text-gray-800 leading-7 font-serif text-lg"
                dangerouslySetInnerHTML={{ __html: currentPassage.content }}
            />
          </AnimatePresence>
        </section>

        {/* RIGHT PANE: QUESTIONS */}
        <section 
          ref={rightPaneRef}
          className="bg-gray-50 overflow-y-auto h-full p-8 custom-scrollbar"
        >
          <div className="max-w-3xl mx-auto space-y-8">
            <AnimatePresence mode="wait">
            <motion.div
                 key={currentPassageIndex}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 transition={{ duration: 0.3 }}
                 className="space-y-8"
            >
            {currentPassage.questions.map((q) => (
              <div key={q.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                
                {/* TFNG / YES_NO_NOT_GIVEN */}
                {(q.type === 'TFNG' || q.type === 'YES_NO_NOT_GIVEN') && (
                  <div>
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded min-w-[2.5rem] text-center">
                        Q{q.id}
                      </span>
                      <p className="text-gray-800 font-medium">{q.text}</p>
                    </div>
                    <select
                      className="w-full md:w-1/2 mt-2 p-2 border border-gray-300 rounded bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      value={userAnswers[q.id] || ''}
                      onChange={(e) => setAnswer(q.id, e.target.value)}
                    >
                      <option value="">Select Answer...</option>
                      {q.type === 'TFNG' 
                        ? ['TRUE', 'FALSE', 'NOT GIVEN'].map(o => <option key={o} value={o}>{o}</option>)
                        : ['YES', 'NO', 'NOT GIVEN'].map(o => <option key={o} value={o}>{o}</option>)
                      }
                    </select>
                  </div>
                )}

                {/* GAP FILL / SHORT ANSWER */}
                {(q.type === 'GAP_FILL' || q.type === 'SHORT_ANSWER') && (
                   <div>
                     <div className="flex items-baseline gap-3 mb-3">
                       <span className="bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded min-w-[2.5rem] text-center">
                         Q{q.id}
                       </span>
                       <p className="text-gray-800 font-medium">
                         {q.text} 
                         {q.limit && <span className="text-xs text-red-500 ml-2 font-normal uppercase tracking-wider">({q.limit.replace(/_/g, ' ')})</span>}
                       </p>
                     </div>
                     <input
                       type="text"
                       className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none font-medium"
                       placeholder="Type your answer..."
                       value={userAnswers[q.id] || ''}
                       onChange={(e) => setAnswer(q.id, e.target.value)}
                     />
                   </div>
                )}

                 {/* MATCHING HEADINGS */}
                 {q.type === 'MATCHING_HEADINGS' && (
                  <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
                     <div className="flex items-center gap-3">
                       <span className="bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded min-w-[2.5rem] text-center">
                         Q{q.id}
                       </span>
                       <p className="text-gray-800 font-medium">Heading for <strong>{q.target}</strong></p>
                     </div>
                     <select
                      className="w-full md:w-40 p-2 border border-gray-300 rounded bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      value={userAnswers[q.id] || ''}
                      onChange={(e) => setAnswer(q.id, e.target.value)}
                    >
                      <option value="">Select...</option>
                      {q.options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                   </div>
                )}

                {/* MCQ */}
                {q.type === 'MCQ' && (
                  <div>
                    <div className="flex items-baseline gap-3 mb-4">
                       <span className="bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded min-w-[2.5rem] text-center">
                         Q{q.id}
                       </span>
                       <p className="text-gray-800 font-medium">{q.text}</p>
                     </div>
                     <div className="space-y-2 pl-10">
                       {q.options?.map((opt) => {
                         const val = opt.charAt(0); // Assuming "A. Text" format
                         return (
                           <label key={opt} className="flex items-start gap-3 cursor-pointer p-2 hover:bg-gray-50 rounded">
                             <input
                               type="radio"
                               name={`q-${q.id}`}
                               className="mt-1"
                               value={val}
                               checked={userAnswers[q.id] === val}
                               onChange={() => setAnswer(q.id, val)}
                             />
                             <span className="text-gray-700">{opt}</span>
                           </label>
                         )
                       })}
                     </div>
                  </div>
                )}

              </div>
            ))}
            </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="h-20 bg-gray-200 border-t border-gray-300 flex items-center justify-between px-6 flex-shrink-0 z-20 shadow-[0_-2px_4px_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-4">
           <button 
             onClick={prevPassage} 
             disabled={currentPassageIndex === 0}
             className="p-2 rounded-full bg-white border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors shadow-sm"
           >
             <ChevronLeft className="w-5 h-5 text-gray-700" />
           </button>
           <span className="font-semibold text-gray-700 whitespace-nowrap min-w-[100px] text-center">
             Passage {currentPassageIndex + 1} / {totalPassages}
           </span>
           <button 
             onClick={nextPassage} 
             disabled={currentPassageIndex === totalPassages - 1}
             className="p-2 rounded-full bg-white border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors shadow-sm"
           >
             <ChevronRight className="w-5 h-5 text-gray-700" />
           </button>
        </div>

        {/* QUESTION PALETTE */}
        <div className="flex-1 overflow-x-auto mx-4 md:mx-8 custom-scrollbar">
           <div className="flex gap-2 pb-2">
             {allQuestions.map(q => (
               <button
                 key={q.id}
                 onClick={() => {
                   const targetP = getPassageIndexForQuestion(q.id);
                   if (targetP !== -1) setPassage(targetP);
                 }}
                 className={`
                   w-8 h-8 flex-shrink-0 flex items-center justify-center text-xs font-bold rounded border transition-all duration-200
                   ${userAnswers[q.id] 
                     ? 'bg-gray-800 text-white border-gray-800 transform hover:scale-110' 
                     : 'bg-white text-gray-600 border-gray-400 hover:border-gray-800 hover:bg-gray-100'
                   }
                   ${q.id >= currentPassage.questions[0].id && q.id <= currentPassage.questions[currentPassage.questions.length-1].id ? 'ring-2 ring-blue-500 ring-offset-2' : ''}
                 `}
               >
                 {q.id}
               </button>
             ))}
           </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500 hidden md:flex">
          <AlertCircle className="w-4 h-4" />
          <span>Review all answers before submitting</span>
        </div>
      </footer>
    </div>
  );
};

export default TestPlayer;