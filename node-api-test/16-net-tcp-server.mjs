// 处理 TCP 相关   TCP 是双向通信
import net from 'node:net';

const server = net.createServer((clientSocket) => {
  console.log('新的客户端 socket 连接');

  clientSocket.on('data', function (data) {
    console.log(data.toString());

    clientSocket.write('hello');
  });

  clientSocket.on('end', function () {
    console.log('连接中断');
  });
});

server.listen(6666, 'localhost', () => {
  const address = server.address();

  console.log('被监听的地址为：%j', address);
});
