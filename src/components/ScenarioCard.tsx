import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Trophy, ArrowRight, CheckCircle, Sparkles, Users } from 'lucide-react';

interface ScenarioCardProps {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  completed?: boolean;
  points?: number;
  estimatedTime?: string;
  completedBy?: number;
}

const ScenarioCard: React.FC<ScenarioCardProps> = ({
  id,
  title,
  description,
  difficulty,
  category,
  completed = false,
  points = 0,
  estimatedTime = '20 min',
  completedBy = 1250
}) => {
  const getDifficultyConfig = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return {
          color: 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200',
          icon: '🌱'
        };
      case 'intermediate':
        return {
          color: 'bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 border-orange-200',
          icon: '⚡'
        };
      case 'advanced':
        return {
          color: 'bg-gradient-to-r from-red-100 to-pink-100 text-red-700 border-red-200',
          icon: '🚀'
        };
      default:
        return {
          color: 'bg-gray-100 text-gray-700 border-gray-200',
          icon: '📝'
        };
    }
  };

  const difficultyConfig = getDifficultyConfig(difficulty);

  return (
    <Link to={`/scenario/${id}`} className="block">
      <div className={`card card-hover p-6 cursor-pointer group relative overflow-hidden animate-fade-in-up ${
        completed ? 'ring-2 ring-secondary-200 bg-gradient-to-br from-secondary-50 to-green-50' : ''
      }`}>
        {/* Completion badge */}
        {completed && (
          <div className="absolute top-4 right-4 bg-secondary-600 text-white p-2 rounded-full shadow-lg">
            <CheckCircle className="h-4 w-4" />
          </div>
        )}
        
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-secondary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-lg">{difficultyConfig.icon}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${difficultyConfig.color}`}>
                  {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </span>
                {completed && (
                  <span className="px-2 py-1 bg-secondary-100 text-secondary-700 text-xs font-medium rounded-full">
                    Completed
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {description}
              </p>
              
              <div className="inline-flex items-center space-x-1 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 text-sm px-3 py-1 rounded-full border">
                <Sparkles className="h-3 w-3" />
                <span>{category}</span>
              </div>
            </div>
            
            <div className="ml-4">
              <div className="bg-gradient-to-r from-primary-100 to-secondary-100 p-3 rounded-2xl group-hover:shadow-lg transition-all duration-300">
                <ArrowRight className="h-6 w-6 text-primary-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Footer Stats */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-500">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-medium">{estimatedTime}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <Users className="h-4 w-4" />
                <span className="text-sm font-medium">{completedBy.toLocaleString()}</span>
              </div>
              {points > 0 && (
                <div className="flex items-center space-x-2 text-yellow-600">
                  <Trophy className="h-4 w-4" />
                  <span className="text-sm font-medium">{points} pts</span>
                </div>
              )}
            </div>
            
            <div className="text-sm text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
              {completed ? 'Review →' : 'Start Challenge →'}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

// Optimize with React.memo to prevent unnecessary re-renders
export default memo(ScenarioCard);
