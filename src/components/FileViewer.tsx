import { useState } from 'react';
import { projectFiles } from '../data/files';

export default function FileViewer() {
  const [selectedFile, setSelectedFile] = useState(0);
  const [filter, setFilter] = useState<string>('all');
  const [copied, setCopied] = useState(false);

  const categories = [
    { id: 'all', label: 'الكل', icon: 'fa-layer-group' },
    { id: 'config', label: 'إعدادات', icon: 'fa-gear' },
    { id: 'android', label: 'أندرويد', icon: 'fa-android' },
    { id: 'fix', label: 'تعديلات', icon: 'fa-wrench' },
    { id: 'js', label: 'JavaScript', icon: 'fa-code' },
    { id: 'html', label: 'HTML', icon: 'fa-file-code' },
    { id: 'script', label: 'سكريبتات', icon: 'fa-terminal' },
  ];

  const filteredFiles = filter === 'all' 
    ? projectFiles 
    : projectFiles.filter(f => f.category === filter);

  const currentFile = projectFiles[selectedFile];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentFile.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getLanguageColor = (lang: string) => {
    const colors: Record<string, string> = {
      json: 'text-yellow-400',
      javascript: 'text-yellow-400',
      java: 'text-red-400',
      xml: 'text-orange-400',
      gradle: 'text-blue-400',
      html: 'text-orange-400',
      bash: 'text-green-400',
      batch: 'text-green-400',
      markdown: 'text-blue-400',
      properties: 'text-purple-400',
      proguard: 'text-pink-400',
    };
    return colors[lang] || 'text-slate-400';
  };

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filter === cat.id
                ? 'bg-green-600 text-white'
                : 'bg-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-600/50'
            }`}
          >
            <i className={`fas ${cat.icon} text-[10px]`}></i>
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* File List */}
        <div className="lg:col-span-1 bg-slate-800/50 rounded-xl border border-slate-700/50 p-3">
          <h3 className="text-sm font-semibold text-white mb-2 px-2">الملفات ({filteredFiles.length})</h3>
          <div className="space-y-1 max-h-[60vh] overflow-y-auto">
            {filteredFiles.map((file, idx) => {
              const realIdx = projectFiles.indexOf(file);
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedFile(realIdx)}
                  className={`w-full text-right px-3 py-2 rounded-lg text-xs transition-all ${
                    selectedFile === realIdx
                      ? 'bg-green-600/20 text-green-400 border border-green-500/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <i className={`fas fa-file-code ${getLanguageColor(file.language)} text-[10px]`}></i>
                    <span className="truncate">{file.path}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* File Content */}
        <div className="lg:col-span-3 bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden">
          {/* File Header */}
          <div className="flex items-center justify-between p-3 border-b border-slate-700/50 bg-slate-900/50">
            <div className="flex items-center gap-3">
              <i className={`fas fa-file-code ${getLanguageColor(currentFile.language)}`}></i>
              <div>
                <h3 className="text-sm font-semibold text-white">{currentFile.path}</h3>
                <p className="text-[10px] text-slate-500">{currentFile.description}</p>
              </div>
            </div>
            <button
              onClick={copyToClipboard}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                copied
                  ? 'bg-green-600 text-white'
                  : 'bg-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-600/50'
              }`}
            >
              <i className={`fas ${copied ? 'fa-check' : 'fa-copy'} ml-1`}></i>
              {copied ? 'تم النسخ!' : 'نسخ'}
            </button>
          </div>

          {/* Code Content */}
          <div className="p-4 overflow-x-auto max-h-[60vh] overflow-y-auto">
            <pre className="text-xs leading-relaxed font-mono text-slate-300 whitespace-pre-wrap break-words" dir="ltr">
              <code>{currentFile.content}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
