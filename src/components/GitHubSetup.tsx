import { useState } from 'react';

const gitCommands = [
  {
    title: '1. إنشاء مستودع GitHub جديد',
    desc: 'اذهب إلى github.com → اضغط + → New repository',
    fields: [
      { label: 'اسم المستودع', value: 'fastlink-android-apk', id: 'repo-name' },
      { label: 'الوصف', value: 'تطبيق فاست لينك حسابات - APK أندرويد', id: 'repo-desc' },
    ],
    note: 'اختر Public أو Private حسب رغبتك، ثم اضغط Create repository',
  },
  {
    title: '2. إعداد Git محلياً',
    desc: 'شغّل هذه الأوامر في Terminal (مرة واحدة فقط)',
    commands: [
      'git config --global user.name "اسمك"',
      'git config --global user.email "بريدك@email.com"',
    ],
  },
  {
    title: '3. إنشاء مجلد المشروع',
    desc: 'أنشئ مجلد جديد وادخل إليه',
    commands: [
      'mkdir fastlink-android',
      'cd fastlink-android',
      'git init',
    ],
  },
  {
    title: '4. نسخ ملفات التطبيق الأصلي',
    desc: 'حمّل ملفات التطبيق من المستودع الأصلي',
    commands: [
      'git clone https://github.com/master1moon/song10.git temp',
      'cp -r temp/* .',
      'rm -rf temp',
    ],
  },
  {
    title: '5. إضافة ملفات Capacitor',
    desc: 'حمّل ملفات Capacitor من روابط التنزيل وأضفها للمشروع',
    commands: [
      '# انقل الملفات إلى أماكنها:',
      'mv capacitor.config.json .',
      'mv package.json .',
      'mv capacitor-bridge.js www/',
      'mv build-android.sh .',
      'chmod +x build-android.sh',
    ],
  },
  {
    title: '6. إضافة ملفات Android',
    desc: 'أنشئ هيكل مجلدات Android',
    commands: [
      'mkdir -p android/app/src/main/java/com/fastlink/accounts',
      'mkdir -p android/app/src/main/res/values',
      'mkdir -p android/app/src/main/res/xml',
      'mv MainActivity.java android/app/src/main/java/com/fastlink/accounts/',
      'mv AndroidManifest.xml android/app/src/main/',
      'mv strings.xml android/app/src/main/res/values/',
      'mv styles.xml android/app/src/main/res/values/',
    ],
  },
  {
    title: '7. رفع الملفات إلى GitHub',
    desc: 'ارفع جميع الملفات إلى المستودع الجديد',
    commands: [
      'git add .',
      'git commit -m "إضافة ملفات بناء APK - فاست لينك حسابات"',
      'git branch -M main',
      'git remote add origin https://github.com/YOUR_USERNAME/fastlink-android-apk.git',
      'git push -u origin main',
    ],
    note: 'استبدل YOUR_USERNAME باسم حسابك على GitHub',
  },
  {
    title: '8. بناء APK',
    desc: 'بعد رفع الملفات، ابنِ APK',
    commands: [
      'npm install',
      'npx cap add android',
      'npx cap copy',
      'npx cap sync android',
      'npx cap open android',
      '# في Android Studio: Build → Build APK',
    ],
  },
];

const quickScript = `#!/bin/bash
# سكريبت كامل لإنشاء مستودع GitHub ورفع ملفات APK

echo "🚀 إنشاء مستودع فاست لينك APK..."

# المتغيرات - عدّلها حسب حسابك
GITHUB_USER="YOUR_USERNAME"
REPO_NAME="fastlink-android-apk"
EMAIL="your@email.com"
NAME="Your Name"

# إعداد Git
git config --global user.name "$NAME"
git config --global user.email "$EMAIL"

# إنشاء المجلد
mkdir -p $REPO_NAME
cd $REPO_NAME
git init

# تحميل التطبيق الأصلي
echo "📥 تحميل التطبيق الأصلي..."
git clone https://github.com/master1moon/song10.git temp
cp -r temp/* .
rm -rf temp

# إنشاء مجلد www
mkdir -p www
cp index.html app.js manifest.json serviceworker.js www/ 2>/dev/null || true
cp -r css fonts icons js www/ 2>/dev/null || true

# رفع الملفات
git add .
git commit -m "إضافة ملفات بناء APK - فاست لينك حسابات"
git branch -M main
git remote add origin https://github.com/$GITHUB_USER/$REPO_NAME.git
git push -u origin main

echo "✅ تم! المستودع جاهز على:"
echo "https://github.com/$GITHUB_USER/$REPO_NAME"
echo ""
echo "📝 الخطوات التالية:"
echo "1. حمّل ملفات Capacitor من صفحة التنزيل"
echo "2. npm install"
echo "3. npx cap add android"
echo "4. npx cap open android"
echo "5. Build APK من Android Studio"
`;

export default function GitHubSetup() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const downloadScript = () => {
    const blob = new Blob([quickScript], { type: 'text/x-shellscript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'setup-github-repo.sh';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-l from-slate-900 to-slate-800 rounded-2xl border border-slate-700/50 p-8">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl bg-slate-700 flex items-center justify-center flex-shrink-0">
            <i className="fab fa-github text-3xl text-white"></i>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-2">إنشاء مستودع GitHub</h2>
            <p className="text-slate-300 text-sm">
              اتبع الخطوات أدناه لإنشاء مستودع GitHub ورفع ملفات البناء. جميع الأوامر جاهزة للنسخ.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Script */}
      <div className="bg-gradient-to-l from-green-900/30 to-emerald-900/30 rounded-2xl border border-green-500/20 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <i className="fas fa-bolt text-yellow-400"></i>
            سكريبت سريع (كل شيء في أمر واحد)
          </h3>
          <button
            onClick={downloadScript}
            className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-500 text-white text-sm font-bold transition-all"
          >
            <i className="fas fa-download ml-1"></i>
            تنزيل السكريبت
          </button>
        </div>
        <p className="text-slate-300 text-sm mb-3">
          حمّل السكريبت، عدّل المتغيرات (اسم المستخدم، البريد)، ثم شغّله:
        </p>
        <div className="bg-slate-900/70 rounded-lg p-4 font-mono text-xs overflow-x-auto" dir="ltr">
          <div className="text-slate-400"># بعد تنزيل السكريبت:</div>
          <div className="text-green-400 mt-1">$ chmod +x setup-github-repo.sh</div>
          <div className="text-green-400">$ ./setup-github-repo.sh</div>
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {gitCommands.map((step, idx) => (
          <div key={idx} className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-5">
            <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
            <p className="text-slate-400 text-sm mb-3">{step.desc}</p>

            {/* Input Fields */}
            {step.fields && (
              <div className="space-y-2 mb-3">
                {step.fields.map((field, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2">
                    <label className="text-sm text-slate-300 w-32">{field.label}:</label>
                    <input
                      type="text"
                      defaultValue={field.value}
                      className="flex-1 px-3 py-2 rounded-lg bg-slate-900/50 border border-slate-700 text-white text-sm focus:border-green-500 focus:outline-none"
                      dir="ltr"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Commands */}
            {step.commands && (
              <div className="relative">
                <button
                  onClick={() => copyToClipboard(step.commands!.join('\n'), `step-${idx}`)}
                  className={`absolute top-2 left-2 px-3 py-1 rounded text-xs font-medium transition-all z-10 ${
                    copied === `step-${idx}`
                      ? 'bg-green-600 text-white'
                      : 'bg-slate-700/80 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {copied === `step-${idx}` ? '✅ تم النسخ!' : '📋 نسخ'}
                </button>
                <div className="bg-slate-900/70 rounded-lg p-4 font-mono text-xs overflow-x-auto" dir="ltr">
                  {step.commands.map((cmd, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2 mb-1">
                      {cmd.startsWith('#') ? (
                        <span className="text-slate-500">{cmd}</span>
                      ) : (
                        <>
                          <span className="text-green-400 select-none">$</span>
                          <span className="text-slate-300">{cmd}</span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Note */}
            {step.note && (
              <div className="mt-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <p className="text-yellow-300 text-xs">
                  <i className="fas fa-info-circle ml-1"></i>
                  {step.note}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Important Links */}
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <i className="fas fa-link text-blue-400"></i>
          روابط مهمة
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <a
            href="https://github.com/new"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-slate-900/50 rounded-lg p-3 border border-slate-700/30 hover:border-green-500/50 transition-all"
          >
            <i className="fab fa-github text-2xl text-white"></i>
            <div>
              <div className="text-sm font-medium text-white">إنشاء مستودع جديد</div>
              <div className="text-xs text-slate-500">github.com/new</div>
            </div>
          </a>
          <a
            href="https://github.com/master1moon/song10"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-slate-900/50 rounded-lg p-3 border border-slate-700/30 hover:border-blue-500/50 transition-all"
          >
            <i className="fas fa-code-branch text-2xl text-blue-400"></i>
            <div>
              <div className="text-sm font-medium text-white">المستودع الأصلي</div>
              <div className="text-xs text-slate-500">master1moon/song10</div>
            </div>
          </a>
          <a
            href="https://nodejs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-slate-900/50 rounded-lg p-3 border border-slate-700/30 hover:border-green-500/50 transition-all"
          >
            <i className="fab fa-node-js text-2xl text-green-400"></i>
            <div>
              <div className="text-sm font-medium text-white">تحميل Node.js</div>
              <div className="text-xs text-slate-500">nodejs.org</div>
            </div>
          </a>
          <a
            href="https://developer.android.com/studio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-slate-900/50 rounded-lg p-3 border border-slate-700/30 hover:border-blue-500/50 transition-all"
          >
            <i className="fab fa-android text-2xl text-green-400"></i>
            <div>
              <div className="text-sm font-medium text-white">تحميل Android Studio</div>
              <div className="text-xs text-slate-500">developer.android.com</div>
            </div>
          </a>
        </div>
      </div>

      {/* Final Note */}
      <div className="bg-gradient-to-l from-blue-900/30 to-purple-900/30 rounded-2xl border border-blue-500/20 p-6">
        <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
          <i className="fas fa-lightbulb text-yellow-400"></i>
          ملاحظة مهمة
        </h3>
        <div className="text-slate-300 text-sm leading-relaxed space-y-2">
          <p>
            بعد إنشاء المستودع ورفع الملفات، ستحتاج إلى:
          </p>
          <ol className="list-decimal list-inside space-y-1 text-slate-400 mr-4">
            <li>تثبيت <span className="text-blue-400">Node.js</span> و <span className="text-green-400">Android Studio</span> على جهازك</li>
            <li>استنساخ المستودع: <code className="text-yellow-400 bg-slate-900/50 px-2 py-0.5 rounded">git clone YOUR_REPO_URL</code></li>
            <li>تشغيل: <code className="text-yellow-400 bg-slate-900/50 px-2 py-0.5 rounded">npm install</code></li>
            <li>إضافة Android: <code className="text-yellow-400 bg-slate-900/50 px-2 py-0.5 rounded">npx cap add android</code></li>
            <li>فتح Android Studio: <code className="text-yellow-400 bg-slate-900/50 px-2 py-0.5 rounded">npx cap open android</code></li>
            <li>بناء APK من القائمة: <span className="text-green-400">Build → Build APK</span></li>
          </ol>
        </div>
      </div>
    </div>
  );
}
