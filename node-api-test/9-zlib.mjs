// zlib 是压缩和解压的

import zlib from 'node:zlib';
import fs from 'node:fs';
import { pipeline } from 'node:stream/promises';

const gzip = zlib.createGzip();
const source = fs.createReadStream('data.txt');
const destination = fs.createWriteStream('data.txt.gz');

// source.pipe(gzip).pipe(destination); // 同步 将一个可读流（Readable Stream）的数据直接传输到一个可写流（Writable Stream）
pipeline(source, gzip, destination) // 异步 将一个可读流（Readable Stream）的数据传输到一个可写流（Writable Stream），并处理错误

