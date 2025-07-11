import React from 'react';
import { 
  Target, 
  Clock, 
  Award, 
  BarChart3, 
  PieChart,
  Trophy,
  Brain
} from 'lucide-react';

interface ProgressInsightsProps {
  insights: {
    totalScenarios: number;
    completedScenarios: number;
    totalPoints: number;
    averageTimePerScenario: string;
    categoryStats: Array<{
      category: string;
      total: number;
      completed: number;
      percentage: number;
      totalPoints: number;
    }>;
    difficultyStats: Array<{
      difficulty: 'beginner' | 'intermediate' | 'advanced';
      total: number;
      completed: number;
      percentage: number;
    }>;
  };
}

const ProgressInsights: React.FC<ProgressInsightsProps> = ({ insights }) => {
  const completionPercentage = Math.round((insights.completedScenarios / insights.totalScenarios) * 100);
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-600 bg-green-100';
      case 'intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getSkillLevel = () => {
    if (insights.completedScenarios >= 15) return { level: 'Expert', color: 'text-purple-600', icon: '🚀' };
    if (insights.completedScenarios >= 10) return { level: 'Advanced', color: 'text-red-600', icon: '🔥' };
    if (insights.completedScenarios >= 5) return { level: 'Intermediate', color: 'text-yellow-600', icon: '⚡' };
    return { level: 'Beginner', color: 'text-green-600', icon: '🌱' };
  };

  const skillLevel = getSkillLevel();

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Progress</p>
              <p className="text-2xl font-bold text-gray-900">{completionPercentage}%</p>
              <p className="text-sm text-gray-500">
                {insights.completedScenarios} of {insights.totalScenarios} scenarios
              </p>
            </div>
            <Target className="h-8 w-8 text-blue-600" />
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Points</p>
              <p className="text-2xl font-bold text-gray-900">{insights.totalPoints.toLocaleString()}</p>
              <p className="text-sm text-gray-500">Points earned</p>
            </div>
            <Trophy className="h-8 w-8 text-yellow-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Average Time</p>
              <p className="text-2xl font-bold text-gray-900">{insights.averageTimePerScenario}</p>
              <p className="text-sm text-gray-500">Per scenario</p>
            </div>
            <Clock className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Skill Level</p>
              <p className={`text-2xl font-bold ${skillLevel.color}`}>
                {skillLevel.icon} {skillLevel.level}
              </p>
              <p className="text-sm text-gray-500">Current ranking</p>
            </div>
            <Brain className="h-8 w-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Category Progress */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center space-x-2 mb-4">
          <PieChart className="h-5 w-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-900">Progress by Category</h3>
        </div>
        <div className="space-y-4">
          {insights.categoryStats.map((category) => (
            <div key={category.category} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">{category.category}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">
                    {category.completed}/{category.total}
                  </span>
                  <span className="text-sm font-medium text-gray-900">
                    {category.percentage}%
                  </span>
                  {category.totalPoints > 0 && (
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                      {category.totalPoints} pts
                    </span>
                  )}
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${category.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Difficulty Breakdown */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center space-x-2 mb-4">
          <BarChart3 className="h-5 w-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-900">Progress by Difficulty</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {insights.difficultyStats.map((difficulty) => (
            <div key={difficulty.difficulty} className="text-center">
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(difficulty.difficulty)}`}>
                {difficulty.difficulty.charAt(0).toUpperCase() + difficulty.difficulty.slice(1)}
              </div>
              <div className="mt-2">
                <div className="text-2xl font-bold text-gray-900">{difficulty.percentage}%</div>
                <div className="text-sm text-gray-600">
                  {difficulty.completed} of {difficulty.total} completed
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${
                      difficulty.difficulty === 'beginner' ? 'bg-green-600' :
                      difficulty.difficulty === 'intermediate' ? 'bg-yellow-600' : 'bg-red-600'
                    }`}
                    style={{ width: `${difficulty.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Award className="h-5 w-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-900">Achievements</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* First Scenario Achievement */}
          <div className={`p-4 rounded-lg border-2 ${
            insights.completedScenarios >= 1 ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'
          }`}>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">{insights.completedScenarios >= 1 ? '🎯' : '⭕'}</span>
              <div>
                <p className="font-medium text-gray-900">First Steps</p>
                <p className="text-sm text-gray-600">Complete your first scenario</p>
              </div>
            </div>
          </div>

          {/* Points Milestone */}
          <div className={`p-4 rounded-lg border-2 ${
            insights.totalPoints >= 500 ? 'border-yellow-200 bg-yellow-50' : 'border-gray-200 bg-gray-50'
          }`}>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">{insights.totalPoints >= 500 ? '💰' : '💸'}</span>
              <div>
                <p className="font-medium text-gray-900">Point Collector</p>
                <p className="text-sm text-gray-600">Earn 500+ points</p>
              </div>
            </div>
          </div>

          {/* Category Master */}
          <div className={`p-4 rounded-lg border-2 ${
            insights.categoryStats.some(cat => cat.percentage === 100) ? 'border-purple-200 bg-purple-50' : 'border-gray-200 bg-gray-50'
          }`}>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">{insights.categoryStats.some(cat => cat.percentage === 100) ? '👑' : '🎓'}</span>
              <div>
                <p className="font-medium text-gray-900">Category Master</p>
                <p className="text-sm text-gray-600">Complete all scenarios in a category</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressInsights;
