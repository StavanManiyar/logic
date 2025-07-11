// LogicInput.tsx
// A Component to handle user logic input and display generated code

import React, { useState } from 'react';
import { generateCode, CodeGenerationRequest } from '../services/aiCodeGenerator';

const LogicInput: React.FC = () => {
  const [logic, setLogic] = useState('');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const request: CodeGenerationRequest = {
        logic,
        language: 'javascript'
      };
      const response = await generateCode(request);
      setCode(response.code);
    } catch (error) {
      console.error('Error generating code', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="logic-input-container">
      <textarea
        value={logic}
        onChange={(e) => setLogic(e.target.value)}
        placeholder="Enter your logic here..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
        rows={4}
      />
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="bg-blue-500 text-white py-2 px-4 rounded disabled:opacity-50"
      >
        {loading ? 'Generating...' : 'Generate Code'}
      </button>
      {code && (
        <pre className="mt-4 bg-gray-100 p-4 rounded">
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
};

export default LogicInput;
