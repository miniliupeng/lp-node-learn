import fs from 'fs';
import { EOL } from 'os';

fs.writeFileSync('test.txt', 'hello' + EOL);
setTimeout(() => {
  fs.appendFileSync('test.txt', 'world' + EOL);
}, 2000);
setTimeout(() => {
  fs.unlinkSync('test.txt');
}, 3000);

