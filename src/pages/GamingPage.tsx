import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScenarioCard from '../components/ScenarioCard';
import { gamingScenarioTemplates } from '../utils/gamingScenarios';
import { 
  Gamepad2, 
  Sword, 
  Trophy, 
  Target, 
  Filter,
  Zap,
  Brain,
  Users,
  Hammer,
  Shield,
  Puzzle,
  Car,
  Smartphone,
  Globe
} from 'lucide-react';

const GamingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  // Convert gaming scenario templates to the format expected by the UI
  const gamingScenarios = gamingScenarioTemplates.map(template => ({
    id: template.id,
    title: template.title,
    description: template.description,
    difficulty: template.difficulty,
    category: template.category,
    game: template.game,
    completed: false, // Default to not completed
    points: template.points,
    estimatedTime: template.estimatedTime
  }));

  const categories = [
    { value: 'all', label: 'All Categories', icon: Gamepad2, color: 'text-purple-600' },
    { value: 'Strategy Games', label: 'Strategy Games', icon: Brain, color: 'text-blue-600' },
    { value: 'FPS Games', label: 'FPS Games', icon: Target, color: 'text-red-600' },
    { value: 'MOBA Games', label: 'MOBA Games', icon: Users, color: 'text-green-600' },
    { value: 'MMORPG', label: 'MMORPG', icon: Globe, color: 'text-cyan-600' },
    { value: 'Sandbox Games', label: 'Sandbox Games', icon: Hammer, color: 'text-yellow-600' },
    { value: 'Battle Royale', label: 'Battle Royale', icon: Shield, color: 'text-orange-600' },
    { value: 'RPG Games', label: 'RPG Games', icon: Sword, color: 'text-indigo-600' },
    { value: 'Puzzle Games', label: 'Puzzle Games', icon: Puzzle, color: 'text-emerald-600' },
    { value: 'Racing Games', label: 'Racing Games', icon: Car, color: 'text-red-500' },
    { value: 'Mobile Games', label: 'Mobile Games', icon: Smartphone, color: 'text-violet-600' },
    { value: 'Social Deduction', label: 'Social Deduction', icon: Zap, color: 'text-pink-600' }
  ];

  const difficulties = [
    { value: 'all', label: 'All Levels' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' }
  ];

  // Filter scenarios based on selected category and difficulty
  const filteredScenarios = gamingScenarios.filter(scenario => {
    const categoryMatch = selectedCategory === 'all' || scenario.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'all' || scenario.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const getCategoryStats = () => {
    const stats = categories.slice(1).map(category => {
      const categoryScenarios = gamingScenarios.filter(s => s.category === category.value);
      const completed = categoryScenarios.filter(s => s.completed).length;
      return {
        ...category,
        total: categoryScenarios.length,
        completed,
        percentage: categoryScenarios.length > 0 ? Math.round((completed / categoryScenarios.length) * 100) : 0
      };
    });
    return stats;
  };

  const categoryStats = getCategoryStats();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Gamepad2 className="h-8 w-8 text-purple-600" />
            <h1 className="text-3xl font-bold text-gray-900">Gaming Scenarios</h1>
          </div>
          <p className="text-gray-600">
            Master programming through your favorite games! Build algorithms inspired by popular gaming mechanics.
          </p>
        </div>

        {/* Category Overview Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
          {categoryStats.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.value}
                className={`bg-white rounded-lg shadow-md p-4 cursor-pointer transition-all hover:shadow-lg border-2 ${
                  selectedCategory === category.value ? 'border-purple-200 bg-purple-50' : 'border-gray-200'
                }`}
                onClick={() => setSelectedCategory(category.value)}
              >
                <div className="text-center">
                  <Icon className={`h-6 w-6 mx-auto mb-2 ${category.color}`} />
                  <h3 className="text-sm font-medium text-gray-900 mb-1">{category.label}</h3>
                  <p className="text-xs text-gray-500">{category.completed}/{category.total}</p>
                  <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                    <div 
                      className="bg-purple-600 h-1 rounded-full" 
                      style={{ width: `${category.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-900">Filter Scenarios</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Game Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Difficulty Level
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {difficulties.map((difficulty) => (
                  <option key={difficulty.value} value={difficulty.value}>
                    {difficulty.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Reset Filters */}
          {(selectedCategory !== 'all' || selectedDifficulty !== 'all') && (
            <div className="mt-4">
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedDifficulty('all');
                }}
                className="text-sm text-purple-600 hover:text-purple-700 font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            {selectedCategory === 'all' ? 'All Gaming Scenarios' : `${selectedCategory} Scenarios`}
            <span className="text-gray-500 text-base font-normal ml-2">
              ({filteredScenarios.length} scenario{filteredScenarios.length !== 1 ? 's' : ''})
            </span>
          </h2>
          
          <Link 
            to="/dashboard" 
            className="text-purple-600 hover:text-purple-700 text-sm font-medium"
          >
            ← Back to Dashboard
          </Link>
        </div>

        {/* Scenarios Grid */}
        {filteredScenarios.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredScenarios.map((scenario) => (
              <ScenarioCard
                key={scenario.id}
                id={scenario.id}
                title={scenario.title}
                description={scenario.description}
                difficulty={scenario.difficulty}
                category={scenario.category}
                completed={scenario.completed}
                points={scenario.points}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="text-gray-400 mb-4">
              <Gamepad2 className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No scenarios found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your filters to see more gaming scenarios.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedDifficulty('all');
              }}
              className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Filter className="h-4 w-4 mr-2" />
              Reset Filters
            </button>
          </div>
        )}

        {/* Quick Stats */}
        <div className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-lg p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Trophy className="h-8 w-8 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">{gamingScenarios.length}</h3>
              <p className="text-purple-100">Total Gaming Scenarios</p>
            </div>
            <div className="text-center">
              <Target className="h-8 w-8 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">{categories.length - 1}</h3>
              <p className="text-purple-100">Game Categories</p>
            </div>
            <div className="text-center">
              <Zap className="h-8 w-8 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">
                {gamingScenarios.reduce((sum, s) => sum + s.points, 0).toLocaleString()}
              </h3>
              <p className="text-purple-100">Total Points Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamingPage;
