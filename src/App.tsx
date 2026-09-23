import { useState } from 'react';
import Header from './components/Header';
import Overview from './components/Overview';
import FileTree from './components/FileTree';
import FileAnalysis from './components/FileAnalysis';
import Stats from './components/Stats';
import TechStack from './components/TechStack';
import Assessment from './components/Assessment';

type TabType = 'overview' | 'files' | 'analysis' | 'stats' | 'tech' | 'assessment';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const tabs: { id: TabType; label: string; icon: string }[] = [
    { id: 'overview', label: 'نظرة عامة', icon: 'fa-eye' },
    { id: 'files', label: 'هيكل الملفات', icon: 'fa-folder-tree' },
    { id: 'analysis', label: 'تحليل الملفات', icon: 'fa-magnifying-glass-chart' },
    { id: 'stats', label: 'الإحصائيات', icon: 'fa-chart-pie' },
    { id: 'tech', label: 'التقنيات', icon: 'fa-microchip' },
    { id: 'assessment', label: 'التقييم', icon: 'fa-star-half-stroke' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Header />
      
      {/* Navigation Tabs */}
      <div className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex overflow-x-auto gap-1 py-2 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <i className={`fas ${tab.icon} text-xs`}></i>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'overview' && <Overview />}
        {activeTab === 'files' && <FileTree />}
        {activeTab === 'analysis' && <FileAnalysis />}
        {activeTab === 'stats' && <Stats />}
        {activeTab === 'tech' && <TechStack />}
        {activeTab === 'assessment' && <Assessment />}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>تحليل مستودع <span className="text-blue-400">master1moon/song10</span> — فاست لينك حسابات</p>
          <p className="mt-1">تم التحليل بواسطة الذكاء الاصطناعي</p>
        </div>
      </footer>
    </div>
  );
}
