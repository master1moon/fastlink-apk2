@echo off
REM ============================================
REM سكريبت شامل لإضافة ملفات التطبيق الأصلي (Windows)
REM ============================================

echo 🚀 بدء إضافة ملفات التطبيق الأصلي...
echo ============================================

REM التحقق من وجود git
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Git غير مثبت. يرجى تثبيته أولاً
    pause
    exit /b 1
)

REM تحميل التطبيق الأصلي
echo 📥 تحميل التطبيق الأصلي من song10...
if exist "temp-song10" (
    rmdir /s /q "temp-song10"
)

git clone https://github.com/master1moon/song10.git temp-song10
if %errorlevel% neq 0 (
    echo ❌ فشل تحميل التطبيق الأصلي
    pause
    exit /b 1
)

REM إنشاء مجلد www
if not exist "www" mkdir www

REM نسخ ملفات التطبيق الأصلي إلى www/
echo 📁 نسخ ملفات التطبيق إلى www/...
copy temp-song10\index.html www\ >nul
copy temp-song10\app.js www\ >nul
copy temp-song10\manifest.json www\ >nul
copy temp-song10\serviceworker.js www\ >nul
xcopy temp-song10\css www\css\ /E /I /Y >nul 2>nul
xcopy temp-song10\fonts www\fonts\ /E /I /Y >nul 2>nul
xcopy temp-song10\icons www\icons\ /E /I /Y >nul 2>nul
xcopy temp-song10\js www\js\ /E /I /Y >nul 2>nul

REM حذف المجلد المؤقت
rmdir /s /q "temp-song10"

echo ✅ تم نسخ ملفات التطبيق الأصلي

REM ============================================
REM تثبيت التبعيات
REM ============================================

echo 📦 تثبيت التبعيات...
if exist "package.json" (
    call npm install
    echo ✅ تم تثبيت التبعيات
) else (
    echo ⚠️  تحذير: package.json غير موجود
)

REM ============================================
REM إضافة منصة Android
REM ============================================

echo 📱 إضافة منصة Android...
where npx >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ npx غير موجود. يرجى تثبيت Node.js
    pause
    exit /b 1
)

call npx cap add android
call npx cap copy
call npx cap sync android

echo ✅ تم مزامنة Capacitor

REM ============================================
REM النتيجة النهائية
REM ============================================

echo.
echo ============================================
echo ✅ تم إكمال جميع الخطوات بنجاح!
echo ============================================
echo.
echo 📂 الملفات الموجودة الآن:
echo   - www/ (ملفات التطبيق الأصلي)
echo   - android/ (مشروع Android)
echo   - capacitor.config.json
echo   - package.json
echo.
echo 🚀 الخطوات التالية:
echo   1. افتح Android Studio:
echo      npx cap open android
echo.
echo   2. في Android Studio:
echo      Build ^> Build Bundle(s) / APK(s) ^> Build APK
echo.
echo   3. ستحصل على APK في:
echo      android\app\build\outputs\apk\debug\app-debug.apk
echo.
echo ============================================
echo 🎉 جاهز لبناء APK!
echo ============================================
pause
