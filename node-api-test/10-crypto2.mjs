// 流的方式 密码做加密
import { Readable } from 'node:stream';
import crypto from 'node:crypto';

const rs = new Readable();
rs._read = function () {
  this.push('123456');
  this.push(null);
};

const hash = crypto.createHash('md5'); // sha256
rs.pipe(hash).setEncoding('hex').pipe(process.stdout);
