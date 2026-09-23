import { useState } from 'react';

interface FileNode {
  name: string;
  type: 'file' | 'folder';
  children?: FileNode[];
  icon: string;
  color: string;
  size?: string;
  description?: string;
}

const fileTree: FileNode[] = [
  {
    name: 'song10/',
    type: 'folder',
    icon: 'fa-folder',
    color: 'text-yellow-400',
    children: [
      {
        name: '_assets/',
        type: 'folder',
        icon: 'fa-folder',
        color: 'text-yellow-400',
        description: 'ملفات الأصول الثابتة',
      },
      {
        name: 'css/',
        type: 'folder',
        icon: 'fa-folder',
        color: 'text-pink-400',
        description: 'ملفات الأنماط',
        children: [
          { name: 'dark-theme-fixes.css', type: 'file', icon: 'fa-file-code', color: 'text-pink-400', size: '~15 KB', description: 'إصلاحات الوضع الداكن' },
        ],
      },
      {
        name: 'fonts/',
        type: 'folder',
        icon: 'fa-folder',
        color: 'text-green-400',
        description: 'ملفات الخطوط',
        children: [
          { name: 'Amiri-Regular.woff2', type: 'file', icon: 'fa-font', color: 'text-green-400', size: '~100 KB', description: 'خط عربي (معطل مؤقتاً)' },
        ],
      },
      {
        name: 'icons/',
        type: 'folder',
        icon: 'fa-folder',
        color: 'text-purple-400',
        description: 'أيقونات التطبيق بأحجام متعددة',
        children: [
          { name: 'icon-16.png', type: 'file', icon: 'fa-image', color: 'text-purple-400', size: '16x16' },
          { name: 'icon-32.png', type: 'file', icon: 'fa-image', color: 'text-purple-400', size: '32x32' },
          { name: 'icon-64.png', type: 'file', icon: 'fa-image', color: 'text-purple-400', size: '64x64' },
          { name: 'icon-128.png', type: 'file', icon: 'fa-image', color: 'text-purple-400', size: '128x128' },
          { name: 'icon-180.png', type: 'file', icon: 'fa-image', color: 'text-purple-400', size: '180x180' },
          { name: 'icon-192.png', type: 'file', icon: 'fa-image', color: 'text-purple-400', size: '192x192' },
          { name: 'icon-256.png', type: 'file', icon: 'fa-image', color: 'text-purple-400', size: '256x256' },
          { name: 'icon-384.png', type: 'file', icon: 'fa-image', color: 'text-purple-400', size: '384x384' },
          { name: 'icon-512.png', type: 'file', icon: 'fa-image', color: 'text-purple-400', size: '512x512' },
        ],
      },
      {
        name: 'js/',
        type: 'folder',
        icon: 'fa-folder',
        color: 'text-blue-400',
        description: 'ملفات JavaScript (27 ملف)',
        children: [
          { name: 'about.js', type: 'file', icon: 'fa-file-code', color: 'text-blue-400', description: 'قسم حول التطبيق' },
          { name: 'backup.js', type: 'file', icon: 'fa-file-code', color: 'text-blue-400', description: 'نظام النسخ الاحتياطي' },
          { name: 'backupManager.js', type: 'file', icon: 'fa-file-code', color: 'text-blue-400', description: 'إدارة النسخ الاحتياطية' },
          { name: 'backupSystem.js', type: 'file', icon: 'fa-file-code', color: 'text-blue-400', description: 'نظام النسخ الاحتياطي المتقدم' },
          { name: 'cloudStorageHelper.js', type: 'file', icon: 'fa-file-code', color: 'text-blue-400', description: 'مساعد التخزين السحابي' },
          { name: 'dataValidator.js', type: 'file', icon: 'fa-file-code', color: 'text-blue-400', description: 'التحقق من صحة البيانات' },
          { name: 'encryption.js', type: 'file', icon: 'fa-file-code', color: 'text-blue-400', description: 'تشفير البيانات الحساسة' },
          { name: 'expenses.js', type: 'file', icon: 'fa-file-code', color: 'text-blue-400', description: 'إدارة المصروفات' },
          { name: 'expensesTypes.js', type: 'file', icon: 'fa-file-code', color: 'text-blue-400', description: 'أنواع المصروفات' },
          { name: 'inventory.js', type: 'file', icon: 'fa-file-code', color: 'text-blue-400', description: 'إدارة المخزون' },
          { name: 'packages.js', type: 'file', icon: 'fa-file-code', color: 'text-blue-400', description: 'إدارة الباقات' },
          { name: 'parityCheck.js', type: 'file', icon: 'fa-file-code', color: 'text-blue-400', description: 'فحص التكافؤ' },
          { name: 'payments.js', type: 'file', icon: 'fa-file-code', color: 'text-blue-400', description: 'إدارة التسديدات' },
          { name: 'quickFixes.js', type: 'file', icon: 'fa-file-code', color: 'text-blue-400', description: 'إصلاحات سريعة' },
          { name: 'reports.js', type: 'file', icon: 'fa-file-code', color: 'text-blue-400', description: 'التقارير المالية' },
          { name: 'safeDOM.js', type: 'file', icon: 'fa-file-code', color: 'text-blue-400', description: 'معالجة DOM الآمنة' },
          { name: 'sales.js', type: 'file', icon: 'fa-file-code', color: 'text-blue-400', description: 'إدارة المبيعات' },
          { name: 'security.js', type: 'file', icon: 'fa-file-code', color: 'text-blue-400', description: 'الأمان والحماية' },
          { name: 'settings.js', type: 'file', icon: 'fa-file-code', color: 'text-blue-400', description: 'إعدادات التطبيق' },
          { name: 'settingsUI.js', type: 'file', icon: 'fa-file-code', color: 'text-blue-400', description: 'واجهة الإعدادات' },
          { name: 'smartCache.js', type: 'file', icon: 'fa-file-code', color: 'text-blue-400', description: 'نظام التخزين المؤقت الذكي' },
          { name: 'soundSystem.js', type: 'file', icon: 'fa-file-code', color: 'text-blue-400', description: 'نظام الأصوات' },
          { name: 'storage.js', type: 'file', icon: 'fa-file-code', color: 'text-blue-400', description: 'التخزين المحلي' },
          { name: 'storeFilter.js', type: 'file', icon: 'fa-file-code', color: 'text-blue-400', description: 'فلترة المحلات' },
          { name: 'stores.js', type: 'file', icon: 'fa-file-code', color: 'text-blue-400', description: 'إدارة المحلات' },
          { name: 'trash.js', type: 'file', icon: 'fa-file-code', color: 'text-blue-400', description: 'سلة المحذوفات' },
          { name: 'utils.js', type: 'file', icon: 'fa-file-code', color: 'text-blue-400', description: 'أدوات مساعدة' },
        ],
      },
      { name: 'annotate_functions.py', type: 'file', icon: 'fa-file-code', color: 'text-green-400', size: '~4 KB', description: 'سكربت Python لإضافة تعليقات تلقائية للدوال' },
      { name: 'app.js', type: 'file', icon: 'fa-file-code', color: 'text-yellow-400', size: '~15 KB', description: 'نظام مزامنة GitHub و Service Worker' },
      { name: 'index.html', type: 'file', icon: 'fa-file-code', color: 'text-orange-400', size: '~80 KB', description: 'الصفحة الرئيسية + CSS + HTML' },
      { name: 'manifest.json', type: 'file', icon: 'fa-file-code', color: 'text-cyan-400', size: '~1 KB', description: 'إعدادات PWA' },
      { name: 'network-cards.json', type: 'file', icon: 'fa-file-code', color: 'text-cyan-400', size: '~100 B', description: 'هيكل البيانات الافتراضي' },
      { name: 'serviceworker.js', type: 'file', icon: 'fa-file-code', color: 'text-teal-400', size: '~4 KB', description: 'Service Worker للعمل بدون اتصال' },
    ],
  },
];

