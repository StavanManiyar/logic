import { LearningPath } from '../types/learningPaths';

export const learningPaths: LearningPath[] = [
  {
    id: 'lp1',
    title: 'Programming Fundamentals',
    description: 'Master the basics of programming through real-world decision making and logic.',
    difficulty: 'beginner',
    estimatedDuration: '4 hours',
    prerequisites: [],
    scenarios: ['1', '2'],
    learningObjectives: [
      'Understand conditional logic and decision-making',
      'Learn to organize data using sorting techniques',
      'Master if/else statements and basic functions',
      'Apply logical thinking to solve everyday problems'
    ],
    badgeReward: 'Code Novice Badge',
    category: 'Programming Basics',
    order: 1
  },
  {
    id: 'lp2',
    title: 'Data Processing & Functions',
    description: 'Learn to process data, create reusable functions, and handle complex logic.',
    difficulty: 'intermediate',
    estimatedDuration: '5 hours',
    prerequisites: ['lp1'],
    scenarios: ['3', '4'],
    learningObjectives: [
      'Create and use functions effectively',
      'Process and manipulate data structures',
      'Implement complex decision-making logic',
      'Handle multiple input parameters and conditions'
    ],
    badgeReward: 'Function Master Badge',
    category: 'Data Processing',
    order: 2
  },
  {
    id: 'lp3',
    title: 'Advanced Algorithms & Systems',
    description: 'Master complex algorithms, data structures, and system design.',
    difficulty: 'advanced',
    estimatedDuration: '8 hours',
    prerequisites: ['lp2'],
    scenarios: ['5', '6', 'advanced-algo-1', 'advanced-domain-1'],
    learningObjectives: [
      'Implement advanced algorithms like pathfinding',
      'Design automated trading and financial systems',
      'Create complex data processing pipelines',
      'Build scalable system architectures'
    ],
    badgeReward: 'Algorithm Expert Badge',
    category: 'Advanced Algorithms',
    order: 3
  },
  {
    id: 'lp4',
    title: 'Game Development Logic',
    description: 'Apply programming concepts to game development and interactive systems.',
    difficulty: 'intermediate',
    estimatedDuration: '6 hours',
    prerequisites: ['lp2'],
    scenarios: ['clash-1', 'clash-2', 'valorant-1', 'valorant-2'],
    learningObjectives: [
      'Implement game logic and mechanics',
      'Create strategy and decision-making systems',
      'Handle real-time data processing',
      'Design interactive user experiences'
    ],
    badgeReward: 'Game Logic Master Badge',
    category: 'Game Development',
    order: 4
  },
  {
    id: 'lp5',
    title: 'AI & Machine Learning Fundamentals',
    description: 'Introduction to AI concepts through practical gaming and strategy scenarios.',
    difficulty: 'advanced',
    estimatedDuration: '7 hours',
    prerequisites: ['lp3', 'lp4'],
    scenarios: ['chess-1', 'among-us-1', 'lol-1'],
    learningObjectives: [
      'Understand pattern recognition and analysis',
      'Implement decision trees and scoring systems',
      'Create behavioral analysis algorithms',
      'Design intelligent recommendation systems'
    ],
    badgeReward: 'AI Pioneer Badge',
    category: 'Artificial Intelligence',
    order: 5
  },
  {
    id: 'lp6',
    title: 'System Optimization & Performance',
    description: 'Learn to optimize systems, manage resources, and improve performance.',
    difficulty: 'advanced',
    estimatedDuration: '6 hours',
    prerequisites: ['lp3'],
    scenarios: ['f1-1', 'cs2-1', 'cs2-2', 'wow-1'],
    learningObjectives: [
      'Optimize resource allocation and management',
      'Implement performance monitoring systems',
      'Create efficient scheduling algorithms',
      'Design scalable system architectures'
    ],
    badgeReward: 'Performance Expert Badge',
    category: 'System Optimization',
    order: 6
  },
  {
    id: 'lp7',
    title: 'Creative Problem Solving',
    description: 'Apply programming to creative challenges and complex problem-solving scenarios.',
    difficulty: 'intermediate',
    estimatedDuration: '5 hours',
    prerequisites: ['lp2'],
    scenarios: ['portal-1', 'tetris-1', 'candy-crush-1', 'minecraft-1'],
    learningObjectives: [
      'Solve complex spatial and logical puzzles',
      'Implement physics-based calculations',
      'Create pattern recognition systems',
      'Design automation and optimization algorithms'
    ],
    badgeReward: 'Creative Coder Badge',
    category: 'Creative Coding',
    order: 7
  }
];
