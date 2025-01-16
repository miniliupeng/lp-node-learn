// 用来从 Buffer 根据编码解析成字符串

import { StringDecoder } from 'node:string_decoder';
import { Buffer } from 'node:buffer';

const decoder = new StringDecoder('utf8');

const buf = Buffer.from('神说要有光', 'utf-8');
console.log(decoder.write(buf));
