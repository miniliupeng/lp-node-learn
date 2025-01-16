const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("event", (a, b) => {
  // on 注册的事件可以多次触发，而 once 注册的只会触发一次
  console.log("an event occurred!");
  console.log(a, b);
});

myEmitter.emit("event", "a", "b");
