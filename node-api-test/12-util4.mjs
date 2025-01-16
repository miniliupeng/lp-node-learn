// 转成 promise 版本
import util from 'node:util';
import cp from 'node:child_process';

// cp.exec('ls -l', (err, stdout, stderr) => {
//   console.log(stdout);
// });

const exec = util.promisify(cp.exec);

async function aaa() {
  const { stdout, stderr } = await exec('ls -l');
  console.log(stdout, stderr);
}

aaa();
