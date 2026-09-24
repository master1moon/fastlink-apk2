#!/usr/bin/env node
/**
 * سكريبت Node.js لإضافة ملفات التطبيق الأصلي
 * يعمل على جميع الأنظمة (Windows, Mac, Linux)
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 بدء إضافة ملفات التطبيق الأصلي...\n');

// دالة مساعدة لتشغيل الأوامر
function run(cmd) {
  console.log(`$ ${cmd}`);
  try {
    execSync(cmd, { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.error(`❌ فشل تنفيذ الأمر: ${cmd}`);
    return false;
  }
}

// التحقق من وجود Git
try {
  execSync('git --version', { stdio: 'pipe' });
} catch (error) {
  console.error('❌ Git غير مثبت. يرجى تثبيته أولاً');
  console.error('   تحميل Git: https://git-scm.com/downloads');
  process.exit(1);
}

// التحقق من وجود Node.js
try {
  execSync('node --version', { stdio: 'pipe' });
} catch (error) {
  console.error('❌ Node.js غير مثبت. يرجى تثبيته أولاً');
  console.error('   تحميل Node.js: https://nodejs.org');
  process.exit(1);
}

// ============================================
// 1. تحميل التطبيق الأصلي
// ============================================
console.log('\n📥 الخطوة 1: تحميل التطبيق الأصلي من song10...\n');

if (fs.existsSync('temp-song10')) {
  console.log('⚠️  حذف المجلد temp-song10 القديم...');
  fs.rmSync('temp-song10', { recursive: true, force: true });
}

if (!run('git clone https://github.com/master1moon/song10.git temp-song10')) {
  console.error('❌ فشل تحميل التطبيق الأصلي');
  process.exit(1);
}

// ============================================
// 2. نسخ الملفات إلى www/
// ============================================
console.log('\n📁 الخطوة 2: نسخ ملفات التطبيق إلى www/...\n');

if (!fs.existsSync('www')) {
  fs.mkdirSync('www', { recursive: true });
}

const filesToCopy = [
  'index.html',
  'app.js',
  'manifest.json',
  'serviceworker.js'
];

const dirsToCopy = ['css', 'fonts', 'icons', 'js'];

// نسخ الملفات
filesToCopy.forEach(file => {
  const src = path.join('temp-song10', file);
  const dest = path.join('www', file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`  ✅ نسخ ${file}`);
  } else {
    console.log(`  ⚠️  تحذير: ${file} غير موجود`);
  }
});

// نسخ المجلدات
dirsToCopy.forEach(dir => {
  const src = path.join('temp-song10', dir);
  const dest = path.join('www', dir);
  if (fs.existsSync(src)) {
    fs.cpSync(src, dest, { recursive: true });
    console.log(`  ✅ نسخ مجلد ${dir}/`);
  } else {
    console.log(`  ⚠️  تحذير: مجلد ${dir}/ غير موجود`);
  }
});

// حذف المجلد المؤقت
console.log('\n🗑️  حذف المجلد المؤقت...');
fs.rmSync('temp-song10', { recursive: true, force: true });

// ============================================
// 3. تطبيق التعديلات
// ============================================
console.log('\n🔧 الخطوة 3: تطبيق التعديلات...\n');

// 3.1 تعديل index.html
const indexPath = path.join('www', 'index.html');
if (fs.existsSync(indexPath)) {
  console.log('  📝 تعديل index.html (CSP)...');
  let content = fs.readFileSync(indexPath, 'utf8');
  
  // استبدال CSP
  const cspRegex = /<meta http-equiv="Content-Security-Policy"[^>]*>/g;
  const newCSP = `<meta http-equiv="Content-Security-Policy" content="default-src 'self' https: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' https: blob:; font-src 'self' https:; connect-src 'self' https: blob:; frame-src 'self' https:;">`;
  content = content.replace(cspRegex, newCSP);
  
  // إضافة capacitor-bridge.js قبل </body>
  if (!content.includes('capacitor-bridge.js')) {
    content = content.replace('</body>', '<script src="capacitor-bridge.js"></script>\n</body>');
  }
  
  fs.writeFileSync(indexPath, content, 'utf8');
  console.log('  ✅ تم تعديل index.html');
} else {
  console.log('  ⚠️  تحذير: www/index.html غير موجود');
}

// 3.2 تعديل serviceworker.js
const swPath = path.join('www', 'serviceworker.js');
if (fs.existsSync(swPath)) {
  console.log('  📝 تعديل serviceworker.js...');
  let content = fs.readFileSync(swPath, 'utf8');
  
  // إضافة فحص Capacitor في البداية
  if (!content.includes('isCapacitor')) {
    const capacitorCheck = `const isCapacitor = typeof window !== 'undefined' && typeof window.Capacitor !== 'undefined';\n`;
    content = capacitorCheck + content;
  }
  
  // إضافة تجاهل طلبات Capacitor
  if (!content.includes("request.url.startsWith('capacitor://')")) {
    content = content.replace(
      /self\.addEventListener\('fetch'/,
      `if (request.url.startsWith('capacitor://')) return;\nself.addEventListener('fetch'`
    );
  }
  
  fs.writeFileSync(swPath, content, 'utf8');
  console.log('  ✅ تم تعديل serviceworker.js');
} else {
  console.log('  ⚠️  تحذير: www/serviceworker.js غير موجود');
}

// 3.3 تعديل app.js
const appPath = path.join('www', 'app.js');
if (fs.existsSync(appPath)) {
  console.log('  📝 تعديل app.js...');
  let content = fs.readFileSync(appPath, 'utf8');
  
  // إضافة دعم Capacitor في DOMContentLoaded
  if (!content.includes('window.Capacitor')) {
    const capacitorSupport = `
  // دعم Capacitor
  if (typeof window.Capacitor !== 'undefined') {
    console.log('يعمل داخل تطبيق أندرويد');
    if (window.Capacitor.Plugins && window.Capacitor.Plugins.SplashScreen) {
      window.Capacitor.Plugins.SplashScreen.hide();
    }
  }
`;
    content = content.replace(
      /document\.addEventListener\('DOMContentLoaded'/,
      capacitorSupport + "\ndocument.addEventListener('DOMContentLoaded'"
    );
  }
  
  fs.writeFileSync(appPath, content, 'utf8');
  console.log('  ✅ تم تعديل app.js');
} else {
  console.log('  ⚠️  تحذير: www/app.js غير موجود');
}

// ============================================
// 4. تثبيت التبعيات
// ============================================
console.log('\n📦 الخطوة 4: تثبيت التبعيات...\n');

if (fs.existsSync('package.json')) {
  if (!run('npm install')) {
    console.error('❌ فشل تثبيت التبعيات');
    process.exit(1);
  }
} else {
  console.log('⚠️  تحذير: package.json غير موجود');
}

// ============================================
// 5. إضافة منصة Android
// ============================================
console.log('\n📱 الخطوة 5: إضافة منصة Android...\n');

if (!fs.existsSync('android')) {
  if (!run('npx cap add android')) {
    console.error('❌ فشل إضافة منصة Android');
    process.exit(1);
  }
} else {
  console.log('ℹ️  منصة Android موجودة مسبقاً');
}

// ============================================
// 6. مزامنة Capacitor
// ============================================
console.log('\n🔄 الخطوة 6: مزامنة Capacitor...\n');

run('npx cap copy');
run('npx cap sync android');

// ============================================
// النتيجة النهائية
// ============================================
console.log('\n' + '='.repeat(50));
console.log('✅ تم إكمال جميع الخطوات بنجاح!');
console.log('='.repeat(50));
console.log('\n📂 الملفات الموجودة الآن:');
console.log('  - www/ (ملفات التطبيق الأصلي + التعديلات)');
console.log('  - android/ (مشروع Android)');
console.log('  - capacitor.config.json');
console.log('  - package.json');
console.log('\n🚀 الخطوات التالية:');
console.log('  1. افتح Android Studio:');
console.log('     npx cap open android');
console.log('\n  2. في Android Studio:');
console.log('     Build → Build Bundle(s) / APK(s) → Build APK');
console.log('\n  3. ستحصل على APK في:');
console.log('     android/app/build/outputs/apk/debug/app-debug.apk');
console.log('\n' + '='.repeat(50));
console.log('🎉 جاهز لبناء APK!');
console.log('='.repeat(50) + '\n');
