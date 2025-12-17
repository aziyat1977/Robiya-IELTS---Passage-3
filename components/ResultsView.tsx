import React, { useEffect } from 'react';
import { useReading } from '../context/ReadingContext';
import { useNavigate, Link } from 'react-router-dom';
import { CheckCircle, XCircle, Home, ArrowRight, Activity } from 'lucide-react';
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
      const userAns = userAnswers[q.id]?.trim().toLowerCase();
      const correctAns = q.correctAnswer.trim().toLowerCase();
      if (userAns === correctAns) correct++;
    });
    return correct;
  };

  const score = calculateScore();
  
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
      return "<5.0";
  }
  const bandScore = calculateBand(score);

  return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-[#0f172a] p-6 md:p-12 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      
      {/* Floating Orbs */}
      <motion.div 
        animate={{ y: [0, -40, 0], scale: [1, 1.1, 1] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]" 
      />
      <motion.div 
        animate={{ y: [0, 40, 0], scale: [1, 1.2, 1] }} 
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-[80px]" 
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0, rotateX: 20 }}
          animate={{ scale: 1, opacity: 1, rotateX: 0 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-10 mb-12 text-center shadow-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-black mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
            SIMULATION COMPLETE
          </h1>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -10, rotateZ: -2 }}
              className="bg-gradient-to-br from-blue-600/30 to-blue-900/30 p-8 rounded-2xl border border-blue-500/30 min-w-[240px] shadow-[0_0_30px_rgba(37,99,235,0.2)]"
            >
              <div className="text-blue-200 text-sm uppercase tracking-widest font-bold mb-2">Accuracy Protocol</div>
              <div className="text-7xl font-black text-white flex justify-center">
                 <AnimatedNumber value={score} /><span className="text-4xl text-blue-400 mt-4">/40</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ y: -10, rotateZ: 2 }}
              className="bg-gradient-to-br from-emerald-600/30 to-emerald-900/30 p-8 rounded-2xl border border-emerald-500/30 min-w-[240px] shadow-[0_0_30px_rgba(16,185,129,0.2)]"
            >
              <div className="text-emerald-200 text-sm uppercase tracking-widest font-bold mb-2">Band Proficiency</div>
              <div className="text-7xl font-black text-white">
                {bandScore}
              </div>
            </motion.div>
          </div>

          <div className="mt-12">
            <Link to="/reading" onClick={resetTest}>
                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center mx-auto px-8 py-4 bg-white text-slate-900 rounded-xl font-bold uppercase tracking-widest hover:bg-slate-200 transition-colors shadow-lg"
                >
                    <Home className="w-5 h-5 mr-3" /> Return to Hub
                </motion.button>
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-slate-900/50 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden shadow-2xl"
        >
          <div className="px-8 py-6 border-b border-white/10 bg-black/20 font-bold text-slate-300 uppercase tracking-widest text-sm flex justify-between items-center">
             <span>Diagnostic Log</span>
             <span className="text-xs text-slate-500">Click question for deep analysis</span>
          </div>
          <div className="divide-y divide-white/5">
            {allQuestions.map((q, idx) => {
              const userAns = userAnswers[q.id];
              const isCorrect = userAns?.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();

              return (
                <Link to={`/reading/explanation/${q.id}`} key={q.id}>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 }}
                    className="p-6 hover:bg-white/5 transition-colors flex flex-col md:flex-row gap-6 group cursor-pointer"
                  >
                    <div className="flex-shrink-0">
                      <div className={`
                          w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg border transform group-hover:scale-110 transition-transform
                          ${isCorrect 
                              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]' 
                              : 'bg-red-500/10 text-red-400 border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.2)]'
                          }
                      `}>
                        {q.id}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="mb-3 font-medium text-slate-200 text-lg flex items-center">
                          {q.text || <span className="text-slate-400 italic">Question Type: {q.type}</span>} 
                          {q.target && <span className="text-purple-400 font-bold ml-2">[{q.target}]</span>}
                          <Activity className="w-4 h-4 ml-3 opacity-0 group-hover:opacity-100 text-blue-400 transition-opacity" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className={`p-4 rounded-lg border ${isCorrect ? 'bg-emerald-900/20 border-emerald-500/20' : 'bg-red-900/20 border-red-500/20'}`}>
                          <span className="block text-[10px] text-slate-400 uppercase font-bold mb-1">User Input</span>
                          <div className={`font-mono font-bold ${isCorrect ? 'text-emerald-300' : 'text-red-300'}`}>
                              {userAns || <span className="opacity-50">NO DATA</span>}
                          </div>
                        </div>
                        <div className="p-4 rounded-lg border bg-slate-800/50 border-white/10">
                          <span className="block text-[10px] text-slate-400 uppercase font-bold mb-1">Expected Output</span>
                          <div className="font-mono font-bold text-white">{q.correctAnswer}</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5 group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-300 group-hover:text-white">Analysis</span>
                            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-white" />
                        </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ResultsView;