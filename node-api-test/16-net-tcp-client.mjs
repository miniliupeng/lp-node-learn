import net from 'node:net';

const socket = net.createConnection({ port: 6666, host: 'localhost' }, () => {
  console.log('连接到服务器');

  socket.write('world!\n');

  setTimeout(() => {
    socket.end();
  }, 2000);
});

socket.on('data', (data) => {
  console.log(data.toString());
});

socket.on('end', () => {
  console.log('断开连接');
});
