
跨域请求时，携带cookie:
前端请求时在request对象中配置"withCredentials": true；
服务端在response的header中配置"Access-Control-Allow-Origin", "http://xxx:${port}"; // 具体到哪个源
服务端在response的header中配置"Access-Control-Allow-Credentials", "true"
