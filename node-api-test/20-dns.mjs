// 查询域名对应的 IP
import dns from 'node:dns/promises';

async function main() {
  const res = await dns.resolve('juejin.com');
  console.log(res);
}

main();
