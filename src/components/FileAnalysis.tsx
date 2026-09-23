import { useState } from 'react';

interface FileDetail {
  name: string;
  path: string;
  language: string;
  langColor: string;
  description: string;
  details: string[];
  issues?: string[];
  strengths?: string[];
  codeSnippet?: string;
}

const files: FileDetail[] = [
  {
    name: 'index.html',
    path: '/',
    language: 'HTML/CSS',
    langColor: 'bg-orange-500',
    description: 'الصفحة الرئيسية للتطبيق — تحتوي على كامل هيكل HTML وأنماط CSS المدمجة',
    details: [
      'تطبيق ويب عربي كامل بتقنية RTL',
      'يستخدم Bootstrap 5 للإطار الأساسي',
      'CSS مدمج (~800 سطر) مع دعم كامل للوضع الداكن',
      'شاشة ترحيب (Splash Screen) مع تأثيرات حركية',
      'قائمة جانبية مع 10 أقسام رئيسية',
      'دعم PWA مع manifest.json',
      'نظام إشعارات مخصص',
      'اختصارات سريعة للعمليات الشائعة',
      'درج جوال (Mobile Drawer) للشاشات الصغيرة',
      'نظام فلترة متقدم مع قوائم منسدلة',
      'كشف حساب تفاعلي للمحلات',
      'تقارير الشركاء مع نظام توزيع الأرباح',
    ],
    strengths: [
      'تصميم متجاوب كامل (Responsive)',
      'دعم الوضع الداكن شامل',
      'أداء جيد مع CSS variables',
      'تخصيصات متعددة (كثافة، أحجام خطوط، أوزان)',
    ],
    issues: [
      'حجم كبير جداً (~80KB) — يجب تقسيم CSS إلى ملفات منفصلة',
      'CSS مدمج في HTML مما يصعب الصيانة',
      'بعض الأنماط مكررة',
      'CSP في وضع المراقبة فقط (Report-Only)',
    ],
  },
  {
    name: 'app.js',
    path: '/',
    language: 'JavaScript',
    langColor: 'bg-yellow-500',
    description: 'نظام مزامنة GitHub — يتعامل مع إعدادات GitHub وGist API',
    details: [
      'إدارة إعدادات GitHub (Token, Gist ID, FileName)',
      'تحميل/حفظ الإعدادات مع تشفير اختياري',
      'إنشاء Gist جديد على GitHub',
      'رفع البيانات الحالية إلى Gist',
      'تحميل البيانات من Gist وتحديث الواجهة',
      'اختبار الاتصال بـ GitHub',
      'تسجيل Service Worker',
      'واجهة GithubSync عامة للاستخدام من الإعدادات',
    ],
    strengths: [
      'دعم التشفير للبيانات الحساسة',
      'معالجة أخطاء شاملة',
      'واجهة نظيفة (GithubSync API)',
      'ترحيل تلقائي من التخزين العادي إلى المشفر',
    ],
    issues: [
      'بعض try/catch فارغة تتجاهل الأخطاء',
      'لا يوجد تحقق من صلاحية التوكن',
      'لا يوجد معالجة لانتهاء صلاحية التوكن',
      'لا يوجد تحقق من حجم البيانات قبل الرفع',
    ],
  },
  {
    name: 'serviceworker.js',
    path: '/',
    language: 'JavaScript',
    langColor: 'bg-yellow-500',
    description: 'Service Worker — نظام العمل بدون اتصال بالإنترنت',
    details: [
      'استراتيجية Cache-First للموارد الثابتة',
      'تخزين مسبق للموارد الحرجة (20+ ملف)',
      'تخزين مسبق لموارد CDN (Bootstrap, FontAwesome, XLSX, Moment, jsPDF)',
      'تنظيف الكاش القديم عند التفعيل',
      'دعم التنقل بدون اتصال (Navigation fallback)',
      'قائمة بيضاء لنطاقات CDN المسموحة',
      'skipWaiting + clients.claim لتحديث فوري',
    ],
    strengths: [
      'استراتيجية ذكية للتخزين المؤقت',
      'قائمة بيضاء لنطاقات CDN',
      'معالجة أخطاء جيدة',
      'دعم التحديث التلقائي',
    ],
    issues: [
      'يجب تغيير CACHE_NAME يدوياً عند التحديث',
      'لا يدعم مزامنة البيانات في الخلفية',
      'لا يعطي تحديثات للمستخدم عن حالة الاتصال',
    ],
  },
  {
    name: 'manifest.json',
    path: '/',
    language: 'JSON',
    langColor: 'bg-cyan-500',
    description: 'إعدادات Progressive Web App',
    details: [
      'اسم التطبيق: فاست لينك - حسابات',
      'وضع العرض: standalone (تطبيق مستقل)',
      'ألوان: خلفية #575657، سمة #575657',
      '9 أيقونات بأحجام مختلفة (16px إلى 512px)',
      'أيقونات maskable للتطبيق',
      'اتجاه: portrait-primary',
    ],
    strengths: ['إعدادات PWA كاملة', 'أيقونات متعددة الأحجام'],
    issues: ['لا يوجد وصف مختصر (short_name) بالعربية'],
  },
  {
    name: 'network-cards.json',
    path: '/',
    language: 'JSON',
    langColor: 'bg-cyan-500',
    description: 'هيكل البيانات الافتراضي للتطبيق',
    details: [
      '6 أقسام رئيسية: packages, inventory, stores, expenses, sales, payments',
      'جميعها مصفوفات فارغة في الوضع الافتراضي',
      'يُستخدم كقالب للبيانات الجديدة',
    ],
    strengths: ['هيكل بيانات نظيف ومنظم'],
    issues: ['لا يوجد حقل partners لتقارير الشركاء', 'لا يوجد حقل trash لسلة المحذوفات'],
  },
  {
    name: 'annotate_functions.py',
    path: '/',
    language: 'Python',
    langColor: 'bg-green-500',
    description: 'سكربت Python لإضافة تعليقات JSDoc تلقائياً للدوال في ملفات JS',
    details: [
      'يستخدم regex للكشف عن أنماط دوال متعددة',
      'يدعم: function, async function, arrow functions, methods',
      'يتحقق من وجود تعليق موجود قبل الإضافة',
      'يتجاهل المجلدات: node_modules, .git, build, dist',
      'يضيف تعليقات عربية تلقائية',
    ],
    strengths: [
      'أداة مفيدة لتوثيق الكود',
      'يدعم أنماط دوال متعددة',
      'لا يكرر التعليقات الموجودة',
    ],
    issues: [
      'التعليقات المولدة عامة جداً',
      'قد يخطئ في كشف بعض الأنماط',
    ],
  },
  {
    name: 'js/storage.js',
    path: '/js/',
    language: 'JavaScript',
    langColor: 'bg-yellow-500',
    description: 'نظام التخزين المحلي — إدارة البيانات في LocalStorage',
    details: [
      'حفظ وتحميل بيانات التطبيق',
      'إدارة النسخ الاحتياطي التلقائي',
      'معالجة أخطاء التخزين',
    ],
    strengths: ['فصل منطق التخزين'],
    issues: ['LocalStorage محدود بـ 5-10MB'],
  },
  {
    name: 'js/reports.js',
    path: '/js/',
    language: 'JavaScript',
    langColor: 'bg-yellow-500',
    description: 'التقارير المالية — تقارير المبيعات والديون والأرباح والشركاء',
    details: [
      'تقرير المبيعات مع رسوم بيانية',
      'تقرير الديون للمحلات',
      'تقرير الأرباح والخسائر',
      'تقرير مقارنة شهرية',
      'تقارير الشركاء مع توزيع الأرباح',
      'تصدير بصيغ Excel و TXT',
    ],
    strengths: ['تقارير شاملة ومتنوعة', 'دعم فلترة حسب الفترة'],
    issues: ['ملف كبير ومعقد'],
  },
  {
    name: 'js/sales.js + payments.js',
    path: '/js/',
    language: 'JavaScript',
    langColor: 'bg-yellow-500',
    description: 'إدارة المبيعات والتسديدات — تسجيل وعرض عمليات البيع والدفع',
    details: [
      'إضافة عمليات بيع جديدة',
      'تسجيل التسديدات والمدفوعات',
      'حساب الأرصدة المتبقية',
      'كشف حساب تفصيلي لكل محل',
    ],
    strengths: ['فصل المنطق بشكل جيد'],
    issues: [],
  },
  {
    name: 'js/encryption.js + security.js',
    path: '/js/',
    language: 'JavaScript',
    langColor: 'bg-yellow-500',
    description: 'نظام الأمان والتشفير — حماية البيانات الحساسة',
    details: [
      'تشفير البيانات الحساسة (توكنات GitHub)',
      'DataEncryption API للتحميل والحفظ المشفر',
      'حماية من XSS عبر safeDOM',
      'Feature Flags للميزات التجريبية',
    ],
    strengths: ['اهتمام بالأمان', 'تشفير اختياري'],
    issues: ['التشفير قد لا يكون كافياً لحماية حقيقية'],
  },
];

export default function FileAnalysis() {
  const [selectedFile, setSelectedFile] = useState(0);
  const file = files[selectedFile];

  return (
    <div className="space-y-6">
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8 backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
            <i className="fas fa-magnifying-glass-chart text-cyan-400"></i>
          </span>
          تحليل تفصيلي للملفات
        </h2>

        {/* File selector */}
        <div className="flex flex-wrap gap-2 mb-6">
          {files.map((f, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedFile(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedFile === idx
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-600/50'
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>

        {/* File details */}
        <div className="bg-slate-900/50 rounded-xl border border-slate-700/30 p-6">
          <div className="flex items-start gap-4 mb-6">
            <span className={`w-3 h-3 rounded-full ${file.langColor} mt-2 flex-shrink-0`}></span>
            <div>
              <h3 className="text-xl font-bold text-white">{file.name}</h3>
              <p className="text-slate-400 text-sm">{file.path}</p>
              <p className="text-slate-300 mt-2">{file.description}</p>
            </div>
          </div>

          {/* Details */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-blue-400 mb-3 flex items-center gap-2">
              <i className="fas fa-list"></i> التفاصيل
            </h4>
            <ul className="space-y-2">
              {file.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                  <i className="fas fa-check text-green-400 text-xs mt-1"></i>
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          {/* Strengths & Issues */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {file.strengths && file.strengths.length > 0 && (
              <div className="bg-green-500/5 rounded-lg border border-green-500/20 p-4">
                <h4 className="text-sm font-semibold text-green-400 mb-2 flex items-center gap-2">
                  <i className="fas fa-thumbs-up"></i> نقاط القوة
                </h4>
                <ul className="space-y-1">
                  {file.strengths.map((s, idx) => (
                    <li key={idx} className="text-green-300/80 text-xs flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-green-400"></span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {file.issues && file.issues.length > 0 && (
              <div className="bg-red-500/5 rounded-lg border border-red-500/20 p-4">
                <h4 className="text-sm font-semibold text-red-400 mb-2 flex items-center gap-2">
                  <i className="fas fa-exclamation-triangle"></i> المشاكل المحتملة
                </h4>
                <ul className="space-y-1">
                  {file.issues.map((issue, idx) => (
                    <li key={idx} className="text-red-300/80 text-xs flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-red-400"></span>
                      {issue}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
