var http = require('http');
http.createServer(function(request,response){
    // 发送http头部
    // http状态值：200：ok
    // 内容类型：text/plain
    response.writeHead(200,{'content-type':'text/plain'});
    response.end('hello World\n')  // 发送响应数据
}).listen(8888)

// 运行后终端打印出如下信息
console.log('server running at http://127.0.0.1:8888/')