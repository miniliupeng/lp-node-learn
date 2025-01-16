// v8 的内存等信息
import v8 from 'node:v8';

console.log(v8.getHeapSpaceStatistics()); // 堆内存的每一部分的统计信息

console.log(v8.getHeapStatistics()); // 堆内存整体的统计信息

v8.setFlagsFromString('--trace-gc'); // 开启 gc 的日志
