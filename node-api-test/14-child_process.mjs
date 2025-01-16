import cp from 'node:child_process';

// const ls = cp.spawn('ls', ['-l', './']);
const ls = cp.exec('ls -l');

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`进程退出 ${code}`);
});

// spawn：执行 shell 命令，参数通过数组传入
// exec：执行 shell 命令，整个作为字符串传入
// execFile：执行可执行文件
// fork：跑 js 子进程