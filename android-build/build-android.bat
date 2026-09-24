@echo off
REM ============================================
REM سكريبت بناء APK لتطبيق فاست لينك حسابات (ويندوز)
REM ============================================

echo.
echo 🚀 بدء بناء تطبيق فاست لينك حسابات...
echo ============================================

REM 1. تثبيت التبعيات
echo 📦 تثبيت التبعيات...
call npm install
if %errorlevel% neq 0 (
    echo ❌ فشل تثبيت التبعيات
    exit /b 1
)

REM 2. إضافة منصة أندرويد
if not exist "android" (
    echo 📱 إضافة منصة أندرويد...
    call npx cap add android
)

REM 3. نسخ ملفات الويب
echo 📁 نسخ ملفات الويب...
if not exist www mkdir www
copy index.html www\ 2>nul
copy app.js www\ 2>nul
copy manifest.json www\ 2>nul
copy serviceworker.js www\ 2>nul
copy capacitor-bridge.js www\ 2>nul
xcopy css www\css\ /E /I /Y 2>nul
xcopy fonts www\fonts\ /E /I /Y 2>nul
xcopy icons www\icons\ /E /I /Y 2>nul
xcopy js www\js\ /E /I /Y 2>nul

REM 4. مزامنة Capacitor
echo 🔄 مزامنة Capacitor...
call npx cap copy
call npx cap sync android

REM 5. بناء APK
echo 🔨 بناء APK...
cd android
call gradlew.bat assembleDebug

REM 6. نقل الملف
echo 📋 نقل ملف APK...
copy app\build\outputs\apk\debug\app-debug.apk ..\fastlink-accounts.apk

cd ..
echo.
echo ============================================
echo ✅ تم بناء APK بنجاح!
echo 📱 الملف: fastlink-accounts.apk
echo ============================================
pause
