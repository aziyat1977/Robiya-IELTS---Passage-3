import React, { useEffect } from 'react';
import { useReading } from '../context/ReadingContext';
import { useNavigate, Link } from 'react-router-dom';
import { CheckCircle, XCircle, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const ResultsView: React.FC = () => {
  const { isSubmitted, allQuestions, userAnswers, resetTest } = useReading();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSubmitted) {
      navigate('/reading/test');
    }
  }, [isSubmitted, navigate]);

  if (!isSubmitted) return null;

  const calculateScore = () => {
    let correct = 0;
    allQuestions.forEach(q => {
      const userAns = userAnswers[q.id]?.trim().toLowerCase();
      const correctAns = q.correctAnswer.trim().toLowerCase();
      
      if (userAns === correctAns) {
        correct++;
      }
    });
    return correct;
  };

  const score = calculateScore();
  const bandScore = calculateBand(score);

  function calculateBand(raw: number): string {
      if (raw >= 39) return "9.0";
      if (raw >= 37) return "8.5";
      if (raw >= 35) return "8.0";
      if (raw >= 32) return "7.5";
      if (raw >= 30) return "7.0";
      if (raw >= 26) return "6.5";
      if (raw >= 23) return "6.0";
      if (raw >= 19) return "5.5";
      if (raw >= 15) return "5.0";
      return "Below 5.0";
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8 text-center"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Test Complete!</h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
              className="bg-blue-50 p-6 rounded-xl min-w-[200px]"
            >
              <div className="text-gray-500 text-sm uppercase tracking-wide font-semibold mb-1">Raw Score</div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-5xl font-bold text-blue-600"
              >
                {score} / 40
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, type: 'spring' }}
              className="bg-green-50 p-6 rounded-xl min-w-[200px]"
            >
              <div className="text-gray-500 text-sm uppercase tracking-wide font-semibold mb-1">Estimated Band</div>
              <div className="text-5xl font-bold text-green-600">{bandScore}</div>
            </motion.div>
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <Link to="/reading" onClick={resetTest} className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              <Home className="w-4 h-4 mr-2" /> Back to Dashboard
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
        >
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 font-semibold text-gray-700">
            Detailed Review
          </div>
          <div className="divide-y divide-gray-100">
            {allQuestions.map((q, idx) => {
              const userAns = userAnswers[q.id];
              const isCorrect = userAns?.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();

              return (
                <motion.div 
                  key={q.id} 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-6 hover:bg-gray-50 transition-colors flex flex-col md:flex-row gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {q.id}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="mb-2 font-medium text-gray-800">
                        {q.text || `Question ${q.id} (${q.type})`} 
                        {q.target && <span className="text-gray-500"> - Target: {q.target}</span>}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className={`p-3 rounded border ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                        <span className="block text-xs text-gray-500 uppercase font-semibold mb-1">Your Answer</span>
                        <div className="font-medium">{userAns || <span className="italic text-gray-400">No Answer</span>}</div>
                      </div>
                      <div className="p-3 rounded border bg-gray-50 border-gray-200">
                        <span className="block text-xs text-gray-500 uppercase font-semibold mb-1">Correct Answer</span>
                        <div className="font-medium text-gray-800">{q.correctAnswer}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex items-center">
                      {isCorrect ? <CheckCircle className="w-6 h-6 text-green-500" /> : <XCircle className="w-6 h-6 text-red-500" />}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResultsView;