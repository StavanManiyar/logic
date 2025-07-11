import { gamingScenarioTemplates } from '../utils/gamingScenarios';

export interface Scenario {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  points: number;
  estimatedTime: string;
  completed?: boolean;
  prompt?: string;
  example?: string;
  hints?: string[];
  concepts?: string[];
  realWorldApplication?: string;
  prerequisites?: string[];
}

class ScenarioService {
  private baseScenarios: Scenario[] = [
    {
      id: '1',
      title: 'Weather-Based Clothing',
      description: 'Learn to make decisions based on weather conditions',
      difficulty: 'beginner',
      category: 'Conditional Logic',
      points: 100,
      estimatedTime: '15 min',
      prompt: 'Imagine you\'re getting ready in the morning. How do you decide what to wear based on the weather and temperature?',
      example: 'For example: "If it\'s sunny and hot, I wear light clothes. If it\'s raining, I take an umbrella and wear a raincoat."',
      hints: [
        'Think about different weather conditions (sunny, rainy, cloudy)',
        'Consider temperature ranges (hot, cold, mild)',
        'What combinations would you consider?'
      ],
      concepts: ['Conditional Statements', 'Boolean Logic', 'Decision Trees'],
      realWorldApplication: 'Smart home automation, IoT devices, weather apps'
    },
    {
      id: '2',
      title: 'Book Organization',
      description: 'Sort and organize books using different criteria',
      difficulty: 'beginner',
      category: 'Sorting & Arrays',
      points: 120,
      estimatedTime: '18 min',
      prompt: 'You have a collection of books that need to be organized. How would you sort them?',
      example: 'For example: "I would sort them by author\'s last name, or by publication year, or by genre."',
      hints: [
        'Think about different sorting criteria (title, author, year)',
        'Consider how you would compare books',
        'What order would you prefer?'
      ],
      concepts: ['Sorting Algorithms', 'Data Structures', 'Comparison Functions'],
      realWorldApplication: 'Database indexing, e-commerce product sorting, content management'
    },
    {
      id: '3',
      title: 'Meal Planning',
      description: 'Plan meals based on preferences and ingredients',
      difficulty: 'intermediate',
      category: 'Complex Logic',
      points: 200,
      estimatedTime: '22 min',
      prompt: 'How do you decide what to cook for dinner based on available ingredients and dietary preferences?',
      example: 'For example: "I check what\'s in the fridge, consider if anyone has dietary restrictions, and think about the time of day."',
      hints: [
        'Consider available ingredients',
        'Think about dietary restrictions',
        'Factor in time and effort required'
      ],
      concepts: ['Multi-criteria Decision Making', 'Constraint Satisfaction', 'Optimization'],
      realWorldApplication: 'Recommendation systems, meal planning apps, inventory management',
      prerequisites: ['1']
    },
    {
      id: '4',
      title: 'Grade Calculator',
      description: 'Calculate grades and provide feedback',
      difficulty: 'intermediate',
      category: 'Functions & Logic',
      points: 220,
      estimatedTime: '20 min',
      prompt: 'How would you calculate a student\'s letter grade based on their numerical score?',
      example: 'For example: "90-100 is an A, 80-89 is a B, 70-79 is a C, and so on."',
      hints: [
        'Think about grade ranges',
        'Consider edge cases',
        'What feedback would you provide?'
      ],
      concepts: ['Functions', 'Range Validation', 'Error Handling'],
      realWorldApplication: 'Educational software, performance analytics, assessment tools',
      prerequisites: ['1', '2']
    },
    {
      id: '5',
      title: 'Budget Tracker',
      description: 'Track expenses and categorize spending',
      difficulty: 'advanced',
      category: 'Data Processing',
      points: 300,
      estimatedTime: '30 min',
      prompt: 'How would you track your monthly expenses and categorize them?',
      example: 'For example: "I would group expenses by category like food, transport, entertainment, and calculate totals."',
      hints: [
        'Think about expense categories',
        'Consider tracking methods',
        'How would you analyze spending patterns?'
      ],
      concepts: ['Data Aggregation', 'Statistical Analysis', 'Pattern Recognition'],
      realWorldApplication: 'Financial apps, business analytics, expense management systems',
      prerequisites: ['3', '4']
    },
    {
      id: '6',
      title: 'Task Scheduler',
      description: 'Prioritize and schedule tasks efficiently',
      difficulty: 'advanced',
      category: 'Algorithms',
      points: 320,
      estimatedTime: '35 min',
      prompt: 'How would you prioritize and schedule your daily tasks?',
      example: 'For example: "I would consider deadlines, importance, and estimated time for each task."',
      hints: [
        'Think about task priority factors',
        'Consider time constraints',
        'How would you handle conflicts?'
      ],
      concepts: ['Priority Queues', 'Scheduling Algorithms', 'Resource Allocation'],
      realWorldApplication: 'Project management tools, operating systems, resource planning',
      prerequisites: ['4', '5']
    }
  ];

  private gamingScenarios: Scenario[] = gamingScenarioTemplates.map(template => ({
    id: template.id,
    title: template.title,
    description: template.description,
    difficulty: template.difficulty,
    category: template.category,
    points: template.points,
    estimatedTime: template.estimatedTime,
    prompt: `Gaming Challenge: ${template.description}\n\n${template.exampleInput}`,
    example: template.exampleOutput,
    hints: template.hints,
    concepts: template.concepts,
    realWorldApplication: template.realWorldApplication
  }));

  getAllScenarios(): Scenario[] {
    return [...this.baseScenarios, ...this.gamingScenarios];
  }

  getScenarioById(id: string): Scenario | undefined {
    return this.getAllScenarios().find(scenario => scenario.id === id);
  }

  getScenariosByDifficulty(difficulty: 'beginner' | 'intermediate' | 'advanced'): Scenario[] {
    return this.getAllScenarios().filter(scenario => scenario.difficulty === difficulty);
  }

  getScenariosByCategory(category: string): Scenario[] {
    return this.getAllScenarios().filter(scenario => scenario.category === category);
  }

  getUnlockedScenarios(completedScenarioIds: string[]): Scenario[] {
    return this.getAllScenarios().filter(scenario => {
      if (!scenario.prerequisites) return true;
      return scenario.prerequisites.every(prereq => completedScenarioIds.includes(prereq));
    });
  }

  getRecommendedScenarios(completedScenarioIds: string[], limit = 3): Scenario[] {
    const unlocked = this.getUnlockedScenarios(completedScenarioIds);
    const incomplete = unlocked.filter(scenario => !completedScenarioIds.includes(scenario.id));
    
    // Sort by difficulty and points to recommend appropriate next challenges
    return incomplete
      .sort((a, b) => {
        const difficultyOrder = { beginner: 1, intermediate: 2, advanced: 3 };
        const diffA = difficultyOrder[a.difficulty];
        const diffB = difficultyOrder[b.difficulty];
        if (diffA !== diffB) return diffA - diffB;
        return a.points - b.points;
      })
      .slice(0, limit);
  }

  searchScenarios(query: string): Scenario[] {
    const lowercaseQuery = query.toLowerCase();
    return this.getAllScenarios().filter(scenario =>
      scenario.title.toLowerCase().includes(lowercaseQuery) ||
      scenario.description.toLowerCase().includes(lowercaseQuery) ||
      scenario.category.toLowerCase().includes(lowercaseQuery) ||
      scenario.concepts?.some(concept => concept.toLowerCase().includes(lowercaseQuery))
    );
  }

  getCategories(): string[] {
    const categories = new Set(this.getAllScenarios().map(s => s.category));
    return Array.from(categories).sort();
  }

  getProgressInsights(completedScenarioIds: string[]) {
    const allScenarios = this.getAllScenarios();
    const completed = allScenarios.filter(s => completedScenarioIds.includes(s.id));
    
    const categoryStats = this.getCategories().map(category => {
      const categoryScenarios = allScenarios.filter(s => s.category === category);
      const completedInCategory = completed.filter(s => s.category === category);
      
      return {
        category,
        total: categoryScenarios.length,
        completed: completedInCategory.length,
        percentage: Math.round((completedInCategory.length / categoryScenarios.length) * 100),
        totalPoints: completedInCategory.reduce((sum, s) => sum + s.points, 0)
      };
    });

    const difficultyStats = (['beginner', 'intermediate', 'advanced'] as const).map(difficulty => {
      const difficultyScenarios = allScenarios.filter(s => s.difficulty === difficulty);
      const completedInDifficulty = completed.filter(s => s.difficulty === difficulty);
      
      return {
        difficulty,
        total: difficultyScenarios.length,
        completed: completedInDifficulty.length,
        percentage: Math.round((completedInDifficulty.length / difficultyScenarios.length) * 100)
      };
    });

    return {
      totalScenarios: allScenarios.length,
      completedScenarios: completed.length,
      totalPoints: completed.reduce((sum, s) => sum + s.points, 0),
      averageTimePerScenario: this.calculateAverageTime(completed),
      categoryStats,
      difficultyStats
    };
  }

  private calculateAverageTime(scenarios: Scenario[]): string {
    if (scenarios.length === 0) return '0 min';
    
    const totalMinutes = scenarios.reduce((sum, scenario) => {
      const minutes = parseInt(scenario.estimatedTime.replace(/\D/g, '')) || 0;
      return sum + minutes;
    }, 0);
    
    const average = Math.round(totalMinutes / scenarios.length);
    return `${average} min`;
  }
}

export const scenarioService = new ScenarioService();
