import http from 'node:http';
import fs from 'node:fs';
import { pipeline } from 'node:stream/promises';
import zlib from 'node:zlib';

const server = http.createServer(async (request, response) => {
  const raw = fs.createReadStream('index.html');
  const acceptEncoding = request.headers['accept-encoding'];

  try {
    if (/\bdeflate\b/.test(acceptEncoding)) { // \b 表示单词边界 逗号、空格、换行符、制表符等
      response.writeHead(200, { 'Content-Encoding': 'deflate' });
      await pipeline(raw, zlib.createDeflate(), response);
    } else if (/\bgzip\b/.test(acceptEncoding)) {
      response.writeHead(200, { 'Content-Encoding': 'gzip' });
      await pipeline(raw, zlib.createGzip(), response);
    } else if (/\bbr\b/.test(acceptEncoding)) {
      response.writeHead(200, { 'Content-Encoding': 'br' });
      await pipeline(raw, zlib.createBrotliCompress(), response);
    } else {
      response.writeHead(200, {});
      await pipeline(raw, response);
    }
  } catch (err) {
    response.end();
    console.error('An error occurred:', err);
  }
});

server.listen(8080);

// curl -H "accept-encoding: gzip" --compressed -i http://localhost:8080
