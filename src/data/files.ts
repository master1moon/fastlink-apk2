export interface ProjectFile {
  path: string;
  content: string;
  language: string;
  description: string;
  category: 'config' | 'android' | 'js' | 'html' | 'script' | 'fix';
}

export interface Change {
  title: string;
  description: string;
  type: 'fix' | 'add' | 'modify' | 'remove';
  severity: 'critical' | 'important' | 'recommended';
  file: string;
}

export const changes: Change[] = [
  {
    title: 'إصلاح CSP (Content Security Policy)',
    description: 'تحويل CSP من Report-Only إلى وضع التنفيذ الفعلي مع السماح لـ Capacitor bridge',
    type: 'fix',
    severity: 'critical',
    file: 'index.html'
  },
  {
    title: 'إضافة Capacitor Bridge',
    description: 'إضافة @nicolo-ribaudo/chokidar-2 و @nicolo-ribaudo/chokidar-2 للتعامل مع Capacitor',
    type: 'add',
    severity: 'critical',
    file: 'package.json'
  },
  {
    title: 'إضافة capacitor.config.json',
    description: 'إعداد Capacitor لتطبيق أندرويد مع appId واسم التطبيق',
    type: 'add',
    severity: 'critical',
    file: 'capacitor.config.json'
  },
  {
    title: 'تحديث AndroidManifest.xml',
    description: 'إضافة أذونات الإنترنت والتخزين وتعديل activity للتطبيق',
    type: 'modify',
    severity: 'critical',
    file: 'android/app/src/main/AndroidManifest.xml'
  },
  {
    title: 'تحديث strings.xml',
    description: 'إضافة اسم التطبيق بالعربية لـ strings',
    type: 'modify',
    severity: 'important',
    file: 'android/app/src/main/res/values/strings.xml'
  },
  {
    title: 'إضافة أيقونات أندرويد',
    description: 'استبدال الأيقونات الافتراضية بأيقونات التطبيق بأحجام mdpi/hdpi/xhdpi/xxhdpi/xxxhdpi',
    type: 'add',
    severity: 'important',
    file: 'android/app/src/main/res/'
  },
  {
    title: 'تحديث build.gradle',
    description: 'ضبط minSdkVersion إلى 22 و targetSdkVersion إلى 34',
    type: 'modify',
    severity: 'important',
    file: 'android/app/build.gradle'
  },
  {
    title: 'إصلاح Service Worker Scope',
    description: 'تعديل scope الـ Service Worker ليعمل داخل WebView',
    type: 'fix',
    severity: 'important',
    file: 'serviceworker.js'
  },
  {
    title: 'إضافة Capacitor Plugins',
    description: 'إضافة plugins للبطارية، الشبكة، التخزين المحلي، والإشعارات',
    type: 'add',
    severity: 'recommended',
    file: 'package.json'
  },
  {
    title: 'تحسين معالجة الأخطاء',
    description: 'إضافة معالجة أخطاء أفضل لـ try/catch الفارغة',
    type: 'fix',
    severity: 'recommended',
    file: 'app.js'
  },
  {
    title: 'تقسيم index.html',
    description: 'نقل CSS المدمج إلى ملف منفصل لتقليل الحجم وتحسين الأداء',
    type: 'fix',
    severity: 'recommended',
    file: 'index.html'
  },
  {
    title: 'إضافة Splash Screen',
    description: 'إضافة شاشة بداية مخصصة للتطبيق',
    type: 'add',
    severity: 'recommended',
    file: 'android/app/src/main/res/'
  },
];

