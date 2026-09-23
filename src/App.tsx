import { useState } from 'react';
import Header from './components/Header';
import Explanation from './components/Explanation';
import Steps from './components/Steps';
import FilesList from './components/FilesList';
import DownloadSection from './components/DownloadSection';

type TabType = 'explanation' | 'steps' | 'files' | 'download';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('explanation');

  const tabs: { id: TabType; label: string; icon: string }[] = [
    { id: 'explanation', label: 'التوضيح المهم', icon: 'fa-circle-info' },
    { id: 'steps', label: 'خطوات البناء', icon: 'fa-list-ol' },
    { id: 'files', label: 'الملفات الجاهزة', icon: 'fa-file-code' },
    { id: 'download', label: 'تنزيل الملفات', icon: 'fa-download' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Header />
      
      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex overflow-x-auto gap-1 py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-green-600 text-white shadow-lg shadow-green-600/25'
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
        {activeTab === 'explanation' && <Explanation />}
        {activeTab === 'steps' && <Steps />}
        {activeTab === 'files' && <FilesList />}
        {activeTab === 'download' && <DownloadSection />}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>تحويل تطبيق <span className="text-green-400">فاست لينك حسابات</span> إلى تطبيق أندرويد</p>
          <p className="mt-1">جميع الملفات جاهزة للتنزيل والبناء</p>
        </div>
      </footer>
    </div>
  );
}
