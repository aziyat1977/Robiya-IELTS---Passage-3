import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Layers, PlayCircle, ChevronRight, Zap } from 'lucide-react';
import { useReading } from '../context/ReadingContext';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// --- Particle Background ---
const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full mix-blend-screen bg-blue-500"
          initial={{ 
            opacity: 0, 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight,
            scale: 0
          }}
          animate={{ 
            opacity: [0, 0.4, 0], 
            y: [null, Math.random() * -150],
            scale: [0, Math.random() * 2 + 0.5, 0]
          }}
          transition={{ 
            duration: Math.random() * 5 + 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: Math.random() * 5 
          }}
          style={{
            width: Math.random() * 4 + 1 + 'px',
            height: Math.random() * 4 + 1 + 'px',
            boxShadow: `0 0 ${Math.random() * 10 + 5}px #3b82f6`
          }}
        />
      ))}
    </div>
  );
};

// --- Ultra 3D Tilt Card ---
const TiltCard = ({ children, to, gradient, delay }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);
  const brightness = useTransform(mouseYSpring, [-0.5, 0.5], [1.2, 0.8]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Link to={to} className="block h-full perspective-1000 group">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50, rotateX: 10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ delay, duration: 0.6, type: "spring" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, filter: `brightness(${brightness})` }}
        className={`relative h-full rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:border-white/30 overflow-hidden transform-style-3d`}
      >
        {/* Animated Gradient Background */}
        <div className={`absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br ${gradient}`} />
        
        {/* Shine Effect */}
        <motion.div 
          className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
            transform: "translateZ(1px)"
          }}
        />

        <div className="relative z-20 flex flex-col h-full transform-style-3d">
          {children}
        </div>
      </motion.div>
    </Link>
  );
};

const Dashboard: React.FC = () => {
  const { moduleData, isTimerActive, activeModuleId, switchModule } = useReading();

  // Safeguard against missing data structures during transition
  const grammarUnits = moduleData.grammarUnits || [];
  const grammarTopics = grammarUnits.slice(0, 2).map(u => u.topic).join(', ');
  const totalPracticeQuestions = grammarUnits.reduce((acc, unit) => acc + (unit.practiceTests?.length || 0), 0);

  return (
    <div className="min-h-screen relative overflow-hidden text-white flex flex-col justify-center">
      <ParticleBackground />
      
      {/* Ambient Light Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full animate-pulse delay-1000 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-12">
        
        {/* Module Switcher - Liquid Animation */}
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex justify-center mb-16"
        >
            <div className="bg-black/30 backdrop-blur-lg p-1.5 rounded-full border border-white/10 flex relative shadow-2xl">
                {/* Active Pill Background */}
                <motion.div
                  layoutId="activeModulePill"
                  className={`absolute top-1.5 bottom-1.5 rounded-full ${activeModuleId === 'vol1' ? 'bg-blue-600 left-1.5' : 'bg-purple-600 right-1.5'}`}
                  style={{ width: 'calc(50% - 6px)' }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
                
                <button 
                    onClick={() => switchModule('vol1')}
                    className={`relative z-10 px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest transition-colors ${activeModuleId === 'vol1' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                >
                    Volume 01
                </button>
                <button 
                     onClick={() => switchModule('vol2')}
                     className={`relative z-10 px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest transition-colors ${activeModuleId === 'vol2' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                >
                    Volume 02
                </button>
            </div>
        </motion.div>

        <header className="mb-24 text-center">
          <motion.div
            key={activeModuleId}
            initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ type: "spring", bounce: 0.4 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 mb-6 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)] tracking-tight">
              {moduleData.title}
            </h1>
          </motion.div>
          
          <motion.p 
            key={moduleData.subtitle}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed"
          >
            {moduleData.subtitle}
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <TiltCard to="/reading/vocab" gradient="from-cyan-500 to-blue-600" delay={0.3}>
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center mb-8 shadow-lg shadow-cyan-500/30 transform group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-cyan-200 transition-colors">Vocabulary Core</h3>
            <p className="text-slate-300 text-lg flex-grow leading-relaxed">
              Initialize neural pathways with {moduleData.vocabSection.length} high-frequency academic terms including word formation.
            </p>
            <div className="mt-8 flex items-center text-cyan-300 font-bold tracking-widest group-hover:translate-x-4 transition-transform duration-300">
              INITIATE <ChevronRight className="w-5 h-5 ml-2" />
            </div>
          </TiltCard>

          <TiltCard to="/reading/grammar" gradient="from-purple-500 to-pink-600" delay={0.4}>
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-purple-400 to-pink-500 flex items-center justify-center mb-8 shadow-lg shadow-purple-500/30 transform group-hover:scale-110 transition-transform duration-300">
              <Layers className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-purple-200 transition-colors">Grammar Matrix</h3>
            <p className="text-slate-300 text-lg flex-grow leading-relaxed">
              Deconstruct {grammarUnits.length} advanced units ({grammarTopics}...) with comprehensive visuals and {totalPracticeQuestions > 0 ? totalPracticeQuestions : 'multiple'} practice modules.
            </p>
            <div className="mt-8 flex items-center text-purple-300 font-bold tracking-widest group-hover:translate-x-4 transition-transform duration-300">
              ANALYZE <ChevronRight className="w-5 h-5 ml-2" />
            </div>
          </TiltCard>

          <TiltCard to="/reading/test" gradient={isTimerActive ? "from-amber-500 to-orange-600" : "from-emerald-500 to-teal-600"} delay={0.5}>
             <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-lg transform group-hover:scale-110 transition-transform duration-300 ${
               isTimerActive 
                 ? 'bg-gradient-to-tr from-amber-400 to-orange-500 shadow-orange-500/30' 
                 : 'bg-gradient-to-tr from-emerald-400 to-teal-500 shadow-emerald-500/30'
             }`}>
              {isTimerActive ? <Zap className="w-10 h-10 text-white animate-pulse" /> : <PlayCircle className="w-10 h-10 text-white" />}
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-emerald-200 transition-colors">
              {isTimerActive ? "Resume Simulation" : "Test Simulation"}
            </h3>
            <p className="text-slate-300 text-lg flex-grow leading-relaxed">
              {isTimerActive 
                  ? "Re-enter the testing environment immediately." 
                  : "Full 60-minute IELTS simulation. 40 Questions."}
            </p>
            <div className={`mt-8 flex items-center font-bold tracking-widest group-hover:translate-x-4 transition-transform duration-300 ${isTimerActive ? 'text-amber-300' : 'text-emerald-300'}`}>
              {isTimerActive ? "RESUME" : "LAUNCH"} <ChevronRight className="w-5 h-5 ml-2" />
            </div>
          </TiltCard>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;