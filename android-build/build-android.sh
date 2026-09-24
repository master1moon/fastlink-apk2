#!/bin/bash
# ============================================
# سكريبت بناء APK لتطبيق فاست لينك حسابات
# ============================================

set -e

echo "🚀 بدء بناء تطبيق فاست لينك حسابات..."
echo "============================================"

# 1. تثبيت التبعيات
echo "📦 تثبيت التبعيات..."
npm install

# 2. إضافة منصة أندرويد (إذا لم تكن موجودة)
if [ ! -d "android" ]; then
    echo "📱 إضافة منصة أندرويد..."
    npx cap add android
fi

# 3. نسخ ملفات الويب إلى مجلد www
echo "📁 نسخ ملفات الويب..."
mkdir -p www
cp index.html app.js manifest.json serviceworker.js www/ 2>/dev/null || true
cp -r css fonts icons js www/ 2>/dev/null || true
cp capacitor-bridge.js www/ 2>/dev/null || true

# 4. مزامنة Capacitor
echo "🔄 مزامنة Capacitor..."
npx cap copy
npx cap sync android

# 5. بناء APK
echo "🔨 بناء APK..."
cd android
./gradlew assembleDebug

# 6. نقل الملف
echo "📋 نقل ملف APK..."
APK_PATH="app/build/outputs/apk/debug/app-debug.apk"
if [ -f "$APK_PATH" ]; then
    cp "$APK_PATH" "../fastlink-accounts.apk"
    echo ""
    echo "✅ تم بناء APK بنجاح!"
    echo "📱 الملف: fastlink-accounts.apk"
    echo "📏 الحجم: $(du -h ../fastlink-accounts.apk | cut -f1)"
else
    echo "❌ فشل بناء APK"
    exit 1
fi

cd ..
echo "============================================"
echo "🎉 اكتمل البناء بنجاح!"