function TreeNode({ node, depth = 0 }: { node: FileNode; depth?: number }) {
  const [isOpen, setIsOpen] = useState(depth < 2);

  return (
    <div>
      <div
        className={`flex items-center gap-2 py-1.5 px-3 rounded-lg hover:bg-slate-700/30 cursor-pointer transition-all duration-150 group ${
          depth === 0 ? 'font-semibold' : ''
        }`}
        style={{ paddingRight: `${depth * 20 + 12}px` }}
        onClick={() => node.type === 'folder' && setIsOpen(!isOpen)}
      >
        {node.type === 'folder' && (
          <i className={`fas ${isOpen ? 'fa-chevron-down' : 'fa-chevron-left'} text-xs text-slate-500 w-4`}></i>
        )}
        {node.type === 'file' && <span className="w-4"></span>}
        <i className={`fas ${node.icon} ${node.color} text-sm`}></i>
        <span className="text-slate-300 group-hover:text-white text-sm">{node.name}</span>
        {node.size && (
          <span className="text-xs text-slate-500 mr-auto">{node.size}</span>
        )}
        {node.description && (
          <span className="text-xs text-slate-500 hidden md:inline mr-2">{node.description}</span>
        )}
      </div>
      
      {node.type === 'folder' && isOpen && node.children && (
        <div className="border-r border-slate-700/30 mr-5">
          {node.children.map((child, idx) => (
            <TreeNode key={idx} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function FileTree() {
  return (
    <div className="space-y-6">
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8 backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
          <span className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
            <i className="fas fa-folder-tree text-yellow-400"></i>
          </span>
          هيكل الملفات والمجلدات
        </h2>
        <p className="text-slate-400 mb-6">عرض تفاعلي لهيكل المشروع — اضغط على المجلدات لفتحها أو إغلاقها</p>
        
        <div className="bg-slate-900/70 rounded-xl border border-slate-700/30 p-4 font-mono">
          {fileTree.map((node, idx) => (
            <TreeNode key={idx} node={node} />
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-5 text-center">
          <div className="text-3xl font-bold text-blue-400">5</div>
          <div className="text-slate-400 text-sm mt-1">مجلدات</div>
        </div>
        <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-5 text-center">
          <div className="text-3xl font-bold text-green-400">37</div>
          <div className="text-slate-400 text-sm mt-1">ملف إجمالي</div>
        </div>
        <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-5 text-center">
          <div className="text-3xl font-bold text-yellow-400">27</div>
          <div className="text-slate-400 text-sm mt-1">ملف JavaScript</div>
        </div>
        <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-5 text-center">
          <div className="text-3xl font-bold text-purple-400">9</div>
          <div className="text-slate-400 text-sm mt-1">أيقونات</div>
        </div>
      </div>
    </div>
  );
}
