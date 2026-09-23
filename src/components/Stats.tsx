export default function Stats() {
  const languages = [
    { name: 'JavaScript', percent: 67.8, color: 'bg-yellow-400', files: 28 },
    { name: 'HTML', percent: 30, color: 'bg-orange-400', files: 1 },
    { name: 'CSS', percent: 1.7, color: 'bg-pink-400', files: 1 },
    { name: 'Python', percent: 0.5, color: 'bg-green-400', files: 1 },
  ];

  const metrics = [
    { label: 'إجمالي الملفات', value: '37', icon: 'fa-file', color: 'blue' },
    { label: 'ملفات JavaScript', value: '27', icon: 'fa-file-code', color: 'yellow' },
    { label: 'ملفات JSON', value: '2', icon: 'fa-database', color: 'cyan' },
    { label: 'ملفات Python', value: '1', icon: 'fa-file-code', color: 'green' },
    { label: 'ملفات HTML', value: '1', icon: 'fa-file-code', color: 'orange' },
    { label: 'ملفات CSS', value: '1', icon: 'fa-paint-brush', color: 'pink' },
    { label: 'أيقونات', value: '9', icon: 'fa-image', color: 'purple' },
    { label: 'Service Worker', value: '1', icon: 'fa-wifi', color: 'teal' },
  ];

  const sections = [
    { name: 'لوحة التحكم', icon: 'fa-home', items: 'إحصائيات + اختصارات' },
    { name: 'الباقات والأسعار', icon: 'fa-box', items: 'جدول + نموذج إضافة' },
    { name: 'كمية الكروت', icon: 'fa-cubes', items: 'جدول + نموذج إضافة' },
    { name: 'البقالات والمحلات', icon: 'fa-store', items: 'قائمة + تفاصيل + كشف حساب' },
    { name: 'المصروفات', icon: 'fa-money-bill-wave', items: 'جدول + أنواع + فلترة' },
    { name: 'التقارير', icon: 'fa-chart-bar', items: '5 أنواع تقارير' },
    { name: 'الاستيراد والتصدير', icon: 'fa-exchange-alt', items: 'JSON + Excel + TXT' },
    { name: 'سلة المحذوفات', icon: 'fa-trash', items: 'فلترة + بحث + استعادة' },
    { name: 'الإعدادات', icon: 'fa-cog', items: '9 تبويبات إعدادات' },
    { name: 'حول التطبيق', icon: 'fa-info-circle', items: 'معلومات المطور' },
  ];

  return (
    <div className="space-y-8">
      {/* Language Distribution */}
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8 backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
            <i className="fas fa-chart-pie text-blue-400"></i>
          </span>
          توزيع اللغات
        </h2>

        {/* Bar chart */}
        <div className="space-y-4">
          {languages.map((lang) => (
            <div key={lang.name} className="flex items-center gap-4">
              <div className="w-28 text-sm text-slate-300 font-medium">{lang.name}</div>
              <div className="flex-1 bg-slate-700/30 rounded-full h-8 overflow-hidden">
                <div
                  className={`h-full ${lang.color} rounded-full flex items-center justify-end px-3 transition-all duration-1000`}
                  style={{ width: `${lang.percent}%` }}
                >
                  <span className="text-xs font-bold text-slate-900">{lang.percent}%</span>
                </div>
              </div>
              <div className="w-16 text-xs text-slate-500 text-left">{lang.files} ملف</div>
            </div>
          ))}
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8 backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
            <i className="fas fa-calculator text-green-400"></i>
          </span>
          إحصائيات الملفات
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric, idx) => (
            <div key={idx} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/30 text-center hover:border-slate-600/50 transition-all">
              <i className={`fas ${metric.icon} text-${metric.color}-400 text-xl mb-2`}></i>
              <div className="text-2xl font-bold text-white">{metric.value}</div>
              <div className="text-xs text-slate-400 mt-1">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* App Sections */}
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8 backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
            <i className="fas fa-th-large text-purple-400"></i>
          </span>
          أقسام التطبيق (10 أقسام)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {sections.map((section, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-slate-900/50 rounded-lg p-3 border border-slate-700/30">
              <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <i className={`fas ${section.icon} text-blue-400 text-sm`}></i>
              </span>
              <div>
                <div className="text-sm font-medium text-white">{section.name}</div>
                <div className="text-xs text-slate-500">{section.items}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CDN Dependencies */}
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8 backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
            <i className="fas fa-cloud text-orange-400"></i>
          </span>
          المكتبات الخارجية (CDN)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { name: 'Bootstrap 5.3.0', desc: 'إطار CSS', icon: 'fa-bootstrap', color: 'purple' },
            { name: 'Font Awesome 6.4.0', desc: 'أيقونات', icon: 'fa-font-awesome', color: 'blue' },
            { name: 'SheetJS (XLSX) 0.18.5', desc: 'تصدير Excel', icon: 'fa-file-excel', color: 'green' },
            { name: 'Moment.js 2.29.4', desc: 'معالجة التواريخ', icon: 'fa-clock', color: 'cyan' },
            { name: 'jsPDF 2.5.1', desc: 'تصدير PDF', icon: 'fa-file-pdf', color: 'red' },
            { name: 'jsPDF-AutoTable 3.8.4', desc: 'جداول PDF', icon: 'fa-table', color: 'orange' },
            { name: 'html2pdf.js 0.10.1', desc: 'HTML إلى PDF', icon: 'fa-file-export', color: 'pink' },
          ].map((lib, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-slate-900/50 rounded-lg p-3 border border-slate-700/30">
              <i className={`fas ${lib.icon} text-${lib.color}-400`}></i>
              <div>
                <div className="text-sm font-medium text-white">{lib.name}</div>
                <div className="text-xs text-slate-500">{lib.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
