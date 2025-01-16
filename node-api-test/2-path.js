const path = require('node:path');

const filePath = __filename; // 当前文件路径
const dirPath = __dirname; // 当前目录路径

console.log(filePath)
console.log(path.dirname(filePath)); // 当前文件所在的目录
console.log(path.basename(filePath)); // 当前文件名
console.log(path.extname(filePath)); // 当前文件后缀名

