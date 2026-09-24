#!/bin/bash
# ============================================
# سكريبت شامل لإضافة ملفات التطبيق الأصلي
# وتشغيل جميع التعديلات المطلوبة
# ============================================

set -e

echo "🚀 بدء إضافة ملفات التطبيق الأصلي..."
echo "============================================"

# التحقق من وجود git
if ! command -v git &> /dev/null; then
    echo "❌ Git غير مثبت. يرجى تثبيته أولاً"
    exit 1
fi

# تحميل التطبيق الأصلي
echo "📥 تحميل التطبيق الأصلي من song10..."
if [ -d "temp-song10" ]; then
    rm -rf temp-song10
fi

git clone https://github.com/master1moon/song10.git temp-song10

# إنشاء مجلد www إذا لم يكن موجوداً
mkdir -p www

# نسخ ملفات التطبيق الأصلي إلى www/
echo "📁 نسخ ملفات التطبيق إلى www/..."
cp temp-song10/index.html www/
cp temp-song10/app.js www/
cp temp-song10/manifest.json www/
cp temp-song10/serviceworker.js www/
cp -r temp-song10/css www/ 2>/dev/null || true
cp -r temp-song10/fonts www/ 2>/dev/null || true
cp -r temp-song10/icons www/ 2>/dev/null || true
cp -r temp-song10/js www/ 2>/dev/null || true

# حذف المجلد المؤقت
rm -rf temp-song10

echo "✅ تم نسخ ملفات التطبيق الأصلي"

# ============================================
# تطبيق التعديلات المطلوبة
# ============================================

echo "🔧 تطبيق التعديلات..."

# 1. تعديل index.html - إصلاح CSP
echo "📝 تعديل index.html (CSP)..."
if [ -f "www/index.html" ]; then
    # إنشاء نسخة احتياطية
    cp www/index.html www/index.html.backup
    
    # استبدال CSP
    sed -i.bak 's|<meta http-equiv="Content-Security-Policy"[^>]*>|<meta http-equiv="Content-Security-Policy" content="default-src '\''self'\'' https: blob:; script-src '\''self'\'' '\''unsafe-inline'\'' '\''unsafe-eval'\'' https:; style-src '\''self'\'' '\''unsafe-inline'\'' https:; img-src '\''self'\'' https: blob:; font-src '\''self'\'' https:; connect-src '\''self'\'' https: blob:; frame-src '\''self'\'' https:;">|g' www/index.html
    
    # إضافة capacitor-bridge.js قبل </body>
    sed -i.bak 's|</body>|<script src="capacitor-bridge.js"></script>\n</body>|g' www/index.html
    
    # حذف ملفات النسخ الاحتياطي
    rm -f www/index.html.bak
    
    echo "✅ تم تعديل index.html"
else
    echo "⚠️  تحذير: www/index.html غير موجود"
fi

# 2. تعديل serviceworker.js - إضافة فحص Capacitor
echo "📝 تعديل serviceworker.js..."
if [ -f "www/serviceworker.js" ]; then
    cp www/serviceworker.js www/serviceworker.js.backup
    
    # إضافة فحص Capacitor في البداية
    sed -i.bak '1i\
const isCapacitor = typeof window !== '\''undefined'\'' \&\& typeof window.Capacitor !== '\''undefined'\'';\
' www/serviceworker.js
    
    # إضافة تجاهل طلبات Capacitor
    sed -i.bak '/addEventListener.*fetch/i\
  if (request.url.startsWith('\''capacitor://'\'')) return;\
' www/serviceworker.js
    
    rm -f www/serviceworker.js.bak
    echo "✅ تم تعديل serviceworker.js"
else
    echo "⚠️  تحذير: www/serviceworker.js غير موجود"
fi

# 3. تعديل app.js - إضافة دعم Capacitor
echo "📝 تعديل app.js..."
if [ -f "www/app.js" ]; then
    cp www/app.js www/app.js.backup
    
    # إضافة دعم Capacitor في DOMContentLoaded
    sed -i.bak '/DOMContentLoaded/a\
  if (typeof window.Capacitor !== '\''undefined'\'') {\
    console.log('\''يعمل داخل تطبيق أندرويد'\'');\
    if (window.Capacitor.Plugins \&\& window.Capacitor.Plugins.SplashScreen) {\
      window.Capacitor.Plugins.SplashScreen.hide();\
    }\
  }\
' www/app.js
    
    rm -f www/app.js.bak
    echo "✅ تم تعديل app.js"
else
    echo "⚠️  تحذير: www/app.js غير موجود"
fi

# ============================================
# تثبيت التبعيات
# ============================================

echo "📦 تثبيت التبعيات..."
if [ -f "package.json" ]; then
    npm install
    echo "✅ تم تثبيت التبعيات"
else
    echo "⚠️  تحذير: package.json غير موجود"
fi

# ============================================
# إضافة منصة Android
# ============================================

echo "📱 إضافة منصة Android..."
if command -v npx &> /dev/null; then
    npx cap add android || echo "⚠️  قد تكون منصة Android موجودة مسبقاً"
    echo "✅ تم إضافة منصة Android"
else
    echo "❌ npx غير موجود. يرجى تثبيت Node.js"
    exit 1
fi

# ============================================
# مزامنة Capacitor
# ============================================

echo "🔄 مزامنة Capacitor..."
npx cap copy
npx cap sync android
echo "✅ تم مزامنة Capacitor"

# ============================================
# النتيجة النهائية
# ============================================

echo ""
echo "============================================"
echo "✅ تم إكمال جميع الخطوات بنجاح!"
echo "============================================"
echo ""
echo "📂 الملفات الموجودة الآن:"
echo "  - www/ (ملفات التطبيق الأصلي + التعديلات)"
echo "  - android/ (مشروع Android)"
echo "  - capacitor.config.json"
echo "  - package.json"
echo ""
echo "🚀 الخطوات التالية:"
echo "  1. افتح Android Studio:"
echo "     npx cap open android"
echo ""
echo "  2. في Android Studio:"
echo "     Build → Build Bundle(s) / APK(s) → Build APK"
echo ""
echo "  3. ستحصل على APK في:"
echo "     android/app/build/outputs/apk/debug/app-debug.apk"
echo ""
echo "============================================"
echo "🎉 جاهز لبناء APK!"
echo "============================================"
