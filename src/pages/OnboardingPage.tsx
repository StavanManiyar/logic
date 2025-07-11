import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { ArrowRight, ArrowLeft, CheckCircle, Code2, Lightbulb, Play } from 'lucide-react';

const OnboardingPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { user } = useAuth();
  const navigate = useNavigate();

  const steps = [
    {
      title: "Welcome to Logic2Code",
      content: (
        <div className="text-center">
          <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Code2 className="h-10 w-10 text-primary-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Transform Your Thinking Into Code
          </h2>
          <p className="text-gray-600 mb-6">
            Learn programming by connecting it to your natural decision-making process. 
            We'll guide you through real-world scenarios and show you how they translate to code.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Perfect for:</strong> Complete beginners, students, or anyone curious about programming
            </p>
          </div>
        </div>
      )
    },
    {
      title: "How It Works",
      content: (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Three Simple Steps
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Choose a Real-World Scenario</h3>
                <p className="text-gray-600">Pick from situations like "What to wear based on weather" or "How to organize books"</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-secondary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Describe Your Logic</h3>
                <p className="text-gray-600">Explain how you would solve the problem in plain English</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-accent-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">See the Code</h3>
                <p className="text-gray-600">Watch your logic transform into Python or JavaScript with detailed explanations</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Example Scenario",
      content: (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Let's See an Example
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">
              <Lightbulb className="inline h-5 w-5 text-yellow-500 mr-2" />
              Scenario: What to wear based on weather
            </h3>
            <div className="bg-white p-4 rounded border-l-4 border-primary-600 mb-4">
              <p className="text-gray-700">
                <strong>Your Logic:</strong> "If it's sunny and above 75°F, wear light clothes. 
                If it's raining, wear a raincoat. If it\'s below 40°F, wear heavy clothes."
              </p>
            </div>
            <div className="bg-white p-4 rounded border-l-4 border-secondary-600">
              <p className="text-gray-700 mb-2">
                <strong>Generated Code:</strong>
              </p>
              <pre className="text-sm bg-gray-100 p-3 rounded overflow-x-auto">
{`if weather == "sunny" and temperature > 75:
    return "Light clothes"
elif weather == "rainy":
    return "Raincoat"
elif temperature < 40:
    return "Heavy clothes"`}
              </pre>
            </div>
          </div>
          <div className="text-center">
            <CheckCircle className="h-12 w-12 text-secondary-600 mx-auto mb-3" />
            <p className="text-gray-600">
              See how natural thinking becomes programming logic!
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Ready to Start?",
      content: (
        <div className="text-center">
          <div className="bg-secondary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Play className="h-10 w-10 text-secondary-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            You're All Set!
          </h2>
          <p className="text-gray-600 mb-6">
            Start with beginner-friendly scenarios and work your way up to more complex challenges. 
            Track your progress and earn badges as you learn.
          </p>
          <div className="bg-primary-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-primary-700">
              <strong>Next:</strong> Choose your first scenario and start transforming logic into code!
            </p>
          </div>
          {user ? (
            <button
              onClick={() => navigate('/dashboard')}
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Go to Dashboard
            </button>
          ) : (
            <Link
              to="/register"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-block"
            >
              Create Account to Start
            </Link>
          )}
        </div>
      )
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-700">
              Step {currentStep + 1} of {steps.length}
            </span>
            <span className="text-sm text-gray-500">
              {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="animate-fade-in">
            {steps[currentStep].content}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              currentStep === 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Previous</span>
          </button>

          <div className="flex space-x-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentStep
                    ? 'bg-primary-600'
                    : index < currentStep
                    ? 'bg-secondary-600'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {currentStep < steps.length - 1 ? (
            <button
              onClick={nextStep}
              className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              <span>Next</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <Link
              to="/"
              className="flex items-center space-x-2 px-4 py-2 bg-secondary-600 text-white rounded-lg font-medium hover:bg-secondary-700 transition-colors"
            >
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;