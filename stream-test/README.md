## 从服务器下载一个文件的时候，如何知道文件下载完了呢？
1、一种是 header 里带上 Content-Length，浏览器下载到这个长度就结束
2、另一种是设置 transfer-encoding:chunked，它是不固定长度的，服务器不断返回内容，直到返回一个空的内容代表结束