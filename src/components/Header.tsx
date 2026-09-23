export default function Header() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-blue-900/20 to-slate-900"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-2xl shadow-green-500/25">
              <i className="fab fa-android text-4xl text-white"></i>
            </div>
          </div>
          
          {/* Info */}
          <div className="text-center md:text-right flex-1">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-l from-green-400 to-emerald-300 bg-clip-text text-transparent mb-2">
              تحويل فاست لينك حسابات إلى APK
            </h1>
            <p className="text-slate-300 text-sm md:text-base">
              دليل شامل لتحويل تطبيق الويب إلى تطبيق أندرويد قابل للتثبيت باستخدام Capacitor
            </p>
            
            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-3">
              <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium border border-green-500/30">
                <i className="fab fa-android ml-1"></i> Android APK
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium border border-blue-500/30">
                <i className="fas fa-bolt ml-1"></i> Capacitor 5
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-medium border border-purple-500/30">
                <i className="fas fa-mobile-screen ml-1"></i> PWA → Native
              </span>
              <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-medium border border-orange-500/30">
                <i className="fas fa-check-circle ml-1"></i> جاهز للتنزيل
              </span>
            </div>
          </div>
          
          {/* GitHub Link */}
          <div className="flex-shrink-0">
            <a
              href="https://github.com/master1moon/song10"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 hover:border-slate-500/50 transition-all text-slate-300 hover:text-white text-sm"
            >
              <i className="fab fa-github text-lg"></i>
              <span>المستودع الأصلي</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
