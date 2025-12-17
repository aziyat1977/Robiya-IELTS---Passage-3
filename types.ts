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
  explanation: string;
}

export interface GrammarSection {
  topic: string;
  content: string; 
  visuals: GrammarVisual[];
  examples: GrammarExample[];
  quiz: QuizOption[];
}

export interface Question {
  id: number;
  type: QuestionType;
  text?: string;
  limit?: string; 
  options?: string[];
  target?: string; 
  correctAnswer: string;
  explanation: string; // New: Detailed analysis for the answer
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