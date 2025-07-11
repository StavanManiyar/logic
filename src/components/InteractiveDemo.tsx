import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Sparkles, Code2 } from 'lucide-react';

const InteractiveDemo: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userInput, setUserInput] = useState('');

  const demoSteps = [
    {
      title: "Describe Your Logic",
      description: "Type how you would decide what to wear based on weather",
      placeholder: "If it's sunny and above 75°F, I wear light clothes...",
      code: ""
    },
    {
      title: "AI Processing",
      description: "Our AI analyzes your natural language logic",
      placeholder: "",
      code: "# Analyzing your logic...\n# Converting to programming concepts..."
    },
    {
      title: "Generated Code",
      description: "See your logic transformed into clean Python code",
      placeholder: "",
      code: `def what_to_wear(weather, temperature):
    if weather == "sunny" and temperature > 75:
        return "Light clothes and sunglasses"
    elif weather == "rainy":
        return "Raincoat and umbrella"
    elif temperature < 40:
        return "Heavy coat and warm clothes"
    else:
        return "Comfortable casual wear"`
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && currentStep < demoSteps.length - 1) {
      interval = setInterval(() => {
        setCurrentStep(prev => prev + 1);
      }, 3000);
    } else if (currentStep >= demoSteps.length - 1) {
      setIsPlaying(false);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentStep]);

  const handlePlay = () => {
    if (currentStep >= demoSteps.length - 1) {
      setCurrentStep(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
    setUserInput('');
  };

  return (
    <div className="bg-white rounded-3xl shadow-large p-8 border border-gray-100">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Try It Yourself
        </h3>
        <p className="text-gray-600">
          See how your logic transforms into code in real-time
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Side */}
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-5 w-5 text-yellow-600" />
              <h4 className="font-semibold text-gray-900">{demoSteps[currentStep].title}</h4>
            </div>
            <p className="text-sm text-gray-600 mb-4">{demoSteps[currentStep].description}</p>
            
            {currentStep === 0 ? (
              <textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder={demoSteps[currentStep].placeholder}
                className="w-full h-24 p-3 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none text-sm"
              />
            ) : (
              <div className="bg-white rounded-lg p-3 border border-yellow-300 min-h-[96px] flex items-center">
                <p className="text-sm text-gray-700">
                  {userInput || demoSteps[0].placeholder}
                </p>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={handlePlay}
              className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              <span>{isPlaying ? 'Pause' : 'Play'}</span>
            </button>
            <button
              onClick={handleReset}
              className="flex items-center space-x-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Output Side */}
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-5 w-5 text-blue-600" />
              <h4 className="font-semibold text-gray-900">Generated Code</h4>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-4 min-h-[120px]">
              <pre className="text-sm text-green-400 font-mono">
                {demoSteps[currentStep].code || "# Your code will appear here..."}
              </pre>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center space-x-2">
            {demoSteps.map((_, index) => (
              <div
                key={index}
                className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                  index <= currentStep ? 'bg-primary-600' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveDemo;