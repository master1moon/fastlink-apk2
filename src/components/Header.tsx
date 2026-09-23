export default function Header() {
  return (
    <header className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-slate-900"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-blue-500/25">
              <i className="fas fa-code text-4xl text-white"></i>
            </div>
          </div>
          
          {/* Info */}
          <div className="text-center md:text-right flex-1">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-l from-blue-400 to-purple-400 bg-clip-text text-transparent">
                تحليل مستودع GitHub
              </h1>
            </div>
            <p className="text-xl text-slate-300 mb-3">
              master1moon / song10
            </p>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              تطبيق ويب عربي متكامل لإدارة المبيعات والمصروفات والمخزون ومتابعة الديون والمحلات 
              مع تقارير مفصلة للأرباح والخسائر وحساب أرباح الشركاء
            </p>
            
            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-4">
              <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-medium border border-yellow-500/30">
                <i className="fas fa-star ml-1"></i> 0 Stars
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium border border-blue-500/30">
                <i className="fas fa-code-branch ml-1"></i> 1 Branch
              </span>
              <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium border border-green-500/30">
                <i className="fas fa-code-commit ml-1"></i> 1 Commit
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-medium border border-purple-500/30">
                <i className="fas fa-user ml-1"></i> 1 Contributor
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-500/20 text-slate-400 text-xs font-medium border border-slate-500/30">
                <i className="fas fa-calendar ml-1"></i> سبتمبر 2024
              </span>
            </div>
          </div>
          
          {/* GitHub Link */}
          <div className="flex-shrink-0">
            <a
              href="https://github.com/master1moon/song10"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 hover:border-slate-500/50 transition-all duration-200 text-slate-300 hover:text-white"
            >
              <i className="fab fa-github text-xl"></i>
              <span className="font-medium">عرض المستودع</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
