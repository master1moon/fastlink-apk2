# 🚀 ابدأ من هنا - إضافة ملفات التطبيق وبناء APK

## ⚡ الطريقة الأسرع (دقيقة واحدة)

### 1. حمّل السكريبت التلقائي

```bash
# اختر حسب نظامك:

# Linux/Mac:
wget https://raw.githubusercontent.com/master1moon/fastlink-apk2/github-file-analysis-edfc2/android-build/setup-complete.sh
chmod +x setup-complete.sh
./setup-complete.sh

# Windows:
# حمّل setup-complete.bat من الروابط أدناه
```

### 2. أو استخدم سكريبت Node.js (يعمل على جميع الأنظمة)

```bash
# حمّل setup.js ثم شغّله:
node setup.js
```

---

## 📥 روابط التحميل المباشر

### سكريبتات تلقائية:

| النظام | الملف | الرابط |
|--------|-------|--------|
| **Linux/Mac** | `setup-complete.sh` | [تحميل](https://raw.githubusercontent.com/master1moon/fastlink-apk2/github-file-analysis-edfc2/android-build/setup-complete.sh) |
| **Windows** | `setup-complete.bat` | [تحميل](https://raw.githubusercontent.com/master1moon/fastlink-apk2/github-file-analysis-edfc2/android-build/setup-complete.bat) |
| **جميع الأنظمة** | `setup.js` | [تحميل](https://raw.githubusercontent.com/master1moon/fastlink-apk2/github-file-analysis-edfc2/android-build/setup.js) |

### ملفات Capacitor:

| الملف | الرابط |
|-------|--------|
| `capacitor.config.json` | [تحميل](https://raw.githubusercontent.com/master1moon/fastlink-apk2/github-file-analysis-edfc2/android-build/capacitor.config.json) |
| `package.json` | [تحميل](https://raw.githubusercontent.com/master1moon/fastlink-apk2/github-file-analysis-edfc2/android-build/package.json) |
| `build-android.sh` | [تحميل](https://raw.githubusercontent.com/master1moon/fastlink-apk2/github-file-analysis-edfc2/android-build/build-android.sh) |
| `build-android.bat` | [تحميل](https://raw.githubusercontent.com/master1moon/fastlink-apk2/github-file-analysis-edfc2/android-build/build-android.bat) |

### ملفات Android:

| الملف | الرابط |
|-------|--------|
| `MainActivity.java` | [تحميل](https://raw.githubusercontent.com/master1moon/fastlink-apk2/github-file-analysis-edfc2/android-build/android/app/src/main/java/com/fastlink/accounts/MainActivity.java) |
| `AndroidManifest.xml` | [تحميل](https://raw.githubusercontent.com/master1moon/fastlink-apk2/github-file-analysis-edfc2/android-build/android/app/src/main/AndroidManifest.xml) |
| `strings.xml` | [تحميل](https://raw.githubusercontent.com/master1moon/fastlink-apk2/github-file-analysis-edfc2/android-build/android/app/src/main/res/values/strings.xml) |
| `styles.xml` | [تحميل](https://raw.githubusercontent.com/master1moon/fastlink-apk2/github-file-analysis-edfc2/android-build/android/app/src/main/res/values/styles.xml) |

### ملفات Capacitor Bridge:

| الملف | الرابط |
|-------|--------|
| `capacitor-bridge.js` | [تحميل](https://raw.githubusercontent.com/master1moon/fastlink-apk2/github-file-analysis-edfc2/android-build/www/capacitor-bridge.js) |

---

## 📋 الخطوات الكاملة

### الطريقة 1: استخدام السكريبت التلقائي (موصى به)

```bash
# 1. استنساخ المستودع
git clone https://github.com/master1moon/fastlink-apk2.git
cd fastlink-apk2/android-build

# 2. شغّل السكريبت
# Linux/Mac:
chmod +x setup-complete.sh
./setup-complete.sh

# Windows:
setup-complete.bat

# أو استخدم Node.js (جميع الأنظمة):
node setup.js
```

**السكريبت يقوم بـ:**
- ✅ تحميل ملفات التطبيق من song10
- ✅ نسخها إلى www/
- ✅ تطبيق جميع التعديلات
- ✅ تثبيت التبعيات
- ✅ إضافة منصة Android
- ✅ مزامنة Capacitor

### الطريقة 2: يدوياً

```bash
# 1. استنساخ المستودع
git clone https://github.com/master1moon/fastlink-apk2.git
cd fastlink-apk2/android-build

# 2. تحميل التطبيق الأصلي
git clone https://github.com/master1moon/song10.git temp

# 3. نسخ الملفات إلى www/
mkdir -p www
cp temp/index.html www/
cp temp/app.js www/
cp temp/manifest.json www/
cp temp/serviceworker.js www/
cp -r temp/css www/
cp -r temp/fonts www/
cp -r temp/icons www/
cp -r temp/js www/
rm -rf temp

# 4. تطبيق التعديلات (انظر ADD-FILES.md)

# 5. تثبيت التبعيات
npm install

# 6. إضافة منصة Android
npx cap add android

# 7. مزامنة Capacitor
npx cap copy
npx cap sync android

# 8. فتح Android Studio
npx cap open android

# 9. بناء APK
# في Android Studio: Build → Build APK
```

---

## 🎯 النتيجة النهائية

بعد تنفيذ الخطوات، ستحصل على:

```
android-build/
├── capacitor.config.json ✅
├── package.json ✅
├── android/ ✅ (مشروع Android كامل)
└── www/
    ├── capacitor-bridge.js ✅
    ├── index.html ✅ (من song10 + تعديلات)
    ├── app.js ✅ (من song10 + تعديلات)
    ├── manifest.json ✅
    ├── serviceworker.js ✅ (من song10 + تعديلات)
    ├── css/ ✅
    ├── fonts/ ✅
    ├── icons/ ✅
    └── js/ ✅ (27 ملف)
```

---

## 📱 بناء APK

### Debug APK (للتطوير)

```bash
cd android
./gradlew assembleDebug
```

**الملف الناتج:** `android/app/build/outputs/apk/debug/app-debug.apk`

### Release APK (للنشر)

```bash
# 1. إنشاء مفتاح التوقيع
keytool -genkey -v -keystore release-key.jks -keyalg RSA \
  -keysize 2048 -validity 10000 -alias fastlink

# 2. إضافة إلى android/local.properties
RELEASE_STORE_FILE=../release-key.jks
RELEASE_STORE_PASSWORD=your_password
RELEASE_KEY_ALIAS=fastlink
RELEASE_KEY_PASSWORD=your_password

# 3. بناء Release APK
cd android
./gradlew assembleRelease
```

---

## 🔧 المتطلبات

- **Node.js 18+** - [تحميل](https://nodejs.org)
- **Android Studio** - [تحميل](https://developer.android.com/studio)
- **JDK 17** - [تحميل](https://adoptium.net)
- **Git** - [تحميل](https://git-scm.com)

---

## 🐛 استكشاف الأخطاء

### خطأ: "git not found"
```bash
# ثبّت Git
# Ubuntu/Debian: sudo apt install git
# macOS: brew install git
# Windows: https://git-scm.com/download/win
```

### خطأ: "npm not found"
```bash
# ثبّت Node.js من: https://nodejs.org
```

### خطأ: "SDK location not found"
```bash
# أنشئ ملف android/local.properties
echo "sdk.dir=/path/to/Android/Sdk" > android/local.properties
```

---

## 📚 الوثائق الكاملة

- **[ADD-FILES.md](ADD-FILES.md)** - دليل إضافة الملفات بالتفصيل
- **[README.md](README.md)** - دليل شامل بالإنجليزية
- **[QUICK-START.md](QUICK-START.md)** - دليل البدء السريع
- **[COMPLETED.md](COMPLETED.md)** - ملخص الإنجاز

---

## 🔗 روابط مفيدة

- **المستودع الأصلي**: https://github.com/master1moon/song10
- **مستودع البناء**: https://github.com/master1moon/fastlink-apk2
- **Capacitor**: https://capacitorjs.com/docs
- **Android**: https://developer.android.com/guide

---

## ✅ التحقق من النجاح

بعد تشغيل السكريبت، تحقق من:

```bash
# التحقق من www/
ls www/
# يجب أن ترى: index.html, app.js, manifest.json, serviceworker.js, css/, fonts/, icons/, js/

# التحقق من android/
ls android/
# يجب أن ترى: app/, build.gradle, gradle/, gradlew, ...
```

---

**🎉 بعد إضافة الملفات، أنت جاهز لبناء APK!**

**الخطوة الأخيرة:** افتح Android Studio وابنِ APK من القائمة: Build → Build APK

---

## 💡 نصيحة

استخدم **السكريبت التلقائي** (`setup-complete.sh` أو `setup.js`) - فهو يقوم بكل شيء تلقائياً في دقيقة واحدة!
