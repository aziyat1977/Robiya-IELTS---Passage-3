export type QuestionType = 'TFNG' | 'YES_NO_NOT_GIVEN' | 'GAP_FILL' | 'SHORT_ANSWER' | 'MATCHING_HEADINGS' | 'MCQ';

export interface TranslationSet {
  en: string;
  ru: string;
  uz: string;
}

export interface QuizOption {
  question: string;
  options?: string[];
  correct: string;
  original?: string;
  transform?: string;
  answer?: string;
}

export interface VocabItem {
  word: string;
  avatarUrl: string;
  definition: TranslationSet;
  speakingQuestions: string[];
  quiz: QuizOption[];
}

export interface GrammarStep {
  text: string;
  highlightIndices: number[];
  annotation: string;
}

export interface GrammarVisual {
  title: string;
  steps: GrammarStep[];
}

export interface GrammarExample {
  original: string;
  nominalized: string;
  explanation: TranslationSet;
}

export interface GrammarPracticeQuestion {
  id: number;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
}

export interface GrammarPracticeTest {
  id: number;
  title: string;
  questions: GrammarPracticeQuestion[];
}

export interface GrammarSection {
  topic: string;
  content: TranslationSet;
  visuals: GrammarVisual[];
  examples: GrammarExample[];
  quiz: QuizOption[];
  practiceTests: GrammarPracticeTest[]; // New: 5 tests of 15 questions
}

export interface Question {
  id: number;
  type: QuestionType;
  text?: string;
  limit?: string; 
  options?: string[];
  target?: string; 
  correctAnswer: string;
  explanation: TranslationSet;
}

export interface Passage {
  id: string;
  title: string;
  content: string; 
  questions: Question[];
}

export interface TestData {
  timerSeconds: number;
  passages: Passage[];
}

export interface ModuleData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  vocabSection: VocabItem[];
  grammarSection: GrammarSection;
  testData: TestData;
}