export const projectFiles: ProjectFile[] = [
  {
    path: 'capacitor.config.json',
    language: 'json',
    description: 'إعدادات Capacitor الرئيسية - تربط تطبيق الويب بمشروع أندرويد',
    category: 'config',
    content: `{
  "appId": "com.fastlink.accounts",
  "appName": "فاست لينك - حسابات",
  "webDir": "www",
  "bundledWebRuntime": false,
  "server": {
    "androidScheme": "https",
    "allowNavigation": []
  },
  "plugins": {
    "SplashScreen": {
      "launchAutoHide": false,
      "backgroundColor": "#575657",
      "showSpinner": true,
      "spinnerColor": "#ffffff",
      "androidSplashResourceName": "splash",
      "androidScaleType": "CENTER_CROP"
    },
    "Keyboard": {
      "resize": "body",
      "resizeOnFullScreen": true
    },
    "StatusBar": {
      "style": "DARK",
      "backgroundColor": "#575657"
    }
  },
  "android": {
    "allowMixedContent": false,
    "captureInput": true,
    "webContentsDebuggingEnabled": false,
    "backgroundColor": "#575657",
    "buildOptions": {
      "keystorePath": null,
      "keystorePassword": null,
      "keystoreAlias": null,
      "keystoreAliasPassword": null,
      "releaseType": "APK",
      "signingType": "apk"
    }
  }
}`
  },
  {
    path: 'package.json',
    language: 'json',
    description: 'ملف التبعيات - يضيف Capacitor والإضافات المطلوبة',
    category: 'config',
    content: `{
  "name": "fastlink-accounts",
  "version": "1.0.6",
  "description": "تطبيق إدارة المبيعات والمصروفات والمخزون",
  "main": "index.html",
  "scripts": {
    "build:android": "npm run sync && npx cap sync android",
    "sync": "npx cap copy && npx cap sync",
    "open:android": "npx cap open android",
    "build:apk": "cd android && ./gradlew assembleDebug",
    "build:release": "cd android && ./gradlew assembleRelease",
    "icons": "npx capacitor-assets generate --android"
  },
  "dependencies": {
    "@capacitor/core": "^5.7.0",
    "@capacitor/android": "^5.7.0",
    "@capacitor/splash-screen": "^5.0.7",
    "@capacitor/status-bar": "^5.0.7",
    "@capacitor/keyboard": "^5.0.8",
    "@capacitor/network": "^5.0.7",
    "@capacitor/filesystem": "^5.2.2",
    "@capacitor/share": "^5.0.7",
    "@capacitor/toast": "^5.0.7",
    "@capacitor/app": "^5.0.7",
    "@capacitor/haptics": "^5.0.7",
    "@capacitor/device": "^5.0.7",
    "@capacitor/preferences": "^5.0.7"
  },
  "devDependencies": {
    "@capacitor/cli": "^5.7.0",
    "@capacitor/assets": "^3.0.3"
  }
}`
  },
  {
    path: 'android/app/build.gradle',
    language: 'gradle',
    description: 'إعدادات بناء أندرويد - minSdk, targetSdk, التوقيع',
    category: 'android',
    content: `apply plugin: 'com.android.application'

android {
    namespace "com.fastlink.accounts"
    compileSdk rootProject.ext.compileSdkVersion
    defaultConfig {
        applicationId "com.fastlink.accounts"
        minSdkVersion rootProject.ext.minSdkVersion
        targetSdkVersion rootProject.ext.targetSdkVersion
        versionCode 7
        versionName "1.0.6"
        testInstrumentationRunner "androidx.test.runner.AndroidJUnitRunner"
        aaptOptions {
            ignoreAssetsPattern '!.svn:!.git:!.ds_store:!*.scc:.*:!CVS:!thumbs.db:!picasa.ini:!*~'
        }
        // دعم اللغات
        resConfigs "ar", "en"
    }
    
    signingConfigs {
        release {
            // سيتم تعيينها عبر متغيرات البيئة أو local.properties
            if (project.hasProperty('RELEASE_KEY_ALIAS')) {
                storeFile file(RELEASE_STORE_FILE ?: 'release-key.jks')
                storePassword RELEASE_STORE_PASSWORD
                keyAlias RELEASE_KEY_ALIAS
                keyPassword RELEASE_KEY_PASSWORD
            }
        }
        debug {
            storeFile file('debug.keystore')
            storePassword 'android'
            keyAlias 'androiddebugkey'
            keyPassword 'android'
        }
    }
    
    buildTypes {
        release {
            minifyEnabled true
            shrinkResources true
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
            signingConfig signingConfigs.release
        }
        debug {
            signingConfig signingConfigs.debug
            debuggable true
        }
    }
    
    // تحسين الأداء
    compileOptions {
        sourceCompatibility JavaVersion.VERSION_17
        targetCompatibility JavaVersion.VERSION_17
    }
}

repositories {
    flatDir {
        dirs '../capacitor-cordova-android-plugins/src/main/libs', 'libs'
    }
}

dependencies {
    implementation fileTree(include: ['*.jar'], dir: 'libs')
    implementation "androidx.appcompat:appcompat:$androidxAppCompatVersion"
    implementation "androidx.coordinatorlayout:coordinatorlayout:$androidxCoordinatorLayoutVersion"
    implementation "androidx.core:core-splashscreen:$coreSplashScreenVersion"
    implementation project(':capacitor-android')
    implementation project(':capacitor-cordova-android-plugins')
}

apply from: 'capacitor.build.gradle'

try {
    def servicesJSON = file('google-services.json')
    if (servicesJSON.text) {
        apply plugin: 'com.google.gms.google-services'
    }
} catch(Exception e) {
    logger.info("google-services.json not found, google-services plugin not applied.")
}`
  },
  {
    path: 'android/app/src/main/AndroidManifest.xml',
    language: 'xml',
    description: 'ملف Manifest الرئيسي - الأذونات والإعدادات',
    category: 'android',
    content: `<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <!-- الأذونات المطلوبة -->
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" 
        android:maxSdkVersion="28" 
        tools:replace="android:maxSdkVersion" />
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" 
        android:maxSdkVersion="32" />
    <uses-permission android:name="android.permission.READ_MEDIA_IMAGES" />
    <uses-permission android:name="android.permission.READ_MEDIA_VIDEO" />
    <uses-permission android:name="android.permission.VIBRATE" />
    <uses-permission android:name="android.permission.WAKE_LOCK" />

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/AppTheme"
        android:usesCleartextTraffic="false"
        android:networkSecurityConfig="@xml/network_security_config"
        tools:targetApi="31">

        <activity
            android:configChanges="orientation|keyboardHidden|keyboard|screenSize|locale|smallestScreenSize|screenLayout|uiMode"
            android:name="com.fastlink.accounts.MainActivity"
            android:label="@string/title_activity_main"
            android:theme="@style/AppTheme.NoActionBar.Launch"
            android:launchMode="singleTask"
            android:exported="true"
            android:screenOrientation="unspecified">

            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>

            <!-- دعم مشاركة الملفات -->
            <intent-filter>
                <action android:name="android.intent.action.SEND" />
                <category android:name="android.intent.category.DEFAULT" />
                <data android:mimeType="application/json" />
            </intent-filter>
        </activity>

        <provider
            android:name="androidx.core.content.FileProvider"
            android:authorities="\${applicationId}.fileprovider"
            android:exported="false"
            android:grantUriPermissions="true">
            <meta-data
                android:name="android.support.FILE_PROVIDER_PATHS"
                android:resource="@xml/file_paths" />
        </provider>
    </application>

    <!-- استعلام الحزم للتوافق مع أندرويد 11+ -->
    <queries>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="https" />
        </intent>
    </queries>
</manifest>`
  },
  {
    path: 'android/app/src/main/java/com/fastlink/accounts/MainActivity.java',
    language: 'java',
    description: 'النشاط الرئيسي للتطبيق',
    category: 'android',
    content: `package com.fastlink.accounts;

import com.getcapacitor.BridgeActivity;
import android.os.Bundle;
import android.webkit.WebView;

public class MainActivity extends BridgeActivity {
    
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        // تفعيل RTL
        getWindow().getDecorView().setLayoutDirection(
            android.view.View.LAYOUT_DIRECTION_RTL
        );
    }
    
    @Override
    protected void onRestart() {
        super.onRestart();
        // إعادة تحميل البيانات عند العودة للتطبيق
    }
}`
  },
  {
    path: 'android/app/src/main/res/values/strings.xml',
    language: 'xml',
    description: 'نصوص التطبيق بالعربية',
    category: 'android',
    content: `<?xml version='1.0' encoding='utf-8'?>
<resources>
    <string name="app_name">فاست لينك - حسابات</string>
    <string name="title_activity_main">فاست لينك</string>
    <string name="package_name">com.fastlink.accounts</string>
    <string name="custom_url_scheme">com.fastlink.accounts</string>
    <string name="app_description">تطبيق إدارة المبيعات والمصروفات والمخزون</string>
</resources>`
  },
  {
    path: 'android/app/src/main/res/values-ar/strings.xml',
    language: 'xml',
    description: 'نصوص إضافية بالعربية',
    category: 'android',
    content: `<?xml version='1.0' encoding='utf-8'?>
<resources>
    <string name="app_name">فاست لينك - حسابات</string>
    <string name="title_activity_main">فاست لينك - حسابات</string>
</resources>`
  },
  {
    path: 'android/app/src/main/res/values/styles.xml',
    language: 'xml',
    description: 'أنماط التطبيق - الألوان والمظهر',
    category: 'android',
    content: `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <!-- الثيم الرئيسي -->
    <style name="AppTheme" parent="Theme.AppCompat.Light.NoActionBar">
        <item name="colorPrimary">#575657</item>
        <item name="colorPrimaryDark">#3d3c3d</item>
        <item name="colorAccent">#3498db</item>
        <item name="android:windowBackground">#575657</item>
        <item name="android:statusBarColor">#575657</item>
        <item name="android:navigationBarColor">#575657</item>
        <item name="android:windowLightStatusBar">false</item>
    </style>

    <!-- ثيم شاشة البداية -->
    <style name="AppTheme.NoActionBar.Launch" parent="AppTheme">
        <item name="android:windowBackground">@drawable/splash</item>
        <item name="android:windowNoTitle">true</item>
        <item name="android:windowFullscreen">true</item>
    </style>
</resources>`
  },
  {
    path: 'android/app/src/main/res/xml/network_security_config.xml',
    language: 'xml',
    description: 'إعدادات أمان الشبكة',
    category: 'android',
    content: `<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <!-- السماح بالاتصال المحلي فقط للتطوير -->
    <domain-config cleartextTrafficPermitted="false">
        <domain includeSubdomains="true">api.github.com</domain>
        <domain includeSubdomains="true">github.com</domain>
        <domain includeSubdomains="true">raw.githubusercontent.com</domain>
    </domain-config>
    
    <!-- للتطوير فقط - يُزال عند النشر -->
    <debug-overrides>
        <trust-anchors>
            <certificates src="user" />
        </trust-anchors>
    </debug-overrides>
</network-security-config>`
  },
  {
    path: 'android/app/src/main/res/xml/file_paths.xml',
    language: 'xml',
    description: 'مسارات الملفات للمشاركة والتصدير',
    category: 'android',
    content: `<?xml version="1.0" encoding="utf-8"?>
<paths>
    <external-path name="external_files" path="." />
    <external-files-path name="external_files_path" path="." />
    <cache-path name="cache" path="." />
    <files-path name="internal_files" path="." />
</paths>`
  },
  {
    path: 'android/variables.gradle',
    language: 'gradle',
    description: 'متغيرات الإصدار',
    category: 'android',
    content: `ext {
    minSdkVersion = 22
    compileSdkVersion = 34
    targetSdkVersion = 34
    androidxActivityVersion = '1.8.2'
    androidxAppCompatVersion = '1.6.1'
    androidxCoordinatorLayoutVersion = '1.2.0'
    androidxCoreVersion = '1.12.0'
    androidxFragmentVersion = '1.6.2'
    coreSplashScreenVersion = '1.0.1'
    androidxWebkitVersion = '1.10.0'
    junitVersion = '4.13.2'
    androidxJunitVersion = '1.1.5'
    androidxEspressoCoreVersion = '3.5.1'
    cordovaAndroidVersion = '10.1.1'
}`
  },
  {
    path: 'android/build.gradle',
    language: 'gradle',
    description: 'ملف Gradle الرئيسي للمشروع',
    category: 'android',
    content: `buildscript {
    repositories {
        google()
        mavenCentral()
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:8.2.1'
        classpath 'com.google.gms:google-services:4.4.0'
    }
}

apply from: "variables.gradle"

allprojects {
    repositories {
        google()
        mavenCentral()
    }
}

task clean(type: Delete) {
    delete rootProject.buildDir
}`
  },
  {
    path: 'android/settings.gradle',
    language: 'gradle',
    description: 'إعدادات المشروع',
    category: 'android',
    content: `include ':app'
include ':capacitor-android'
project(':capacitor-android').projectDir = new File('../node_modules/@capacitor/android/capacitor')
include ':capacitor-cordova-android-plugins'
project(':capacitor-cordova-android-plugins').projectDir = new File('./capacitor-cordova-android-plugins/')

apply from: 'capacitor.settings.gradle'`
  },
  {
    path: 'android/gradle.properties',
    language: 'properties',
    description: 'خصائص Gradle',
    category: 'android',
    content: `org.gradle.jvmargs=-Xmx4096m -XX:MaxMetaspaceSize=512m
org.gradle.parallel=true
org.gradle.daemon=true
org.gradle.configureondemand=true
android.useAndroidX=true
android.enableJetifier=true`
  },
  {
    path: 'android/proguard-rules.pro',
    language: 'proguard',
    description: 'قواعد ProGuard لتقليل حجم APK',
    category: 'android',
    content: `# Capacitor
-keep class com.getcapacitor.** { *; }
-keep @com.getcapacitor.annotation.CapacitorPlugin class *

# WebView
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}

# الحفاظ على الأسماء العربية
-keepnames class ** { *; }

# Gson (إذا استُخدم)
-keepattributes Signature
-keepattributes *Annotation*
-keep class sun.misc.Unsafe { *; }
-keep class com.google.gson.** { *; }

# إزالة السجلات في الإصدار النهائي
-assumenosideeffects class android.util.Log {
    public static boolean isLoggable(java.lang.String, int);
    public static int v(...);
    public static int i(...);
    public static int w(...);
    public static int d(...);
    public static int e(...);
}`
  },
  {
    path: 'index.html (المُصلَح)',
    language: 'html',
    description: 'التعديلات المطلوبة على index.html - إصلاح CSP وإضافة Capacitor',
    category: 'fix',
    content: `<!-- ===== التعديلات المطلوبة في index.html ===== -->

<!-- 1. إصلاح CSP - استبدال السطر الحالي بـ: -->
<meta http-equiv="Content-Security-Policy" 
  content="default-src 'self' https: data: blob:; 
           script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; 
           style-src 'self' 'unsafe-inline' https:; 
           img-src 'self' https: data: blob:; 
           font-src 'self' https: data:; 
           connect-src 'self' https: data: blob:; 
           frame-src 'self' https:;">

<!-- 2. إضافة Capacitor JS (يُحقن تلقائياً عند البناء) -->
<!-- لا حاجة لإضافته يدوياً - Capacitor يضيفه تلقائياً -->

<!-- 3. إضافة viewport إضافي للتطبيق -->
<meta name="viewport" 
  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">

<!-- 4. إضافة theme-color ديناميكي -->
<meta name="theme-color" content="#575657">
<meta name="apple-mobile-web-app-status-bar-style" content="#575657">

<!-- 5. إضافة دعم الشاشة الكاملة -->
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">

<!-- 6. إضافة Capacitor Bridge Script (يُضاف تلقائياً) -->
<script src="capacitor://capacitor-assets/capacitor.js"></script>`
  },
  {
    path: 'serviceworker.js (المُصلَح)',
    language: 'javascript',
    description: 'تعديلات Service Worker للعمل داخل WebView',
    category: 'fix',
    content: `/**
 * Service Worker - النسخة المُصلَحة لتطبيق أندرويد
 * التعديلات:
 * - إضافة فحص Capacitor
 * - تحسين معالجة الأخطاء
 * - إضافة تحديث ذكي للكاش
 */

const CACHE_NAME = 'fastlink-v1.7-android';

const CRITICAL_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './app.js',
  './js/security.js',
  './js/encryption.js',
  './js/safeDOM.js',
  './js/dataValidator.js',
  './js/utils.js',
  './js/reports.js',
  './js/inventory.js',
  './js/sales.js',
  './js/payments.js',
  './js/expenses.js',
  './js/stores.js',
  './js/packages.js',
  './js/storage.js',
  './js/backup.js',
  './js/backupManager.js',
  './js/trash.js',
];

// فحص إذا كان يعمل داخل Capacitor
const isCapacitor = typeof window !== 'undefined' && 
  typeof window.Capacitor !== 'undefined';

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(CRITICAL_ASSETS);
    self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const cacheNames = await caches.keys();
    await Promise.all(
      cacheNames
        .filter(name => name !== CACHE_NAME)
        .map(name => caches.delete(name))
    );
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  
  // تجاهل طلبات Capacitor الداخلية
  if (request.url.startsWith('capacitor://')) return;
  
  // تجاهل طلبات GitHub API (تحتاج شبكة)
  if (request.url.includes('api.github.com')) return;

  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const networkResponse = await fetch(request);
        return networkResponse;
      } catch (err) {
        const cache = await caches.open(CACHE_NAME);
        const cachedIndex = await cache.match('./index.html');
        return cachedIndex || new Response(
          '<h1>أنت بدون اتصال</h1><p>يرجى الاتصال بالإنترنت</p>',
          { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
        );
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cached = await caches.match(request);
    if (cached) return cached;
    try {
      const response = await fetch(request);
      if (request.method === 'GET' && response.ok) {
        const cache = await caches.open(CACHE_NAME);
        cache.put(request, response.clone());
      }
      return response;
    } catch (err) {
      return new Response('', { status: 504, statusText: 'Offline' });
    }
  })());
});`
  },
  {
    path: 'app.js (المُصلَح)',
    language: 'javascript',
    description: 'تعديلات app.js - إصلاح try/catch وإضافة Capacitor',
    category: 'fix',
    content: `/**
 * app.js - النسخة المُصلَحة لتطبيق أندرويد
 * التعديلات:
 * - إصلاح try/catch الفارغة
 * - إضافة دعم Capacitor
 * - تحسين معالجة الأخطاء
 */

// ===== إضافة دعم Capacitor =====
let isAndroidApp = false;

document.addEventListener('DOMContentLoaded', () => {
  // فحص إذا كان يعمل داخل تطبيق أندرويد
  if (typeof window.Capacitor !== 'undefined') {
    isAndroidApp = true;
    console.log('يعمل داخل تطبيق أندرويد');
    
    // إخفاء شاشة البداية
    if (window.Capacitor.Plugins && window.Capacitor.Plugins.SplashScreen) {
      window.Capacitor.Plugins.SplashScreen.hide();
    }
    
    // إعداد زر الرجوع
    setupBackButton();
  }
});

// ===== معالجة زر الرجوع =====
function setupBackButton() {
  if (typeof Capacitor === 'undefined' || !Capacitor.Plugins.App) return;
  
  Capacitor.Plugins.App.addListener('backButton', ({ canGoBack }) => {
    // فحص إذا كان هناك modal مفتوح
    const openModal = document.querySelector('.modal.show');
    if (openModal) {
      // إغلاق الـ modal
      const bsModal = bootstrap.Modal.getInstance(openModal);
      if (bsModal) bsModal.hide();
      return;
    }
    
    // فحص إذا كان هناك drawer مفتوح
    const drawer = document.querySelector('.sidebar.show');
    if (drawer) {
      drawer.classList.remove('show');
      return;
    }
    
    // إذا لم نكن في الصفحة الرئيسية
    if (!document.getElementById('dashboard')?.style.display !== 'none') {
      showSection('dashboard');
      return;
    }
    
    // تأكيد الخروج
    if (confirm('هل تريد الخروج من التطبيق؟')) {
      Capacitor.Plugins.App.exitApp();
    }
  });
}

// ===== إصلاح try/catch الفارغة =====
// قبل:
// } catch(e) { }
// بعد:
function safeExecute(fn, errorMessage = 'حدث خطأ غير متوقع') {
  try {
    return fn();
  } catch (e) {
    console.error(errorMessage, e);
    if (typeof showNotification === 'function') {
      showNotification(errorMessage, 'error');
    }
    return null;
  }
}

// ===== تحسين تحميل إعدادات GitHub =====
function loadGithubSettings() {
  try {
    if (window.DataEncryption && window.DataEncryption.loadEncrypted) {
      const encrypted = window.DataEncryption.loadEncrypted('githubSettings');
      if (encrypted) {
        githubSettings = Object.assign(githubSettings, encrypted);
        return;
      }
    }
    
    const saved = localStorage.getItem('githubSettings');
    if (saved) {
      const parsed = JSON.parse(saved);
      githubSettings = Object.assign(githubSettings, parsed);
      
      if (window.DataEncryption && window.DataEncryption.saveEncrypted && parsed.token) {
        window.DataEncryption.saveEncrypted('githubSettings', parsed);
      }
    }
  } catch (e) {
    console.error('خطأ في تحميل إعدادات GitHub:', e.message);
    // عرض رسالة للمستخدم بدلاً من تجاهل الخطأ
    if (typeof showNotification === 'function') {
      showNotification('تحذير: تعذر تحميل بعض الإعدادات', 'info');
    }
  }
}`
  },
  {
    path: 'build-android.sh',
    language: 'bash',
    description: 'سكريبت بناء APK - خطوة واحدة لبناء التطبيق',
    category: 'script',
    content: `#!/bin/bash
# ============================================
# سكريبت بناء APK لتطبيق فاست لينك حسابات
# ============================================

set -e

echo "🚀 بدء بناء تطبيق فاست لينك حسابات..."
echo "============================================"

# 1. تثبيت التبعيات
echo "📦 تثبيت التبعيات..."
npm install

# 2. نسخ ملفات الويب إلى مجلد www
echo "📁 نسخ ملفات الويب..."
mkdir -p www
cp -r index.html app.js manifest.json serviceworker.js www/
cp -r css fonts icons js www/ 2>/dev/null || true

# 3. مزامنة Capacitor
echo "🔄 مزامنة Capacitor..."
npx cap copy
npx cap sync android

# 4. بناء APK
echo "🔨 بناء APK..."
cd android
./gradlew assembleDebug

# 5. نقل الملف
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
echo "🎉 اكتمل البناء بنجاح!"`
  },
  {
    path: 'build-android.bat',
    language: 'batch',
    description: 'سكريبت بناء APK لويندوز',
    category: 'script',
    content: `@echo off
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

REM 2. نسخ ملفات الويب
echo 📁 نسخ ملفات الويب...
if not exist www mkdir www
copy index.html www\\
copy app.js www\\
copy manifest.json www\\
copy serviceworker.js www\\
xcopy css www\\css\\ /E /I /Y 2>nul
xcopy fonts www\\fonts\\ /E /I /Y 2>nul
xcopy icons www\\icons\\ /E /I /Y 2>nul
xcopy js www\\js\\ /E /I /Y 2>nul

REM 3. مزامنة Capacitor
echo 🔄 مزامنة Capacitor...
call npx cap copy
call npx cap sync android

REM 4. بناء APK
echo 🔨 بناء APK...
cd android
call gradlew.bat assembleDebug

REM 5. نقل الملف
echo 📋 نقل ملف APK...
copy app\\build\\outputs\\apk\\debug\\app-debug.apk ..\\fastlink-accounts.apk

cd ..
echo.
echo ============================================
echo ✅ تم بناء APK بنجاح!
echo 📱 الملف: fastlink-accounts.apk
echo ============================================
pause`
  },
  {
    path: 'capacitor-bridge.js',
    language: 'javascript',
    description: 'جسر Capacitor - استبدال LocalStorage بـ Preferences عند الحاجة',
    category: 'js',
    content: `/**
 * capacitor-bridge.js
 * جسر بين التطبيق الأصلي و Capacitor
 * يوفر طبقة تجريد للتخزين والميزات الأصلية
 */

const CapacitorBridge = {
  isNative: typeof window.Capacitor !== 'undefined',
  
  // ===== التخزين =====
  storage: {
    async get(key) {
      if (CapacitorBridge.isNative) {
        try {
          const { Preferences } = window.Capacitor.Plugins;
          const result = await Preferences.get({ key });
          return result.value;
        } catch (e) {
          console.warn('Preferences failed, falling back to localStorage');
          return localStorage.getItem(key);
        }
      }
      return localStorage.getItem(key);
    },
    
    async set(key, value) {
      if (CapacitorBridge.isNative) {
        try {
          const { Preferences } = window.Capacitor.Plugins;
          await Preferences.set({ key, value });
          return;
        } catch (e) {
          console.warn('Preferences failed, falling back to localStorage');
        }
      }
      localStorage.setItem(key, value);
    },
    
    async remove(key) {
      if (CapacitorBridge.isNative) {
        try {
          const { Preferences } = window.Capacitor.Plugins;
          await Preferences.remove({ key });
          return;
        } catch (e) {
          console.warn('Preferences failed, falling back to localStorage');
        }
      }
      localStorage.removeItem(key);
    },
    
    async clear() {
      if (CapacitorBridge.isNative) {
        try {
          const { Preferences } = window.Capacitor.Plugins;
          await Preferences.clear();
          return;
        } catch (e) {
          console.warn('Preferences failed, falling back to localStorage');
        }
      }
      localStorage.clear();
    }
  },
  
  // ===== الشبكة =====
  network: {
    async check() {
      if (CapacitorBridge.isNative) {
        try {
          const { Network } = window.Capacitor.Plugins;
          const status = await Network.getStatus();
          return {
            connected: status.connected,
            type: status.connectionType
          };
        } catch (e) {
          return { connected: navigator.onLine, type: 'unknown' };
        }
      }
      return { connected: navigator.onLine, type: 'unknown' };
    },
    
    addListener(callback) {
      if (CapacitorBridge.isNative) {
        try {
          const { Network } = window.Capacitor.Plugins;
          Network.addListener('networkStatusChange', callback);
        } catch (e) {
          window.addEventListener('online', () => callback({ connected: true }));
          window.addEventListener('offline', () => callback({ connected: false }));
        }
      } else {
        window.addEventListener('online', () => callback({ connected: true }));
        window.addEventListener('offline', () => callback({ connected: false }));
      }
    }
  },
  
  // ===== الإشعارات =====
  toast: {
    async show(message, duration = 'short') {
      if (CapacitorBridge.isNative) {
        try {
          const { Toast } = window.Capacitor.Plugins;
          await Toast.show({ text: message, duration });
          return;
        } catch (e) {
          console.warn('Toast failed');
        }
      }
      // Fallback للتطبيق الأصلي
      if (typeof showNotification === 'function') {
        showNotification(message, 'info');
      }
    }
  },
  
  // ===== المشاركة =====
  share: {
    async share(title, text, url) {
      if (CapacitorBridge.isNative) {
        try {
          const { Share } = window.Capacitor.Plugins;
          await Share.share({ title, text, url, dialogTitle: 'مشاركة' });
          return;
        } catch (e) {
          console.warn('Share failed');
        }
      }
      if (navigator.share) {
        await navigator.share({ title, text, url });
      }
    }
  },
  
  // ===== الملفات =====
  files: {
    async save(filename, data, directory = 'DOCUMENTS') {
      if (CapacitorBridge.isNative) {
        try {
          const { Filesystem } = window.Capacitor.Plugins;
          await Filesystem.writeFile({
            path: filename,
            data: data,
            directory: directory,
            recursive: true
          });
          return true;
        } catch (e) {
          console.error('File save failed:', e);
          return false;
        }
      }
      return false;
    },
    
    async read(filename, directory = 'DOCUMENTS') {
      if (CapacitorBridge.isNative) {
        try {
          const { Filesystem } = window.Capacitor.Plugins;
          const result = await Filesystem.readFile({
            path: filename,
            directory: directory
          });
          return result.data;
        } catch (e) {
          console.error('File read failed:', e);
          return null;
        }
      }
      return null;
    }
  },
  
  // ===== الجهاز =====
  device: {
    async getInfo() {
      if (CapacitorBridge.isNative) {
        try {
          const { Device } = window.Capacitor.Plugins;
          return await Device.getInfo();
        } catch (e) {
          return { platform: 'web', model: 'Browser' };
        }
      }
      return { platform: 'web', model: navigator.userAgent };
    }
  },
  
  // ===== الاهتزاز =====
  haptics: {
    async impact(style = 'MEDIUM') {
      if (CapacitorBridge.isNative) {
        try {
          const { Haptics } = window.Capacitor.Plugins;
          await Haptics.impact({ style });
        } catch (e) {
          // تجاهل
        }
      }
    },
    
    async notification(type = 'SUCCESS') {
      if (CapacitorBridge.isNative) {
        try {
          const { Haptics } = window.Capacitor.Plugins;
          await Haptics.notification({ type });
        } catch (e) {
          // تجاهل
        }
      }
    }
  }
};

// تصدير للاستخدام العام
if (typeof window !== 'undefined') {
  window.CapacitorBridge = CapacitorBridge;
}`
  },
  {
    path: 'www/index.html (snippet)',
    language: 'html',
    description: 'مقتطف index.html المعدّل - التغييرات المطلوبة فقط',
    category: 'html',
    content: `<!-- ===== التغييرات المطلوبة في index.html ===== -->

<!-- 1. استبدال CSP الحالي بـ: -->
<meta http-equiv="Content-Security-Policy" 
  content="default-src 'self' https: data: blob:; 
           script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; 
           style-src 'self' 'unsafe-inline' https:; 
           img-src 'self' https: data: blob:; 
           font-src 'self' https: data:; 
           connect-src 'self' https: data: blob:; 
           frame-src 'self' https:;">

<!-- 2. إضافة capacitor-bridge.js قبل </body> -->
<script src="capacitor-bridge.js"></script>

<!-- 3. تعديل viewport -->
<meta name="viewport" 
  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">

<!-- 4. إضافة script تهيئة Capacitor -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  // تهيئة Capacitor Bridge
  if (window.CapacitorBridge && window.CapacitorBridge.isNative) {
    console.log('📱 يعمل داخل تطبيق أندرويد');
    
    // إخفاء شاشة البداية
    try {
      Capacitor.Plugins.SplashScreen.hide();
    } catch(e) {}
    
    // فحص الاتصال بالشبكة
    CapacitorBridge.network.addListener((status) => {
      if (!status.connected) {
        CapacitorBridge.toast.show('⚠️ أنت بدون اتصال بالإنترنت');
      }
    });
  }
});
</script>`
  },
  {
    path: 'README-BUILD.md',
    language: 'markdown',
    description: 'دليل البناء والتثبيت',
    category: 'script',
    content: `# 📱 بناء تطبيق فاست لينك حسابات للأندرويد

## المتطلبات

- Node.js 18+
- Android Studio (أحدث إصدار)
- JDK 17
- Gradle 8.x

## الخطوات

### 1. تثبيت التبعيات
\`\`\`bash
npm install
\`\`\`

### 2. إضافة منصة أندرويد
\`\`\`bash
npx cap add android
\`\`\`

### 3. نسخ ملفات الويب
\`\`\`bash
# نسخ جميع ملفات التطبيق إلى مجلد www
mkdir -p www
cp index.html app.js manifest.json serviceworker.js www/
cp -r css fonts icons js www/
\`\`\`

### 4. مزامنة Capacitor
\`\`\`bash
npx cap copy
npx cap sync android
\`\`\`

### 5. فتح في Android Studio
\`\`\`bash
npx cap open android
\`\`\`

### 6. بناء APK
في Android Studio:
- Build → Build Bundle(s) / APK(s) → Build APK(s)

أو عبر سطر الأوامر:
\`\`\`bash
cd android
./gradlew assembleDebug
\`\`\`

### 7. ملف APK الناتج
\`\`\`
android/app/build/outputs/apk/debug/app-debug.apk
\`\`\`

## بناء نسخة Release (موقعة)

### إنشاء مفتاح التوقيع
\`\`\`bash
keytool -genkey -v -keystore release-key.jks -keyalg RSA \
  -keysize 2048 -validity 10000 -alias fastlink
\`\`\`

### إضافة لـ local.properties
\`\`\`properties
RELEASE_STORE_FILE=../release-key.jks
RELEASE_STORE_PASSWORD=your_password
RELEASE_KEY_ALIAS=fastlink
RELEASE_KEY_PASSWORD=your_password
\`\`\`

### بناء Release APK
\`\`\`bash
cd android
./gradlew assembleRelease
\`\`\`

## حجم APK المتوقع
- Debug: ~8-12 MB
- Release (مع minify): ~5-8 MB

## استكشاف الأخطاء

### خطأ: SDK location not found
\`\`\`properties
# في android/local.properties
sdk.dir=/path/to/Android/Sdk
\`\`\`

### خطأ: Gradle version
تأكد من استخدام Gradle 8.x مع AGP 8.2.x

### خطأ: WebView
تأكد من minSdkVersion >= 22`
  }
];

