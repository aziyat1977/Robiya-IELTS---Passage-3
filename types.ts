
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

export interface WordFormationExercise {
  root: string;
  correct: string;
  sentence: string;
}

export interface VocabItem {
  word: string;
  avatarUrl: string;
  definition: TranslationSet;
  speakingQuestions: string[];
  quiz: QuizOption[];
  wordFormation?: WordFormationExercise[];
}

export interface GrammarStep {
  text: string;
  highlightIndices: number[];
  annotation: string;
}

// MFP: specific visual types
export type VisualType = 'TIMELINE' | 'FORMULA' | 'TRANSFORMATION';

export interface GrammarVisual {
  type: VisualType; 
  title: string;
  steps: GrammarStep[];
  // For timelines
  timelineData?: { label: string; time: number; active: boolean }[]; 
  // For formulas
  formulaItems?: { label: string; color: string }[];
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

export interface GrammarUnit {
  id: string;
  title: string;
  description: string;
  topic: string;
  
  // MFP Structure
  meaning: {
    text: TranslationSet;
    context: string;
  };
  form: {
    structure: string;
    visual: GrammarVisual; // The main visual (Timeline or Formula)
    explanation: TranslationSet;
  };
  
  visuals: GrammarVisual[]; // Additional visuals if needed
  examples: GrammarExample[];
  quiz: QuizOption[]; // Mini-checks
  practiceTests: GrammarPracticeTest[]; // Full tests
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
  grammarUnits: GrammarUnit[]; 
  testData: TestData;
}
