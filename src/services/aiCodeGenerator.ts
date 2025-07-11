// AI Code Generation Service
// This service handles the translation of natural language logic into code

export interface CodeGenerationRequest {
  logic: string;
  language: 'javascript' | 'python' | 'java' | 'typescript';
  context?: string;
  style?: 'functional' | 'oop' | 'procedural';
}

export interface CodeGenerationResponse {
  code: string;
  explanation: string;
  suggestions: string[];
  confidence: number;
}

// Mock AI responses for different scenarios
const mockResponses: Record<string, CodeGenerationResponse> = {
  'weather_decision': {
    code: `function decideClothing(weather) {
  if (weather === 'sunny') {
    return 'wear light clothes and sunglasses';
  } else if (weather === 'rainy') {
    return 'wear raincoat and carry umbrella';
  } else if (weather === 'cold') {
    return 'wear warm jacket and gloves';
  } else {
    return 'check weather forecast';
  }
}`,
    explanation: 'This function takes weather as input and returns appropriate clothing advice using if-else conditional statements.',
    suggestions: [
      'Add temperature ranges for more precise decisions',
      'Consider seasonal variations',
      'Include indoor/outdoor activity context'
    ],
    confidence: 0.92
  },
  'book_organization': {
    code: `class BookOrganizer {
  constructor() {
    this.books = [];
  }

  addBook(title, author, genre) {
    this.books.push({ title, author, genre, id: Date.now() });
  }

  organizeByGenre() {
    return this.books.reduce((organized, book) => {
      if (!organized[book.genre]) {
        organized[book.genre] = [];
      }
      organized[book.genre].push(book);
      return organized;
    }, {});
  }

  findBooks(searchTerm) {
    return this.books.filter(book => 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}`,
    explanation: 'This class provides a complete book organization system with methods to add books, organize by genre, and search functionality.',
    suggestions: [
      'Add sorting by publication date',
      'Implement reading status tracking',
      'Add ISBN validation'
    ],
    confidence: 0.88
  },
  'loop_example': {
    code: `// Print numbers 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Alternative with while loop
let counter = 1;
while (counter <= 10) {
  console.log(counter);
  counter++;
}

// Using array methods
const numbers = Array.from({length: 10}, (_, i) => i + 1);
numbers.forEach(num => console.log(num));`,
    explanation: 'Three different approaches to iterate through numbers 1-10: for loop, while loop, and array methods.',
    suggestions: [
      'Consider performance implications',
      'Use forEach for functional programming style',
      'Add break conditions for complex logic'
    ],
    confidence: 0.95
  },
  // Traffic Light Controller
  'traffic_light': {
    code: `function controlTrafficLight(color) {
  switch (color) {
    case 'red':
      return 'Stop';
    case 'yellow':
      return 'Ready';
    case 'green':
      return 'Go';
    default:
      return 'Invalid color';
  }
}`,
    explanation: 'Controls traffic light signals using a switch-case structure.',
    suggestions: [
      'Add pedestrian crossing signals',
      'Implement timers for each state',
      'Connect with actual sensor inputs'
    ],
    confidence: 0.90
  },
  
  // Shopping Cart System
  'shopping_cart': {
    code: `class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item, price) {
    this.items.push({ item, price });
  }

  removeItem(item) {
    this.items = this.items.filter(i => i.item !== item);
  }

  calculateTotal() {
    return this.items.reduce((total, item) => total + item.price, 0).toFixed(2);
  }
}

// Usage example
const cart = new ShoppingCart();
cart.addItem('Apple', 1.25);
cart.addItem('Banana', 0.75);
cart.removeItem('Apple');
console.log('Total:', cart.calculateTotal());`,
    explanation: 'A simple shopping cart implementation with add, remove, and calculate functionalities.',
    suggestions: [
      'Add discounts and promotions',
      'Include quantity for each item',
      'Connect with payment gateway'
    ],
    confidence: 0.93
  },

  // Temperature Conversion
  'temperature_conversion': {
    code: `function convertTemperature(value, scale) {
  if (scale === 'C') {
    return (value - 32) * 5/9;
  } else if (scale === 'F') {
    return (value * 9/5) + 32;
  } else {
    return 'Invalid scale';
  }
}

// Example usage
console.log('32F in Celsius:', convertTemperature(32, 'C'));
console.log('0C in Fahrenheit:', convertTemperature(0, 'F'));`,
    explanation: 'Converts temperatures between Celsius and Fahrenheit using if-else logic.',
    suggestions: [
      'Add Kelvin conversion',
      'Include range validations',
      'Formatting results to one decimal place'
    ],
    confidence: 0.89
  }
};

