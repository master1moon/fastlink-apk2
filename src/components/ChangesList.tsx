import { changes } from '../data/files';

export default function ChangesList() {
  const severityConfig = {
    critical: { label: 'حرج', color: 'red', icon: 'fa-circle-exclamation' },
    important: { label: 'مهم', color: 'yellow', icon: 'fa-triangle-exclamation' },
    recommended: { label: 'مستحسن', color: 'blue', icon: 'fa-circle-info' },
  };

  const typeConfig = {
    fix: { label: 'إصلاح', color: 'red', icon: 'fa-wrench' },
    add: { label: 'إضافة', color: 'green', icon: 'fa-plus' },
    modify: { label: 'تعديل', color: 'yellow', icon: 'fa-pen' },
    remove: { label: 'حذف', color: 'slate', icon: 'fa-minus' },
  };

  return (
    <div className="space-y-6">
      {/* Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-red-500/10 rounded-xl border border-red-500/20 p-4 text-center">
          <div className="text-2xl font-bold text-red-400">
            {changes.filter(c => c.severity === 'critical').length}
          </div>
          <div className="text-xs text-red-300/70 mt-1">حرج</div>
        </div>
        <div className="bg-yellow-500/10 rounded-xl border border-yellow-500/20 p-4 text-center">
          <div className="text-2xl font-bold text-yellow-400">
            {changes.filter(c => c.severity === 'important').length}
          </div>
          <div className="text-xs text-yellow-300/70 mt-1">مهم</div>
        </div>
        <div className="bg-blue-500/10 rounded-xl border border-blue-500/20 p-4 text-center">
          <div className="text-2xl font-bold text-blue-400">
            {changes.filter(c => c.severity === 'recommended').length}
          </div>
          <div className="text-xs text-blue-300/70 mt-1">مستحسن</div>
        </div>
        <div className="bg-green-500/10 rounded-xl border border-green-500/20 p-4 text-center">
          <div className="text-2xl font-bold text-green-400">{changes.length}</div>
          <div className="text-xs text-green-300/70 mt-1">إجمالي التعديلات</div>
        </div>
      </div>

      {/* Changes List */}
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <i className="fas fa-pen-to-square text-yellow-400"></i>
          جميع التعديلات المطلوبة
        </h2>

        <div className="space-y-3">
          {changes.map((change, idx) => {
            const severity = severityConfig[change.severity];
            const type = typeConfig[change.type];
            
            return (
              <div
                key={idx}
                className="bg-slate-900/50 rounded-xl border border-slate-700/30 p-4 hover:border-slate-600/50 transition-all"
              >
                <div className="flex items-start gap-3">
                  {/* Type Icon */}
                  <div className={`w-8 h-8 rounded-lg bg-${type.color}-500/20 flex items-center justify-center flex-shrink-0`}>
                    <i className={`fas ${type.icon} text-${type.color}-400 text-xs`}></i>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-semibold text-white text-sm">{change.title}</h3>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold bg-${severity.color}-500/20 text-${severity.color}-400 border border-${severity.color}-500/30`}>
                        <i className={`fas ${severity.icon} ml-0.5`}></i>
                        {severity.label}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold bg-${type.color}-500/20 text-${type.color}-400`}>
                        {type.label}
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed">{change.description}</p>
                    <div className="mt-2 flex items-center gap-1 text-[10px] text-slate-500">
                      <i className="fas fa-file text-[8px]"></i>
                      <code className="text-blue-400/70">{change.file}</code>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Important Notes */}
      <div className="bg-yellow-500/5 rounded-2xl border border-yellow-500/20 p-6">
        <h3 className="text-lg font-bold text-yellow-400 mb-3 flex items-center gap-2">
          <i className="fas fa-exclamation-triangle"></i>
          ملاحظات مهمة
        </h3>
        <ul className="space-y-2 text-sm text-yellow-300/80">
          <li className="flex items-start gap-2">
            <i className="fas fa-check-circle text-yellow-400 text-xs mt-1"></i>
            <span>التعديلات الحرجة (Critical) <strong>يجب</strong> تطبيقها وإلا لن يعمل التطبيق</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="fas fa-check-circle text-yellow-400 text-xs mt-1"></i>
            <span>التعديلات المهمة (Important) مطلوبة لتجربة مستخدم جيدة</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="fas fa-check-circle text-yellow-400 text-xs mt-1"></i>
            <span>التعديلات المستحسنة (Recommended) تحسن الأداء والأمان</span>
          </li>
          <li className="flex items-start gap-2">
            <i className="fas fa-check-circle text-yellow-400 text-xs mt-1"></i>
            <span>جميع الملفات المعدلة متاحة في قسم "عرض الملفات" و "تنزيل الملفات"</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
