# 🚀 بناء APK مجاناً على GitHub (بدون جهاز قوي!)

## ✨ الحل المثالي لجهازك!

**لا تحتاج جهاز قوي!** GitHub Actions يوفر خوادم قوية مجاناً لبناء APK.

---

## 🎯 ما هو GitHub Actions؟

GitHub Actions هي خدمة مجانية من GitHub تسمح لك بتشغيل أوامر بناء تلقائياً على خوادم GitHub القوية.

### المميزات:
- ✅ **مجاني 100%** - لا تكلفة نهائياً
- ✅ **لا يحتاج جهاز قوي** - خوادم GitHub تتكفل بكل شيء
- ✅ **سريع** - 5-10 دقائق فقط
- ✅ **تلقائي** - بدون تدخل يدوي
- ✅ **2000 دقيقة شهرياً** - أكثر من كافٍ

---

## 📋 الخطوات (5 دقائق فقط)

### 1️⃣ افتح المستودع

اذهب إلى: **https://github.com/master1moon/fastlink-apk2**

### 2️⃣ فعّل GitHub Actions

1. اضغط على تبويب **Actions** في الأعلى
2. اضغط على **Enable Actions** أو **I understand my workflows**
3. ستظهر لك workflow باسم **Build APK**

### 3️⃣ شغّل البناء

1. اضغط على **Build APK**
2. اضغط على **Run workflow** (زر أخضر)
3. اضغط على **Run workflow** مرة أخرى للتأكيد

### 4️⃣ انتظر 5-10 دقائق

GitHub سيقوم تلقائياً بـ:
- ✅ تحميل ملفات التطبيق الأصلي
- ✅ تطبيق جميع التعديلات
- ✅ تثبيت التبعيات
- ✅ بناء مشروع Android
- ✅ إنشاء ملف APK

### 5️⃣ حمّل ملف APK

1. اضغط على **Build** (أحدث تشغيل)
2. في الأسفل، ستجد **Artifacts**
3. اضغط على **fastlink-accounts-apk** للتحميل

---

## 🎉 النتيجة النهائية

ستحصل على ملف APK جاهز للتثبيت على أي جهاز أندرويد!

### المواصفات:
- 📱 **الحجم المتوقع**: 8-12 MB
- ⏱️ **وقت البناء**: 5-10 دقائق
- 💰 **التكلفة**: 0 ريال (مجاني 100%)

---

## 📥 طريقة بديلة: Releases

إذا كنت على فرع **main**، سيتم إنشاء Release تلقائياً:

1. اذهب إلى تبويب **Releases**
2. اضغط على أحدث release
3. حمّل ملف APK من **Assets**

**الرابط**: https://github.com/master1moon/fastlink-apk2/releases

---

## 🔗 روابط مباشرة

