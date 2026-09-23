import { useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { projectFiles } from '../data/files';

export default function DownloadSection() {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const downloadAll = async () => {
    setDownloading(true);
    try {
      const zip = new JSZip();
      
      // إضافة جميع ملفات المشروع
      for (const file of projectFiles) {
        // تخطي ملفات HTML المعدلة (هي فقط للتوضيح)
        if (file.path.includes('(snippet)') || file.path.includes('(المُصلَح)')) continue;
        zip.file(file.path, file.content);
      }
      
      // إضافة README
      const readme = `# 📱 فاست لينك حسابات - تطبيق أندرويد

## ما هذا؟
هذا ملف ZIP يحتوي على جميع الملفات المطلوبة لتحويل تطبيق "فاست لينك حسابات" إلى تطبيق أندرويد APK.

## المحتوى
- \`capacitor.config.json\` - إعدادات Capacitor
- \`package.json\` - تبعيات المشروع
- \`capacitor-bridge.js\` - جسر Capacitor
- \`build-android.sh\` - سكريبت بناء (Linux/Mac)
- \`build-android.bat\` - سكريبت بناء (Windows)
- \`android/\` - ملفات مشروع أندرويد
- \`README-BUILD.md\` - دليل البناء التفصيلي

## خطوات سريعة
\`\`\`bash
# 1. انسخ ملفات التطبيق الأصلي (من المستودع) إلى مجلد www/
# 2. شغّل:
npm install
npx cap add android
npx cap copy
npx cap sync android
npx cap open android
# 3. في Android Studio: Build → Build APK
\`\`\`

## المتطلبات
- Node.js 18+
- Android Studio
- JDK 17

## الدعم
المستودع الأصلي: https://github.com/master1moon/song10
`;
      zip.file('README.md', readme);
      
      const blob = await zip.generateAsync({ type: 'blob' });
      saveAs(blob, 'fastlink-android-apk.zip');
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 3000);
    } catch (error) {
      console.error('فشل التنزيل:', error);
    }
    setDownloading(false);
  };

  const downloadSingleFile = (file: typeof projectFiles[0]) => {
    const blob = new Blob([file.content], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, file.path.replace(/\//g, '_'));
  };

  return (
    <div className="space-y-6">
      {/* Main Download Card */}
      <div className="bg-gradient-to-l from-green-900/30 to-emerald-900/30 rounded-2xl border border-green-500/20 p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-20 h-20 rounded-2xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
            <i className="fas fa-file-zipper text-green-400 text-3xl"></i>
          </div>
          <div className="flex-1 text-center md:text-right">
            <h2 className="text-2xl font-bold text-white mb-2">تنزيل جميع الملفات</h2>
            <p className="text-slate-300 text-sm mb-4">
              ملف ZIP واحد يحتوي على جميع ملفات Capacitor والسكريبتات اللازمة لبناء APK
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs text-slate-400">
              <span><i className="fas fa-file text-green-400 ml-1"></i> {projectFiles.length} ملف</span>
              <span><i className="fas fa-folder text-blue-400 ml-1"></i> android/</span>
              <span><i className="fas fa-file-code text-yellow-400 ml-1"></i> capacitor.config.json</span>
              <span><i className="fas fa-terminal text-purple-400 ml-1"></i> build scripts</span>
            </div>
          </div>
          <button
            onClick={downloadAll}
            disabled={downloading}
            className={`flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all ${
              downloaded
                ? 'bg-green-600 shadow-lg shadow-green-600/25'
                : downloading
                ? 'bg-slate-600 cursor-wait'
                : 'bg-green-600 hover:bg-green-500 shadow-lg shadow-green-600/25 hover:shadow-green-500/30 hover:scale-105'
            }`}
          >
            {downloaded ? (
              <>
                <i className="fas fa-check"></i>
                <span>تم التنزيل!</span>
              </>
            ) : downloading ? (
              <>
                <i className="fas fa-spinner fa-spin"></i>
                <span>جاري التحضير...</span>
              </>
            ) : (
              <>
                <i className="fas fa-download"></i>
                <span>تنزيل ZIP</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Individual Files */}
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <i className="fas fa-files text-blue-400"></i>
          تنزيل ملفات منفردة
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {projectFiles.map((file, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-slate-900/50 rounded-lg p-3 border border-slate-700/30 hover:border-slate-600/50 transition-all group"
            >
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <i className="fas fa-file-code text-slate-500 text-xs flex-shrink-0"></i>
                <span className="text-xs text-slate-300 truncate">{file.path}</span>
              </div>
              <button
                onClick={() => downloadSingleFile(file)}
                className="flex-shrink-0 px-2 py-1 rounded text-[10px] font-medium bg-slate-700/50 text-slate-400 hover:text-white hover:bg-green-600 transition-all opacity-0 group-hover:opacity-100"
              >
                <i className="fas fa-download ml-1"></i>
                تنزيل
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <i className="fas fa-book text-purple-400"></i>
          تعليمات ما بعد التنزيل
        </h3>

        <div className="space-y-4">
          <div className="flex items-start gap-3 bg-slate-900/50 rounded-lg p-4">
            <span className="w-7 h-7 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400 text-xs font-bold">1</span>
            <div>
              <h4 className="text-sm font-semibold text-white">استخراج الملف</h4>
              <p className="text-xs text-slate-400 mt-1">استخرج ملف ZIP في مجلد التطبيق الأصلي (song10)</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 bg-slate-900/50 rounded-lg p-4">
            <span className="w-7 h-7 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 text-green-400 text-xs font-bold">2</span>
            <div>
              <h4 className="text-sm font-semibold text-white">نسخ ملفات الويب</h4>
              <p className="text-xs text-slate-400 mt-1">انسخ ملفات التطبيق الأصلي (index.html, app.js, js/, css/, etc.) إلى مجلد <code className="text-blue-400">www/</code></p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 bg-slate-900/50 rounded-lg p-4">
            <span className="w-7 h-7 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 text-yellow-400 text-xs font-bold">3</span>
            <div>
              <h4 className="text-sm font-semibold text-white">تطبيق التعديلات</h4>
              <p className="text-xs text-slate-400 mt-1">طبّق التعديلات المذكورة على index.html و serviceworker.js و app.js</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 bg-slate-900/50 rounded-lg p-4">
            <span className="w-7 h-7 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 text-purple-400 text-xs font-bold">4</span>
            <div>
              <h4 className="text-sm font-semibold text-white">بناء APK</h4>
              <p className="text-xs text-slate-400 mt-1">شغّل <code className="text-green-400">npm install</code> ثم <code className="text-green-400">npx cap add android</code> ثم افتح Android Studio وابنِ APK</p>
            </div>
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <i className="fas fa-clipboard-check text-orange-400"></i>
          المتطلبات قبل البدء
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: 'Node.js 18+', link: 'https://nodejs.org', icon: 'fa-node-js', color: 'green' },
            { name: 'Android Studio', link: 'https://developer.android.com/studio', icon: 'fa-android', color: 'blue' },
            { name: 'JDK 17', link: 'https://adoptium.net', icon: 'fa-java', color: 'red' },
            { name: 'Git', link: 'https://git-scm.com', icon: 'fa-code-branch', color: 'orange' },
          ].map((req, idx) => (
            <a
              key={idx}
              href={req.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-slate-900/50 rounded-lg p-3 border border-slate-700/30 hover:border-slate-600/50 transition-all group"
            >
              <i className={`fab ${req.icon} text-${req.color}-400 text-xl`}></i>
              <div>
                <div className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">{req.name}</div>
                <div className="text-[10px] text-slate-500">{req.link}</div>
              </div>
              <i className="fas fa-external-link-alt text-slate-600 text-xs mr-auto"></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
