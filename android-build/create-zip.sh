#!/bin/bash
# ============================================
# سكريبت لإنشاء ملف ZIP جاهز
# ============================================

echo "📦 إنشاء ملف ZIP..."

# إنشاء مجلد مؤقت
mkdir -p fastlink-android-temp
cd fastlink-android-temp

# نسخ جميع الملفات
cp ../capacitor.config.json .
cp ../package.json .
cp ../README.md .
cp ../build-android.sh .
cp ../build-android.bat .

# نسخ مجلد www
mkdir -p www
cp ../www/capacitor-bridge.js www/ 2>/dev/null || true

# نسخ مجلد android
mkdir -p android
cp -r ../android/* android/ 2>/dev/null || true

# إنشاء ملف ZIP
cd ..
zip -r fastlink-android-apk.zip fastlink-android-temp/

# تنظيف
rm -rf fastlink-android-temp

echo "✅ تم إنشاء الملف: fastlink-android-apk.zip"
echo "📏 الحجم: $(du -h fastlink-android-apk.zip | cut -f1)"
