import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Copy, Check, Play } from 'lucide-react';

interface CodeEditorProps {
  code: string;
  language: 'python' | 'javascript';
  readOnly?: boolean;
  height?: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  code,
  language,
  readOnly = true,
  height = '400px'
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy code:', error);
    }
  };

  const handleRun = () => {
    // This would integrate with a code execution service in a real app
    console.log('Running code:', code);
  };

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      <div className="bg-gray-50 px-4 py-2 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">
            {language === 'python' ? 'Python' : 'JavaScript'}
          </span>
          <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">
            {readOnly ? 'Read-only' : 'Editable'}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleCopy}
            className="flex items-center space-x-1 px-3 py-1 text-xs bg-gray-200 hover:bg-gray-300 rounded transition-colors"
          >
            {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
          <button
            onClick={handleRun}
            className="flex items-center space-x-1 px-3 py-1 text-xs bg-primary-600 text-white hover:bg-primary-700 rounded transition-colors"
          >
            <Play className="h-3 w-3" />
            <span>Run</span>
          </button>
        </div>
      </div>
      <Editor
        height={height}
        language={language}
        value={code}
        options={{
          readOnly,
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          folding: false,
          scrollBeyondLastLine: false,
          wordWrap: 'on',
          theme: 'vs-light',
        }}
      />
    </div>
  );
};

export default CodeEditor;