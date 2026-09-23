export default function Assessment() {
  const scores = [
    { category: 'البنية المعمارية', score: 7, max: 10, color: 'green', desc: 'فصل جيد للوحدات، لكن بدون إطار JS منظم' },
    { category: 'جودة الكود', score: 6, max: 10, color: 'yellow', desc: 'كود مقروء مع تعليقات، لكن بعض التكرار' },
    { category: 'الأمان', score: 7, max: 10, color: 'green', desc: 'تشفير + Safe DOM + CSP، لكن CSP في وضع المراقبة' },
    { category: 'الأداء', score: 8, max: 10, color: 'green', desc: 'Service Worker + Smart Cache + Offline-first' },
    { category: 'تجربة المستخدم', score: 8, max: 10, color: 'green', desc: 'تصميم متجاوب + وضع داكن + اختصارات + إشعارات' },
    { category: 'قابلية الصيانة', score: 5, max: 10, color: 'orange', desc: 'ملفات منفصلة لكن HTML كبير جداً' },
    { category: 'التوثيق', score: 6, max: 10, color: 'yellow', desc: 'تعليقات JSDoc + annotate_functions.py' },
    { category: 'الاكتمال', score: 9, max: 10, color: 'green', desc: 'تطبيق شامل يغطي جميع احتياجات العمل' },
  ];

  const recommendations = [
    {
      priority: 'عالية',
      priorityColor: 'red',
      title: 'تقسيم index.html',
      desc: 'نقل CSS المدمج (~800 سطر) إلى ملفات منفصلة. نقل HTML إلى قوالب أو مكونات.',
      effort: 'متوسط',
    },
    {
      priority: 'عالية',
      priorityColor: 'red',
      title: 'استخدام إطار JavaScript',
      desc: 'الانتقال من Vanilla JS إلى React أو Vue لإدارة أفضل للحالة والمكونات.',
      effort: 'عالي',
    },
    {
      priority: 'متوسطة',
      priorityColor: 'yellow',
      title: 'تحسين معالجة الأخطاء',
      desc: 'إزالة try/catch الفارغة وإضافة رسائل خطأ واضحة للمستخدم.',
      effort: 'منخفض',
    },
    {
      priority: 'متوسطة',
      priorityColor: 'yellow',
      title: 'تفعيل CSP',
      desc: 'نقل Content-Security-Policy من Report-Only إلى وضع التنفيذ الفعلي.',
      effort: 'متوسط',
    },
    {
      priority: 'متوسطة',
      priorityColor: 'yellow',
      title: 'إضافة اختبارات',
      desc: 'إضافة Unit Tests و Integration Tests لضمان جودة الكود.',
      effort: 'عالي',
    },
    {
      priority: 'منخفضة',
      priorityColor: 'green',
      title: 'تحسين التوثيق',
      desc: 'إضافة README.md شامل + JSDoc مفصل + أمثلة استخدام.',
      effort: 'منخفض',
    },
    {
      priority: 'منخفضة',
      priorityColor: 'green',
      title: 'تحديث Service Worker',
      desc: 'إضافة آلية تحديث ذكية للكاش + Background Sync.',
      effort: 'متوسط',
    },
    {
      priority: 'منخفضة',
      priorityColor: 'green',
      title: 'إضافة TypeScript',
      desc: 'الانتقال التدريجي إلى TypeScript لتحسين الأمان النوعي.',
      effort: 'عالي',
    },
  ];

  const totalScore = scores.reduce((sum, s) => sum + s.score, 0);
  const maxTotal = scores.reduce((sum, s) => sum + s.max, 0);
  const percentage = Math.round((totalScore / maxTotal) * 100);

  return (
    <div className="space-y-8">
      {/* Overall Score */}
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8 backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
            <i className="fas fa-star-half-stroke text-yellow-400"></i>
          </span>
          التقييم العام
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Score Circle */}
          <div className="relative w-48 h-48 flex-shrink-0">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" fill="none" stroke="rgb(51, 65, 85)" strokeWidth="8" />
              <circle
                cx="50" cy="50" r="42" fill="none"
                stroke="url(#scoreGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${percentage * 2.64} ${264 - percentage * 2.64}`}
              />
              <defs>
                <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold text-white">{percentage}%</span>
              <span className="text-sm text-slate-400">التقييم العام</span>
            </div>
          </div>

          {/* Score Breakdown */}
          <div className="flex-1 w-full">
            <div className="space-y-3">
              {scores.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-36 text-sm text-slate-300 flex-shrink-0">{item.category}</div>
                  <div className="flex-1 bg-slate-700/30 rounded-full h-5 overflow-hidden">
                    <div
                      className={`h-full bg-${item.color}-500 rounded-full flex items-center justify-center transition-all duration-1000`}
                      style={{ width: `${(item.score / item.max) * 100}%` }}
                    >
                      <span className="text-xs font-bold text-white">{item.score}/{item.max}</span>
                    </div>
                  </div>
                  <div className="w-48 text-xs text-slate-500 hidden lg:block">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SWOT Analysis */}
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8 backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
            <i className="fas fa-chess text-purple-400"></i>
          </span>
          تحليل SWOT
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-500/5 rounded-xl border border-green-500/20 p-5">
            <h3 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
              <i className="fas fa-arrow-up"></i> نقاط القوة (Strengths)
            </h3>
            <ul className="space-y-2 text-sm text-green-300/80">
              <li>• تطبيق PWA كامل يعمل بدون إنترنت</li>
              <li>• تصميم عربي RTL شامل ومتجاوب</li>
              <li>• وضع داكن متكامل مع تخصيصات</li>
              <li>• فصل منطقي في 27 ملف JS</li>
              <li>• نظام أمان وتشفير</li>
              <li>• تقارير مالية شاملة</li>
              <li>• مزامنة سحابية عبر GitHub</li>
            </ul>
          </div>
          <div className="bg-red-500/5 rounded-xl border border-red-500/20 p-5">
            <h3 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
              <i className="fas fa-arrow-down"></i> نقاط الضعف (Weaknesses)
            </h3>
            <ul className="space-y-2 text-sm text-red-300/80">
              <li>• HTML ضخم جداً (~80KB)</li>
              <li>• CSS مدمج يصعب صيانته</li>
              <li>• لا يوجد إطار JS (Vanilla فقط)</li>
              <li>• لا يوجد نظام بناء (Build System)</li>
              <li>• لا يوجد اختبارات</li>
              <li>• بعض try/catch فارغة</li>
              <li>• لا يوجد CI/CD</li>
            </ul>
          </div>
          <div className="bg-blue-500/5 rounded-xl border border-blue-500/20 p-5">
            <h3 className="text-blue-400 font-semibold mb-3 flex items-center gap-2">
              <i className="fas fa-lightbulb"></i> الفرص (Opportunities)
            </h3>
            <ul className="space-y-2 text-sm text-blue-300/80">
              <li>• سوق كبير للتطبيقات المحاسبية العربية</li>
              <li>• إمكانية إضافة ميزات AI</li>
              <li>• تحويل إلى تطبيق موبايل (Capacitor)</li>
              <li>• إضافة اشتراكات متعددة</li>
              <li>• تكامل مع أنظمة دفع</li>
              <li>• إصدار نسخة SaaS</li>
            </ul>
          </div>
          <div className="bg-orange-500/5 rounded-xl border border-orange-500/20 p-5">
            <h3 className="text-orange-400 font-semibold mb-3 flex items-center gap-2">
              <i className="fas fa-exclamation-triangle"></i> التهديدات (Threats)
            </h3>
            <ul className="space-y-2 text-sm text-orange-300/80">
              <li>• منافسة من تطبيقات محاسبية كبيرة</li>
              <li>• مخاطر أمان التخزين المحلي</li>
              <li>• صعوبة التوسع بدون إطار JS</li>
              <li>• اعتماد على CDN خارجي</li>
              <li>• محدودية LocalStorage (5-10MB)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8 backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
            <i className="fas fa-list-check text-cyan-400"></i>
          </span>
          التوصيات والتحسينات
        </h2>

        <div className="space-y-3">
          {recommendations.map((rec, idx) => (
            <div key={idx} className="flex items-start gap-4 bg-slate-900/50 rounded-xl p-4 border border-slate-700/30">
              <span className={`px-2 py-1 rounded text-xs font-bold bg-${rec.priorityColor}-500/20 text-${rec.priorityColor}-400 border border-${rec.priorityColor}-500/30 whitespace-nowrap`}>
                {rec.priority}
              </span>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-white">{rec.title}</h4>
                <p className="text-xs text-slate-400 mt-1">{rec.desc}</p>
              </div>
              <span className="text-xs text-slate-500 whitespace-nowrap">جهد: {rec.effort}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Final Verdict */}
      <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl border border-blue-500/20 p-8 backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <span className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
            <i className="fas fa-gavel text-blue-400"></i>
          </span>
          الخلاصة النهائية
        </h2>
        
        <div className="text-slate-300 leading-relaxed space-y-3">
          <p>
            مستودع <span className="text-blue-400 font-semibold">song10</span> يحتوي على تطبيق ويب عربي متكامل لإدارة شبكة توزيع كروت شحن اتصالات. 
            التطبيق يتميز بكونه <span className="text-green-400">PWA كامل</span> يعمل بدون اتصال بالإنترنت، مع واجهة مستخدم عربية احترافية 
            ودعم شامل للوضع الداكن.
          </p>
          <p>
            من الناحية التقنية، المشروع يستخدم <span className="text-yellow-400">Vanilla JavaScript</span> مع فصل منطقي جيد في 27 ملف، 
            لكنه يفتقر إلى إطار عمل منظم ونظام بناء. الحجم الكبير لملف HTML (~80KB) مع CSS مدمج يمثل التحدي الأكبر للصيانة.
          </p>
          <p>
            التطبيق <span className="text-green-400 font-semibold">شامل ومكتمل</span> من ناحية الميزات ويغطي جميع احتياجات العمل، 
            مع اهتمام واضح بالأمان (تشفير، Safe DOM) والأداء (Service Worker، Smart Cache). 
            التحسين الأهم المطلوب هو <span className="text-orange-400">إعادة هيكلة الواجهة الأمامية</span> باستخدام إطار حديث مثل React أو Vue.
          </p>
          <p className="text-lg font-semibold text-white pt-2">
            التقييم النهائي: <span className="text-blue-400">{percentage}%</span> — مشروع جيد مع إمكانيات تطوير كبيرة 🚀
          </p>
        </div>
      </div>
    </div>
  );
}
