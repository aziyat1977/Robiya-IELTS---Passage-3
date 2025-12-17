import React from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ReadingProvider } from './context/ReadingContext';
import Dashboard from './components/Dashboard';
import LessonMode from './components/LessonMode';
import TestPlayer from './components/TestPlayer';
import ResultsView from './components/ResultsView';
import ExplanationView from './components/ExplanationView'; // New Import
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/reading" replace />} />
        <Route path="/reading" element={<Dashboard />} />
        <Route path="/reading/vocab" element={<LessonMode />} />
        <Route path="/reading/grammar" element={<LessonMode />} />
        <Route path="/reading/test" element={<TestPlayer />} />
        <Route path="/reading/results" element={<ResultsView />} />
        <Route path="/reading/explanation/:id" element={<ExplanationView />} /> {/* New Route */}
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