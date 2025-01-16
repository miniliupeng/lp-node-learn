// 可读流：Readable
// http.request返回的 res 
// 读取文件用的 fs.createReadStream

// 可写流：Writable
// fs.createWriteStream

// 双工流：Duplex
// socket


// 转换流：Transform 也是一种 Duplex，它会对内容做转换之后返回新的内容
// zlib 的 createGzip


// 这 4 种流都是可以自定义
