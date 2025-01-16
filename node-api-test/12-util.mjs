// 格式化
import util from 'node:util';

// util.format
console.log(
  // util.format(
    `这是一个数字：%d 
这是一个字符串：%s
这是一个 JSON：%j
这是一个 对象：%o`,
    111,
    '神说要有光',
    {
      a: 1,
      b: {
        c: 2
      }
    },
    {
      a: 1,
      b: {
        c: 2
      }
    }
  // )
);
// 占位符
// %s：字符串
// %d：数字
// %i：整数
// %f：浮点数
// %j：JSON
// %o：对象
// %%：%

