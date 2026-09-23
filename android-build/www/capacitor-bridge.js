/**
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
        } catch (e) {}
      }
      localStorage.setItem(key, value);
    },
    async remove(key) {
      if (CapacitorBridge.isNative) {
        try {
          const { Preferences } = window.Capacitor.Plugins;
          await Preferences.remove({ key });
          return;
        } catch (e) {}
      }
      localStorage.removeItem(key);
    },
    async clear() {
      if (CapacitorBridge.isNative) {
        try {
          const { Preferences } = window.Capacitor.Plugins;
          await Preferences.clear();
          return;
        } catch (e) {}
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
          return { connected: status.connected, type: status.connectionType };
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
        } catch (e) {}
      }
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
        } catch (e) {}
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
        } catch (e) {}
      }
    },
    async notification(type = 'SUCCESS') {
      if (CapacitorBridge.isNative) {
        try {
          const { Haptics } = window.Capacitor.Plugins;
          await Haptics.notification({ type });
        } catch (e) {}
      }
    }
  }
};

if (typeof window !== 'undefined') {
  window.CapacitorBridge = CapacitorBridge;
}
