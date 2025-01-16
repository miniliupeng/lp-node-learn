import fs from 'node:fs';
import path from 'node:path';

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const files = fs.readdirSync(src);
  for (const file of files) {
    copy(path.join(src, file), path.join(dest, file));
  }
}

function copy(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    copyDir(src, dest);
  } else {
    fs.copyFileSync(src, dest);
  }
}

copy('aaa', 'aaa2');

// node 22.3 才能用
// fs.cpSync('aaa', 'aaa3', {
//   recursive: true
// });