import React, { useState } from 'react';
import { Lightbulb, ChevronDown, ChevronUp, Eye, EyeOff } from 'lucide-react';

interface Hint {
  id: string;
  level: 'gentle' | 'medium' | 'strong';
  title: string;
  content: string;
  codeExample?: string;
}

interface HintsPanelProps {
  scenarioId: string;
  hints: Hint[];
  onHintUsed: (hintId: string) => void;
}

const HintsPanel: React.FC<HintsPanelProps> = ({ scenarioId: _scenarioId, hints, onHintUsed }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [revealedHints, setRevealedHints] = useState<Set<string>>(new Set());

  const handleRevealHint = (hintId: string) => {
    setRevealedHints(prev => new Set([...prev, hintId]));
    onHintUsed(hintId);
  };

  const getLevelColor = (level: Hint['level']) => {
    switch (level) {
      case 'gentle':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'strong':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getLevelIcon = (level: Hint['level']) => {
    switch (level) {
      case 'gentle':
        return '💡';
      case 'medium':
        return '🔍';
      case 'strong':
        return '🎯';
      default:
        return '💡';
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center space-x-2">
          <Lightbulb className="w-5 h-5 text-yellow-500" />
          <span className="font-medium text-gray-900">
            Hints Available ({hints.length})
          </span>
          {revealedHints.size > 0 && (
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
              {revealedHints.size} used
            </span>
          )}
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>

      {isExpanded && (
        <div className="px-4 pb-4 space-y-3">
          <p className="text-sm text-gray-600">
            Stuck? Use these hints to guide you through the solution. Each hint reveals progressively more information.
          </p>
          
          {hints.map((hint, index) => (
            <div key={hint.id} className="border border-gray-200 rounded-lg">
              <div className={`p-3 border-l-4 ${getLevelColor(hint.level)} rounded-lg`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{getLevelIcon(hint.level)}</span>
                    <span className="font-medium text-sm">
                      Hint {index + 1}: {hint.title}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full border ${getLevelColor(hint.level)}`}>
                      {hint.level}
                    </span>
                  </div>
                  
                  {!revealedHints.has(hint.id) ? (
                    <button
                      onClick={() => handleRevealHint(hint.id)}
                      className="flex items-center space-x-1 px-3 py-1 bg-primary-600 text-white text-sm rounded-md hover:bg-primary-700 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Reveal</span>
                    </button>
                  ) : (
                    <span className="flex items-center space-x-1 text-green-600 text-sm">
                      <EyeOff className="w-4 h-4" />
                      <span>Revealed</span>
                    </span>
                  )}
                </div>
                
                {revealedHints.has(hint.id) && (
                  <div className="mt-3 space-y-2">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {hint.content}
                    </p>
                    
                    {hint.codeExample && (
                      <div className="bg-gray-900 text-gray-100 p-3 rounded-md text-sm font-mono overflow-x-auto">
                        <pre>{hint.codeExample}</pre>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {revealedHints.size === hints.length && hints.length > 0 && (
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-700">
                🎉 You've used all available hints! Try implementing the solution step by step.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Default hints for different scenario types
export const getDefaultHints = (scenarioId: string): Hint[] => {
  const hintsMap: Record<string, Hint[]> = {
    '1': [ // Smart Home Automation
      {
        id: 'hint-1-1',
        level: 'gentle',
        title: 'Think about conditions',
        content: 'Consider what factors determine when lights should be on or off. Time of day and whether someone is home are key factors.'
      },
      {
        id: 'hint-1-2', 
        level: 'medium',
        title: 'Use if-else statements',
        content: 'You\'ll need conditional logic to check the time and occupancy status.',
        codeExample: 'if (time > 6 && time < 22 && isOccupied) {\n  // Turn lights on\n}'
      },
      {
        id: 'hint-1-3',
        level: 'strong',
        title: 'Complete structure',
        content: 'Create a function that takes time and occupancy as parameters and returns the appropriate action.',
        codeExample: 'function controlLights(time, isOccupied) {\n  if (time >= 6 && time <= 22 && isOccupied) {\n    return "lights on";\n  }\n  return "lights off";\n}'
      }
    ],
    '2': [ // E-commerce Order Processing
      {
        id: 'hint-2-1',
        level: 'gentle',
        title: 'Break down the process',
        content: 'Order processing involves multiple steps: validation, inventory check, and payment processing. Handle each step separately.'
      },
      {
        id: 'hint-2-2',
        level: 'medium', 
        title: 'Validation first',
        content: 'Always validate the order data before proceeding. Check if required fields are present and valid.',
        codeExample: 'if (!order.items || order.items.length === 0) {\n  return { success: false, error: "No items" };\n}'
      },
      {
        id: 'hint-2-3',
        level: 'strong',
        title: 'Complete workflow',
        content: 'Use a step-by-step approach with error handling at each stage.',
        codeExample: 'function processOrder(order) {\n  // Step 1: Validate\n  if (!validateOrder(order)) return false;\n  \n  // Step 2: Check inventory\n  if (!checkInventory(order.items)) return false;\n  \n  // Step 3: Process payment\n  return processPayment(order.total);\n}'
      }
    ]
  };

  return hintsMap[scenarioId] || [];
};

export default HintsPanel;
