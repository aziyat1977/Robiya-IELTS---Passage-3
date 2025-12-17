import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { readingData } from '../data';
import { ModuleData, Passage, Question } from '../types';

interface ReadingContextType {
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
  const [currentPassageIndex, setCurrentPassageIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(readingData.testData.timerSeconds);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentPassage = readingData.testData.passages[currentPassageIndex];
  const totalPassages = readingData.testData.passages.length;
  const allQuestions = readingData.testData.passages.flatMap(p => p.questions);

  useEffect(() => {
    let interval: any;
    if (isTimerActive && timeLeft > 0 && !isSubmitted) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            submitTest();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTimerActive, timeLeft, isSubmitted]);

  const startTest = () => {
    setIsTimerActive(true);
    setIsSubmitted(false);
    setUserAnswers({});
    setTimeLeft(readingData.testData.timerSeconds);
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
      setTimeLeft(readingData.testData.timerSeconds);
      setCurrentPassageIndex(0);
      setUserAnswers({});
  }

  return (
    <ReadingContext.Provider
      value={{
        moduleData: readingData,
        currentPassageIndex,
        userAnswers,
        timeLeft,
        isTimerActive,
        isSubmitted,
        currentPassage,
        totalPassages,
        allQuestions,
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