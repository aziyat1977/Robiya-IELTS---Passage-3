import React from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ReadingProvider } from './context/ReadingContext';
import Dashboard from './components/Dashboard';
import LessonMode from './components/LessonMode';
import TestPlayer from './components/TestPlayer';
import ResultsView from './components/ResultsView';
import ExplanationView from './components/ExplanationView';
import { AnimatePresence, motion } from 'framer-motion';

// --- Cinematic Page Transitions ---
const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.98,
    filter: "blur(10px)",
    y: 20
  },
  in: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] // Custom cubic bezier
    }
  },
  out: {
    opacity: 0,
    scale: 1.02,
    filter: "blur(10px)",
    y: -20,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/reading" replace />} />
        
        <Route path="/reading" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} className="w-full h-full perspective-1000">
            <Dashboard />
          </motion.div>
        } />
        
        <Route path="/reading/vocab" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} className="w-full h-full perspective-1000">
            <LessonMode />
          </motion.div>
        } />
        
        <Route path="/reading/grammar" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} className="w-full h-full perspective-1000">
            <LessonMode />
          </motion.div>
        } />
        
        <Route path="/reading/test" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} className="w-full h-full perspective-1000">
            <TestPlayer />
          </motion.div>
        } />
        
        <Route path="/reading/results" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} className="w-full h-full perspective-1000">
            <ResultsView />
          </motion.div>
        } />
        
        <Route path="/reading/explanation/:id" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} className="w-full h-full perspective-1000">
            <ExplanationView />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <ReadingProvider>
      <HashRouter>
        <AnimatedRoutes />
      </HashRouter>
    </ReadingProvider>
  );
};

export default App;