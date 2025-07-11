import React from 'react';
import ProgressCard from '../components/ProgressCard';
import { Trophy, Target, Award, TrendingUp } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';
import LoadingSpinner from '../components/LoadingSpinner';

const ProgressPage: React.FC = () => {
  const {
    progressStats,
    categoryProgress,
    userBadges,
    allBadges,
    recentActivity,
    loading,
    error
  } = useProgress();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner size="lg" text="Loading your progress..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const stats = [
    {
      title: 'Total Points',
      value: progressStats.totalPoints.toLocaleString(),
      icon: TrendingUp,
      color: 'text-yellow-600'
    },
    {
      title: 'Scenarios Completed',
      value: progressStats.completedScenarios.toString(),
      icon: Target,
      color: 'text-primary-600'
    },
    {
      title: 'Badges Earned',
      value: progressStats.earnedBadges.toString(),
      icon: Trophy,
      color: 'text-secondary-600'
    },
    {
      title: 'Current Streak',
      value: progressStats.currentStreak > 0 ? `${progressStats.currentStreak} days` : 'Start learning!',
      icon: Award,
      color: 'text-accent-600'
    }
  ];

  // Combine earned and available badges
  const badgeDisplayData = allBadges.map(badge => {
    const userBadge = userBadges.find(ub => ub.badge_id === badge.id);
    return {
      id: badge.id,
      name: badge.name,
      description: badge.description,
      icon: badge.icon,
      earned: !!userBadge,
      earnedAt: userBadge?.earned_at || null,
      points: badge.points
    };
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Progress</h1>
          <p className="text-gray-600">
            Track your learning journey and celebrate your achievements
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.title} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg bg-opacity-10 ${stat.color.replace('text-', 'bg-')}`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <p className="text-sm text-gray-600">{stat.title}</p>
              </div>
            );
          })}
        </div>

        {/* Progress by Category */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Progress by Category</h2>
          {categoryProgress.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryProgress.map((category) => (
                <ProgressCard
                  key={category.category}
                  title={category.category}
                  completed={category.completed}
                  total={category.total}
                  difficulty={category.difficulty}
                  points={category.points}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-gray-400 mb-4">
                <Target className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No progress yet</h3>
              <p className="text-gray-600 mb-4">
                Start completing scenarios to see your progress by category!
              </p>
              <a 
                href="/dashboard" 
                className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                <Target className="h-4 w-4 mr-2" />
                Start Learning
              </a>
            </div>
          )}
        </div>

        {/* Badges Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Badges & Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {badgeDisplayData.map((badge) => (
              <div
                key={badge.id}
                className={`bg-white rounded-lg shadow-md p-6 border-2 transition-all ${
                  badge.earned
                    ? 'border-secondary-200 bg-secondary-50'
                    : 'border-gray-200 opacity-75'
                }`}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">{badge.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {badge.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{badge.description}</p>
                  <p className="text-xs text-gray-500 mb-4">{badge.points} points</p>
                  {badge.earned ? (
                    <div className="flex items-center justify-center space-x-2 text-secondary-600">
                      <Trophy className="h-4 w-4" />
                      <span className="text-sm font-medium">
                        Earned on {new Date(badge.earnedAt!).toLocaleDateString()}
                      </span>
                    </div>
                  ) : (
                    <div className="text-sm text-gray-500">Not earned yet</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            {recentActivity.length > 0 ? (
              <div className="space-y-4">
                {recentActivity.map((activity, index) => {
                  const isBadge = activity.type === 'badge_earned';
                  
                  return (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className={`p-2 rounded-full ${
                        isBadge ? 'bg-secondary-100' : 'bg-primary-100'
                      }`}>
                        {isBadge ? (
                          <Trophy className="h-5 w-5 text-secondary-600" />
                        ) : (
                          <Target className="h-5 w-5 text-primary-600" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {isBadge 
                            ? `Earned "${activity.data.badge?.name}" badge`
                            : `Completed a scenario`
                          }
                        </p>
                        <p className="text-xs text-gray-500">
                          {new Date(activity.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="text-gray-400 mb-4">
                  <TrendingUp className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No activity yet</h3>
                <p className="text-gray-600 mb-4">
                  Complete scenarios and earn badges to see your recent activity here!
                </p>
                <a 
                  href="/dashboard" 
                  className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <Target className="h-4 w-4 mr-2" />
                  Get Started
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;