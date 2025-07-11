import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FiClock,
  FiPlay,
  FiArrowRight,
  FiTarget,
  FiStar,
  FiTrendingUp
} from 'react-icons/fi';
import { 
  MdOutlineWbSunny, 
  MdMenuBook, 
  MdRestaurantMenu, 
  MdGrade,
  MdAccountBalanceWallet,
  MdSchedule
} from 'react-icons/md';

const EmptyStateDashboard: React.FC = () => {
  const suggestedScenarios = [
    {
      id: '1',
      icon: MdOutlineWbSunny,
      title: 'Weather-Based Clothing',
      description: 'Learn how to make clothing decisions based on weather conditions',
      difficulty: 'Beginner',
      estimatedTime: '15 min',
      concepts: ['Conditional Logic', 'If-Else Statements'],
      color: 'from-yellow-400 to-orange-400'
    },
    {
      id: '2',
      icon: MdMenuBook,
      title: 'Book Organization',
      description: 'Discover how to sort and organize books using different criteria',
      difficulty: 'Beginner',
      estimatedTime: '20 min',
      concepts: ['Sorting', 'Arrays', 'Comparison'],
      color: 'from-blue-400 to-indigo-400'
    },
    {
      id: '3',
      icon: MdRestaurantMenu,
      title: 'Meal Planning',
      description: 'Plan meals based on preferences and available ingredients',
      difficulty: 'Intermediate',
      estimatedTime: '25 min',
      concepts: ['Complex Logic', 'Multiple Conditions'],
      color: 'from-green-400 to-emerald-400'
    },
    {
      id: '4',
      icon: MdGrade,
      title: 'Grade Calculator',
      description: 'Calculate student grades and provide appropriate feedback',
      difficulty: 'Intermediate',
      estimatedTime: '20 min',
      concepts: ['Functions', 'Range Checking', 'Data Processing'],
      color: 'from-purple-400 to-pink-400'
    },
    {
      id: '5',
      icon: MdAccountBalanceWallet,
      title: 'Budget Tracker',
      description: 'Track expenses and categorize spending patterns',
      difficulty: 'Advanced',
      estimatedTime: '30 min',
      concepts: ['Data Processing', 'Categorization', 'Analysis'],
      color: 'from-red-400 to-pink-400'
    },
    {
      id: '6',
      icon: MdSchedule,
      title: 'Task Scheduler',
      description: 'Prioritize and schedule daily tasks efficiently',
      difficulty: 'Advanced',
      estimatedTime: '35 min',
      concepts: ['Algorithms', 'Priority Queues', 'Optimization'],
      color: 'from-cyan-400 to-blue-400'
    }
  ];

  const learningPath = [
    {
      step: 1,
      icon: FiTarget,
      title: 'Start with Basics',
      description: 'Begin with weather and book scenarios to understand conditional logic',
      scenarios: ['Weather-Based Clothing', 'Book Organization']
    },
    {
      step: 2,
      icon: FiTrendingUp,
      title: 'Build Complexity',
      description: 'Move to meal planning and grades to handle multiple conditions',
      scenarios: ['Meal Planning', 'Grade Calculator']
    },
    {
      step: 3,
      icon: FiStar,
      title: 'Master Advanced',
      description: 'Tackle budget tracking and task scheduling for real-world skills',
      scenarios: ['Budget Tracker', 'Task Scheduler']
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Advanced':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full mb-8 animate-pulse">
            <FiPlay className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Welcome to <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Logic2Code</span>! 🎉
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform your everyday thinking into programming skills. Start with simple real-world scenarios 
            and watch your logic become code!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/onboarding"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <FiPlay className="h-5 w-5 mr-2" />
              Take the Tour First
            </Link>
            <span className="text-gray-400 font-medium">or</span>
            <Link
              to="/scenario/1"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl border-2 border-primary-200 hover:bg-primary-50 transition-all duration-200"
            >
              Jump Right In
              <FiArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>

        {/* Learning Path */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Your Learning Journey
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {learningPath.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="relative">
                  {/* Connection Line */}
                  {index < learningPath.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary-200 to-secondary-200 z-0" style={{ width: 'calc(100% - 3rem)' }}></div>
                  )}
                  
                  <div className="relative z-10 bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8" />
                    </div>
                    <div className="text-sm font-bold text-primary-600 mb-2">Step {step.step}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {step.description}
                    </p>
                    <div className="space-y-2">
                      {step.scenarios.map((scenario, idx) => (
                        <div key={idx} className="text-sm bg-gray-50 rounded-lg px-3 py-2 text-gray-700">
                          {scenario}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Suggested Scenarios */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your First Scenario
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each scenario teaches fundamental programming concepts through everyday decision-making
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {suggestedScenarios.map((scenario) => {
              const Icon = scenario.icon;
              return (
                <Link
                  key={scenario.id}
                  to={`/scenario/${scenario.id}`}
                  className="group bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${scenario.color}`}></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${scenario.color} bg-opacity-10`}>
                        <Icon className="h-8 w-8 text-gray-700" />
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(scenario.difficulty)}`}>
                        {scenario.difficulty}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {scenario.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {scenario.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-500">
                        <FiClock className="h-4 w-4 mr-2" />
                        <span>{scenario.estimatedTime}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {scenario.concepts.map((concept, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            {concept}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-sm text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
                        Start Learning →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 rounded-3xl shadow-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Coding Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of learners who have successfully transformed their logical thinking into programming skills.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              to="/register"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-50 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Create Free Account
              <FiArrowRight className="h-5 w-5 ml-2" />
            </Link>
            <Link
              to="/onboarding"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200"
            >
              Learn More
            </Link>
          </div>

          <div className="flex items-center justify-center space-x-8 text-white/80 text-sm">
            <div className="flex items-center space-x-2">
              <FiTarget className="h-4 w-4" />
              <span>Free to start</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiStar className="h-4 w-4" />
              <span>No experience needed</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiTrendingUp className="h-4 w-4" />
              <span>Learn at your pace</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyStateDashboard;
