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
  speakingQuestions: string[]; // New: Questions for speaking practice
  quiz: QuizOption[]; // Changed to array for multiple quizzes per word
}

export interface GrammarStep {
  text: string;
  highlightIndices: number[]; // Indices of words to highlight/animate
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
  visuals: GrammarVisual[]; // New: For animated explanations
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