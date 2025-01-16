import http from 'node:http';

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('hello guang\n');
});

server.listen(8000);

// npx pm2 start -i max ./15-cluster2.mjs

// 一般真要做多进程扩展，直接用 pm2 就行，没必要自己调用 cluster 模块