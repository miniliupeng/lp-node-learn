// vm 模块可以创建一个 JS 执行环境

import vm from 'node:vm';

const context = {
  console,
  guang: 111,
  dong: 222
}

vm.createContext(context);
vm.runInContext('console.log(guang + dong)', context);