export const buildSteps = [
  {
    step: 1,
    title: 'تثبيت Node.js و Android Studio',
    description: 'تحميل وتثبيت Node.js 18+ و Android Studio مع SDK',
    icon: 'fa-download',
    color: 'blue',
    commands: [
      '# تحميل Node.js من: https://nodejs.org',
      '# تحميل Android Studio من: https://developer.android.com/studio',
      'node --version  # يجب أن يكون v18+',
      'java --version  # يجب أن يكون JDK 17'
    ]
  },
  {
    step: 2,
    title: 'نسخ ملفات التطبيق الأصلية',
    description: 'نسخ جميع ملفات المستودع الأصلي إلى مجلد العمل',
    icon: 'fa-copy',
    color: 'green',
    commands: [
      'git clone https://github.com/master1moon/song10.git',
      'cd song10',
      '# أو نسخ الملفات يدوياً إلى مجلد المشروع'
    ]
  },
  {
    step: 3,
    title: 'تطبيق التعديلات المطلوبة',
    description: 'تطبيق جميع التغييرات المذكورة أعلاه على الملفات',
    icon: 'fa-edit',
    color: 'yellow',
    commands: [
      '# تطبيق التعديلات على index.html (CSP)',
      '# إضافة capacitor-bridge.js',
      '# تعديل serviceworker.js',
      '# تعديل app.js'
    ]
  },
  {
    step: 4,
    title: 'تثبيت Capacitor',
    description: 'تثبيت Capacitor والتبعيات المطلوبة',
    icon: 'fa-cube',
    color: 'purple',
    commands: [
      'npm install',
      'npx cap add android',
      '# سيتم إنشاء مجلد android/ تلقائياً'
    ]
  },
  {
    step: 5,
    title: 'نسخ ملفات الويب إلى www',
    description: 'نسخ جميع ملفات HTML/JS/CSS إلى مجلد www',
    icon: 'fa-folder-open',
    color: 'orange',
    commands: [
      'mkdir -p www',
      'cp index.html app.js manifest.json serviceworker.js www/',
      'cp -r css fonts icons js www/',
      'cp capacitor-bridge.js www/'
    ]
  },
  {
    step: 6,
    title: 'مزامنة Capacitor',
    description: 'مزامنة ملفات الويب مع مشروع أندرويد',
    icon: 'fa-sync',
    color: 'cyan',
    commands: [
      'npx cap copy',
      'npx cap sync android',
      '# يتم نسخ www/ إلى android/app/src/main/assets/public/'
    ]
  },
  {
    step: 7,
    title: 'بناء APK',
    description: 'بناء ملف APK للتثبيت',
    icon: 'fa-hammer',
    color: 'red',
    commands: [
      '# عبر Android Studio:',
      'npx cap open android',
      '# Build → Build APK',
      '',
      '# أو عبر سطر الأوامر:',
      'cd android && ./gradlew assembleDebug',
      '# الناتج: android/app/build/outputs/apk/debug/app-debug.apk'
    ]
  },
  {
    step: 8,
    title: 'تثبيت على الجهاز',
    description: 'تثبيت APK على جهاز أندرويد',
    icon: 'fa-mobile-screen',
    color: 'teal',
    commands: [
      '# نقل APK للجهاز ثم تثبيته',
      '# أو عبر ADB:',
      'adb install fastlink-accounts.apk',
      '',
      '# أو سحب الملف مباشرة في Android Studio'
    ]
  }
];
