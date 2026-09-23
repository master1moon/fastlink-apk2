const CapacitorBridge = {
  isNative: typeof window.Capacitor !== 'undefined',
  storage: {
    async get(key) {
      if (this.isNative) {
        try {
          const r = await window.Capacitor.Plugins.Preferences.get({ key });
          return r.value;
        } catch (e) { return localStorage.getItem(key); }
      }
      return localStorage.getItem(key);
    },
    async set(key, value) {
      if (this.isNative) {
        try { await window.Capacitor.Plugins.Preferences.set({ key, value }); return; }
        catch (e) {}
      }
      localStorage.setItem(key, value);
    },
    async remove(key) {
      if (this.isNative) {
        try { await window.Capacitor.Plugins.Preferences.remove({ key }); return; }
        catch (e) {}
      }
      localStorage.removeItem(key);
    },
    async clear() {
      if (this.isNative) {
        try { await window.Capacitor.Plugins.Preferences.clear(); return; }
        catch (e) {}
      }
      localStorage.clear();
    }
  },
  network: {
    async check() {
      if (this.isNative) {
        try {
          const s = await window.Capacitor.Plugins.Network.getStatus();
          return { connected: s.connected, type: s.connectionType };
        } catch (e) { return { connected: navigator.onLine, type: 'unknown' }; }
      }
      return { connected: navigator.onLine, type: 'unknown' };
    },
    addListener(cb) {
      if (this.isNative) {
        try { window.Capacitor.Plugins.Network.addListener('networkStatusChange', cb); }
        catch (e) {
          window.addEventListener('online', () => cb({ connected: true }));
          window.addEventListener('offline', () => cb({ connected: false }));
        }
      } else {
        window.addEventListener('online', () => cb({ connected: true }));
        window.addEventListener('offline', () => cb({ connected: false }));
      }
    }
  },
  toast: {
    async show(msg, dur = 'short') {
      if (this.isNative) {
        try { await window.Capacitor.Plugins.Toast.show({ text: msg, duration: dur }); return; }
        catch (e) {}
      }
      if (typeof showNotification === 'function') showNotification(msg, 'info');
    }
  },
  haptics: {
    async impact(style = 'MEDIUM') {
      if (this.isNative) {
        try { await window.Capacitor.Plugins.Haptics.impact({ style }); } catch (e) {}
      }
    }
  }
};
if (typeof window !== 'undefined') window.CapacitorBridge = CapacitorBridge;