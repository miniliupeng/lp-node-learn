// 随机数
import crypto from 'node:crypto';

console.log(crypto.randomInt(10)); // 0-9
console.log(crypto.randomInt(10));
console.log(crypto.randomInt(10));
console.log(crypto.randomInt(10));

console.log(crypto.randomUUID()); // 生成一个随机UUID
console.log(crypto.randomUUID());
