// 键盘输入
import readline from 'node:readline';

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true); // 禁用掉内置的一些键盘事件处理，比如 ctrl + c 退出进程

process.stdin.on('keypress', (str, key) => {
  console.log(str, key);
  if (key.sequence === '\u0003') { // ctrl + c 退出进程
    process.exit();
  }
});
