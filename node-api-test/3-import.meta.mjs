import { fileURLToPath } from "node:url";

console.log(import.meta.url);
console.log(import.meta.resolve("./a.js"));

console.log(import.meta.dirname); // node 版本 20.11 以上
console.log(import.meta.filename); // node 版本 20.11 以上

console.log(fileURLToPath(import.meta.url));


// import.meta.url 是拿到当前文件以 file:// 开头的路径。

// import.meta.resolve 是基于当前目录和传入的路径来解析路径。

// import.meta.dirname 是拿到当前文件所在的目录。

// import.meta.filename 是拿到当前文件名。

// fileURLToPath 是基于当前文件的 file:// 路径来转换成绝对路径。


