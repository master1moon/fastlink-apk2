export default function Explanation() {
  return (
    <div className="space-y-6">
      {/* Important Notice */}
      <div className="bg-gradient-to-l from-yellow-900/30 to-orange-900/30 rounded-2xl border border-yellow-500/20 p-8">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
            <i className="fas fa-exclamation-triangle text-yellow-400 text-2xl"></i>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">توضيح مهم جداً</h2>
            <div className="text-slate-300 leading-relaxed space-y-3">
              <p className="text-lg">
                <span className="text-yellow-400 font-semibold">لا يمكنني بناء ملف APK فعلي</span> في بيئة العمل الحالية.
              </p>
              <p className="text-sm">
                السبب: بناء APK يتطلب أدوات غير متوفرة في هذه البيئة:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-400 mr-4">
                <li>Android SDK (~2GB)</li>
                <li>JDK 17 (Java Development Kit)</li>
                <li>Gradle Build System</li>
                <li>وقت بناء 5-10 دقائق</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* What I Can Do */}
      <div className="bg-gradient-to-l from-green-900/30 to-emerald-900/30 rounded-2xl border border-green-500/20 p-8">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
            <i className="fas fa-check-circle text-green-400 text-2xl"></i>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">لكن يمكنني تقديم الحل الكامل!</h2>
            <div className="text-slate-300 leading-relaxed space-y-3">
              <p className="text-lg">
                <span className="text-green-400 font-semibold">✅ تم إنشاء جميع الملفات المطلوبة</span> لتحويل التطبيق إلى APK.
              </p>
              <p className="text-sm">
                ما تم إنجازه (15 ملف جاهز):
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/30">
                  <div className="flex items-center gap-2 text-sm">
                    <i className="fas fa-check text-green-400"></i>
                    <span className="text-white font-medium">ملفات Capacitor كاملة</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">capacitor.config.json + package.json</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/30">
                  <div className="flex items-center gap-2 text-sm">
                    <i className="fas fa-check text-green-400"></i>
                    <span className="text-white font-medium">ملفات Android كاملة</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">Manifest + MainActivity + Resources</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/30">
                  <div className="flex items-center gap-2 text-sm">
                    <i className="fas fa-check text-green-400"></i>
                    <span className="text-white font-medium">سكريبتات بناء تلقائية</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">build-android.sh + build-android.bat</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/30">
                  <div className="flex items-center gap-2 text-sm">
                    <i className="fas fa-check text-green-400"></i>
                    <span className="text-white font-medium">دليل شامل بالعربية</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">README.md + QUICK-START.md</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What You Need To Do */}
      <div className="bg-gradient-to-l from-blue-900/30 to-cyan-900/30 rounded-2xl border border-blue-500/20 p-8">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
            <i className="fas fa-user-cog text-blue-400 text-2xl"></i>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">ما تحتاج إلى فعله</h2>
            <div className="text-slate-300 leading-relaxed space-y-3">
              <p className="text-lg">
                <span className="text-blue-400 font-semibold">3 خطوات بسيطة</span> للحصول على APK:
              </p>
              <div className="space-y-4 mt-4">
                <div className="flex items-start gap-3 bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                  <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400 font-bold">1</span>
                  <div>
                    <h3 className="font-semibold text-white text-sm">تحميل ملفات التطبيق الأصلي</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      من المستودع: <code className="text-blue-400">github.com/master1moon/song10</code>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                  <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400 font-bold">2</span>
                  <div>
                    <h3 className="font-semibold text-white text-sm">نسخ الملفات إلى مجلد www/</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      انسخ index.html, app.js, css/, js/, icons/ إلى مجلد www/
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                  <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400 font-bold">3</span>
                  <div>
                    <h3 className="font-semibold text-white text-sm">تشغيل سكريبت البناء</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      <code className="text-green-400">./build-android.sh</code> (Linux/Mac) أو <code className="text-green-400">build-android.bat</code> (Windows)
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                <p className="text-green-400 font-semibold text-sm">
                  ✅ النتيجة: ستحصل على ملف <code>fastlink-accounts.apk</code> جاهز للتثبيت!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alternative: PWA */}
      <div className="bg-gradient-to-l from-purple-900/30 to-pink-900/30 rounded-2xl border border-purple-500/20 p-8">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
            <i className="fas fa-lightbulb text-purple-400 text-2xl"></i>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">💡 بديل أسهل: PWA</h2>
            <div className="text-slate-300 leading-relaxed space-y-3">
              <p className="text-lg">
                <span className="text-purple-400 font-semibold">لا تحتاج APK أصلاً!</span> يمكنك تثبيت التطبيق كتطبيق PWA.
              </p>
              <p className="text-sm">
                مميزات PWA:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-400 mr-4">
                <li>✅ تثبيت فوري من المتصفح (بدون APK)</li>
                <li>✅ يعمل بدون إنترنت</li>
                <li>✅ يظهر كتطبيق مستقل على الشاشة الرئيسية</li>
                <li>✅ حجم أصغر (~2MB بدلاً من 8-12MB)</li>
                <li>✅ تحديثات تلقائية</li>
              </ul>
              <div className="mt-4 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <p className="text-purple-400 font-semibold text-sm">
                  🎉 الطريقة: افتح التطبيق في Chrome → القائمة (⋮) → "إضافة إلى الشاشة الرئيسية"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
