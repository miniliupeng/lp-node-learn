// repl 是 Read-Eval-Print-Loop   交互式

import repl from 'node:repl';
import cfonts from 'cfonts';

const r = repl.start({ prompt: '> ', eval: myEval });

function myEval(cmd, context, filename, callback) {
  // console.log('你输入的命令：' + cmd);
  cfonts.say(cmd, {
    font: '3D',
    colors: ['yellow', 'cyan']
  });
  callback();
}
