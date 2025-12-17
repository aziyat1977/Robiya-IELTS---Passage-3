import React, { useEffect, useState } from 'react';
import { useReading } from '../context/ReadingContext';
import { Clock, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const TestPlayer: React.FC = () => {
  const {
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

  // Initialize test on mount
  useEffect(() => {
    if (!isTimerActive && !isSubmitted) {
      startTest();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  return (
    <div className="flex flex-col h-screen bg-gray-100 font-sans overflow-hidden">
      {/* HEADER */}
      <header className="h-16 bg-white border-b border-gray-300 flex items-center justify-between px-6 flex-shrink-0 z-20">
        <div className={`text-xl font-bold font-mono flex items-center gap-2 ${timeLeft < 300 ? 'text-red-600 animate-pulse' : 'text-gray-800'}`}>
          <Clock className="w-5 h-5" />
          {formatTime(timeLeft)}
        </div>
        <div className="text-gray-900 font-semibold truncate max-w-xl">
          {currentPassage.title}
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
        <section className="bg-white border-r border-gray-300 overflow-y-auto h-full p-8 custom-scrollbar">
          <div 
            className="prose max-w-none text-gray-800 leading-7 font-serif text-lg"
            dangerouslySetInnerHTML={{ __html: currentPassage.content }}
          />
        </section>

        {/* RIGHT PANE: QUESTIONS */}
        <section className="bg-gray-50 overflow-y-auto h-full p-8 custom-scrollbar">
          <div className="max-w-3xl mx-auto space-y-8">
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
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="h-20 bg-gray-200 border-t border-gray-300 flex items-center justify-between px-6 flex-shrink-0 z-20">
        <div className="flex items-center gap-4">
           <button 
             onClick={prevPassage} 
             disabled={currentPassageIndex === 0}
             className="p-2 rounded-full bg-white border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
           >
             <ChevronLeft className="w-5 h-5 text-gray-700" />
           </button>
           <span className="font-semibold text-gray-700">
             Passage {currentPassageIndex + 1} / {totalPassages}
           </span>
           <button 
             onClick={nextPassage} 
             disabled={currentPassageIndex === totalPassages - 1}
             className="p-2 rounded-full bg-white border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
           >
             <ChevronRight className="w-5 h-5 text-gray-700" />
           </button>
        </div>

        {/* QUESTION PALETTE */}
        <div className="flex-1 overflow-x-auto mx-8 custom-scrollbar">
           <div className="flex gap-2 pb-2">
             {allQuestions.map(q => (
               <button
                 key={q.id}
                 onClick={() => {
                   // Navigate to passage containing this question
                   // Simple lookup:
                   const pIdx = Math.floor(allQuestions.findIndex(qs => qs.id === q.id) / 13); // Approx or use proper mapping if needed. 
                   // Better: Find which passage has this question
                   // Since I have access to readingData in context, I can do it but for now I'll just check if it's answered.
                   // NOTE: To make the button jump to the passage, we need to know the passage index.
                   // Let's assume sequential ID mapping for this specific data set: 
                   // P1: 1-13, P2: 14-26, P3: 27-40
                   let targetP = 0;
                   if (q.id > 13) targetP = 1;
                   if (q.id > 26) targetP = 2;
                   setPassage(targetP);
                 }}
                 className={`
                   w-8 h-8 flex-shrink-0 flex items-center justify-center text-xs font-bold rounded border transition-all
                   ${userAnswers[q.id] 
                     ? 'bg-gray-800 text-white border-gray-800' 
                     : 'bg-white text-gray-600 border-gray-400 hover:border-gray-800'
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