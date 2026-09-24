import { useState } from 'react';
import Header from './components/Header';
import GitHubSetup from './components/GitHubSetup';
import DownloadSection from './components/DownloadSection';

type TabType = 'github' | 'download';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('github');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Header />
      
      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex gap-1 py-2">
            <button
              onClick={() => setActiveTab('github')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'github'
                  ? 'bg-slate-700 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <i className="fab fa-github text-sm"></i>
              إنشاء مستودع GitHub
            </button>
            <button
              onClick={() => setActiveTab('download')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'download'
                  ? 'bg-green-600 text-white shadow-lg shadow-green-600/25'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <i className="fas fa-download text-sm"></i>
              تنزيل الملفات
            </button>
          </nav>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'github' && <GitHubSetup />}
        {activeTab === 'download' && <DownloadSection />}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>تحويل تطبيق <span className="text-green-400">فاست لينك حسابات</span> إلى APK</p>
          <p className="mt-1">جميع الملفات والأوامر جاهزة للاستخدام</p>
        </div>
      </footer>
    </div>
  );
}
