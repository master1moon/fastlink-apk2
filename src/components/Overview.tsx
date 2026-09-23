export default function Overview() {
  return (
    <div className="space-y-8">
      {/* Project Summary Card */}
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8 backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
            <i className="fas fa-info-circle text-blue-400"></i>
          </span>
          ملخص المشروع
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/30">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">الاسم</h3>
              <p className="text-slate-300 text-lg">فاست لينك - حسابات</p>
              <p className="text-slate-500 text-sm mt-1">Fast Link - Accounts</p>
            </div>
            
            <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/30">
              <h3 className="text-lg font-semibold text-green-400 mb-2">الوصف</h3>
              <p className="text-slate-300 leading-relaxed">
                تطبيق إدارة المبيعات والمصروفات والمخزون ومتابعة الديون والمحلات 
                وتقارير مفصلة للأرباح والخسائر وحساب أرباح الشركاء
              </p>
            </div>
            
            <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/30">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">الإصدار</h3>
              <p className="text-slate-300 text-lg">01.06</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/30">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">نوع التطبيق</h3>
              <p className="text-slate-300 leading-relaxed">
                Progressive Web App (PWA) — تطبيق ويب تقدمي يعمل بدون اتصال بالإنترنت
              </p>
            </div>
            
            <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/30">
              <h3 className="text-lg font-semibold text-orange-400 mb-2">اللغة</h3>
              <p className="text-slate-300">عربي (RTL) — واجهة مستخدم كاملة من اليمين لليسار</p>
            </div>
            
            <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/30">
              <h3 className="text-lg font-semibold text-pink-400 mb-2">الهدف</h3>
              <p className="text-slate-300 leading-relaxed">
                إدارة شبكة توزيع كروت شحن اتصالات — تتبع المبيعات والديون والمخزون
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8 backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
            <i className="fas fa-list-check text-green-400"></i>
          </span>
          الميزات الرئيسية
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: 'fa-box', color: 'blue', title: 'إدارة الباقات', desc: 'إضافة وتعديل باقات الكروت مع أسعار التجزئة والجملة والموزعين' },
            { icon: 'fa-cubes', color: 'green', title: 'إدارة المخزون', desc: 'تتبع كمية الكروت المتوفرة لكل باقة' },
            { icon: 'fa-store', color: 'purple', title: 'المحلات', desc: 'إدارة البقالات والمحلات مع أنواع أسعار مختلفة' },
            { icon: 'fa-money-bill-wave', color: 'yellow', title: 'المصروفات', desc: 'تسجيل المصروفات مع أنواع قابلة للتخصيص' },
            { icon: 'fa-chart-bar', color: 'pink', title: 'التقارير', desc: 'تقارير مالية شاملة: مبيعات، ديون، أرباح، مقارنة شهرية' },
            { icon: 'fa-users', color: 'cyan', title: 'تقارير الشركاء', desc: 'حساب أرباح الشركاء مع توزيع متساوٍ أو حسب نسب' },
            { icon: 'fa-exchange-alt', color: 'orange', title: 'استيراد/تصدير', desc: 'تصدير واستيراد البيانات بصيغ JSON و Excel و TXT' },
            { icon: 'fa-trash', color: 'red', title: 'سلة المحذوفات', desc: 'استعادة العناصر المحذوفة مع فلترة وبحث' },
            { icon: 'fa-github', color: 'slate', title: 'مزامنة GitHub', desc: 'مزامنة البيانات مع GitHub Gist للنسخ الاحتياطي' },
            { icon: 'fa-moon', color: 'indigo', title: 'الوضع الداكن', desc: 'دعم كامل للوضع الداكن مع تخصيصات متقدمة' },
            { icon: 'fa-wifi', color: 'teal', title: 'يعمل بدون اتصال', desc: 'Service Worker للعمل offline مع تخزين مؤقت ذكي' },
            { icon: 'fa-shield-halved', color: 'emerald', title: 'أمان البيانات', desc: 'تشفير البيانات الحساسة مثل توكنات GitHub' },
          ].map((feature, idx) => (
            <div key={idx} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-200 group">
              <div className="flex items-start gap-3">
                <span className={`w-9 h-9 rounded-lg bg-${feature.color}-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <i className={`fas ${feature.icon} text-${feature.color}-400 text-sm`}></i>
                </span>
                <div>
                  <h3 className="font-semibold text-white text-sm">{feature.title}</h3>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture */}
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8 backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
            <i className="fas fa-sitemap text-purple-400"></i>
          </span>
          البنية المعمارية
        </h2>
        
        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-500/20 flex items-center justify-center mb-3">
                <i className="fas fa-layer-group text-blue-400 text-2xl"></i>
              </div>
              <h3 className="font-semibold text-white mb-2">طبقة العرض</h3>
              <p className="text-slate-400 text-sm">HTML + CSS + Bootstrap 5 مع تصميم RTL كامل ووضع داكن</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-green-500/20 flex items-center justify-center mb-3">
                <i className="fas fa-cogs text-green-400 text-2xl"></i>
              </div>
              <h3 className="font-semibold text-white mb-2">طبقة المنطق</h3>
              <p className="text-slate-400 text-sm">JavaScript خالص مع 27 ملف وحدة منفصلة لكل وظيفة</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-purple-500/20 flex items-center justify-center mb-3">
                <i className="fas fa-database text-purple-400 text-2xl"></i>
              </div>
              <h3 className="font-semibold text-white mb-2">طبقة البيانات</h3>
              <p className="text-slate-400 text-sm">LocalStorage + GitHub Gist API للتخزين السحابي</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
