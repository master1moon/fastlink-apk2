import { useState } from 'react';
import { buildSteps } from '../data/files';

export default function Steps() {
  const [expandedStep, setExpandedStep] = useState<number | null>(0);

  return (
    <div className="space-y-6">
      {/* Info Banner */}
      <div className="bg-gradient-to-l from-green-900/30 to-blue-900/30 rounded-2xl border border-green-500/20 p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
            <i className="fas fa-rocket text-green-400 text-xl"></i>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-2">خطوات تحويل التطبيق إلى APK</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              اتبع هذه الخطوات بالترتيب لتحويل تطبيق فاست لينك حسابات إلى تطبيق أندرويد قابل للتثبيت.
              ستحتاج إلى <span className="text-green-400">Node.js 18+</span> و <span className="text-blue-400">Android Studio</span> مثبتين على جهازك.
            </p>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-3">
        {buildSteps.map((step, idx) => (
          <div
            key={idx}
            className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden backdrop-blur-sm"
          >
            {/* Step Header */}
            <button
              onClick={() => setExpandedStep(expandedStep === idx ? null : idx)}
              className="w-full flex items-center gap-4 p-4 text-right hover:bg-slate-700/30 transition-all"
            >
              {/* Step Number */}
              <div className={`w-10 h-10 rounded-full bg-${step.color}-500/20 border-2 border-${step.color}-500/50 flex items-center justify-center flex-shrink-0`}>
                <span className={`text-${step.color}-400 font-bold text-sm`}>{step.step}</span>
              </div>
              
              {/* Step Info */}
              <div className="flex-1 text-right">
                <h3 className="font-semibold text-white text-sm">{step.title}</h3>
                <p className="text-slate-400 text-xs mt-0.5">{step.description}</p>
              </div>
              
              {/* Icon */}
              <i className={`fas ${step.icon} text-${step.color}-400`}></i>
              
              {/* Expand Arrow */}
              <i className={`fas fa-chevron-down text-slate-500 text-xs transition-transform ${expandedStep === idx ? 'rotate-180' : ''}`}></i>
            </button>
            
            {/* Step Content */}
            {expandedStep === idx && (
              <div className="px-4 pb-4 border-t border-slate-700/30">
                <div className="bg-slate-900/70 rounded-lg p-4 mt-3 font-mono text-sm">
                  {step.commands.map((cmd, cmdIdx) => (
                    <div key={cmdIdx} className="flex items-start gap-2 mb-1">
                      {cmd.startsWith('#') ? (
                        <span className="text-slate-500 text-xs">{cmd}</span>
                      ) : cmd === '' ? (
                        <span className="h-3"></span>
                      ) : (
                        <>
                          <span className="text-green-400 select-none">$</span>
                          <span className="text-slate-300">{cmd}</span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Quick Start */}
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <i className="fas fa-bolt text-yellow-400"></i>
          طريقة سريعة (أمر واحد)
        </h3>
        <div className="bg-slate-900/70 rounded-lg p-4 font-mono text-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-green-400">$</span>
            <span className="text-slate-300">bash build-android.sh</span>
          </div>
          <p className="text-slate-500 text-xs mt-2">
            * تأكد من إعطاء صلاحية التنفيذ: <code className="text-blue-400">chmod +x build-android.sh</code>
          </p>
        </div>
      </div>
    </div>
  );
}
