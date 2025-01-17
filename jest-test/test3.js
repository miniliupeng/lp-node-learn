// 覆盖率检测
const babel = require('@babel/core');
const babelPluginIstanbul = require('babel-plugin-istanbul');

const res = babel.transformFileSync('./sum.js', {
  plugins: [
    [
      babelPluginIstanbul,
      {
        inputSourceMap: true
      }
    ]
  ]
});

eval(res.code);

const libReport = require('istanbul-lib-report');
const reports = require('istanbul-reports');
var libCoverage = require('istanbul-lib-coverage');

var map = libCoverage.createCoverageMap();
var summary = libCoverage.createCoverageSummary();

map.merge(global['__coverage__']);

map.files().forEach(function (f) {
  var fc = map.fileCoverageFor(f),
    s = fc.toSummary();
  summary.merge(s);
});

const context = libReport.createContext({
  coverageMap: map
});

const report = reports.create('text');

report.execute(context);
