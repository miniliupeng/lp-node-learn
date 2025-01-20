puppeteer 是基于 Chrome DevTools Protocol 实现的，会以调试模式跑一个 chromium 的实例，然后通过 WebSocket 连接上它，之后通过 CDP 协议来远程控制。

我们写的脚本最终都会转成 CDP 协议来发送给 Chrome 浏览器，这就是它的实现原理。


## 从 0 实现一个 mini puppeteer

chromium 所有平台和版本的 zip 包都在 google 的一个网站上存着，通过 os 模块拿到系统信息，再根据传入的版本号就能确定 url。

确定了 url 之后通过 https 模块就可以下载，通过流的方式写入本地文件，并且在每次有 data 的时候更新下进度条。

最后通过第三方的 extract-zip 包实现了解压缩。

并且把这个脚本配到了 postinstall 的 npm scripts 里，只要安装完依赖就会自动下载。