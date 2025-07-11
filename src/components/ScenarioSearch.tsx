import React, { useState, useEffect } from 'react';
import { Search, Filter, X, ChevronDown } from 'lucide-react';
import { Scenario } from '../services/scenarioService';

interface ScenarioSearchProps {
  scenarios: Scenario[];
  onFilter: (filteredScenarios: Scenario[]) => void;
  categories: string[];
}

const ScenarioSearch: React.FC<ScenarioSearchProps> = ({
  scenarios,
  onFilter,
  categories
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [showCompleted, setShowCompleted] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    let filtered = scenarios;

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(scenario =>
        scenario.title.toLowerCase().includes(query) ||
        scenario.description.toLowerCase().includes(query) ||
        scenario.category.toLowerCase().includes(query) ||
        scenario.concepts?.some(concept => concept.toLowerCase().includes(query))
      );
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(scenario => scenario.category === selectedCategory);
    }

    // Apply difficulty filter
    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter(scenario => scenario.difficulty === selectedDifficulty);
    }

    // Apply completion filter
    if (!showCompleted) {
      filtered = filtered.filter(scenario => !scenario.completed);
    }

    onFilter(filtered);
  }, [searchQuery, selectedCategory, selectedDifficulty, showCompleted, scenarios, onFilter]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedDifficulty('all');
    setShowCompleted(true);
  };

  const hasActiveFilters = searchQuery || selectedCategory !== 'all' || 
                          selectedDifficulty !== 'all' || !showCompleted;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
      {/* Search Bar */}
      <div className="relative mb-4">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search scenarios by title, description, or concepts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg 
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {/* Filter Toggle */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 
                   hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <Filter className="h-4 w-4" />
          <span>Filters</span>
          <ChevronDown 
            className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} 
          />
        </button>

        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center space-x-1 px-3 py-1 text-sm text-blue-600 
                     hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
          >
            <X className="h-3 w-3" />
            <span>Clear filters</span>
          </button>
        )}
      </div>

      {/* Filter Options */}
      {showFilters && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-lg 
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Difficulty
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-lg 
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Difficulties</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            {/* Completion Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={showCompleted}
                    onChange={(e) => setShowCompleted(e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">Show completed</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {searchQuery && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm 
                             bg-blue-100 text-blue-800 border border-blue-200">
                Search: "{searchQuery}"
                <button
                  onClick={() => setSearchQuery('')}
                  className="ml-2 hover:text-blue-600"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {selectedCategory !== 'all' && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm 
                             bg-green-100 text-green-800 border border-green-200">
                Category: {selectedCategory}
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="ml-2 hover:text-green-600"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {selectedDifficulty !== 'all' && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm 
                             bg-yellow-100 text-yellow-800 border border-yellow-200">
                Difficulty: {selectedDifficulty}
                <button
                  onClick={() => setSelectedDifficulty('all')}
                  className="ml-2 hover:text-yellow-600"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {!showCompleted && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm 
                             bg-gray-100 text-gray-800 border border-gray-200">
                Hiding completed
                <button
                  onClick={() => setShowCompleted(true)}
                  className="ml-2 hover:text-gray-600"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ScenarioSearch;
