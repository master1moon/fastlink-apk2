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
      const androidFolder = zip.folder('fastlink-android')!;
      
      // إضافة README
      androidFolder.file('README.md', `# 📱 فاست لينك حسابات - بناء APK

## الخطوات السريعة

### 1. انسخ ملفات التطبيق الأصلي إلى www/
من المستودع: https://github.com/master1moon/song10

### 2. شغّل سكريبت البناء
\`\`\`bash
# Linux/Mac
chmod +x build-android.sh
./build-android.sh

# Windows
build-android.bat
\`\`\`

### 3. ستحصل على APK
\`fastlink-accounts.apk\`

## المتطلبات
- Node.js 18+
- Android Studio
- JDK 17
`);

      // إضافة capacitor.config.json
      const capConfig = projectFiles.find(f => f.path === 'capacitor.config.json');
      if (capConfig) androidFolder.file('capacitor.config.json', capConfig.content);

      // إضافة capacitor-bridge.js
      const bridge = projectFiles.find(f => f.path.includes('capacitor-bridge'));
      if (bridge) androidFolder.file('www/capacitor-bridge.js', bridge.content);

      // إضافة build scripts
      const buildSh = projectFiles.find(f => f.path === 'build-android.sh');
      if (buildSh) androidFolder.file('build-android.sh', buildSh.content);

      const buildBat = projectFiles.find(f => f.path === 'build-android.bat');
      if (buildBat) androidFolder.file('build-android.bat', buildBat.content);

      // إضافة ملفات Android
      const androidFiles = projectFiles.filter(f => f.category === 'android');
      for (const file of androidFiles) {
        androidFolder.file(file.path, file.content);
      }

      // إضافة ملف التعديلات
      androidFolder.file('CHANGES.md', `# التعديلات المطلوبة

## 1. index.html - إصلاح CSP
استبدل CSP الحالي بـ:
\`\`\`html
<meta http-equiv="Content-Security-Policy" 
  content="default-src 'self' https: blob:; 
           script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; 
           style-src 'self' 'unsafe-inline' https:; 
           img-src 'self' https: blob:; 
           font-src 'self' https:; 
           connect-src 'self' https: blob:;">
\`\`\`

## 2. serviceworker.js - إضافة فحص Capacitor
\`\`\`javascript
const isCapacitor = typeof window !== 'undefined' && typeof window.Capacitor !== 'undefined';
if (request.url.startsWith('capacitor://')) return;
\`\`\`

## 3. app.js - إضافة دعم Capacitor
\`\`\`javascript
if (typeof window.Capacitor !== 'undefined') {
  window.Capacitor.Plugins.SplashScreen.hide();
  setupBackButton();
}
\`\`\`
`);

      const blob = await zip.generateAsync({ type: 'blob' });
      saveAs(blob, 'fastlink-android-build.zip');
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 3000);
    } catch (error) {
      console.error('فشل التنزيل:', error);
    }
    setDownloading(false);
  };

  const downloadSingleFile = (file: typeof projectFiles[0]) => {
    const blob = new Blob([file.content], { type: 'text/plain;charset=utf-8' });
    const fileName = file.path.split('/').pop() || file.path;
    saveAs(blob, fileName);
  };

  return (
    <div className="space-y-6">
      {/* Main Download */}
      <div className="bg-gradient-to-l from-green-900/30 to-emerald-900/30 rounded-2xl border border-green-500/20 p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-20 h-20 rounded-2xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
            <i className="fas fa-file-zipper text-green-400 text-3xl"></i>
          </div>
          <div className="flex-1 text-center md:text-right">
            <h2 className="text-2xl font-bold text-white mb-2">تنزيل جميع الملفات</h2>
            <p className="text-slate-300 text-sm mb-4">
              ملف ZIP واحد يحتوي على جميع الملفات المطلوبة لبناء APK
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs text-slate-400">
              <span><i className="fas fa-file text-green-400 ml-1"></i> {projectFiles.length} ملف</span>
              <span><i className="fas fa-folder text-blue-400 ml-1"></i> android/</span>
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
          بعد التنزيل - الخطوات التالية
        </h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3 bg-slate-900/50 rounded-lg p-4">
            <span className="w-7 h-7 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400 text-xs font-bold">1</span>
            <div>
              <h4 className="text-sm font-semibold text-white">استخراج الملف</h4>
              <p className="text-xs text-slate-400 mt-1">استخرج ملف ZIP في مجلد جديد</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-slate-900/50 rounded-lg p-4">
            <span className="w-7 h-7 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 text-green-400 text-xs font-bold">2</span>
            <div>
              <h4 className="text-sm font-semibold text-white">نسخ ملفات التطبيق الأصلي</h4>
              <p className="text-xs text-slate-400 mt-1">انسخ ملفات التطبيق من المستودع الأصلي إلى مجلد <code className="text-blue-400">www/</code></p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-slate-900/50 rounded-lg p-4">
            <span className="w-7 h-7 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 text-yellow-400 text-xs font-bold">3</span>
            <div>
              <h4 className="text-sm font-semibold text-white">تطبيق التعديلات</h4>
              <p className="text-xs text-slate-400 mt-1">طبّق التعديلات المذكورة في CHANGES.md</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-slate-900/50 rounded-lg p-4">
            <span className="w-7 h-7 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 text-purple-400 text-xs font-bold">4</span>
            <div>
              <h4 className="text-sm font-semibold text-white">بناء APK</h4>
              <p className="text-xs text-slate-400 mt-1">شغّل <code className="text-green-400">./build-android.sh</code> وستحصل على APK!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
