import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { readingModules } from '../data';
import { ModuleData, Passage, Question } from '../types';

interface ReadingContextType {
  activeModuleId: string;
  moduleData: ModuleData;
  currentPassageIndex: number;
  userAnswers: Record<number, string>;
  timeLeft: number;
  isTimerActive: boolean;
  isSubmitted: boolean;
  currentPassage: Passage;
  totalPassages: number;
  allQuestions: Question[];
  // Actions
  switchModule: (moduleId: string) => void;
  startTest: () => void;
  setAnswer: (questionId: number, value: string) => void;
  nextPassage: () => void;
  prevPassage: () => void;
  setPassage: (index: number) => void;
  submitTest: () => void;
  resetTest: () => void;
}

const ReadingContext = createContext<ReadingContextType | undefined>(undefined);

export const ReadingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeModuleId, setActiveModuleId] = useState<string>('vol1');
  const [currentPassageIndex, setCurrentPassageIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  
  // Initialize module data based on active ID
  const moduleData = readingModules[activeModuleId] || readingModules['vol1'];
  
  const [timeLeft, setTimeLeft] = useState(moduleData.testData.timerSeconds);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentPassage = moduleData.testData.passages[currentPassageIndex];
  const totalPassages = moduleData.testData.passages.length;
  const allQuestions = moduleData.testData.passages.flatMap(p => p.questions);

  // Timer Tick Effect
  useEffect(() => {
    let interval: any;
    if (isTimerActive && !isSubmitted) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 0) return 0;
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, isSubmitted]);

  // Auto-submit when time reaches 0
  useEffect(() => {
    if (timeLeft === 0 && isTimerActive && !isSubmitted) {
      submitTest();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, isTimerActive, isSubmitted]);

  const switchModule = (moduleId: string) => {
    if (readingModules[moduleId]) {
      setActiveModuleId(moduleId);
      // Reset state on switch
      setIsTimerActive(false);
      setIsSubmitted(false);
      setUserAnswers({});
      setCurrentPassageIndex(0);
      setTimeLeft(readingModules[moduleId].testData.timerSeconds);
    }
  };

  const startTest = () => {
    setIsTimerActive(true);
    setIsSubmitted(false);
    setUserAnswers({});
    setTimeLeft(moduleData.testData.timerSeconds);
    setCurrentPassageIndex(0);
  };

  const setAnswer = (questionId: number, value: string) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const nextPassage = () => {
    if (currentPassageIndex < totalPassages - 1) {
      setCurrentPassageIndex(prev => prev + 1);
    }
  };

  const prevPassage = () => {
    if (currentPassageIndex > 0) {
      setCurrentPassageIndex(prev => prev - 1);
    }
  };

  const setPassage = (index: number) => {
      if(index >= 0 && index < totalPassages) {
          setCurrentPassageIndex(index);
      }
  }

  const submitTest = () => {
    setIsTimerActive(false);
    setIsSubmitted(true);
  };

  const resetTest = () => {
      setIsTimerActive(false);
      setIsSubmitted(false);
      setTimeLeft(moduleData.testData.timerSeconds);
      setCurrentPassageIndex(0);
      setUserAnswers({});
  }

  return (
    <ReadingContext.Provider
      value={{
        activeModuleId,
        moduleData,
        currentPassageIndex,
        userAnswers,
        timeLeft,
        isTimerActive,
        isSubmitted,
        currentPassage,
        totalPassages,
        allQuestions,
        switchModule,
        startTest,
        setAnswer,
        nextPassage,
        prevPassage,
        setPassage,
        submitTest,
        resetTest
      }}
    >
      {children}
    </ReadingContext.Provider>
  );
};

export const useReading = () => {
  const context = useContext(ReadingContext);
  if (!context) {
    throw new Error('useReading must be used within a ReadingProvider');
  }
  return context;
};
