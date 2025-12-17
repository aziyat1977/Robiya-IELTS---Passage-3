import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ReadingProvider } from './context/ReadingContext';
import Dashboard from './components/Dashboard';
import LessonMode from './components/LessonMode';
import TestPlayer from './components/TestPlayer';
import ResultsView from './components/ResultsView';

const App: React.FC = () => {
  return (
    <ReadingProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/reading" replace />} />
          <Route path="/reading" element={<Dashboard />} />
          <Route path="/reading/vocab" element={<LessonMode />} />
          <Route path="/reading/grammar" element={<LessonMode />} />
          <Route path="/reading/test" element={<TestPlayer />} />
          <Route path="/reading/results" element={<ResultsView />} />
        </Routes>
      </HashRouter>
    </ReadingProvider>
  );
};

export default App;