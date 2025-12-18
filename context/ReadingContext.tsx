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
  isTimerPaused: boolean; // New
  isSubmitted: boolean;
  checkedTypes: Record<number, string[]>; // New: Map of passageIndex -> list of checked types
  currentPassage: Passage;
  totalPassages: number;
  allQuestions: Question[];
  // Actions
  switchModule: (moduleId: string) => void;
  startTest: () => void;
  togglePause: () => void; // New
  setAnswer: (questionId: number, value: string) => void;
  checkQuestionType: (passageIndex: number, type: string) => void; // New
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
  const [checkedTypes, setCheckedTypes] = useState<Record<number, string[]>>({}); // Track checked sections per passage
  
  // Initialize module data based on active ID
  const moduleData = readingModules[activeModuleId] || readingModules['vol1'];
  
  const [timeLeft, setTimeLeft] = useState(moduleData.testData.timerSeconds);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentPassage = moduleData.testData.passages[currentPassageIndex];
  const totalPassages = moduleData.testData.passages.length;
  const allQuestions = moduleData.testData.passages.flatMap(p => p.questions);

  // Timer Tick Effect
  useEffect(() => {
    let interval: any;
    if (isTimerActive && !isSubmitted && !isTimerPaused) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 0) return 0;
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, isSubmitted, isTimerPaused]);

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
      setIsTimerPaused(false);
      setIsSubmitted(false);
      setUserAnswers({});
      setCheckedTypes({});
      setCurrentPassageIndex(0);
      setTimeLeft(readingModules[moduleId].testData.timerSeconds);
    }
  };

  const startTest = () => {
    setIsTimerActive(true);
    setIsTimerPaused(false);
    setIsSubmitted(false);
    setUserAnswers({});
    setCheckedTypes({});
    setTimeLeft(moduleData.testData.timerSeconds);
    setCurrentPassageIndex(0);
  };

  const togglePause = () => {
    setIsTimerPaused(prev => !prev);
  };

  const setAnswer = (questionId: number, value: string) => {
    // Prevent answering if submitted OR if this specific question type is already checked
    if (isSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const checkQuestionType = (passageIdx: number, type: string) => {
    setCheckedTypes(prev => {
      const existing = prev[passageIdx] || [];
      if (existing.includes(type)) return prev;
      return { ...prev, [passageIdx]: [...existing, type] };
    });
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
    setIsTimerPaused(false);
    setIsSubmitted(true);
  };

  const resetTest = () => {
      setIsTimerActive(false);
      setIsTimerPaused(false);
      setIsSubmitted(false);
      setCheckedTypes({});
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
        isTimerPaused,
        isSubmitted,
        checkedTypes,
        currentPassage,
        totalPassages,
        allQuestions,
        switchModule,
        startTest,
        togglePause,
        setAnswer,
        checkQuestionType,
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
