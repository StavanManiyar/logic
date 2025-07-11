import React, { useState } from 'react';
import { Code2, Trophy, Users, Sparkles, ChevronRight } from 'lucide-react';

const FeatureShowcase: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 0,
      icon: Code2,
      title: 'Smart Code Generation',
      description: 'AI-powered translation from natural language to clean, efficient code',
      details: [
        'Supports Python and JavaScript',
        'Explains every line of generated code',
        'Optimized for readability and best practices',
        'Real-time syntax highlighting'
      ],
      demo: {
        input: "If the user is logged in and has admin privileges, show the admin panel",
        output: `if user.is_authenticated and user.has_admin_privileges:
    display_admin_panel()
else:
    redirect_to_login()`
      }
    },
    {
      id: 1,
      icon: Sparkles,
      title: 'Adaptive Learning Path',
      description: 'Personalized curriculum that adapts to your learning style and pace',
      details: [
        'AI-driven difficulty adjustment',
        'Personalized scenario recommendations',
        'Progress tracking and analytics',
        'Skill gap identification'
      ],
      demo: {
        input: "Based on your progress, we recommend focusing on loop concepts",
        output: `# Recommended next scenarios:
1. Shopping List Iterator
2. Grade Calculator Loop
3. Password Validator`
      }
    },
    {
      id: 2,
      icon: Users,
      title: 'Collaborative Learning',
      description: 'Learn together with peers through shared challenges and discussions',
      details: [
        'Team challenges and competitions',
        'Peer code review system',
        'Community-driven scenarios',
        'Mentorship matching'
      ],
      demo: {
        input: "Join a team challenge: Build a task management system",
        output: `Team: Logic Warriors (4/5 members)
Challenge: Task Manager
Progress: 60% complete
Your role: Backend logic`
      }
    },
    {
      id: 3,
      icon: Trophy,
      title: 'Achievement System',
      description: 'Gamified experience with badges, streaks, and leaderboards',
      details: [
        'Skill-based badge system',
        'Learning streak tracking',
        'Global and friend leaderboards',
        'Milestone celebrations'
      ],
      demo: {
        input: "Congratulations! You've earned the 'Logic Master' badge",
        output: `🏆 Logic Master Badge Unlocked!
✅ Completed 10 conditional scenarios
🔥 7-day learning streak
🎯 Next: Array Manipulator badge`
      }
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for <span className="gradient-text">Every Learner</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the tools and features that make Logic2Code the most effective way to learn programming
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Feature List */}
          <div className="space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeFeature === index;
              
              return (
                <div
                  key={feature.id}
                  onClick={() => setActiveFeature(index)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-primary-50 to-secondary-50 border-2 border-primary-200 shadow-lg' 
                      : 'bg-white border border-gray-200 hover:border-primary-200 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl ${
                      isActive 
                        ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white' 
                        : 'bg-gray-100 text-gray-600'
                    } transition-all duration-300`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold mb-2 ${
                        isActive ? 'text-primary-700' : 'text-gray-900'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {feature.description}
                      </p>
                      <div className="space-y-2">
                        {feature.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <ChevronRight className={`h-4 w-4 ${
                              isActive ? 'text-primary-600' : 'text-gray-400'
                            }`} />
                            <span className="text-sm text-gray-600">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Feature Demo */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl shadow-large p-8 border border-gray-100">
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {features[activeFeature].title} Demo
                </h4>
                <p className="text-gray-600">
                  See this feature in action
                </p>
              </div>

              <div className="space-y-6">
                {/* Input */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 border border-yellow-200">
                  <h5 className="font-medium text-gray-900 mb-2">Input</h5>
                  <p className="text-sm text-gray-700">
                    {features[activeFeature].demo.input}
                  </p>
                </div>

                {/* Output */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200">
                  <h5 className="font-medium text-gray-900 mb-2">Output</h5>
                  <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono">
                    {features[activeFeature].demo.output}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureShowcase;