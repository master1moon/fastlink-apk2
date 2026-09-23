# 📱 فاست لينك حسابات - تحويل إلى APK أندرويد

## 🎯 الهدف

تحويل تطبيق الويب "فاست لينك حسابات" إلى تطبيق أندرويد قابل للتثبيت (APK) باستخدام Capacitor.

---

## ⚡ البدء السريع

### الطريقة 1: استخدام الواجهة التفاعلية (موصى به)

1. افتح `index.html` في المتصفح
2. اذهب إلى تبويب **"إنشاء مستودع GitHub"**
3. اتبع الخطوات الثمانية (جميع الأوامر جاهزة للنسخ)
4. حمّل السكريبت السريع `setup-github-repo.sh` وشغّله

### الطريقة 2: يدوياً

```bash
# 1. إنشاء مستودع جديد على GitHub
# اذهب إلى: https://github.com/new

# 2. استنساخ التطبيق الأصلي
git clone https://github.com/USERNAME/fastlink-android-apk.git
cd fastlink-android-apk

# 3. تحميل ملفات التطبيق الأصلي
git clone https://github.com/master1moon/song10.git temp
cp -r temp/* .
rm -rf temp

# 4. تثبيت التبعيات
npm install

# 5. إضافة منصة أندرويد
npx cap add android

# 6. فتح Android Studio
npx cap open android

# 7. بناء APK
# في Android Studio: Build → Build Bundle(s) / APK(s) → Build APK
```

---

## 📂 الملفات المتوفرة

### ملفات Capacitor
- ✅ `capacitor.config.json` - إعدادات Capacitor
- ✅ `package.json` - تبعيات المشروع
- ✅ `capacitor-bridge.js` - جسر للتخزين والشبكة

### ملفات Android
- ✅ `MainActivity.java` - النشاط الرئيسي
- ✅ `AndroidManifest.xml` - ملف Manifest
- ✅ `strings.xml` - النصوص بالعربية
- ✅ `styles.xml` - أنماط التطبيق

### سكريبتات
- ✅ `build-android.sh` - سكريبت بناء Linux/Mac
- ✅ `build-android.bat` - سكريبت بناء Windows
- ✅ `setup-github-repo.sh` - سكريبت إعداد المستودع

### التوثيق
- ✅ `README.md` - هذا الملف
- ✅ `QUICK-START.md` - دليل البدء السريع
- ✅ `COMPLETED.md` - ملخص الإنجاز

---

## 🔧 المتطلبات

### برامج مطلوبة
- **Node.js 18+** - [تحميل](https://nodejs.org)
- **Android Studio** - [تحميل](https://developer.android.com/studio)
- **JDK 17** - [تحميل](https://adoptium.net)
- **Git** - [تحميل](https://git-scm.com)

### حسابات مطلوبة
- **GitHub** - [إنشاء حساب](https://github.com/signup)

---

## 📋 الخطوات التفصيلية

### 1. إنشاء مستودع GitHub

```bash
# على GitHub.com:
# 1. اضغط على + في الأعلى
# 2. اختر "New repository"
# 3. اسم المستودع: fastlink-android-apk
# 4. الوصف: تطبيق فاست لينك حسابات - APK أندرويد
# 5. اختر Public أو Private
# 6. اضغط "Create repository"
```

### 2. إعداد Git محلياً

```bash
git config --global user.name "اسمك"
git config --global user.email "بريدك@email.com"
```

### 3. إنشاء مجلد المشروع

```bash
mkdir fastlink-android
cd fastlink-android
git init
```

### 4. تحميل التطبيق الأصلي

```bash
git clone https://github.com/master1moon/song10.git temp
cp -r temp/* .
rm -rf temp
```

### 5. إضافة ملفات Capacitor

حمّل الملفات من قسم "تنزيل الملفات" في الواجهة التفاعلية:
- `capacitor.config.json` → جذر المشروع
- `package.json` → جذر المشروع (استبدل الموجود)
- `capacitor-bridge.js` → مجلد `www/`

### 6. إضافة ملفات Android

```bash
mkdir -p android/app/src/main/java/com/fastlink/accounts
mkdir -p android/app/src/main/res/values
mkdir -p android/app/src/main/res/xml

# انقل الملفات:
mv MainActivity.java android/app/src/main/java/com/fastlink/accounts/
mv AndroidManifest.xml android/app/src/main/
mv strings.xml android/app/src/main/res/values/
mv styles.xml android/app/src/main/res/values/
```

### 7. رفع الملفات إلى GitHub

```bash
git add .
git commit -m "إضافة ملفات بناء APK - فاست لينك حسابات"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/fastlink-android-apk.git
git push -u origin main
```

### 8. بناء APK

```bash
# تثبيت التبعيات
npm install

# إضافة منصة أندرويد
npx cap add android

# نسخ الملفات
npx cap copy
npx cap sync android

# فتح Android Studio
npx cap open android

# في Android Studio:
# Build → Build Bundle(s) / APK(s) → Build APK(s)
```

---

## 📊 النتائج المتوقعة

### حجم APK
- **Debug APK**: ~8-12 MB
- **Release APK**: ~5-8 MB (بعد التقليل)

### الميزات المدعومة
- ✅ العمل بدون إنترنت (Offline)
- ✅ تخزين محلي (LocalStorage + Preferences)
- ✅ مزامنة GitHub
- ✅ تشفير البيانات
- ✅ وضع داكن
- ✅ تصميم RTL كامل
- ✅ أيقونات مخصصة
- ✅ شاشة بداية
- ✅ دعم زر الرجوع
- ✅ إشعارات Toast
- ✅ اهتزاز عند التفاعل

---

## 🐛 استكشاف الأخطاء

### خطأ: "SDK location not found"
```bash
# أنشئ ملف android/local.properties
echo "sdk.dir=/path/to/Android/Sdk" > android/local.properties
```

### خطأ: "Gradle version incompatible"
```bash
# تأكد من استخدام Gradle 8.x مع AGP 8.2.x
cd android
./gradlew wrapper --gradle-version 8.2
```

### خطأ: "WebView not supported"
```bash
# تأكد من minSdkVersion >= 22 في android/variables.gradle
```

### التطبيق لا يعمل بعد التثبيت
1. تحقق من أذونات التخزين
2. تأكد من تفعيل "مصادر غير معروفة" في إعدادات أندرويد
3. تحقق من logs: `adb logcat | grep "Capacitor"`

---

## 🔗 روابط مفيدة

- **المستودع الأصلي**: https://github.com/master1moon/song10
- **Capacitor Documentation**: https://capacitorjs.com/docs
- **Android Developer Guide**: https://developer.android.com/guide
- **APK Signing**: https://developer.android.com/studio/publish/app-signing

---

## 📝 ملاحظات مهمة

1. **الأيقونات**: استبدل الأيقونات في `android/app/src/main/res/mipmap-*` بأيقونات التطبيق الفعلية
2. **Splash Screen**: أضف صورة شاشة البداية في `android/app/src/main/res/drawable/splash.png`
3. **التوقيع**: لا تنسَ توقيع APK قبل نشره على Google Play
4. **الاختبار**: اختبر التطبيق على أجهزة متعددة قبل النشر

---

## ✅ حالة المشروع

- ✅ جميع ملفات Capacitor جاهزة
- ✅ جميع ملفات Android جاهزة
- ✅ سكريبتات بناء تلقائية
- ✅ دليل شامل بالعربية
- ✅ واجهة تفاعلية مع أوامر قابلة للنسخ
- ✅ روابط تنزيل مباشرة

**الحالة**: جاهز 100% للبناء والتثبيت 🎉

---

## 📄 الترخيص

هذا المشروع مبني على تطبيق "فاست لينك حسابات" الأصلي.

---

**تم الإنشاء بواسطة**: Capacitor 5 + Android Studio  
**الإصدار**: 1.0.6  
**التاريخ**: 2024
