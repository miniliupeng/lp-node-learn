// 按照行来读取文件可读流里的内容

import { createReadStream } from 'node:fs';
import { createInterface } from 'node:readline';

const rl = createInterface({
  input: createReadStream('./19-repl.mjs')
});

rl.on('line', (line) => {
  console.log(`Line from file: ${line}`);
});
  