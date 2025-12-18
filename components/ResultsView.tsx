import React, { useEffect } from 'react';
import { useReading } from '../context/ReadingContext';
import { useNavigate, Link } from 'react-router-dom';
import { CheckCircle, XCircle, Home, ArrowRight, Activity, TrendingUp } from 'lucide-react';
import { motion, useSpring, useTransform } from 'framer-motion';

const AnimatedNumber = ({ value }: { value: number }) => {
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current).toString());

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  return <motion.span>{display}</motion.span>;
};

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
      if (userAnswers[q.id]?.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase()) correct++;
    });
    return correct;
  };

  const score = calculateScore();
  
  function calculateBand(raw: number): string {
      if (raw >= 39) return "9.0"; if (raw >= 37) return "8.5"; if (raw >= 35) return "8.0";
      if (raw >= 32) return "7.5"; if (raw >= 30) return "7.0"; if (raw >= 26) return "6.5";
      if (raw >= 23) return "6.0"; if (raw >= 19) return "5.5"; if (raw >= 15) return "5.0";
      return "<5.0";
  }

  return (
    <div className="min-h-screen bg-[#050b14] p-6 relative overflow-y-auto">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto relative z-10 pt-10">
        <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="bg-slate-900/80 backdrop-blur-xl rounded-[3rem] border border-white/10 p-12 text-center shadow-2xl mb-12 relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500"></div>
            
            <h1 className="text-5xl font-black text-white mb-2 tracking-tighter uppercase">Mission Debrief</h1>
            <p className="text-slate-400 mb-12 uppercase tracking-widest text-sm">Simulation Analysis Log</p>

            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                <div className="text-center">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Accuracy</div>
                    <div className="text-8xl font-black text-white relative inline-block">
                        <AnimatedNumber value={score} />
                        <span className="text-2xl text-slate-600 absolute -top-2 -right-12">/ {allQuestions.length}</span>
                    </div>
                </div>
                
                <div className="w-px bg-white/10 h-32 hidden md:block"></div>

                <div className="text-center">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Band Score</div>
                    <div className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-blue-500">
                        {calculateBand(score)}
                    </div>
                </div>
            </div>

            <div className="mt-12 flex justify-center">
                <Link to="/reading" onClick={resetTest}>
                    <motion.button 
                        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                        className="flex items-center px-10 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest hover:bg-blue-50 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                    >
                        <Home className="w-5 h-5 mr-3" /> Return to Base
                    </motion.button>
                </Link>
            </div>
        </motion.div>

        <h2 className="text-2xl font-bold text-white mb-6 flex items-center"><Activity className="mr-3 text-blue-500"/> Detailed Diagnostics</h2>
        
        <div className="grid gap-4">
            {allQuestions.map((q, idx) => {
                const isCorrect = userAnswers[q.id]?.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();
                return (
                    <motion.div 
                        key={q.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                    >
                        <Link to={`/reading/explanation/${q.id}`} className="block">
                            <motion.div 
                                whileHover={{ scale: 1.01, x: 5 }}
                                className={`p-6 rounded-2xl border flex items-center justify-between transition-all bg-slate-900/60 backdrop-blur-sm ${isCorrect ? 'border-emerald-500/30 hover:bg-emerald-900/20' : 'border-red-500/30 hover:bg-red-900/20'}`}
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg ${isCorrect ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                                        {q.id}
                                    </div>
                                    <div>
                                        <div className="text-slate-300 font-medium text-lg mb-1">{q.text || `Question ${q.id}`}</div>
                                        <div className="flex gap-4 text-xs font-mono">
                                            <span className="text-slate-500">YOURS: <span className={isCorrect ? 'text-emerald-400' : 'text-red-400'}>{userAnswers[q.id] || "MISSING"}</span></span>
                                            {!isCorrect && <span className="text-slate-500">CORRECT: <span className="text-white">{q.correctAnswer}</span></span>}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 rounded-full bg-white/5">
                                    <ArrowRight className="w-5 h-5 text-slate-400" />
                                </div>
                            </motion.div>
                        </Link>
                    </motion.div>
                )
            })}
        </div>
      </div>
    </div>
  );
};

export default ResultsView;