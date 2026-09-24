# 📱 إضافة ملفات التطبيق الأصلي

## ⚡ الطريقة الأسرع (موصى بها)

### استخدم السكريبت التلقائي:

```bash
# Linux/Mac
chmod +x setup-complete.sh
./setup-complete.sh

# Windows
setup-complete.bat
```

**هذا السكريبت يقوم بكل شيء تلقائياً:**
- ✅ تحميل ملفات التطبيق من song10
- ✅ نسخها إلى www/
- ✅ تطبيق جميع التعديلات
- ✅ تثبيت التبعيات
- ✅ إضافة منصة Android
- ✅ مزامنة Capacitor

---

## 🔧 الطريقة اليدوية

### 1. استنساخ المستودع

```bash
git clone https://github.com/master1moon/fastlink-apk2.git
cd fastlink-apk2/android-build
```

### 2. تحميل التطبيق الأصلي

```bash
git clone https://github.com/master1moon/song10.git temp
```

### 3. نسخ الملفات إلى www/

```bash
# إنشاء مجلد www
mkdir -p www

# نسخ ملفات التطبيق
cp temp/index.html www/
cp temp/app.js www/
cp temp/manifest.json www/
cp temp/serviceworker.js www/
cp -r temp/css www/
cp -r temp/fonts www/
cp -r temp/icons www/
cp -r temp/js www/

# حذف المجلد المؤقت
rm -rf temp
```

### 4. تطبيق التعديلات

#### 4.1 تعديل index.html

افتح `www/index.html` واستبدل CSP بـ:

```html
<meta http-equiv="Content-Security-Policy" 
  content="default-src 'self' https: blob:; 
           script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; 
           style-src 'self' 'unsafe-inline' https:; 
           img-src 'self' https: blob:; 
           font-src 'self' https:; 
           connect-src 'self' https: blob:;">
```

أضف قبل `</body>`:

```html
<script src="capacitor-bridge.js"></script>
```

#### 4.2 تعديل serviceworker.js

افتح `www/serviceworker.js` وأضف في البداية:

```javascript
const isCapacitor = typeof window !== 'undefined' && typeof window.Capacitor !== 'undefined';
if (request.url.startsWith('capacitor://')) return;
```

#### 4.3 تعديل app.js

افتح `www/app.js` وأضف في DOMContentLoaded:

```javascript
if (typeof window.Capacitor !== 'undefined') {
  console.log('يعمل داخل تطبيق أندرويد');
  if (window.Capacitor.Plugins && window.Capacitor.Plugins.SplashScreen) {
    window.Capacitor.Plugins.SplashScreen.hide();
  }
}
```

### 5. تثبيت التبعيات والبناء

```bash
# تثبيت التبعيات
npm install

# إضافة منصة Android
npx cap add android

# مزامنة Capacitor
npx cap copy
npx cap sync android

# فتح Android Studio
npx cap open android
```

### 6. بناء APK

في Android Studio:
- Build → Build Bundle(s) / APK(s) → Build APK

---

## 📂 الملفات المطلوبة

بعد إضافة ملفات التطبيق الأصلي، يجب أن يحتوي مجلد `www/` على:

- ✅ `index.html` (بعد تعديل CSP)
- ✅ `app.js` (بعد إضافة دعم Capacitor)
- ✅ `manifest.json`
- ✅ `serviceworker.js` (بعد إضافة فحص Capacitor)
- ✅ `capacitor-bridge.js` (موجود مسبقاً)
- ✅ `css/` (مجلد)
- ✅ `fonts/` (مجلد)
- ✅ `icons/` (مجلد)
- ✅ `js/` (مجلد يحتوي على 27 ملف)

---

## 🎯 النتيجة النهائية

بعد تنفيذ الخطوات، ستحصل على:

```
android-build/
├── capacitor.config.json ✅
├── package.json ✅
├── build-android.sh ✅
├── setup-complete.sh ✅ (سكريبت تلقائي)
├── android/ ✅ (مشروع Android كامل)
└── www/
    ├── capacitor-bridge.js ✅
    ├── index.html ✅ (من song10 + تعديلات)
    ├── app.js ✅ (من song10 + تعديلات)
    ├── manifest.json ✅ (من song10)
    ├── serviceworker.js ✅ (من song10 + تعديلات)
    ├── css/ ✅ (من song10)
    ├── fonts/ ✅ (من song10)
    ├── icons/ ✅ (من song10)
    └── js/ ✅ (من song10 - 27 ملف)
```

---

## 🔗 روابط مفيدة

- **المستودع الأصلي**: https://github.com/master1moon/song10
- **مستودع البناء**: https://github.com/master1moon/fastlink-apk2
- **Capacitor**: https://capacitorjs.com/docs
- **Android Studio**: https://developer.android.com/studio

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
# ثبّت Node.js
# https://nodejs.org
```

### خطأ: "npx cap add android failed"
```bash
# تأكد من وجود capacitor.config.json
# ثم جرب:
rm -rf node_modules
npm install
npx cap add android
```

---

## ✅ التحقق من النجاح

بعد تشغيل السكريبت، تحقق من:

```bash
# التحقق من وجود www/
ls www/

# يجب أن ترى:
# index.html  app.js  manifest.json  serviceworker.js
# capacitor-bridge.js  css/  fonts/  icons/  js/

# التحقق من android/
ls android/

# يجب أن ترى:
# app/  build.gradle  gradle/  gradlew  ...
```

---

**🎉 بعد إضافة الملفات، أنت جاهز لبناء APK!**
