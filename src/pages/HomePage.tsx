import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import InteractiveDemo from '../components/InteractiveDemo';
import FeatureShowcase from '../components/FeatureShowcase';
import { ArrowRight, Code2, Lightbulb, Trophy, Users, Sparkles, Target, BookOpen, Star, Play, CheckCircle } from 'lucide-react';

const HomePage: React.FC = () => {
  const { user } = useAuth();

  const features = [
    {
      icon: Lightbulb,
      title: 'Real-World & Gaming Scenarios',
      description: 'Start with everyday decisions or dive into gaming logic from Clash of Clans, Valorant, League of Legends, and more!',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Code2,
      title: 'Instant Code Generation',
      description: 'Describe your logic in plain English and watch it transform into Python or JavaScript code with explanations.',
      gradient: 'from-blue-400 to-purple-500'
    },
    {
      icon: Trophy,
      title: 'Gamified Learning',
      description: 'Earn badges, track progress, and unlock challenges as you master the art of logical thinking in programming.',
      gradient: 'from-green-400 to-blue-500'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Choose a Scenario',
      description: 'Pick from real-world situations like weather-based decisions or organizing tasks.',
      icon: Target
    },
    {
      number: '02',
      title: 'Describe Your Logic',
      description: 'Explain your decision-making process in plain, natural language.',
      icon: BookOpen
    },
    {
      number: '03',
      title: 'See the Code',
      description: 'Watch your logic transform into working code with detailed explanations.',
      icon: Sparkles
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Computer Science Student',
      content: 'Logic2Code made programming concepts click for me. The real-world scenarios helped me understand how to think like a programmer.',
      avatar: '👩‍💻',
      rating: 5
    },
    {
      name: 'Marcus Johnson',
      role: 'Career Changer',
      content: 'I went from zero programming knowledge to building my first app in just 3 months. The step-by-step approach is brilliant.',
      avatar: '👨‍💼',
      rating: 5
    },
    {
      name: 'Elena Rodriguez',
      role: 'High School Teacher',
      content: 'I use Logic2Code to teach my students. They love how it connects everyday thinking to programming logic.',
      avatar: '👩‍🏫',
      rating: 5
    }
  ];

  const stats = [
    { value: '50K+', label: 'Students Learning', icon: Users },
    { value: '100+', label: 'Scenarios Available', icon: BookOpen },
    { value: '98%', label: 'Success Rate', icon: Target },
    { value: '4.9/5', label: 'User Rating', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-mesh opacity-30"></div>
        <div className="absolute inset-0 bg-dots opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 via-blue-100 to-indigo-100 rounded-full px-4 py-2 mb-8 animate-fade-in-down">
              <span className="text-lg">🎮</span>
              <Sparkles className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">Gaming-Powered Code Learning</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in-up">
              <span className="block text-gray-900 mb-2">Think Like a</span>
              <span className="block gradient-text bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent animate-gradient">
                Programmer
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Bridge the gap between real-world thinking and programming logic. 
              Learn to code by translating everyday decisions into programming concepts.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {user ? (
                <Link to="/dashboard" className="btn-primary group">
                  <span>Continue Learning</span>
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <>
                  <Link to="/register" className="btn-primary group">
                    <Play className="h-5 w-5 mr-2" />
                    <span>Start Learning Free</span>
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link to="/onboarding" className="btn-ghost group">
                    <span>See How It Works</span>
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </>
              )}
            </div>

            {/* Hero Visual */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <InteractiveDemo />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="bg-gradient-to-r from-primary-100 to-secondary-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="gradient-text">Logic2Code?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our unique approach makes programming accessible by connecting it to your natural thinking process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card card-hover p-8 text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className={`bg-gradient-to-r ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Feature Showcase */}
      <FeatureShowcase />

      {/* How It Works Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to transform your thinking into code
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary-200 to-secondary-200 z-0" style={{ width: 'calc(100% - 3rem)' }}></div>
                  )}
                  
                  <div className="relative z-10 text-center">
                    <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Icon className="h-10 w-10" />
                    </div>
                    <div className="text-sm font-bold text-primary-600 mb-2">{step.number}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our <span className="gradient-text">Students</span> Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of learners who have successfully bridged the gap between logic and code.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-8 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow-lg">
            Ready to Start Your Coding Journey?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Join thousands of learners who have successfully bridged the gap between logic and code. 
            Start your transformation today.
          </p>
          
          {!user && (
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/register" className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 group">
                <span>Start Learning Today</span>
                <ArrowRight className="h-5 w-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/onboarding" className="btn-ghost">
                <span>Learn More</span>
              </Link>
            </div>
          )}
          
          <div className="mt-12 flex items-center justify-center space-x-8 text-white/80">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Free to start</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;