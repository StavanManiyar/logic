import { supabase } from '../lib/supabase';

export interface UserProgress {
  id: string;
  user_id: string;
  scenario_id: string;
  completed: boolean;
  user_logic?: string;
  generated_code?: any;
  language: 'python' | 'javascript';
  completed_at?: string;
  created_at: string;
}

export interface UserBadge {
  id: string;
  user_id: string;
  badge_id: string;
  earned_at: string;
  badge: {
    id: string;
    name: string;
    description: string;
    icon: string;
    requirement: string;
    points: number;
  };
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: string;
  points: number;
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  prompt: string;
  example: string;
  hints: string[];
  created_at: string;
}

export interface ProgressStats {
  totalPoints: number;
  completedScenarios: number;
  earnedBadges: number;
  currentStreak: number;
}

export interface CategoryProgress {
  category: string;
  completed: number;
  total: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  points: number;
}

class ProgressService {
  // Get user's progress across all scenarios
  async getUserProgress(userId: string): Promise<UserProgress[]> {
    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId);

    if (error) {
      console.error('Error fetching user progress:', error);
      return [];
    }

    return data || [];
  }

  // Get user's earned badges
  async getUserBadges(userId: string): Promise<UserBadge[]> {
    const { data, error } = await supabase
      .from('user_badges')
      .select(`
        *,
        badge:badges(*)
      `)
      .eq('user_id', userId);

    if (error) {
      console.error('Error fetching user badges:', error);
      return [];
    }

    return data || [];
  }

  // Get all available badges
  async getAllBadges(): Promise<Badge[]> {
    const { data, error } = await supabase
      .from('badges')
      .select('*')
      .order('points', { ascending: true });

    if (error) {
      console.error('Error fetching badges:', error);
      return [];
    }

    return data || [];
  }

  // Get all scenarios
  async getAllScenarios(): Promise<Scenario[]> {
    const { data, error } = await supabase
      .from('scenarios')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Error fetching scenarios:', error);
      return [];
    }

    return data || [];
  }

  // Calculate user's overall statistics
  async getProgressStats(userId: string): Promise<ProgressStats> {
    const [userProgress, userBadges] = await Promise.all([
      this.getUserProgress(userId),
      this.getUserBadges(userId)
    ]);

    const completedScenarios = userProgress.filter(p => p.completed).length;
    const earnedBadges = userBadges.length;
    const totalPoints = userBadges.reduce((sum, badge) => sum + badge.badge.points, 0);

    // Calculate streak (simplified - would need more complex logic for real streak calculation)
    const currentStreak = this.calculateStreak(userProgress);

    return {
      totalPoints,
      completedScenarios,
      earnedBadges,
      currentStreak
    };
  }

  // Get progress grouped by category
  async getCategoryProgress(userId: string): Promise<CategoryProgress[]> {
    const [userProgress, allScenarios] = await Promise.all([
      this.getUserProgress(userId),
      this.getAllScenarios()
    ]);

    const categoryMap = new Map<string, CategoryProgress>();

    // Initialize categories from all scenarios
    allScenarios.forEach(scenario => {
      if (!categoryMap.has(scenario.category)) {
        categoryMap.set(scenario.category, {
          category: scenario.category,
          completed: 0,
          total: 0,
          difficulty: scenario.difficulty,
          points: 0
        });
      }
      const categoryData = categoryMap.get(scenario.category)!;
      categoryData.total += 1;
    });

    // Count completed scenarios per category
    userProgress.forEach(progress => {
      if (progress.completed) {
        const scenario = allScenarios.find(s => s.id === progress.scenario_id);
        if (scenario) {
          const categoryData = categoryMap.get(scenario.category);
          if (categoryData) {
            categoryData.completed += 1;
            // Simple points calculation - could be more sophisticated
            categoryData.points += this.getPointsForDifficulty(scenario.difficulty);
          }
        }
      }
    });

    return Array.from(categoryMap.values());
  }

  // Record user progress for a scenario
  async recordProgress(
    userId: string,
    scenarioId: string,
    userLogic: string,
    generatedCode: any,
    language: 'python' | 'javascript',
    completed: boolean = false
  ): Promise<void> {
    const { error } = await supabase
      .from('user_progress')
      .upsert({
        user_id: userId,
        scenario_id: scenarioId,
        user_logic: userLogic,
        generated_code: generatedCode,
        language: language,
        completed: completed,
        completed_at: completed ? new Date().toISOString() : null,
      });

    if (error) {
      console.error('Error recording progress:', error);
      throw error;
    }

    // Check if user earned any new badges
    if (completed) {
      await this.checkAndAwardBadges(userId);
    }
  }

  // Check and award badges based on user's progress
  private async checkAndAwardBadges(userId: string): Promise<void> {
    const [userProgress, userBadges, allBadges] = await Promise.all([
      this.getUserProgress(userId),
      this.getUserBadges(userId),
      this.getAllBadges()
    ]);

    const earnedBadgeIds = userBadges.map(ub => ub.badge_id);
    const completedScenarios = userProgress.filter(p => p.completed);

    for (const badge of allBadges) {
      // Skip if already earned
      if (earnedBadgeIds.includes(badge.id)) continue;

      // Check badge requirements (simplified logic)
      const shouldAward = this.checkBadgeRequirement(badge, completedScenarios);
      
      if (shouldAward) {
        await this.awardBadge(userId, badge.id);
      }
    }
  }

  // Award a badge to user
  private async awardBadge(userId: string, badgeId: string): Promise<void> {
    const { error } = await supabase
      .from('user_badges')
      .insert({
        user_id: userId,
        badge_id: badgeId
      });

    if (error) {
      console.error('Error awarding badge:', error);
    }
  }

  // Check if user meets badge requirements (simplified)
  private checkBadgeRequirement(
    badge: Badge,
    completedScenarios: UserProgress[],
  ): boolean {
    switch (badge.name) {
      case 'First Steps':
        return completedScenarios.length >= 1;
      case 'Logic Master':
        return completedScenarios.length >= 5;
      case 'Advanced Thinker':
        return completedScenarios.length >= 3;
      default:
        return false;
    }
  }

  // Calculate current streak (simplified)
  private calculateStreak(userProgress: UserProgress[]): number {
    // This is a simplified implementation
    // In a real app, you'd track daily activity more precisely
    const completedDates = userProgress
      .filter(p => p.completed && p.completed_at)
      .map(p => new Date(p.completed_at!).toDateString())
      .sort();

    if (completedDates.length === 0) return 0;

    // Simple streak calculation - count unique days
    const uniqueDates = [...new Set(completedDates)];
    return Math.min(uniqueDates.length, 7); // Cap at 7 for display
  }

  // Get points for difficulty level
  private getPointsForDifficulty(difficulty: string): number {
    switch (difficulty) {
      case 'beginner': return 50;
      case 'intermediate': return 100;
      case 'advanced': return 200;
      default: return 50;
    }
  }

  // Get recent activity for a user
  async getRecentActivity(userId: string, limit: number = 10): Promise<any[]> {
    const [userProgress, userBadges] = await Promise.all([
      this.getUserProgress(userId),
      this.getUserBadges(userId)
    ]);

    const activities: any[] = [];

    // Add completed scenarios
    userProgress
      .filter(p => p.completed && p.completed_at)
      .forEach(progress => {
        activities.push({
          type: 'scenario_completed',
          date: progress.completed_at,
          data: progress
        });
      });

    // Add earned badges
    userBadges.forEach(userBadge => {
      activities.push({
        type: 'badge_earned',
        date: userBadge.earned_at,
        data: userBadge
      });
    });

    // Sort by date and limit
    return activities
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit);
  }
}

export const progressService = new ProgressService();