// Advanced AI code generation with pattern matching
export const generateCode = async (request: CodeGenerationRequest): Promise<CodeGenerationResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

  const logic = request.logic.toLowerCase();
  
  // Pattern matching for different types of logic
  if (logic.includes('weather') || logic.includes('clothing')) {
    return adaptCodeForLanguage(mockResponses.weather_decision, request.language);
  }
  
  if (logic.includes('book') || logic.includes('organize') || logic.includes('library')) {
    return adaptCodeForLanguage(mockResponses.book_organization, request.language);
  }
  
  if (logic.includes('loop') || logic.includes('repeat') || logic.includes('iterate')) {
    return adaptCodeForLanguage(mockResponses.loop_example, request.language);
  }

  if (logic.includes('traffic') || logic.includes('light') || logic.includes('signal')) {
    return adaptCodeForLanguage(mockResponses.traffic_light, request.language);
  }
  
  if (logic.includes('cart') || logic.includes('shopping') || logic.includes('purchase')) {
    return adaptCodeForLanguage(mockResponses.shopping_cart, request.language);
  }
  
  if (logic.includes('temperature') || logic.includes('convert') || logic.includes('celsius')) {
    return adaptCodeForLanguage(mockResponses.temperature_conversion, request.language);
  }

  // Dynamic code generation based on keywords
  if (logic.includes('if') || logic.includes('condition')) {
    return generateConditionalCode(request);
  }

  if (logic.includes('function') || logic.includes('method')) {
    return generateFunctionCode(request);
  }

  if (logic.includes('array') || logic.includes('list')) {
    return generateArrayCode(request);
  }

  // Default response
  return generateGenericCode(request);
};

// Adapt code for different programming languages
const adaptCodeForLanguage = (response: CodeGenerationResponse, language: string): CodeGenerationResponse => {
  let adaptedCode = response.code;
  
  switch (language) {
    case 'python':
      adaptedCode = convertToPython(response.code);
      break;
    case 'java':
      adaptedCode = convertToJava(response.code);
      break;
    case 'typescript':
      adaptedCode = convertToTypeScript(response.code);
      break;
    default:
      // Keep JavaScript as default
      break;
  }
  
  return {
    ...response,
    code: adaptedCode
  };
};

