import React from 'react';
import { CheckCircle, Clock, Star, TrendingUp } from 'lucide-react';

interface ProgressCardProps {
  title: string;
  completed: number;
  total: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  points: number;
}

const ProgressCard: React.FC<ProgressCardProps> = ({
  title,
  completed,
  total,
  difficulty,
  points
}) => {
  const percentage = (completed / total) * 100;

  const getDifficultyConfig = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return {
          color: 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200',
          icon: '🌱',
          gradient: 'from-green-400 to-emerald-500'
        };
      case 'intermediate':
        return {
          color: 'bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 border-orange-200',
          icon: '⚡',
          gradient: 'from-yellow-400 to-orange-500'
        };
      case 'advanced':
        return {
          color: 'bg-gradient-to-r from-red-100 to-pink-100 text-red-700 border-red-200',
          icon: '🚀',
          gradient: 'from-red-400 to-pink-500'
        };
      default:
        return {
          color: 'bg-gray-100 text-gray-700 border-gray-200',
          icon: '📝',
          gradient: 'from-gray-400 to-gray-500'
        };
    }
  };

  const difficultyConfig = getDifficultyConfig(difficulty);
  const isCompleted = completed === total;

  return (
    <div className="card p-6 relative overflow-hidden animate-fade-in-up">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
        <div className={`w-full h-full bg-gradient-to-br ${difficultyConfig.gradient} rounded-full transform translate-x-16 -translate-y-16`}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className={`bg-gradient-to-r ${difficultyConfig.gradient} w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg`}>
              <span className="text-xl">{difficultyConfig.icon}</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">{title}</h3>
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold border ${difficultyConfig.color} mt-1`}>
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </span>
            </div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-600">Progress</span>
            <span className="text-sm font-bold text-gray-900">{completed}/{total}</span>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${difficultyConfig.gradient} rounded-full transition-all duration-500 ease-out shadow-sm`}
              style={{ width: `${percentage}%` }}
            />
          </div>
          
          <div className="mt-2 text-right">
            <span className="text-xs text-gray-500">{Math.round(percentage)}% Complete</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {isCompleted ? (
              <>
                <div className="bg-green-100 p-1 rounded-full">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-sm font-medium text-green-600">Completed</span>
              </>
            ) : (
              <>
                <div className="bg-blue-100 p-1 rounded-full">
                  <Clock className="h-4 w-4 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-blue-600">In Progress</span>
              </>
            )}
          </div>
          
          <div className="flex items-center space-x-1">
            <div className="bg-yellow-100 p-1 rounded-full">
              <Star className="h-4 w-4 text-yellow-600" />
            </div>
            <span className="text-sm font-bold text-gray-900">{points}</span>
            <span className="text-xs text-gray-500">pts</span>
          </div>
        </div>

        {/* Achievement Badge */}
        {isCompleted && (
          <div className="mt-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">Category Mastered!</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressCard;