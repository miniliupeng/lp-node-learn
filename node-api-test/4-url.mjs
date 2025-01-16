import http from 'node:http';
import url from 'node:url';

const myURL = new url.URL(
  "https://user:pass@sub.example.com:8080/xxx/yyy?a=1&b=2#hash"
);

console.log(myURL.hash, myURL.host, myURL.searchParams);

console.log(myURL.searchParams.get("a"));

myURL.searchParams.set("b", 222);
myURL.searchParams.append("c", 333);

console.log(myURL.searchParams.toString());

const params = new url.URLSearchParams("?aa=1&bb=2");
console.log(params);
for (const [name, value] of params) {
  console.log(name, value);
}

console.log(url.urlToHttpOptions(myURL)); // 使用 http.request 或者 https.reqeust 的时候，需要传递对象形式的 options

// const options = {
//   method: 'GET',
//   host: 'www.baidu.com',
//   port: 80,
//   path: '/'
// };

const options = url.urlToHttpOptions(new URL('http://www.baidu.com:80/'))

const req = http.request(options, res => {
  res.on('data', (chunk) => {
      console.log(chunk.toString());
  });
  res.on('end', () => {
      console.log('done');
  });
});

req.end();