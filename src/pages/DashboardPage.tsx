import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import ScenarioCard from '../components/ScenarioCard';
import EmptyStateDashboard from '../components/EmptyStateDashboard';
import { gamingScenarioTemplates } from '../utils/gamingScenarios';
import { 
  Target, 
  Trophy, 
  TrendingUp, 
  BookOpen, 
  ArrowRight, 
  Calendar,
  Star,
  Award,
  Clock,
  Gamepad2
} from 'lucide-react';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  // Convert gaming scenarios to dashboard format
  const gamingScenarios = gamingScenarioTemplates.map(template => ({
    id: template.id,
    title: template.title,
    description: template.description,
    difficulty: template.difficulty,
    category: template.category,
    completed: false,
    points: template.points,
    estimatedTime: template.estimatedTime
  }));

  // Real-world logic building scenarios + Gaming scenarios
  const dashboardScenarios = [
    // All gaming scenarios from templates
    ...gamingScenarios,
    // Original Business/Real-world Scenarios
    {
      id: '7',
      title: 'Financial Forecasting',
      description: 'Predict future expenses based on past spending patterns',
      difficulty: 'advanced' as const,
      category: 'Prediction',
      completed: false,
      points: 350,
      estimatedTime: '30 min'
    },
    {
      id: '8',
      title: 'Plant Watering Scheduler',
      description: 'Automate watering schedule adjusted to weather data',
      difficulty: 'intermediate' as const,
      category: 'Home Automation',
      completed: false,
      points: 250,
      estimatedTime: '25 min'
    },
    {
      id: '9',
      title: 'Recipe Suggestion Engine',
      description: 'Suggest recipes based on available ingredients',
      difficulty: 'advanced' as const,
      category: 'Recommendation',
      completed: false,
      points: 400,
      estimatedTime: '35 min'
    },
    {
      id: '1',
      title: 'Smart Home Automation',
      description: 'Control lights and temperature based on time of day and occupancy',
      difficulty: 'beginner' as const,
      category: 'Conditional Logic',
      completed: false,
      points: 150,
      estimatedTime: '15 min'
    },
    {
      id: '2',
      title: 'E-commerce Order Processing',
      description: 'Handle order validation, inventory check, and payment processing',
      difficulty: 'intermediate' as const,
      category: 'Business Logic',
      completed: false,
      points: 220,
      estimatedTime: '25 min'
    },
    {
      id: '3',
      title: 'Social Media Content Filter',
      description: 'Filter and moderate user-generated content based on rules',
      difficulty: 'advanced' as const,
      category: 'Data Processing',
      completed: false,
      points: 300,
      estimatedTime: '30 min'
    },
    {
      id: '4',
      title: 'Restaurant POS System',
      description: 'Calculate bills, apply discounts, and split payments',
      difficulty: 'intermediate' as const,
      category: 'Financial Logic',
      completed: false,
      points: 200,
      estimatedTime: '20 min'
    },
    {
      id: '5',
      title: 'Traffic Management System',
      description: 'Optimize traffic light timing based on real-time traffic data',
      difficulty: 'advanced' as const,
      category: 'Algorithm Design',
      completed: false,
      points: 350,
      estimatedTime: '35 min'
    },
    {
      id: '6',
      title: 'Employee Scheduling System',
      description: 'Automatically schedule employees based on availability and workload',
      difficulty: 'advanced' as const,
      category: 'Optimization',
      completed: false,
      points: 280,
      estimatedTime: '30 min'
    }
  ];

  // Mock scenarios for demonstration (these would come from a database in a real app)
  const scenarios = dashboardScenarios;


  const completedScenarios = scenarios.filter(s => s.completed);
  const availableScenarios = scenarios.filter(s => !s.completed);

  // Check if user is new (has no completed scenarios)
  // In a real app, this would be based on actual user data from the database
  const hasCompletedAnyScenarios = completedScenarios.length > 0;
  const userCreatedRecently = user?.created_at && 
    new Date().getTime() - new Date(user.created_at).getTime() < 7 * 24 * 60 * 60 * 1000; // Less than 7 days old
  
  const isNewUser = !user || (!hasCompletedAnyScenarios && userCreatedRecently);

  // Show empty state for new users who haven't completed anything
  if (isNewUser || completedScenarios.length === 0) {
    return <EmptyStateDashboard />;
  }

  // Calculate actual stats based on completed scenarios
  const totalPoints = completedScenarios.reduce((sum, scenario) => sum + scenario.points, 0);
  const completionPercentage = Math.round((completedScenarios.length / scenarios.length) * 100);
  
  // Only show stats if user has actually completed scenarios
  const actualStats = [
    {
      title: 'Total Points',
      value: totalPoints.toLocaleString(),
      icon: TrendingUp,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      title: 'Scenarios Completed',
      value: `${completedScenarios.length}/${scenarios.length}`,
      icon: Target,
      color: 'text-primary-600',
      bgColor: 'bg-primary-100'
    },
    {
      title: 'Completion Rate',
      value: `${completionPercentage}%`,
      icon: Award,
      color: 'text-secondary-600',
      bgColor: 'bg-secondary-100'
    },
    {
      title: 'Learning Level',
      value: completedScenarios.length >= 4 ? 'Advanced' : completedScenarios.length >= 2 ? 'Intermediate' : 'Beginner',
      icon: Trophy,
      color: 'text-accent-600',
      bgColor: 'bg-accent-100'
    }
  ];

  // Generate actual recent activity based on completed scenarios
  const actualRecentActivity = completedScenarios.slice(-3).map((scenario, index) => ({
    type: 'completion',
    title: `Completed "${scenario.title}"`,
    time: `${index + 1} day${index + 1 > 1 ? 's' : ''} ago`,
    icon: Target,
    color: 'text-secondary-600'
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.user_metadata?.full_name || 'Learner'}! 👋
          </h1>
          <p className="text-gray-600">
            Ready to transform more logic into code? Let's continue your learning journey with gaming scenarios!
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {actualStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.title} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <p className="text-sm text-gray-600">{stat.title}</p>
              </div>
            );
          })}
        </div>

        {/* Gaming Scenarios Promotion */}
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-xl shadow-lg p-8 text-white mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Gamepad2 className="h-8 w-8" />
                <h2 className="text-2xl font-bold">New: Gaming Scenarios! 🎮</h2>
              </div>
              <p className="text-purple-100 mb-4">
                Learn programming through your favorite games! Build algorithms inspired by Clash of Clans, Valorant, League of Legends, and more.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">16 Gaming Scenarios</span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">7 Game Categories</span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">4,030+ Points</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="grid grid-cols-2 gap-2 text-4xl">
                <div>🎯</div>
                <div>⚔️</div>
                <div>🏗️</div>
                <div>🧙</div>
              </div>
            </div>
          </div>
          <Link
            to="/gaming"
            className="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
          >
            <Gamepad2 className="h-5 w-5 mr-2" />
            Explore Gaming Scenarios
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Continue Learning */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Continue Learning</h2>
                <Link 
                  to="/progress" 
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center space-x-1"
                >
                  <span>View All Progress</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {availableScenarios.slice(0, 4).map((scenario) => (
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
            </div>

            {/* Recently Completed */}
            {completedScenarios.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Recently Completed</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {completedScenarios.slice(-2).map((scenario) => (
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
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  to="/scenario/1"
                  className="flex items-center space-x-3 p-3 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors"
                >
                  <Target className="h-5 w-5 text-primary-600" />
                  <span className="text-primary-700 font-medium">Start Next Scenario</span>
                </Link>
                <Link
                  to="/progress"
                  className="flex items-center space-x-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <TrendingUp className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700 font-medium">View Progress</span>
                </Link>
                <Link
                  to="/profile"
                  className="flex items-center space-x-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <BookOpen className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700 font-medium">Update Preferences</span>
                </Link>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {actualRecentActivity.length > 0 ? (
                  actualRecentActivity.map((activity, index) => {
                    const Icon = activity.icon;
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="p-1 rounded-full bg-gray-100">
                          <Icon className={`h-4 w-4 ${activity.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">
                            {activity.title}
                          </p>
                          <p className="text-xs text-gray-500 flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{activity.time}</span>
                          </p>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-sm text-gray-500 text-center py-4">
                    Complete your first scenario to see activity here!
                  </p>
                )}
              </div>
            </div>

            {/* Daily Challenge */}
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg shadow-md p-6 text-white">
              <div className="flex items-center space-x-2 mb-3">
                <Star className="h-5 w-5" />
                <h3 className="text-lg font-semibold">Daily Challenge</h3>
              </div>
              <p className="text-primary-100 text-sm mb-4">
                Complete a scenario today to maintain your streak!
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <Calendar className="h-4 w-4" />
                <span>Streak: 5 days</span>
              </div>
            </div>

            {/* Learning Tips */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">💡 Learning Tip</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Try to complete scenarios in both Python and JavaScript to see how the same logic translates differently across languages!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
