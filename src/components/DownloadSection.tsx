export default function DownloadSection() {
  const files = [
    { name: 'capacitor.config.json', path: '/files/capacitor.config.json', desc: 'إعدادات Capacitor الرئيسية' },
    { name: 'package.json', path: '/files/package.json', desc: 'تبعيات المشروع' },
    { name: 'capacitor-bridge.js', path: '/files/capacitor-bridge.js', desc: 'جسر Capacitor' },
    { name: 'build-android.sh', path: '/files/build-android.sh', desc: 'سكريبت بناء Linux/Mac' },
    { name: 'MainActivity.java', path: '/files/MainActivity.java', desc: 'النشاط الرئيسي لأندرويد' },
    { name: 'AndroidManifest.xml', path: '/files/AndroidManifest.xml', desc: 'ملف Manifest لأندرويد' },
    { name: 'strings.xml', path: '/files/strings.xml', desc: 'النصوص بالعربية' },
    { name: 'styles.xml', path: '/files/styles.xml', desc: 'أنماط التطبيق' },
    { name: 'README.md', path: '/files/README.md', desc: 'دليل البناء الشامل' },
  ];

  return (
    <div className="space-y-6">
      {/* روابط مباشرة */}
      <div className="bg-gradient-to-l from-green-900/30 to-emerald-900/30 rounded-2xl border border-green-500/20 p-8">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          <i className="fas fa-download ml-2"></i>
          روابط التنزيل المباشرة
        </h2>
        <p className="text-center text-slate-300 mb-6">
          اضغط على أي رابط لتنزيل الملف مباشرة
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {files.map((file, idx) => (
            <a
              key={idx}
              href={file.path}
              download
              className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-green-500/50 hover:bg-slate-700/50 transition-all group"
            >
              <i className="fas fa-file-code text-blue-400 text-xl"></i>
              <div className="flex-1">
                <div className="font-semibold text-white group-hover:text-green-400 transition-colors">
                  {file.name}
                </div>
                <div className="text-xs text-slate-400">{file.desc}</div>
              </div>
              <i className="fas fa-download text-green-400"></i>
            </a>
          ))}
        </div>
      </div>

      {/* تعليمات */}
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <i className="fas fa-list-ol text-yellow-400"></i>
          الخطوات بعد التنزيل
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
              <p className="text-xs text-slate-400 mt-1 font-mono">
                index.html, app.js, css/, js/, icons/, capacitor-bridge.js
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-slate-900/50 rounded-lg p-4">
            <span className="w-7 h-7 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 text-yellow-400 text-xs font-bold">3</span>
            <div>
              <h4 className="text-sm font-semibold text-white">شغّل الأوامر</h4>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                npm install → npx cap add android → npx cap sync
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-slate-900/50 rounded-lg p-4">
            <span className="w-7 h-7 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 text-purple-400 text-xs font-bold">4</span>
            <div>
              <h4 className="text-sm font-semibold text-white">افتح Android Studio وابنِ APK</h4>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                npx cap open android → Build → Build APK
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* رابط الصفحة الكاملة */}
      <div className="bg-blue-500/10 rounded-2xl border border-blue-500/20 p-6">
        <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
          <i className="fas fa-globe text-blue-400"></i>
          صفحة التنزيل الكاملة
        </h3>
        <p className="text-slate-300 text-sm mb-4">
          افتح هذه الصفحة للحصول على جميع الملفات مع أزرار نسخ وتنزيل:
        </p>
        <a
          href="/download.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all"
        >
          <i className="fas fa-external-link-alt"></i>
          فتح صفحة التنزيل
        </a>
      </div>
    </div>
  );
}
