const path = require("node:path");

const filePath = path.join("../", "node-api-test", "./", "2-path2.js");

console.log(filePath);

const filePath2 = path.resolve("../", "node-api-test", "./", "2-path2.js");

console.log(filePath2);

console.log(path.relative("/a/b/c", "/a/d"));

console.log(path.parse(__filename));

console.log(path.format({
  root: "/",
  base: "2-path2.js",
  name: "2-path2",
  ext: ".js",
}));


// path.join 可以把多个路径连接起来，解析其中的 ../ ./，合并成一个路径。

// path.resolve 也是连接多个路径，但最后会返回一个绝对路径。

// path.relaive 是 a 路径到 b 路径的相对路径。

// path.parse 是解析路径。