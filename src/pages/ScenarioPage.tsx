import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { translateLogicToCode } from '../utils/codeGenerator';
// import { useDebounce } from '../hooks/useDebounce';
import { trackScenarioComplete, trackCodeGeneration } from '../utils/analytics';
import LoadingSpinner from '../components/LoadingSpinner';
import CodeEditor from '../components/CodeEditor';
import { gamingScenarioTemplates } from '../utils/gamingScenarios';
import { ArrowLeft, Lightbulb, Code2, CheckCircle, ArrowRight } from 'lucide-react';

const ScenarioPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [userLogic, setUserLogic] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<'python' | 'javascript'>('python');
  const [generatedCode, setGeneratedCode] = useState<any>(null);
  const [step, setStep] = useState<'input' | 'output' | 'completed'>('input');
  const [isGenerating, setIsGenerating] = useState(false);
  const [startTime] = useState(Date.now());
  
  // const debouncedLogic = useDebounce(userLogic, 500);

  // Base learning scenarios
  const baseScenarios = {
    '1': {
      title: 'Weather-Based Clothing',
      description: 'Learn to make decisions based on weather conditions',
      difficulty: 'beginner',
      category: 'Conditional Logic',
      prompt: 'Imagine you\'re getting ready in the morning. How do you decide what to wear based on the weather and temperature?',
      example: 'For example: "If it\'s sunny and hot, I wear light clothes. If it\'s raining, I take an umbrella and wear a raincoat."',
      hints: [
        'Think about different weather conditions (sunny, rainy, cloudy)',
        'Consider temperature ranges (hot, cold, mild)',
        'What combinations would you consider?'
      ]
    },
    '2': {
      title: 'Book Organization',
      description: 'Sort and organize books using different criteria',
      difficulty: 'beginner',
      category: 'Sorting & Arrays',
      prompt: 'You have a collection of books that need to be organized. How would you sort them?',
      example: 'For example: "I would sort them by author\'s last name, or by publication year, or by genre."',
      hints: [
        'Think about different sorting criteria (title, author, year)',
        'Consider how you would compare books',
        'What order would you prefer?'
      ]
    },
    '3': {
      title: 'Meal Planning',
      description: 'Plan meals based on preferences and ingredients',
      difficulty: 'intermediate',
      category: 'Complex Logic',
      prompt: 'How do you decide what to cook for dinner based on available ingredients and dietary preferences?',
      example: 'For example: "I check what\'s in the fridge, consider if anyone has dietary restrictions, and think about the time of day."',
      hints: [
        'Consider available ingredients',
        'Think about dietary restrictions',
        'Factor in time and effort required'
      ]
    },
    '4': {
      title: 'Grade Calculator',
      description: 'Calculate grades and provide feedback',
      difficulty: 'intermediate',
      category: 'Functions & Logic',
      prompt: 'How would you calculate a student\'s letter grade based on their numerical score?',
      example: 'For example: "90-100 is an A, 80-89 is a B, 70-79 is a C, and so on."',
      hints: [
        'Think about grade ranges',
        'Consider edge cases',
        'What feedback would you provide?'
      ]
    },
    '5': {
      title: 'Budget Tracker',
      description: 'Track expenses and categorize spending',
      difficulty: 'advanced',
      category: 'Data Processing',
      prompt: 'How would you track your monthly expenses and categorize them?',
      example: 'For example: "I would group expenses by category like food, transport, entertainment, and calculate totals."',
      hints: [
        'Think about expense categories',
        'Consider tracking methods',
        'How would you analyze spending patterns?'
      ]
    },
    '6': {
      title: 'Task Scheduler',
      description: 'Prioritize and schedule tasks efficiently',
      difficulty: 'advanced',
      category: 'Algorithms',
      prompt: 'How would you prioritize and schedule your daily tasks?',
      example: 'For example: "I would consider deadlines, importance, and estimated time for each task."',
      hints: [
        'Think about task priority factors',
        'Consider time constraints',
        'How would you handle conflicts?'
      ]
    }
  };

  // Convert gaming scenarios to the same format
  const gamingScenarios = gamingScenarioTemplates.reduce((acc, template) => {
    acc[template.id] = {
      title: template.title,
      description: template.description,
      difficulty: template.difficulty,
      category: template.category,
      prompt: `Gaming Challenge: ${template.description}\n\n${template.exampleInput}`,
      example: template.exampleOutput,
      hints: template.hints
    };
    return acc;
  }, {} as any);

  // Combine all scenarios
  const scenarios = { ...baseScenarios, ...gamingScenarios };

  const currentScenario = scenarios[id as keyof typeof scenarios];

  if (!currentScenario) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Scenario not found</h2>
          <button
            onClick={() => navigate('/dashboard')}
            className="text-primary-600 hover:text-primary-700"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const handleGenerateCode = () => {
    if (!userLogic.trim()) return;

    setIsGenerating(true);
    trackCodeGeneration(selectedLanguage, userLogic.length);
    
    // Simulate API delay for better UX
    setTimeout(() => {
      const codeTranslation = translateLogicToCode(userLogic, currentScenario.title);
      setGeneratedCode(codeTranslation);
      setStep('output');
      setIsGenerating(false);
    }, 1500);
  };

  const handleComplete = () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    trackScenarioComplete(id!, currentScenario.title, timeSpent);
    setStep('completed');
    // Here you would typically save the progress to the database
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-secondary-100 text-secondary-700';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-700';
      case 'advanced':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Dashboard</span>
          </button>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              {/* Gaming themed icon based on scenario category */}
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-2xl">
                {id && !['1', '2', '3', '4', '5', '6'].includes(id) ? (
                  id.includes('clash') ? '⚔️' :
                  id.includes('valorant') ? '🎯' :
                  id.includes('lol') ? '🏆' :
                  id.includes('minecraft') ? '⛏️' :
                  id.includes('fortnite') || id.includes('apex') ? '🏹' :
                  id.includes('pokemon') ? '⭐' :
                  id.includes('among-us') ? '🔍' :
                  id.includes('cs2') ? '💥' :
                  id.includes('wow') ? '🛡️' :
                  id.includes('chess') ? '♛' :
                  id.includes('portal') ? '🌀' :
                  id.includes('candy-crush') ? '🍭' :
                  id.includes('f1') ? '🏎️' :
                  id.includes('tetris') ? '🧩' : '🎮'
                ) : '💡'}
              </div>
              <h1 className="text-3xl font-bold text-gray-900">{currentScenario.title}</h1>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(currentScenario.difficulty)}`}>
              {currentScenario.difficulty.charAt(0).toUpperCase() + currentScenario.difficulty.slice(1)}
            </span>
          </div>

          <p className="text-gray-600 mb-2">{currentScenario.description}</p>
          {/* Gaming scenario special banner */}
          {id && !['1', '2', '3', '4', '5', '6'].includes(id) ? (
            <div className="flex items-center space-x-2 mb-4">
              <span className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm px-4 py-2 rounded-full font-semibold">
                🎮 {currentScenario.category}
              </span>
              <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full font-medium">
                Gaming Challenge
              </span>
            </div>
          ) : (
            <span className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
              {currentScenario.category}
            </span>
          )}
        </div>

        {/* Step Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className={`flex items-center space-x-2 ${step === 'input' ? 'text-primary-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'input' ? 'bg-primary-600 text-white' : 'bg-gray-200'}`}>
                <Lightbulb className="h-4 w-4" />
              </div>
              <span className="font-medium">Describe Logic</span>
            </div>
            <div className={`flex items-center space-x-2 ${step === 'output' ? 'text-primary-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'output' ? 'bg-primary-600 text-white' : 'bg-gray-200'}`}>
                <Code2 className="h-4 w-4" />
              </div>
              <span className="font-medium">View Code</span>
            </div>
            <div className={`flex items-center space-x-2 ${step === 'completed' ? 'text-secondary-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'completed' ? 'bg-secondary-600 text-white' : 'bg-gray-200'}`}>
                <CheckCircle className="h-4 w-4" />
              </div>
              <span className="font-medium">Complete</span>
            </div>
          </div>
        </div>

        {/* Content */}
        {step === 'input' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                <Lightbulb className="inline h-5 w-5 text-yellow-500 mr-2" />
                Your Challenge
              </h2>
              {/* Gaming-specific prompt display */}
              {id && !['1', '2', '3', '4', '5', '6'].includes(id) ? (
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-5 rounded-lg border border-indigo-200 mb-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span className="text-sm font-semibold text-indigo-700">🎮 Gaming Scenario</span>
                  </div>
                  <div className="text-gray-800 whitespace-pre-line leading-relaxed">
                    {currentScenario.prompt}
                  </div>
                </div>
              ) : (
                <p className="text-gray-700 mb-4">{currentScenario.prompt}</p>
              )}
              {/* Gaming-specific example display */}
              {id && !['1', '2', '3', '4', '5', '6'].includes(id) ? (
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                    <span className="text-sm font-semibold text-gray-700 ml-2">Gaming Example Code</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono leading-relaxed">
                      {currentScenario.example}
                    </pre>
                  </div>
                  <div className="mt-4 flex items-center space-x-4 text-xs text-gray-600">
                    <div className="flex items-center space-x-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      <span>Production Ready</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <span>Optimized Algorithm</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      <span>Gaming Logic</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Example:</strong>
                  </p>
                  <p className="text-sm text-gray-700">{currentScenario.example}</p>
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Describe Your Logic
              </h3>
              <textarea
                value={userLogic}
                onChange={(e) => setUserLogic(e.target.value)}
                className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                placeholder="Describe your step-by-step logic here..."
              />
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  {userLogic.length}/500 characters
                </div>
                {isGenerating ? (
                  <div className="flex items-center space-x-2">
                    <LoadingSpinner size="sm" />
                    <span className="text-sm text-gray-600">Generating code...</span>
                  </div>
                ) : (
                  <button
                    onClick={handleGenerateCode}
                    disabled={!userLogic.trim()}
                    className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Generate Code
                  </button>
                )}
              </div>
            </div>

            {/* Gaming-specific hints styling */}
            {id && !['1', '2', '3', '4', '5', '6'].includes(id) ? (
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    💡
                  </div>
                  <h4 className="font-bold text-emerald-900">Gaming Strategy Hints</h4>
                </div>
                <div className="grid gap-3">
                  {currentScenario.hints.map((hint: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3 bg-white p-3 rounded-lg shadow-sm">
                      <div className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">{hint}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">💡 Hints:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  {currentScenario.hints.map((hint: string, index: number) => (
                    <li key={index}>• {hint}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {step === 'output' && generatedCode && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                <Code2 className="inline h-5 w-5 text-primary-600 mr-2" />
                Your Logic as Code
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Your Logic:</strong>
                </p>
                <p className="text-sm text-gray-700">{userLogic}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-4 mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Generated Code</h3>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setSelectedLanguage('python')}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      selectedLanguage === 'python'
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Python
                  </button>
                  <button
                    onClick={() => setSelectedLanguage('javascript')}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      selectedLanguage === 'javascript'
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    JavaScript
                  </button>
                </div>
              </div>

              <CodeEditor
                code={generatedCode[selectedLanguage]}
                language={selectedLanguage}
                height="300px"
              />
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Understanding the Code
              </h3>
              <p className="text-gray-700">{generatedCode.explanation}</p>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setStep('input')}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Edit Logic</span>
              </button>
              <button
                onClick={handleComplete}
                className="flex items-center space-x-2 px-6 py-2 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 transition-colors"
              >
                <span>Mark as Complete</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {step === 'completed' && (
          <div className="text-center">
            <div className="bg-white rounded-lg shadow-md p-8">
              <CheckCircle className="h-16 w-16 text-secondary-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Scenario Complete!
              </h2>
              <p className="text-gray-600 mb-6">
                Great job! You've successfully transformed your logic into code. 
                Keep practicing to master more programming concepts.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={() => navigate('/dashboard')}
                  className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Back to Dashboard
                </button>
                <button
                  onClick={() => navigate('/progress')}
                  className="bg-secondary-600 text-white px-6 py-2 rounded-lg hover:bg-secondary-700 transition-colors"
                >
                  View Progress
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScenarioPage;