export interface LearningPath {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedDuration: string;
  prerequisites: string[];
  scenarios: string[];
  learningObjectives: string[];
  badgeReward: string;
  category: string;
  order: number;
}

export interface LearningPathProgress {
  pathId: string;
  userId: string;
  currentScenario: number;
  completedScenarios: string[];
  startedAt: string;
  completedAt?: string;
  totalProgress: number; // 0-100 percentage
}

export interface LearningModule {
  id: string;
  title: string;
  description: string;
  type: 'tutorial' | 'practice' | 'challenge' | 'assessment';
  content: string;
  codeExamples: {
    language: string;
    code: string;
    explanation: string;
  }[];
  exercises: {
    question: string;
    expectedOutput: string;
    hints: string[];
  }[];
}
