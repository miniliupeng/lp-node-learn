var http = require('http');
var socket = require('socket.io');
var fs = require('fs');

// 启http服务
var server = http.createServer(function (req, res) {
  // 设置CORS头
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // 处理option请求
  if (req.method === 'OPTIONS') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.end();
    return;
  }
  // GET请求 返回index.html
  if (req.method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.end(fs.readFileSync('./index.html'));
  } else if (req.method === 'POST') {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(
      JSON.stringify({
        message: 'Hello from server!',
        timestamp: new Date().toISOString()
      })
    );
  } else {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.end();
  }
});

server.listen('8082');
console.log('Server is running at port 8082...');

// 监听socket连接
var io = socket(server);

io.on('connection', function (client) {
  // 接收信息
  client.on('message', function (msg) {
    client.send('hello：' + msg);
    console.log('data from client: ---> ' + msg);
  });

  // 断开处理
  client.on('disconnect', function () {
    console.log('Client socket has closed.');
  });
});
