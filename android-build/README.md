# 📱 فاست لينك حسابات - تطبيق أندرويد APK

## نظرة عامة

هذا الدليل يشرح كيفية تحويل تطبيق "فاست لينك حسابات" من تطبيق ويب إلى تطبيق أندرويد قابل للتثبيت (APK) باستخدام إطار Capacitor 5.

## 📋 المتطلبات

قبل البدء، تأكد من تثبيت:

- **Node.js 18+** - [تحميل](https://nodejs.org)
- **Android Studio** - [تحميل](https://developer.android.com/studio)
- **JDK 17** - [تحميل](https://adoptium.net)
- **Git** - [تحميل](https://git-scm.com)

## 🚀 البدء السريع

### الطريقة التلقائية (موصى بها)

```bash
# Linux/Mac
chmod +x build-android.sh
./build-android.sh

# Windows
build-android.bat
```

### الطريقة اليدوية

```bash
# 1. تثبيت التبعيات
npm install

# 2. إضافة منصة أندرويد
npx cap add android

# 3. نسخ ملفات الويب إلى www
mkdir -p www
cp index.html app.js manifest.json serviceworker.js www/
cp -r css fonts icons js www/
cp capacitor-bridge.js www/

# 4. مزامنة Capacitor
npx cap copy
npx cap sync android

# 5. فتح في Android Studio
npx cap open android

# 6. بناء APK
cd android
./gradlew assembleDebug
```

## 📂 هيكل الملفات

```
android-build/
├── capacitor.config.json      # إعدادات Capacitor
├── package.json               # تبعيات المشروع
├── capacitor-bridge.js        # جسر Capacitor
├── build-android.sh           # سكريبت بناء (Linux/Mac)
├── build-android.bat          # سكريبت بناء (Windows)
├── README.md                  # هذا الملف
├── www/                       # ملفات الويب
│   └── capacitor-bridge.js
└── android/                   # مشروع أندرويد
    ├── app/
    │   ├── build.gradle
    │   └── src/main/
    │       ├── AndroidManifest.xml
    │       ├── java/com/fastlink/accounts/
    │       │   └── MainActivity.java
    │       └── res/
    │           ├── values/
    │           │   ├── strings.xml
    │           │   └── styles.xml
    │           └── xml/
    │               ├── network_security_config.xml
    │               └── file_paths.xml
    ├── variables.gradle
    └── settings.gradle
```

## 🔧 التعديلات المطلوبة

### 1. index.html

استبدال CSP الحالي بـ:

```html
<meta http-equiv="Content-Security-Policy" 
  content="default-src 'self' https: blob:; 
           script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; 
           style-src 'self' 'unsafe-inline' https:; 
           img-src 'self' https: blob:; 
           font-src 'self' https:; 
           connect-src 'self' https: blob:; 
           frame-src 'self' https:;">
```

إضافة قبل `</body>`:

```html
<script src="capacitor-bridge.js"></script>
```

### 2. serviceworker.js

إضافة فحص Capacitor:

```javascript
const isCapacitor = typeof window !== 'undefined' && 
  typeof window.Capacitor !== 'undefined';

// تجاهل طلبات Capacitor الداخلية
if (request.url.startsWith('capacitor://')) return;
```

### 3. app.js

إضافة دعم Capacitor:

```javascript
document.addEventListener('DOMContentLoaded', () => {
  if (typeof window.Capacitor !== 'undefined') {
    console.log('يعمل داخل تطبيق أندرويد');
    
    // إخفاء شاشة البداية
    if (window.Capacitor.Plugins && window.Capacitor.Plugins.SplashScreen) {
      window.Capacitor.Plugins.SplashScreen.hide();
    }
    
    // إعداد زر الرجوع
    setupBackButton();
  }
});
```

## 📱 بناء APK

### APK Debug (للتطوير)

```bash
cd android
./gradlew assembleDebug
```

الملف الناتج: `android/app/build/outputs/apk/debug/app-debug.apk`

### APK Release (للنشر)

1. إنشاء مفتاح التوقيع:

```bash
keytool -genkey -v -keystore release-key.jks -keyalg RSA \
  -keysize 2048 -validity 10000 -alias fastlink
```

2. إضافة إلى `android/local.properties`:

```properties
RELEASE_STORE_FILE=../release-key.jks
RELEASE_STORE_PASSWORD=your_password
RELEASE_KEY_ALIAS=fastlink
RELEASE_KEY_PASSWORD=your_password
```

3. بناء Release APK:

```bash
cd android
./gradlew assembleRelease
```

## 📊 حجم APK المتوقع

- **Debug**: ~8-12 MB
- **Release** (مع minify): ~5-8 MB

## 🔍 استكشاف الأخطاء

### خطأ: SDK location not found

```properties
# في android/local.properties
sdk.dir=/path/to/Android/Sdk
```

### خطأ: Gradle version

تأكد من استخدام Gradle 8.x مع AGP 8.2.x

### خطأ: WebView

تأكد من `minSdkVersion >= 22`

### التطبيق لا يعمل بعد التثبيت

1. تحقق من أذونات التخزين
2. تأكد من تفعيل "مصادر غير معروفة" في إعدادات أندرويد
3. تحقق من logs عبر: `adb logcat | grep "Capacitor"`

## 🎯 الميزات المضافة

- ✅ دعم PWA كامل
- ✅ العمل بدون إنترنت (Offline)
- ✅ مزامنة GitHub
- ✅ تشفير البيانات
- ✅ وضع داكن
- ✅ تصميم RTL كامل
- ✅ أيقونات مخصصة
- ✅ شاشة بداية
- ✅ دعم زر الرجوع
- ✅ إشعارات Toast
- ✅ مشاركة الملفات
- ✅ اهتزاز عند التفاعل

## 📝 ملاحظات مهمة

1. **الأيقونات**: استبدل الأيقونات في `android/app/src/main/res/mipmap-*` بأيقونات التطبيق
2. **Splash Screen**: أضف صورة شاشة البداية في `android/app/src/main/res/drawable/splash.png`
3. **التوقيع**: لا تنسَ توقيع APK قبل نشره على Google Play
4. **الاختبار**: اختبر التطبيق على أجهزة متعددة قبل النشر

## 🔗 روابط مفيدة

- [مستودع التطبيق الأصلي](https://github.com/master1moon/song10)
- [Capacitor Documentation](https://capacitorjs.com/docs)
- [Android Developer Guide](https://developer.android.com/guide)
- [APK Signing](https://developer.android.com/studio/publish/app-signing)

## 📄 الترخيص

هذا المشروع مبني على تطبيق "فاست لينك حسابات" الأصلي.

---

**تم الإنشاء بواسطة**: Capacitor 5 + Android Studio  
**الإصدار**: 1.0.6  
**التاريخ**: 2024
