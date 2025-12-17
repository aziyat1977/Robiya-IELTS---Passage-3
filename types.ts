export type QuestionType = 'TFNG' | 'YES_NO_NOT_GIVEN' | 'GAP_FILL' | 'SHORT_ANSWER' | 'MATCHING_HEADINGS' | 'MCQ';

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
  definition: string;
  quiz: QuizOption;
}

export interface GrammarSection {
  topic: string;
  explanation: string;
  quiz: QuizOption[];
}

export interface Question {
  id: number;
  type: QuestionType;
  text?: string;
  limit?: string; // e.g., "ONE_WORD"
  options?: string[];
  target?: string; // For matching headings
  correctAnswer: string;
}

export interface Passage {
  id: string;
  title: string;
  content: string; // HTML content
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