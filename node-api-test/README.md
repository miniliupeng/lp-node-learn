events：提供了 EventEmitter 类，可以用 on、once 注册监听器，用 emit 触发事件
path：用来处理文件路径的，dirname、basename、extname 方法分别拿到目录名、文件名、后缀名，而 join、resolve、relative、parse 等方法是用来连接、解析路径的
import.meta：在 commonjs 里用 __dirname、__filename 等变量来拿到当前文件名、当前目录，而在 es module 里是用 import.meta.dirname、import.meta.filename，这要 node 20 以上才有，低版本可以用 url.fileURLToPath(import.meta.url)
url：用来解析 URL 的，可以 new URL 来拿到各部分的内容，还可以 new URLSearchParams 来处理 query string
os：拿到系统信息，比如 cpu、内存、homedir、网卡信息、EOL 等。

stream：流相关的 api，主要有 Readable、Writable、Duplex、Transform 4 种流，以及可以通过 pipeline 把流连接起来，很多 node 的 api 都是基于流的
http：主要是通过 http.createServer 创建 http 服务，通过 http.request 发送 http 请求，请求响应也是基于 stream 实现的
fs：文件、目录的增删改查
zlib：用于 http 服务的 deflate、gzip、br 等压缩算法

crypto：用来加密（md5、sha256 等）、产生随机数（randomInt、randomUUID）的。
buffer：用来操作二进制数据，是对 ArrayBuffer 的扩展，node.js 里的很多 api 都是基于 Buffer 来读写二进制数据的
util：一些工具方法，比如 util.format、util.getCallSites、util.debug、util.promisify 等
sqlite：内置的 sqlite 数据库，现在还不稳定，可以先用 sqlite 这个三方包

child_process：创建子进程的，有 exec、spawn、execFile、fork 这 4 个 api，前两个是跑 shell 命令的，execFile 是跑可执行文件的，fork 是创建 js 进程的
cluster：创建多个进程，比如服务器的多进程扩展，不过一般不用自己写，直接用 pm2 就行
net：创建 TCP 服务，发送 TCP 消息
dgram：创建 UDP 服务，发送 UDP 消息，比如 DNS 协议就是基于 UDP

vm：创建一个 JS 运行环境，在这个环境里跑 JS 代码，比如 jest 等指定上下文就是通过这个
repl：自己创建 repl 的交互的时候，用这个模块
dns：查询 dns 也就是域名到 ip
string_decoder：用于解码 Buffer 为字符串
worker_threads：创建工作线程来提升性能
readline：按行读取输入流，可以读取文件、读取用户输入（类似 repl）、还可以处理键盘事件
querystring：用来解析和生成 querystring 的
v8：拿到 v8 的内存等统计信息，还可以设置 v8 flags