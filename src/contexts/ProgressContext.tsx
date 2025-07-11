import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useAuth } from './AuthContext';
import { 
  progressService, 
  UserProgress, 
  UserBadge, 
  Badge, 
  ProgressStats, 
  CategoryProgress 
} from '../services/progressService';

interface ProgressContextType {
  // State
  userProgress: UserProgress[];
  userBadges: UserBadge[];
  allBadges: Badge[];
  progressStats: ProgressStats;
  categoryProgress: CategoryProgress[];
  recentActivity: any[];
  loading: boolean;
  error: string | null;

  // Actions
  refreshProgress: () => Promise<void>;
  recordProgress: (
    scenarioId: string,
    userLogic: string,
    generatedCode: any,
    language: 'python' | 'javascript',
    completed?: boolean
  ) => Promise<void>;
}

const defaultStats: ProgressStats = {
  totalPoints: 0,
  completedScenarios: 0,
  earnedBadges: 0,
  currentStreak: 0
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

interface ProgressProviderProps {
  children: ReactNode;
}

export const ProgressProvider: React.FC<ProgressProviderProps> = ({ children }) => {
  const { user } = useAuth();
  const [userProgress, setUserProgress] = useState<UserProgress[]>([]);
  const [userBadges, setUserBadges] = useState<UserBadge[]>([]);
  const [allBadges, setAllBadges] = useState<Badge[]>([]);
  const [progressStats, setProgressStats] = useState<ProgressStats>(defaultStats);
  const [categoryProgress, setCategoryProgress] = useState<CategoryProgress[]>([]);
  const [recentActivity, setRecentActivity] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load all badges on mount (these don't change per user)
  useEffect(() => {
    const loadBadges = async () => {
      try {
        const badges = await progressService.getAllBadges();
        setAllBadges(badges);
      } catch (err) {
        console.error('Error loading badges:', err);
      }
    };

    loadBadges();
  }, []);

  // Load user-specific progress when user changes
  useEffect(() => {
    if (user) {
      refreshProgress();
    } else {
      // Clear progress when user logs out
      setUserProgress([]);
      setUserBadges([]);
      setProgressStats(defaultStats);
      setCategoryProgress([]);
      setRecentActivity([]);
      setError(null);
    }
  }, [user]);

  const refreshProgress = async () => {
    if (!user) return;

    setLoading(true);
    setError(null);

    try {
      const [
        progress,
        badges,
        stats,
        categories,
        activity
      ] = await Promise.all([
        progressService.getUserProgress(user.id),
        progressService.getUserBadges(user.id),
        progressService.getProgressStats(user.id),
        progressService.getCategoryProgress(user.id),
        progressService.getRecentActivity(user.id, 5)
      ]);

      setUserProgress(progress);
      setUserBadges(badges);
      setProgressStats(stats);
      setCategoryProgress(categories);
      setRecentActivity(activity);
    } catch (err) {
      console.error('Error refreshing progress:', err);
      setError('Failed to load progress data');
    } finally {
      setLoading(false);
    }
  };

  const recordProgress = async (
    scenarioId: string,
    userLogic: string,
    generatedCode: any,
    language: 'python' | 'javascript',
    completed: boolean = false
  ) => {
    if (!user) return;

    try {
      await progressService.recordProgress(
        user.id,
        scenarioId,
        userLogic,
        generatedCode,
        language,
        completed
      );

      // Refresh progress data after recording
      await refreshProgress();
    } catch (err) {
      console.error('Error recording progress:', err);
      setError('Failed to save progress');
      throw err;
    }
  };

  const value: ProgressContextType = {
    userProgress,
    userBadges,
    allBadges,
    progressStats,
    categoryProgress,
    recentActivity,
    loading,
    error,
    refreshProgress,
    recordProgress
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};
