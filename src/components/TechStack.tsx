export default function TechStack() {
  return (
    <div className="space-y-8">
      {/* Main Stack */}
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8 backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
            <i className="fas fa-microchip text-blue-400"></i>
          </span>
          حزمة التقنيات المستخدمة
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Frontend */}
          <div className="bg-slate-900/50 rounded-xl border border-slate-700/30 p-6">
            <h3 className="text-lg font-semibold text-blue-400 mb-4 flex items-center gap-2">
              <i className="fas fa-palette"></i> الواجهة الأمامية
            </h3>
            <div className="space-y-3">
              {[
                { name: 'HTML5', desc: 'هيكل الصفحة', level: 90 },
                { name: 'CSS3 (Custom Properties)', desc: 'أنماط متقدمة + الوضع الداكن', level: 85 },
                { name: 'Bootstrap 5', desc: 'إطار CSS متجاوب', level: 80 },
                { name: 'Font Awesome 6', desc: 'أيقونات الواجهة', level: 70 },
                { name: 'Vanilla JavaScript', desc: 'بدون أي إطار JS', level: 95 },
              ].map((tech, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-300">{tech.name}</span>
                    <span className="text-slate-500">{tech.desc}</span>
                  </div>
                  <div className="w-full bg-slate-700/30 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000" style={{ width: `${tech.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend / Data */}
          <div className="bg-slate-900/50 rounded-xl border border-slate-700/30 p-6">
            <h3 className="text-lg font-semibold text-green-400 mb-4 flex items-center gap-2">
              <i className="fas fa-server"></i> البيانات والتخزين
            </h3>
            <div className="space-y-3">
              {[
                { name: 'LocalStorage', desc: 'تخزين محلي أساسي', level: 90 },
                { name: 'GitHub Gist API', desc: 'مزامنة سحابية', level: 75 },
                { name: 'JSON', desc: 'تنسيق البيانات', level: 95 },
                { name: 'Service Worker', desc: 'عمل بدون اتصال', level: 80 },
                { name: 'PWA Manifest', desc: 'تطبيق ويب تقدمي', level: 85 },
              ].map((tech, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-300">{tech.name}</span>
                    <span className="text-slate-500">{tech.desc}</span>
                  </div>
                  <div className="w-full bg-slate-700/30 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full transition-all duration-1000" style={{ width: `${tech.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Architecture Pattern */}
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8 backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
            <i className="fas fa-project-diagram text-purple-400"></i>
          </span>
          نمط العمارة
        </h2>

        <div className="bg-slate-900/50 rounded-xl border border-slate-700/30 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-500/5 rounded-lg border border-blue-500/20">
              <div className="w-14 h-14 mx-auto rounded-full bg-blue-500/20 flex items-center justify-center mb-3">
                <i className="fas fa-desktop text-blue-400 text-xl"></i>
              </div>
              <h4 className="font-semibold text-white mb-1">Client-Side Only</h4>
              <p className="text-slate-400 text-sm">لا يوجد خادم خلفي — التطبيق يعمل بالكامل في المتصفح</p>
            </div>
            <div className="text-center p-4 bg-green-500/5 rounded-lg border border-green-500/20">
              <div className="w-14 h-14 mx-auto rounded-full bg-green-500/20 flex items-center justify-center mb-3">
                <i className="fas fa-cubes text-green-400 text-xl"></i>
              </div>
              <h4 className="font-semibold text-white mb-1">Modular JS</h4>
              <p className="text-slate-400 text-sm">27 ملف JS منفصل — كل ملف مسؤول عن وظيفة محددة</p>
            </div>
            <div className="text-center p-4 bg-purple-500/5 rounded-lg border border-purple-500/20">
              <div className="w-14 h-14 mx-auto rounded-full bg-purple-500/20 flex items-center justify-center mb-3">
                <i className="fas fa-sync text-purple-400 text-xl"></i>
              </div>
              <h4 className="font-semibold text-white mb-1">Offline-First PWA</h4>
              <p className="text-slate-400 text-sm">يعمل بدون إنترنت مع مزامنة اختيارية عبر GitHub</p>
            </div>
          </div>
        </div>
      </div>

      {/* Data Flow */}
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8 backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
            <i className="fas fa-arrows-spin text-orange-400"></i>
          </span>
          تدفق البيانات
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {[
            { label: 'المستخدم', icon: 'fa-user', color: 'blue' },
            { label: '→', icon: '', color: 'slate', isArrow: true },
            { label: 'واجهة HTML', icon: 'fa-window-maximize', color: 'orange' },
            { label: '→', icon: '', color: 'slate', isArrow: true },
            { label: 'JavaScript', icon: 'fa-code', color: 'yellow' },
            { label: '→', icon: '', color: 'slate', isArrow: true },
            { label: 'LocalStorage', icon: 'fa-database', color: 'green' },
            { label: '⇄', icon: '', color: 'slate', isArrow: true },
            { label: 'GitHub Gist', icon: 'fa-cloud', color: 'purple' },
          ].map((step, idx) => (
            step.isArrow ? (
              <div key={idx} className="text-slate-600 text-2xl hidden md:block">→</div>
            ) : (
              <div key={idx} className="flex flex-col items-center gap-2 bg-slate-900/50 rounded-xl p-4 border border-slate-700/30 min-w-[100px]">
                <i className={`fas ${step.icon} text-${step.color}-400 text-xl`}></i>
                <span className="text-xs text-slate-300 text-center">{step.label}</span>
              </div>
            )
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8 backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center">
            <i className="fas fa-gears text-teal-400"></i>
          </span>
          ميزات تقنية متقدمة
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: 'تشفير البيانات', desc: 'DataEncryption API لحماية التوكنات', icon: 'fa-lock', color: 'red' },
            { title: 'Feature Flags', desc: 'تفعيل/تعطيل الميزات التجريبية', icon: 'fa-flag', color: 'yellow' },
            { title: 'Safe DOM', desc: 'معالجة DOM آمنة ضد XSS', icon: 'fa-shield', color: 'green' },
            { title: 'Smart Cache', desc: 'تخزين مؤقت ذكي للأداء', icon: 'fa-bolt', color: 'cyan' },
            { title: 'Data Validator', desc: 'التحقق من صحة البيانات المدخلة', icon: 'fa-check-double', color: 'blue' },
            { title: 'Sound System', desc: 'نظام أصوات للتفاعلات', icon: 'fa-volume-high', color: 'purple' },
            { title: 'Parity Check', desc: 'فحص تكافؤ البيانات', icon: 'fa-equals', color: 'orange' },
            { title: 'Trash System', desc: 'سلة محذوفات مع استعادة', icon: 'fa-trash-arrow-up', color: 'pink' },
          ].map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
              <span className={`w-9 h-9 rounded-lg bg-${feature.color}-500/20 flex items-center justify-center flex-shrink-0`}>
                <i className={`fas ${feature.icon} text-${feature.color}-400 text-sm`}></i>
              </span>
              <div>
                <h4 className="text-sm font-semibold text-white">{feature.title}</h4>
                <p className="text-xs text-slate-400 mt-0.5">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
