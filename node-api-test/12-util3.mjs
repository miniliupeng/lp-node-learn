// 
import util from 'node:util';

const flag = util.debug('flag');

if (flag.enabled) {  // 环境变量 flag
  console.log(111);
}

const flag2 = util.debug('flag2');

if (flag2.enabled) {
  console.log(222);
}
