import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useReading } from '../context/ReadingContext';
import { ArrowLeft, ChevronLeft, ChevronRight, CheckCircle, XCircle, Search, BookOpen, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { TranslationSet } from '../types';

// --- Component: Translation Toggle ---
const TranslateWrapper: React.FC<{ content: TranslationSet; className?: string }> = ({ content, className = "" }) => {
    const [lang, setLang] = useState<'ru' | 'uz' | null>(null);

    return (
        <div className={`flex flex-col ${className}`}>
            <div className="text-slate-300 leading-8 text-lg" dangerouslySetInnerHTML={{ __html: content.en }} />
            
            <div className="flex gap-2 mt-4 select-none">
                <button 
                    onClick={() => setLang(lang === 'ru' ? null : 'ru')}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${lang === 'ru' ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/30' : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700 hover:text-white hover:border-slate-500'}`}
                >
                    Ru
                </button>
                <button 
                    onClick={() => setLang(lang === 'uz' ? null : 'uz')}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${lang === 'uz' ? 'bg-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-500/30' : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700 hover:text-white hover:border-slate-500'}`}
                >
                    Uz
                </button>
            </div>

            <AnimatePresence>
                {lang && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
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

const ExplanationView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { allQuestions, userAnswers, moduleData } = useReading();
  
  const questionId = parseInt(id || '1', 10);
  const questionIndex = allQuestions.findIndex(q => q.id === questionId);
  const question = allQuestions[questionIndex];
  
  // Find the passage this question belongs to
  const passage = useMemo(() => {
    return moduleData.testData.passages.find(p => p.questions.some(q => q.id === questionId));
  }, [questionId, moduleData]);

  const userAnswer = userAnswers[questionId];
  const isCorrect = userAnswer?.trim().toLowerCase() === question?.correctAnswer.trim().toLowerCase();

  const nextQ = questionIndex < allQuestions.length - 1 ? allQuestions[questionIndex + 1] : null;
  const prevQ = questionIndex > 0 ? allQuestions[questionIndex - 1] : null;

  if (!question || !passage) return <div className="text-white p-10">Question not found</div>;

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col">
      {/* Header */}
      <header className="h-16 border-b border-white/10 flex items-center px-6 bg-[#0f172a]/80 backdrop-blur-md sticky top-0 z-50">
        <Link to="/reading/results" className="mr-6 p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
           Analysis: Question {questionId}
        </h1>
        <div className="ml-auto flex gap-2">
            {prevQ && (
                <Link to={`/reading/explanation/${prevQ.id}`} className="px-4 py-2 bg-slate-800 rounded-lg text-sm hover:bg-slate-700 flex items-center">
                    <ChevronLeft className="w-4 h-4 mr-2" /> Prev
                </Link>
            )}
            {nextQ && (
                <Link to={`/reading/explanation/${nextQ.id}`} className="px-4 py-2 bg-slate-800 rounded-lg text-sm hover:bg-slate-700 flex items-center">
                    Next <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
            )}
        </div>
      </header>

      <main className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
         {/* Background Effect */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

         {/* Left Panel: Question Context & Logic */}
         <div className="w-full md:w-1/2 p-6 md:p-10 overflow-y-auto custom-scrollbar relative z-10">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               className="max-w-xl mx-auto space-y-8"
            >
               {/* Verdict Badge */}
               <div className={`inline-flex items-center px-4 py-2 rounded-full border ${isCorrect ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-red-500/10 border-red-500/30 text-red-400'}`}>
                  {isCorrect ? <CheckCircle className="w-5 h-5 mr-2" /> : <XCircle className="w-5 h-5 mr-2" />}
                  <span className="font-bold tracking-wider uppercase text-sm">{isCorrect ? 'Correct Answer' : 'Incorrect Answer'}</span>
               </div>

               {/* Question Card */}
               <div className="bg-slate-800/50 p-8 rounded-2xl border border-white/10 shadow-xl">
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2 block">Question Type: {question.type}</span>
                  <h2 className="text-2xl font-medium text-white mb-6 leading-relaxed">
                     {question.text || (question.type === 'MATCHING_HEADINGS' ? `Choose the correct heading for ${question.target}` : 'No question text provided')}
                  </h2>

                  <div className="grid grid-cols-2 gap-4">
                     <div className="p-4 rounded-xl bg-black/20 border border-white/5">
                        <div className="text-xs text-slate-400 uppercase font-bold mb-2">Your Answer</div>
                        <div className={`font-mono text-lg font-bold ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
                           {userAnswer || <span className="text-slate-600 italic">No Answer</span>}
                        </div>
                     </div>
                     <div className="p-4 rounded-xl bg-blue-900/10 border border-blue-500/20">
                        <div className="text-xs text-blue-300 uppercase font-bold mb-2">Correct Answer</div>
                        <div className="font-mono text-lg font-bold text-blue-200">
                           {question.correctAnswer}
                        </div>
                     </div>
                  </div>
               </div>

               {/* Explanation Block */}
               <div className="space-y-4">
                  <h3 className="flex items-center text-lg font-bold text-white">
                     <Search className="w-5 h-5 mr-2 text-purple-400" /> 
                     Detailed Analysis
                  </h3>
                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border-l-4 border-purple-500 shadow-lg">
                      <TranslateWrapper content={question.explanation} />
                  </div>
               </div>
               
               {/* Tip Block */}
               <div className="bg-amber-500/10 p-4 rounded-xl border border-amber-500/20 flex gap-4">
                  <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0" />
                  <div>
                      <h4 className="text-amber-400 font-bold text-sm uppercase mb-1">Exam Strategy Tip</h4>
                      <p className="text-amber-200/80 text-sm">
                          {question.type === 'TFNG' && "For True/False/Not Given, focus on finding keywords. 'Not Given' often means the concept is mentioned but the specific relationship or fact is absent."}
                          {question.type === 'GAP_FILL' && "Check grammar! The word(s) you choose must fit grammatically into the sentence."}
                          {question.type === 'MCQ' && "Eliminate clearly wrong answers first. Watch out for distractors that use words from the text but change the meaning."}
                          {question.type === 'MATCHING_HEADINGS' && "Read the first and last sentence of the paragraph to grasp the main idea before looking at the options."}
                          {question.type === 'SHORT_ANSWER' && "Stick strictly to the word limit. Hyphenated words count as one word."}
                      </p>
                  </div>
               </div>

            </motion.div>
         </div>

         {/* Right Panel: Passage Reference */}
         <div className="w-full md:w-1/2 bg-white/5 border-l border-white/5 relative flex flex-col">
            <div className="p-4 bg-slate-900/80 border-b border-white/5 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" /> Reference Text
                </span>
                <span className="text-xs text-slate-500">{passage.title}</span>
            </div>
            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-slate-900/30">
                <div 
                    className="prose prose-invert prose-lg max-w-none text-slate-400/80"
                    dangerouslySetInnerHTML={{ __html: passage.content }} 
                />
            </div>
         </div>
      </main>
    </div>
  );
};

export default ExplanationView;
