import { writeFileSync } from 'fs';
import { projectFiles } from './src/data/files.js';

writeFileSync('public/files-data.json', JSON.stringify(projectFiles), 'utf-8');
console.log('✅ تم إنشاء public/files-data.json');
