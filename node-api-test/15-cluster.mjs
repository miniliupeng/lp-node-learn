import cluster from 'node:cluster';
import http from 'node:http';
import os from 'node:os';

const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('fork', (worker) => {
    console.log(`forked worker ${worker.process.pid}, ${worker.id}`);
  });

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died, ${worker.id}`);
  });
} else {
  console.log(`Worker ${process.pid} started`);
  const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world');
  });
  server.listen(8000);

  setTimeout(() => {
    process.exit();
  }, 3000);
}
