// 通过 readUint8、writeUint16LE 等来灵活读写
import { Buffer } from 'node:buffer';

const buffer = Buffer.alloc(10)

// buffer.writeUInt16BE(256, 0)
buffer.writeUint16LE(256, 0)

console.log(buffer)
console.log(buffer.readUint16LE(0));
console.log(buffer.readUint8(0), buffer.readUint8(1));

// 大端存储：高位在前，低位在后
// 小端存储：低位在前，高位在后
