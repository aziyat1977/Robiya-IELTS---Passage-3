import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, Laptop, ChevronRight, PlayCircle, Layers, Box, Globe, Archive } from 'lucide-react';
import { useReading } from '../context/ReadingContext';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';

// --- 3D Background Elements ---
const FloatingShape = ({ delay, color, x, y, size }: any) => (
  <motion.div
    initial={{ y: 0, rotate: 0 }}
    animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
    transition={{ duration: 10, repeat: Infinity, ease: "linear", delay }}
    className={`absolute blur-2xl opacity-30 rounded-full mix-blend-screen pointer-events-none z-0`}
    style={{ 
      background: color, 
      left: x, 
      top: y, 
      width: size, 
      height: size 
    }}
  />
);

// --- 3D Tilt Card Component ---
const TiltCard = ({ children, to, gradient }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Link to={to} className="block h-full perspective-1000">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`relative h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-2xl transition-all duration-200 group overflow-hidden`}
      >
        {/* Shiny Highlight Effect */}
        <motion.div
          style={{
            background: useMotionTemplate`radial-gradient(400px circle at ${mouseXSpring.get() * 100 + 50}% ${mouseYSpring.get() * 100 + 50}%, rgba(255,255,255,0.15), transparent 80%)`
          }}
          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        />
        
        {/* Gradient Background base */}
        <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${gradient} z-[-1]`} />

        <div style={{ transform: "translateZ(30px)" }} className="relative z-10 flex flex-col h-full">
          {children}
        </div>
      </motion.div>
    </Link>
  );
};

const Dashboard: React.FC = () => {
  const { moduleData, isTimerActive, activeModuleId, switchModule } = useReading();

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -50, rotateX: 20 }}
      className="min-h-screen relative overflow-hidden text-white"
    >
      {/* Dynamic Background */}
      <FloatingShape color="#4f46e5" x="10%" y="10%" size="300px" delay={0} />
      <FloatingShape color="#9333ea" x="80%" y="20%" size="400px" delay={2} />
      <FloatingShape color="#ec4899" x="30%" y="70%" size="350px" delay={4} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        
        {/* Module Switcher */}
        <div className="flex justify-center mb-12">
            <div className="bg-white/10 backdrop-blur-md p-1 rounded-full border border-white/10 flex">
                <button 
                    onClick={() => switchModule('vol1')}
                    className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${activeModuleId === 'vol1' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                    Volume 01
                </button>
                <button 
                     onClick={() => switchModule('vol2')}
                     className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${activeModuleId === 'vol2' ? 'bg-purple-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                    Volume 02
                </button>
            </div>
        </div>

        <header className="mb-20 text-center">
          <motion.div
            key={activeModuleId} // Re-animate on switch
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="inline-block"
          >
            <h1 className="text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4 drop-shadow-lg tracking-tight">
              {moduleData.title}
            </h1>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.3 }}
             className="flex justify-center gap-2 mb-6"
          >
            <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/50 text-blue-200 text-xs font-mono uppercase tracking-widest">
              {activeModuleId === 'vol1' ? 'Volume 01' : 'Volume 02'}
            </span>
            <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/50 text-purple-200 text-xs font-mono uppercase tracking-widest">
              Academic
            </span>
          </motion.div>

          <motion.p 
            key={moduleData.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-blue-100/80 font-light max-w-2xl mx-auto leading-relaxed"
          >
            {moduleData.subtitle}
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
          
          {/* Vocab Card */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="h-full"
          >
            <TiltCard to="/reading/vocab" gradient="from-blue-600 to-cyan-500">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Vocabulary Core</h3>
              <p className="text-blue-200 flex-grow">
                Master {moduleData.vocabSection.length} high-frequency academic terms found in this volume.
              </p>
              <div className="mt-6 flex items-center text-cyan-300 font-bold tracking-wide group-hover:translate-x-2 transition-transform">
                INITIATE <ChevronRight className="w-5 h-5 ml-2" />
              </div>
            </TiltCard>
          </motion.div>

          {/* Grammar Card */}
          <motion.div
             initial={{ y: 50, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.4 }}
             className="h-full"
          >
            <TiltCard to="/reading/grammar" gradient="from-purple-600 to-pink-500">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-500 to-pink-400 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Grammar Matrix</h3>
              <p className="text-purple-200 flex-grow">
                Deconstruct {moduleData.grammarSection.topic} for complex comprehension.
              </p>
              <div className="mt-6 flex items-center text-pink-300 font-bold tracking-wide group-hover:translate-x-2 transition-transform">
                ANALYZE <ChevronRight className="w-5 h-5 ml-2" />
              </div>
            </TiltCard>
          </motion.div>

          {/* Test Card */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="h-full"
          >
            <TiltCard to="/reading/test" gradient={isTimerActive ? "from-amber-500 to-orange-600" : "from-emerald-500 to-teal-600"}>
               <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-colors ${
                 isTimerActive 
                   ? 'bg-gradient-to-tr from-amber-500 to-orange-400 shadow-orange-500/30' 
                   : 'bg-gradient-to-tr from-emerald-500 to-teal-400 shadow-emerald-500/30'
               }`}>
                {isTimerActive ? <PlayCircle className="w-8 h-8 text-white animate-pulse" /> : <Box className="w-8 h-8 text-white" />}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                {isTimerActive ? "Resume Simulation" : "Begin Simulation"}
              </h3>
              <p className="text-white/80 flex-grow">
                {isTimerActive 
                    ? "Re-enter the testing environment." 
                    : "Full 60-minute IELTS simulation. 40 Questions."}
              </p>
              <div className="mt-6 flex items-center text-white font-bold tracking-wide group-hover:translate-x-2 transition-transform">
                {isTimerActive ? "RESUME" : "LAUNCH"} <ChevronRight className="w-5 h-5 ml-2" />
              </div>
            </TiltCard>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
