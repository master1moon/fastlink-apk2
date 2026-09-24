import { useState } from 'react';
import { projectFiles } from '../data/files';

export default function FilesList() {
  const [selectedFile, setSelectedFile] = useState(0);
  const [copied, setCopied] = useState(false);

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

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      config: 'fa-gear',
      android: 'fa-android',
      fix: 'fa-wrench',
      js: 'fa-code',
      html: 'fa-file-code',
      script: 'fa-terminal',
    };
    return icons[category] || 'fa-file';
  };

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      config: 'إعدادات',
      android: 'أندرويد',
      fix: 'تعديلات',
      js: 'JavaScript',
      html: 'HTML',
      script: 'سكريبتات',
    };
    return labels[category] || category;
  };

  return (
    <div className="space-y-6">
      {/* Summary */}
      <div className="bg-gradient-to-l from-green-900/30 to-emerald-900/30 rounded-2xl border border-green-500/20 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">الملفات الجاهزة</h2>
            <p className="text-slate-300 text-sm">
              جميع الملفات المطلوبة لتحويل التطبيق إلى APK أندرويد
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400">{projectFiles.length}</div>
            <div className="text-xs text-slate-400">ملف جاهز</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* File List */}
        <div className="lg:col-span-1 bg-slate-800/50 rounded-xl border border-slate-700/50 p-3">
          <h3 className="text-sm font-semibold text-white mb-2 px-2">قائمة الملفات</h3>
          <div className="space-y-1 max-h-[60vh] overflow-y-auto">
            {projectFiles.map((file, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedFile(idx)}
                className={`w-full text-right px-3 py-2 rounded-lg text-xs transition-all ${
                  selectedFile === idx
                    ? 'bg-green-600/20 text-green-400 border border-green-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <i className={`fas ${getCategoryIcon(file.category)} ${getLanguageColor(file.language)} text-[10px]`}></i>
                  <span className="truncate flex-1">{file.path}</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  {getCategoryLabel(file.category)}
                </div>
              </button>
            ))}
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

      {/* File Categories */}
      <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6">
        <h3 className="text-lg font-bold text-white mb-4">تصنيف الملفات</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {['config', 'android', 'fix', 'js', 'html', 'script'].map((category) => {
            const count = projectFiles.filter(f => f.category === category).length;
            return (
              <div key={category} className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/30">
                <div className="flex items-center gap-2">
                  <i className={`fas ${getCategoryIcon(category)} text-${category === 'config' ? 'blue' : category === 'android' ? 'green' : category === 'fix' ? 'yellow' : category === 'js' ? 'yellow' : category === 'html' ? 'orange' : 'purple'}-400`}></i>
                  <span className="text-sm font-medium text-white">{getCategoryLabel(category)}</span>
                </div>
                <div className="text-2xl font-bold text-slate-300 mt-1">{count}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
