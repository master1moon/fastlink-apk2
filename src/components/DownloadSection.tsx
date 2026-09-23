import { useState } from 'react';
import { projectFiles } from '../data/files';

export default function DownloadSection() {
  const [downloaded, setDownloaded] = useState<string | null>(null);

  // دالة بسيطة لتنزيل ملف نصي
  const downloadFile = (filename: string, content: string) => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    setDownloaded(filename);
    setTimeout(() => setDownloaded(null), 2000);
  };

  // تنزيل جميع الملفات كـ HTML واحد
  const downloadAllAsHTML = () => {
    let html = `<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
  <meta charset="UTF-8">
  <title>جميع ملفات بناء APK - فاست لينك</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; background: #1a1a1a; color: #fff; direction: rtl; }
    h1 { color: #4ade80; }
    .file { background: #2a2a2a; border: 1px solid #444; border-radius: 8px; margin: 20px 0; padding: 15px; }
    .file h3 { color: #60a5fa; margin-top: 0; }
    .file pre { background: #111; padding: 15px; border-radius: 5px; overflow-x: auto; direction: ltr; text-align: left; }
    .file code { color: #e5e7eb; font-size: 12px; }
    .btn { background: #22c55e; color: white; padding: 8px 16px; border: none; border-radius: 5px; cursor: pointer; margin: 5px; }
    .btn:hover { background: #16a34a; }
    .warning { background: #78350f; border: 1px solid #f59e0b; padding: 15px; border-radius: 8px; margin: 20px 0; }
  </style>
</head>
<body>
  <h1>📱 جميع ملفات بناء APK - فاست لينك حسابات</h1>
  
  <div class="warning">
    <h2>⚠️ تعليمات مهمة</h2>
    <ol>
      <li>انسخ ملفات التطبيق الأصلي من <a href="https://github.com/master1moon/song10" style="color:#60a5fa">المستودع</a> إلى مجلد <code>www/</code></li>
      <li>انسخ كل ملف أدناه إلى المسار المحدد</li>
      <li>شغّل <code>npm install</code> ثم <code>npx cap add android</code></li>
      <li>شغّل <code>./build-android.sh</code> للحصول على APK</li>
    </ol>
  </div>
  
  <h2>📋 الملفات (${projectFiles.length} ملف)</h2>
`;

    projectFiles.forEach((file, idx) => {
      html += `
  <div class="file">
    <h3>${idx + 1}. 📄 ${file.path}</h3>
    <p><strong>الوصف:</strong> ${file.description}</p>
    <p><strong>اللغة:</strong> ${file.language}</p>
    <button class="btn" onclick="copyCode(${idx})">📋 نسخ الكود</button>
    <button class="btn" onclick="downloadCode(${idx})">💾 تنزيل الملف</button>
    <pre><code id="code-${idx}">${escapeHtml(file.content)}</code></pre>
  </div>
`;
    });

    html += `
  <script>
    const files = ${JSON.stringify(projectFiles.map(f => ({ path: f.path, content: f.content })))};
    
    function copyCode(idx) {
      const text = files[idx].content;
      navigator.clipboard.writeText(text).then(() => {
        alert('✅ تم نسخ الكود!');
      });
    }
    
    function downloadCode(idx) {
      const file = files[idx];
      const blob = new Blob([file.content], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = file.path.split('/').pop();
      a.click();
      URL.revokeObjectURL(url);
    }
  </script>
</body>
</html>`;

    downloadFile('جميع-ملفات-APK.html', html);
  };

  // تنزيل ملف README شامل
  const downloadREADME = () => {
    const readme = `# 📱 فاست لينك حسابات - بناء APK

## ⚡ البدء السريع

### المتطلبات:
- Node.js 18+ (https://nodejs.org)
- Android Studio (https://developer.android.com/studio)
- JDK 17 (https://adoptium.net)

### الخطوات:

\`\`\`bash
# 1. انسخ ملفات التطبيق الأصلي إلى www/
# من: https://github.com/master1moon/song10

# 2. ثبّت التبعيات
npm install

# 3. أضف منصة أندرويد
npx cap add android

# 4. انسخ ملفات الويب
mkdir -p www
cp index.html app.js manifest.json serviceworker.js www/
cp -r css fonts icons js www/
cp capacitor-bridge.js www/

# 5.زامن Capacitor
npx cap copy
npx cap sync android

# 6. افتح في Android Studio
npx cap open android

# 7. ابنِ APK من Android Studio
# Build → Build Bundle(s) / APK(s) → Build APK(s)
\`\`\`

## 📂 الملفات المطلوبة

### 1. capacitor.config.json
انسخه إلى جذر المشروع

### 2. package.json  
انسخه إلى جذر المشروع (استبدل الموجود)

### 3. www/capacitor-bridge.js
انسخه إلى مجلد www/

### 4. android/
انسخ مجلد android/ بالكامل إلى جذر المشروع
(سيتم إنشاؤه تلقائياً بعد npx cap add android)

## 🔧 التعديلات المطلوبة

### index.html
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

### serviceworker.js
أضف في البداية:
\`\`\`javascript
const isCapacitor = typeof window !== 'undefined' && typeof window.Capacitor !== 'undefined';
if (request.url.startsWith('capacitor://')) return;
\`\`\`

### app.js
أضف في DOMContentLoaded:
\`\`\`javascript
if (typeof window.Capacitor !== 'undefined') {
  window.Capacitor.Plugins.SplashScreen.hide();
  setupBackButton();
}
\`\`\`

## 📊 الحجم المتوقع
- Debug APK: ~8-12 MB
- Release APK: ~5-8 MB

## ✅ النتيجة
ستحصل على: fastlink-accounts.apk

## 🔗 روابط مفيدة
- المستودع الأصلي: https://github.com/master1moon/song10
- Capacitor: https://capacitorjs.com/docs
- Android: https://developer.android.com/guide
`;
    downloadFile('README-BUILD.md', readme);
  };

  return (
    <div className="space-y-6">
      {/* Main Download Options */}
      <div className="bg-gradient-to-l from-green-900/30 to-emerald-900/30 rounded-2xl border border-green-500/20 p-8">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          <i className="fas fa-download ml-2"></i>
          خيارات التنزيل
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Option 1: HTML File */}
          <button
            onClick={downloadAllAsHTML}
            className={`flex flex-col items-center gap-3 p-6 rounded-xl border-2 transition-all ${
              downloaded === 'جميع-ملفات-APK.html'
                ? 'bg-green-600 border-green-500'
                : 'bg-slate-800/50 border-slate-700/50 hover:border-green-500/50 hover:bg-slate-700/50'
            }`}
          >
            <i className={`fas fa-file-code text-4xl ${downloaded === 'جميع-ملفات-APK.html' ? 'text-white' : 'text-blue-400'}`}></i>
            <div className="text-center">
              <h3 className={`font-bold ${downloaded === 'جميع-ملفات-APK.html' ? 'text-white' : 'text-white'}`}>
                {downloaded === 'جميع-ملفات-APK.html' ? '✅ تم التنزيل!' : 'تنزيل HTML شامل'}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                ملف HTML واحد يحتوي على جميع الملفات مع أزرار نسخ وتنزيل
              </p>
            </div>
          </button>

          {/* Option 2: README */}
          <button
            onClick={downloadREADME}
            className={`flex flex-col items-center gap-3 p-6 rounded-xl border-2 transition-all ${
              downloaded === 'README-BUILD.md'
                ? 'bg-green-600 border-green-500'
                : 'bg-slate-800/50 border-slate-700/50 hover:border-green-500/50 hover:bg-slate-700/50'
            }`}
          >
            <i className={`fas fa-book text-4xl ${downloaded === 'README-BUILD.md' ? 'text-white' : 'text-purple-400'}`}></i>
            <div className="text-center">
              <h3 className={`font-bold ${downloaded === 'README-BUILD.md' ? 'text-white' : 'text-white'}`}>
                {downloaded === 'README-BUILD.md' ? '✅ تم التنزيل!' : 'تنزيل دليل البناء'}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                ملف README شامل بالعربية مع جميع التعليمات
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* Individual Files */}
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <i className="fas fa-files text-blue-400"></i>
          تنزيل ملفات منفردة ({projectFiles.length} ملف)
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-96 overflow-y-auto">
          {projectFiles.map((file, idx) => (
            <button
              key={idx}
              onClick={() => downloadFile(file.path.split('/').pop() || file.path, file.content)}
              className={`flex items-center justify-between bg-slate-900/50 rounded-lg p-3 border transition-all text-right ${
                downloaded === (file.path.split('/').pop() || file.path)
                  ? 'border-green-500 bg-green-600/20'
                  : 'border-slate-700/30 hover:border-slate-600/50 hover:bg-slate-700/30'
              }`}
            >
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <i className="fas fa-file-code text-slate-500 text-xs flex-shrink-0"></i>
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-slate-300 truncate">{file.path}</div>
                  <div className="text-[10px] text-slate-500">{file.language}</div>
                </div>
              </div>
              <div className="flex-shrink-0 mr-2">
                {downloaded === (file.path.split('/').pop() || file.path) ? (
                  <i className="fas fa-check text-green-400"></i>
                ) : (
                  <i className="fas fa-download text-slate-400 text-xs"></i>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <i className="fas fa-info-circle text-yellow-400"></i>
          بعد التنزيل - الخطوات التالية
        </h3>
        
        <div className="space-y-3">
          <div className="flex items-start gap-3 bg-slate-900/50 rounded-lg p-4">
            <span className="w-7 h-7 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400 text-xs font-bold">1</span>
            <div>
              <h4 className="text-sm font-semibold text-white">حمّل ملفات التطبيق الأصلي</h4>
              <p className="text-xs text-slate-400 mt-1">
                من: <a href="https://github.com/master1moon/song10" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">github.com/master1moon/song10</a>
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 bg-slate-900/50 rounded-lg p-4">
            <span className="w-7 h-7 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 text-green-400 text-xs font-bold">2</span>
            <div>
              <h4 className="text-sm font-semibold text-white">انسخ الملفات إلى مجلد www/</h4>
              <p className="text-xs text-slate-400 mt-1">
                انسخ index.html, app.js, css/, js/, icons/ إلى مجلد www/
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 bg-slate-900/50 rounded-lg p-4">
            <span className="w-7 h-7 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 text-yellow-400 text-xs font-bold">3</span>
            <div>
              <h4 className="text-sm font-semibold text-white">نفّذ الأوامر</h4>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                npm install → npx cap add android → npx cap sync
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 bg-slate-900/50 rounded-lg p-4">
            <span className="w-7 h-7 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 text-purple-400 text-xs font-bold">4</span>
            <div>
              <h4 className="text-sm font-semibold text-white">افتح Android Studio وابنِ APK</h4>
              <p className="text-xs text-slate-400 mt-1">
                npx cap open android → Build → Build APK
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// دالة مساعدة لتحويل HTML
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
