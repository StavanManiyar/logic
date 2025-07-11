import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { learningPaths } from '../data/learningPaths';
import { LearningPath } from '../types/learningPaths';
import { BookOpen, Clock, Trophy, ChevronRight, Star, Lock } from 'lucide-react';

const LearningPathsPage: React.FC = () => {
  const { user } = useAuth();
  const [selectedPath, setSelectedPath] = useState<LearningPath | null>(null);

  const getProgressPercentage = (_pathId: string) => {
    // This would normally come from user progress data
    // For now, return mock progress
    return Math.floor(Math.random() * 100);
  };

  const isPathUnlocked = (path: LearningPath) => {
    // Check if all prerequisites are completed
    return path.prerequisites.length === 0 || 
           path.prerequisites.every(prereq => getProgressPercentage(prereq) === 100);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const PathCard: React.FC<{ path: LearningPath }> = ({ path }) => {
    const isUnlocked = isPathUnlocked(path);
    const progress = getProgressPercentage(path.id);

    return (
      <div 
        className={`bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all duration-200 hover:shadow-lg ${
          !isUnlocked ? 'opacity-60' : ''
        }`}
        onClick={() => isUnlocked && setSelectedPath(path)}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <BookOpen className={`w-6 h-6 ${isUnlocked ? 'text-blue-600' : 'text-gray-400'}`} />
            {!isUnlocked && <Lock className="w-4 h-4 text-gray-400" />}
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(path.difficulty)}`}>
            {path.difficulty}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{path.title}</h3>
        <p className="text-gray-600 mb-4">{path.description}</p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{path.estimatedDuration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Trophy className="w-4 h-4" />
            <span>{path.scenarios.length} scenarios</span>
          </div>
        </div>

        {isUnlocked && (
          <div className="mb-4">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-sm text-gray-600">{path.badgeReward}</span>
          </div>
          {isUnlocked && (
            <ChevronRight className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </div>
    );
  };

  const PathDetails: React.FC<{ path: LearningPath }> = ({ path }) => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{path.title}</h2>
        <button
          onClick={() => setSelectedPath(null)}
          className="text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Learning Objectives</h3>
          <ul className="space-y-2">
            {path.learningObjectives.map((objective, index) => (
              <li key={index} className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">{objective}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Path Details</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Difficulty:</span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(path.difficulty)}`}>
                {path.difficulty}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Duration:</span>
              <span className="text-gray-900">{path.estimatedDuration}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Scenarios:</span>
              <span className="text-gray-900">{path.scenarios.length}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Badge Reward:</span>
              <span className="text-gray-900">{path.badgeReward}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Prerequisites</h3>
        {path.prerequisites.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {path.prerequisites.map((prereq, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                {learningPaths.find(p => p.id === prereq)?.title || prereq}
              </span>
            ))}
          </div>
        ) : (
          <span className="text-gray-600">No prerequisites required</span>
        )}
      </div>

      <div className="flex space-x-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Start Learning Path
        </button>
        <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
          View Scenarios
        </button>
      </div>
    </div>
  );

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sign in to access Learning Paths</h2>
          <p className="text-gray-600">Create an account to track your progress and unlock achievements.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Learning Paths</h1>
          <p className="text-gray-600">
            Structured learning journeys to master programming concepts through real-world scenarios.
          </p>
        </div>

        {selectedPath ? (
          <PathDetails path={selectedPath} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningPaths
              .sort((a, b) => a.order - b.order)
              .map((path) => (
                <PathCard key={path.id} path={path} />
              ))}
          </div>
        )}

        {!selectedPath && (
          <div className="mt-12 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">How Learning Paths Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Structured Learning</h3>
                <p className="text-gray-600 text-sm">
                  Each path is carefully designed to build knowledge progressively from basic to advanced concepts.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Earn Rewards</h3>
                <p className="text-gray-600 text-sm">
                  Complete paths to earn badges and unlock new learning opportunities.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Track Progress</h3>
                <p className="text-gray-600 text-sm">
                  Monitor your advancement and see how far you've come in your coding journey.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningPathsPage;
