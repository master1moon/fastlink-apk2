import { useState } from 'react';
import Header from './components/Header';
import Steps from './components/Steps';
import ChangesList from './components/ChangesList';
import FileViewer from './components/FileViewer';
import DownloadSection from './components/DownloadSection';

type TabType = 'steps' | 'changes' | 'files' | 'download';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('steps');

  const tabs: { id: TabType; label: string; icon: string }[] = [
    { id: 'steps', label: 'خطوات البناء', icon: 'fa-list-ol' },
    { id: 'changes', label: 'التعديلات المطلوبة', icon: 'fa-pen-to-square' },
    { id: 'files', label: 'عرض الملفات', icon: 'fa-file-code' },
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
        {activeTab === 'steps' && <Steps />}
        {activeTab === 'changes' && <ChangesList />}
        {activeTab === 'files' && <FileViewer />}
        {activeTab === 'download' && <DownloadSection />}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>تحويل تطبيق <span className="text-green-400">فاست لينك حسابات</span> إلى تطبيق أندرويد APK</p>
          <p className="mt-1">باستخدام Capacitor 5 — جميع الملفات جاهزة للتنزيل</p>
        </div>
      </footer>
    </div>
  );
}