| الرابط | الوصف |
|--------|-------|
| [المستودع](https://github.com/master1moon/fastlink-apk2) | المستودع الرئيسي |
| [GitHub Actions](https://github.com/master1moon/fastlink-apk2/actions) | تشغيل البناء |
| [Releases](https://github.com/master1moon/fastlink-apk2/releases) | تحميل APK |
| [التطبيق الأصلي](https://github.com/master1moon/song10) | مستودع song10 |

---

## 📚 وثائق إضافية

- **[BUILD-APK-FREE.md](BUILD-APK-FREE.md)** - دليل مفصل بالعربية
- **[GITHUB-ACTIONS-GUIDE.html](GITHUB-ACTIONS-GUIDE.html)** - دليل تفاعلي
- **[index.html](index.html)** - صفحة رئيسية للشرح

---

## 💡 نصائح مهمة

### للحصول على أفضل نتيجة:

- ✅ **استخدم فرع main**: سيتم إنشاء Release تلقائياً
- ✅ **انتظر حتى ينتهي**: لا توقف العملية أثناء البناء
- ✅ **تحقق من الحجم**: APK النهائي ~8-12 MB
- ✅ **اختبر على جهاز**: قبل النشر على Google Play

### حدود GitHub Actions المجاني:

- **2000 دقيقة** شهرياً للمستودعات العامة (أكثر من كافٍ)
- **500 MB** تخزين للملفات المبنية
- **لا يوجد حد** لعدد مرات البناء
- **مجاني 100%** للمستودعات العامة

---

## 🐛 استكشاف الأخطاء

### ❌ فشل البناء

1. اضغط على **Build** الفاشل
2. اضغط على الخطوة الفاشلة لرؤية الأخطاء
3. تحقق من logs لمعرفة السبب
4. أعد المحاولة بعد إصلاح المشكلة

### ❌ لم أجد زر Run workflow

قم بعمل commit لأي ملف (مثل README.md) وادفع التغييرات، ثم ستظهر لك الخيارات.

### ❌ لم أجد Artifacts

تأكد من أن البناء اكتمل بنجاح (علامة خضراء ✓).

---

## ⚙️ ماذا يحدث أثناء البناء؟

```bash
# الخطوة 1: إعداد البيئة
✓ Checkout code
✓ Setup Node.js 18
✓ Setup Java JDK 17
✓ Setup Android SDK

# الخطوة 2: تحميل التطبيق الأصلي
✓ Clone https://github.com/master1moon/song10
✓ Copy files to www/

# الخطوة 3: تطبيق التعديلات
✓ Modify index.html (CSP)
✓ Modify serviceworker.js
✓ Modify app.js

# الخطوة 4: تثبيت التبعيات
✓ npm install
✓ npx cap add android
✓ npx cap sync

# الخطوة 5: بناء APK
✓ ./gradlew assembleDebug

# الخطوة 6: رفع APK
✓ Upload artifact
✓ Create release (if on main branch)
```

---

## 🎯 ابدأ الآن!

1. افتح: https://github.com/master1moon/fastlink-apk2/actions
2. فعّل Actions
3. اضغط Run workflow
4. انتظر 5-10 دقائق
5. حمّل APK!

---

## 📱 الميزات المدعومة في APK

- ✅ إدارة المبيعات والمصروفات
- ✅ إدارة المخزون
- ✅ متابعة الديون
- ✅ تقارير مالية شاملة
- ✅ وضع داكن
- ✅ يعمل بدون إنترنت
- ✅ مزامنة GitHub
- ✅ تشفير البيانات
- ✅ تصميم RTL كامل
- ✅ أيقونات مخصصة

---

## 🔧 الملفات المطلوبة

جميع الملفات موجودة في المستودع:

### ملفات Capacitor:
- ✅ `capacitor.config.json`
- ✅ `package.json`
- ✅ `www/capacitor-bridge.js`

### ملفات Android:
- ✅ `MainActivity.java`
- ✅ `AndroidManifest.xml`
- ✅ `strings.xml` + `styles.xml`
- ✅ `network_security_config.xml`

### GitHub Actions:
- ✅ `.github/workflows/build-apk.yml`

### ملفات التطبيق الأصلي:
- ✅ يتم تحميلها تلقائياً من song10

---

## 🎉 الخلاصة

**لا تحتاج جهاز قوي!**

GitHub Actions هو الحل المثالي لبناء APK مجاناً على خوادم GitHub القوية.

فقط:
1. افتح المستودع
2. فعّل Actions
3. اضغط Run workflow
4. انتظر 5-10 دقائق
5. حمّل APK!

---

**✨ مجاني 100% - لا يحتاج جهاز قوي - تلقائي بالكامل!**

---

## 📄 الترخيص

هذا المشروع مبني على تطبيق "فاست لينك حسابات" الأصلي.

---

**تم الإنشاء بواسطة**: GitHub Actions + Capacitor 5  
**الإصدار**: 1.0.6  
**التاريخ**: 2024
