import React, { useState } from 'react';
import { Code2, Play, BookOpen, Trash2, Copy, Check, Sparkles, AlertCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const LANGUAGES = [
  'Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'C', 'C#', 'Go', 'Rust', 'PHP'
];

const EXPLAIN_STYLES = [
  { id: 'summary', label: 'Overview Summary' },
  { id: 'line-by-line', label: 'Line-by-Line Breakdown' },
  { id: 'beginner', label: 'Beginner Friendly (Analogy)' }
];

export default function App() {
  const [code, setCode] = useState<string>('// Paste your code here...\nfunction calculateSum(a, b) {\n    return a + b;\n}');
  const [language, setLanguage] = useState<string>('JavaScript');
  const [explainStyle, setExplainStyle] = useState<string>('summary');
  const [output, setOutput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'review' | 'explain'>('review');

  const handleAction = async (endpoint: 'review' | 'explain') => {
    if (!code.trim()) return;
    setLoading(true);
    setActiveTab(endpoint === 'review' ? 'review' : 'explain');
    
    try {
      // Include the chosen explainStyle option inside the network request body
      const bodyPayload = endpoint === 'review' 
        ? { code, language } 
        : { code, language, style: explainStyle };

      const response = await fetch(`http://127.0.0.1:8000/api/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyPayload),
      });
      
      const data = await response.json();
      if (response.ok) {
        setOutput(endpoint === 'review' ? data.analysis : data.explanation);
      } else {
        setOutput(`### ❌ Error\n${data.detail || 'Something went wrong.'}`);
      }
    } catch (err) {
      setOutput('### ❌ Connection Error\nCould not reach the AI backend. Make sure your Python backend is running on port 8000.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f19]">
      {/* Top Header Toolbar */}
      <header className="border-b border-gray-800 bg-[#111827] px-6 py-4 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-600/20 text-indigo-400 rounded-lg border border-indigo-500/30">
            <Code2 className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              VERTEX <span className="text-xs bg-indigo-500/20 text-indigo-400 border border-indigo-500/40 px-2 py-0.5 rounded-full font-mono">AI Code Reviewer</span>
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Language Selector */}
          <select 
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-[#1f2937] text-gray-200 border border-gray-700 rounded-lg px-3 py-2 text-sm font-medium focus:outline-none focus:border-indigo-500 cursor-pointer"
          >
            {LANGUAGES.map((lang) => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>

          {/* Explanation Style Dropdown Option Menu */}
          <select 
            value={explainStyle}
            onChange={(e) => setExplainStyle(e.target.value)}
            className="bg-[#1f2937] text-emerald-400 border border-emerald-900/50 rounded-lg px-3 py-2 text-sm font-medium focus:outline-none focus:border-emerald-500 cursor-pointer font-mono"
          >
            {EXPLAIN_STYLES.map((style) => (
              <option key={style.id} value={style.id}>{style.label}</option>
            ))}
          </select>

          <button
            onClick={copyToClipboard}
            className="p-2 bg-[#1f2937] hover:bg-[#374151] border border-gray-700 text-gray-300 rounded-lg transition-colors"
            title="Copy Code"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setCode('')}
            className="p-2 bg-[#1f2937] hover:bg-rose-950/40 border border-gray-700 hover:border-rose-900 text-gray-300 hover:text-rose-400 rounded-lg transition-colors"
            title="Clear Editor"
          >
            <Trash2 className="w-4 h-4" />
          </button>

          <div className="h-6 w-[1px] bg-gray-800 mx-1" />

          <button
            onClick={() => handleAction('review')}
            disabled={loading}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 text-white font-medium text-sm px-4 py-2 rounded-lg shadow-md hover:shadow-indigo-500/20 transition-all cursor-pointer"
          >
            <Play className="w-4 h-4 fill-current" />
            Analyze Code
          </button>

          <button
            onClick={() => handleAction('explain')}
            disabled={loading}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-800 text-white font-medium text-sm px-4 py-2 rounded-lg shadow-md hover:shadow-emerald-500/20 transition-all cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            Explain Logic
          </button>
        </div>
      </header>

      {/* Main Workspace Layout */}
      <main className="flex-1 flex overflow-hidden">
        {/* Left Side: Code Input Area */}
        <div className="w-1/2 border-r border-gray-800 flex flex-col bg-[#0e1422]">
          <div className="px-4 py-2 bg-[#111827]/50 border-b border-gray-800/80 text-xs font-mono text-gray-400 tracking-wider flex justify-between items-center">
            <span>SOURCE_EDITOR.{language.toUpperCase()}</span>
            <span className="text-indigo-400 font-semibold">Active Mode</span>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="flex-1 p-6 font-mono text-sm bg-transparent text-gray-100 outline-none resize-none leading-relaxed"
            placeholder="// Drop your functions, modules or logic blocks right here..."
          />
        </div>

        {/* Right Side: AI Insights Dashboard */}
        <div className="w-1/2 flex flex-col bg-[#0b0f19]">
          <div className="px-4 bg-[#111827]/50 border-b border-gray-800 flex items-center justify-between">
            <div className="flex gap-4">
              <button 
                onClick={() => setActiveTab('review')}
                className={`py-3 text-xs font-mono font-bold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${activeTab === 'review' ? 'border-indigo-500 text-indigo-400' : 'border-transparent text-gray-400 hover:text-gray-200'}`}
              >
                🔎 Review Report
              </button>
              <button 
                onClick={() => setActiveTab('explain')}
                className={`py-3 text-xs font-mono font-bold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${activeTab === 'explain' ? 'border-emerald-500 text-emerald-400' : 'border-transparent text-gray-400 hover:text-gray-200'}`}
              >
                💡 AI Explanations
              </button>
            </div>
            {loading && (
              <span className="text-xs text-indigo-400 flex items-center gap-1.5 animate-pulse font-mono">
                <Sparkles className="w-3.5 h-3.5 animate-spin" /> Gathering Insights...
              </span>
            )}
          </div>

          <div className="flex-1 p-6 overflow-y-auto prose prose-invert max-w-none text-gray-300">
            {output ? (
              <div className="markdown-body space-y-4">
                <ReactMarkdown>{output}</ReactMarkdown>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 text-gray-500 border border-dashed border-gray-800 rounded-xl m-4">
                <AlertCircle className="w-8 h-8 text-gray-600 mb-2" />
                <p className="text-sm max-w-sm">
                  Your review panel is idle. Paste your source script on the left workspace and hit <span className="text-indigo-400 font-medium">Analyze Code</span> or select a format and click <span className="text-emerald-400 font-medium">Explain Logic</span>.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}