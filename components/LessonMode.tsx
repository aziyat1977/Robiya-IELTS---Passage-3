import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, XCircle, RefreshCw } from 'lucide-react';
import { useReading } from '../context/ReadingContext';

const LessonMode: React.FC = () => {
  const { moduleData } = useReading();
  const location = useLocation();
  const isVocab = location.pathname.includes('vocab');
  
  const [activeTab, setActiveTab] = useState<'learn' | 'quiz'>('learn');
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const title = isVocab ? "Vocabulary Focus" : "Grammar Focus";
  const items = isVocab ? moduleData.vocabSection : [];
  const grammar = moduleData.grammarSection;

  const handleQuizSubmit = () => {
    setShowResults(true);
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Link to="/reading" className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-xl font-bold text-gray-800">{title}</h1>
        </div>
        <div className="flex bg-gray-100 p-1 rounded-lg">
          <button 
            onClick={() => setActiveTab('learn')}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === 'learn' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Learn
          </button>
          <button 
            onClick={() => setActiveTab('quiz')}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === 'quiz' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Quiz
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="flex-grow p-6 md:p-8 max-w-4xl mx-auto w-full">
        {activeTab === 'learn' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            {isVocab ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-2xl font-bold text-blue-700 mb-2">{item.word}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.definition}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-purple-700 mb-4">{grammar.topic}</h2>
                <div className="prose text-gray-700">
                  <p className="text-lg">{grammar.explanation}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-800">Test Your Knowledge</h2>
                {showResults && (
                   <button onClick={resetQuiz} className="flex items-center text-sm text-blue-600 hover:underline">
                     <RefreshCw className="w-4 h-4 mr-1"/> Retry
                   </button>
                )}
              </div>

              <div className="space-y-8">
                {(isVocab ? items.map(i => i.quiz) : grammar.quiz).map((q, idx) => {
                  const isCorrect = quizAnswers[idx] === q.correct; // Simplified comparison
                  // Note: For grammar gap fill, strict check. For vocab options, strict check.
                  // For actual text input, we might need normalization.
                  
                  return (
                    <div key={idx} className="pb-6 border-b border-gray-100 last:border-0">
                      <p className="text-gray-800 font-medium text-lg mb-4">
                        {isVocab ? (
                            <>
                            {idx + 1}. {q.question.split('____').map((part, i, arr) => (
                                <React.Fragment key={i}>
                                    {part}
                                    {i < arr.length - 1 && (
                                        <span className="inline-block w-24 border-b-2 border-gray-300 mx-1"></span>
                                    )}
                                </React.Fragment>
                            ))}
                            </>
                        ) : (
                            // Grammar gap fill usually
                            <>
                                {idx + 1}. {q.transform?.split('____').map((part, i, arr) => (
                                <React.Fragment key={i}>
                                    {part}
                                    {i < arr.length - 1 && (
                                        <span className="inline-block w-24 border-b-2 border-gray-300 mx-1"></span>
                                    )}
                                </React.Fragment>
                            ))}
                            <div className="mt-2 text-sm text-gray-500 bg-gray-50 p-2 rounded inline-block">
                                Original: <span className="italic">"{q.original}"</span>
                            </div>
                            </>
                        )}
                      </p>

                      <div className="mt-3">
                        {q.options ? (
                          <div className="flex gap-3 flex-wrap">
                            {q.options.map((opt) => (
                              <button
                                key={opt}
                                disabled={showResults}
                                onClick={() => setQuizAnswers(prev => ({ ...prev, [idx]: opt }))}
                                className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
                                  quizAnswers[idx] === opt
                                    ? 'bg-blue-600 text-white border-blue-600'
                                    : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
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
                            className="border border-gray-300 rounded px-3 py-2 w-full max-w-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Type answer..."
                          />
                        )}
                      </div>

                      {showResults && (
                         <div className={`mt-3 flex items-center text-sm font-medium ${isCorrect || (q.answer && quizAnswers[idx]?.toLowerCase() === q.answer.toLowerCase()) || (quizAnswers[idx] === q.correct) ? 'text-green-600' : 'text-red-600'}`}>
                           { (isCorrect || (q.answer && quizAnswers[idx]?.toLowerCase() === q.answer.toLowerCase()) || (quizAnswers[idx] === q.correct)) ? (
                               <>
                                <CheckCircle className="w-4 h-4 mr-2" /> Correct!
                               </>
                           ) : (
                               <>
                                <XCircle className="w-4 h-4 mr-2" /> Incorrect. Answer: {q.correct || q.answer}
                               </>
                           )}
                         </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {!showResults && (
                <div className="mt-8">
                    <button 
                        onClick={handleQuizSubmit}
                        className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                        Check Answers
                    </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default LessonMode;