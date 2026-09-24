#!/bin/bash
set -e
echo "🚀 بدء بناء تطبيق فاست لينك حسابات..."
npm install
mkdir -p www
cp index.html app.js manifest.json serviceworker.js www/ 2>/dev/null || true
cp -r css fonts icons js www/ 2>/dev/null || true
cp capacitor-bridge.js www/ 2>/dev/null || true
npx cap copy
npx cap sync android
cd android && ./gradlew assembleDebug
cp app/build/outputs/apk/debug/app-debug.apk ../fastlink-accounts.apk
echo "✅ تم بناء APK بنجاح!"
