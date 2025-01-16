import os from 'node:os';

console.log('aaa' + os.EOL + 'bbb' + os.EOL); // os.EOL 是换行符，在 windows 上是 \r\n，在其他系统上是 \n

console.log(os.cpus()); // cpu 内核的信息

console.log(os.type()); // 操作系统类型，有 Darwin（也就是 mac）、Windows_NT、Linux 等值
console.log(os.userInfo()) // 当前用户相关的信息
console.log(os.freemem(), os.totalmem()); // 空闲内存和总内存

console.log(os.homedir()); // home 目录
console.log(os.networkInterfaces()) // 网卡信息

// 更丰富的系统信息，可以用 systeminformation这个包 https://www.npmjs.com/package/systeminformation