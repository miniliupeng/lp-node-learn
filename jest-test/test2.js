// 错误打印
const { codeFrameColumns } = require('@babel/code-frame');

const rawLines = `class Foo {
  constructor() {
    console.log("hello");
  }
}`;

const location = {
  start: { line: 3, column: 8 },
  end: { line: 3, column: 9 }
};

const result = codeFrameColumns(rawLines, location, {
  highlightCode: true
});

console.log(result);

// 通过错误堆栈获得出错位置的行列号正则匹配出来