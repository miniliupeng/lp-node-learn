// 发送 http 请求 见 4-url.mjs

// 起 http 服务
import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {

  // req.headers
  // res.statusCode = 200;

  const writeStream = fs.createWriteStream('data.txt');
  req.pipe(writeStream);

  res.write('888');
  res.end('ok');
});

server.listen(8000, () => {
  console.log('Server is running on port 8080');
});

// curl -X POST -d "name=guang&age=20" http://localhost:8000
