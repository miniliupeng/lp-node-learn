// 密码做加密
import crypto from 'node:crypto';

function md5(str) {
  return crypto.createHash('md5').update(str).digest('hex');
}

console.log(md5('123456'));