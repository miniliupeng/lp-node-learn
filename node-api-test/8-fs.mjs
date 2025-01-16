import fs from 'fs';
fs.mkdirSync('test');
setTimeout(() => {
  fs.renameSync('test', 'test2');
}, 1000);
setTimeout(() => {
  fs.rmSync('test2', { recursive: true });
}, 2000);