const convertToPython = (jsCode: string): string => {
  // Basic JavaScript to Python conversion
  return jsCode
    .replace(/function\s+(\w+)\s*\(/g, 'def $1(')
    .replace(/\{/g, ':')
    .replace(/\}/g, '')
    .replace(/let\s+|const\s+|var\s+/g, '')
    .replace(/===|==/g, '==')
    .replace(/console\.log\(/g, 'print(')
    .replace(/;/g, '');
};

const convertToJava = (jsCode: string): string => {
  return `public class Example {
    ${jsCode.replace(/function\s+(\w+)/g, 'public static $1')}
}`;
};

const convertToTypeScript = (jsCode: string): string => {
  return jsCode
    .replace(/function\s+(\w+)\s*\(/g, 'function $1(')
    .replace(/(\w+):/g, '$1: string') // Simple type annotation
    + '\n\n// TypeScript version with basic type annotations';
};

// Generate specific types of code based on logic patterns
const generateConditionalCode = (_request: CodeGenerationRequest): CodeGenerationResponse => {
  const code = `function makeDecision(condition: boolean) {
  if (condition) {
    // Execute this logic when condition is true
    return "Condition met";
  } else {
    // Execute this logic when condition is false
    return "Condition not met";
  }
}

// Example usage
const result = makeDecision(true);
console.log(result);`;

  return {
    code,
    explanation: 'Basic conditional logic structure using if-else statements.',
    suggestions: [
      'Add multiple conditions with else if',
      'Consider switch statements for multiple values',
      'Use ternary operator for simple conditions'
    ],
    confidence: 0.85
  };
};

const generateFunctionCode = (_request: CodeGenerationRequest): CodeGenerationResponse => {
  const code = `// Function declaration
function calculateSum(a, b) {
  return a + b;
}

// Arrow function
const multiply = (x, y) => x * y;

// Function with default parameters
function greet(name = "World") {
  return \`Hello, \${name}!\`;
}

// Example usage
console.log(calculateSum(5, 3));
console.log(multiply(4, 6));
console.log(greet("Alice"));`;

  return {
    code,
    explanation: 'Different ways to define and use functions in JavaScript.',
    suggestions: [
      'Add parameter validation',
      'Consider async functions for operations that take time',
      'Use JSDoc comments for better documentation'
    ],
    confidence: 0.90
  };
};

const generateArrayCode = (_request: CodeGenerationRequest): CodeGenerationResponse => {
  const code = `// Array operations
const numbers = [1, 2, 3, 4, 5];

// Filter even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);

// Map to double each number
const doubled = numbers.map(num => num * 2);

// Reduce to sum all numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);

// Find specific element
const found = numbers.find(num => num > 3);

console.log('Even numbers:', evenNumbers);
console.log('Doubled:', doubled);
console.log('Sum:', sum);
console.log('First number > 3:', found);`;

  return {
    code,
    explanation: 'Common array operations including filter, map, reduce, and find methods.',
    suggestions: [
      'Use forEach for side effects',
      'Consider performance for large arrays',
      'Add error handling for empty arrays'
    ],
    confidence: 0.88
  };
};

const generateGenericCode = (request: CodeGenerationRequest): CodeGenerationResponse => {
  const code = `// Generated code based on your logic: "${request.logic}"
function processLogic() {
  // TODO: Implement your specific logic here
  console.log("Processing: ${request.logic}");
  
  // Example structure
  try {
    // Your main logic implementation
    const result = performOperation();
    return result;
  } catch (error) {
    console.error('Error processing logic:', error);
    return null;
  }
}

function performOperation() {
  // Placeholder for your specific operation
  return "Operation completed";
}

// Execute the logic
const result = processLogic();
console.log('Result:', result);`;

  return {
    code,
    explanation: 'Generic code structure that can be adapted for your specific logic requirements.',
    suggestions: [
      'Replace placeholder functions with actual implementation',
      'Add specific error handling for your use case',
      'Consider breaking down complex logic into smaller functions'
    ],
    confidence: 0.70
  };
};

// Real-time code refinement
export const refineCode = async (originalCode: string, feedback: string): Promise<CodeGenerationResponse> => {
  // Simulate refinement delay
  await new Promise(resolve => setTimeout(resolve, 800));

  const refinedCode = `// Refined based on feedback: "${feedback}"
${originalCode}

// Additional improvements:
// - Added error handling
// - Improved readability
// - Added comments for clarity`;

  return {
    code: refinedCode,
    explanation: `Code refined based on your feedback: ${feedback}`,
    suggestions: [
      'Test the refined code thoroughly',
      'Consider edge cases',
      'Add unit tests'
    ],
    confidence: 0.85
  };
};

// Code explanation service
export const explainCode = async (_code: string): Promise<string> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return `This code demonstrates:
1. Function definition and structure
2. Variable declarations and assignments
3. Control flow (if/else statements, loops)
4. Data manipulation and processing
5. Error handling and logging

The code follows best practices for readability and maintainability.`;
};
