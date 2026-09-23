# 📱 فاست لينك حسابات - بناء APK

## ⚡ الخطوات السريعة

### 1. المتطلبات
- Node.js 18+: https://nodejs.org
- Android Studio: https://developer.android.com/studio
- JDK 17: https://adoptium.net

### 2. انسخ ملفات التطبيق الأصلي
من: https://github.com/master1moon/song10

انسخ إلى مجلد `www/`:
- index.html
- app.js
- manifest.json
- serviceworker.js
- capacitor-bridge.js
- css/
- fonts/
- icons/
- js/

### 3. انسخ ملفات Capacitor
- capacitor.config.json → جذر المشروع
- package.json → جذر المشروع (استبدل الموجود)
- capacitor-bridge.js → مجلد www/

### 4. طبّق التعديلات

#### index.html
استبدل CSP بـ:
```html
<meta http-equiv="Content-Security-Policy" 
  content="default-src 'self' https: blob:; 
           script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; 
           style-src 'self' 'unsafe-inline' https:; 
           img-src 'self' https: blob:; 
           font-src 'self' https:; 
           connect-src 'self' https: blob:;">
```

#### serviceworker.js
أضف في البداية:
```javascript
const isCapacitor = typeof window !== 'undefined' && typeof window.Capacitor !== 'undefined';
if (request.url.startsWith('capacitor://')) return;
```

#### app.js
أضف في DOMContentLoaded:
```javascript
if (typeof window.Capacitor !== 'undefined') {
  window.Capacitor.Plugins.SplashScreen.hide();
}
```

### 5. شغّل الأوامر
```bash
npm install
npx cap add android
npx cap copy
npx cap sync android
npx cap open android
```

### 6. ابنِ APK من Android Studio
Build → Build Bundle(s) / APK(s) → Build APK(s)

### 7. النتيجة
ستحصل على: `android/app/build/outputs/apk/debug/app-debug.apk`

## 📊 الحجم المتوقع
- Debug APK: ~8-12 MB
- Release APK: ~5-8 MB

## 🔗 روابط مفيدة
- المستودع الأصلي: https://github.com/master1moon/song10
- Capacitor: https://capacitorjs.com/docs
- Android: https://developer.android.com/guide
