const fs = require('node:fs');

function sum(a, b) {
  return a + b;
}

function read() {
  const pkg = JSON.parse(fs.readFileSync('./package.json'));

  if (pkg.version === '1.0.0') {
    return 111;
  } else {
    return 222;
  }
}

function some(callback) {
  callback(1);
  callback(2);
}

module.exports = {
  sum,
  read,
  some
};
