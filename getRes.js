var express = require('express')
var getRes = express()
// 设置跨域访问
getRes.all('*',function (req, res, next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Header','X-Requested-With');
    res.header('Access-Control-Allow-Methods','PUT.POST,GET,DELETE,OPTIONS');
    res.header('X-Powered-By','3.2.1');
    res.header('Content-Type','application/json;charset=utf-8');
    next()
});

// 定义返回的数据
var resData = [
    {
        a:'这是响应的第一条',
        b:1
    },
    {
        a:'这是响应的第二条',
        b:2
    },
    {
        a:'这是响应的第三条',
        b:3
    },
    {
        a:'这是响应的第四条',
        b:4
    },
    {
        a:'这是响应的第五条',
        b:5
    }
]

// 写个接口zhangshuang
getRes.get('/zhangshuang',function(req, res){
    res.status = 200,
        res.json(resData)
})
// 配置服务端口
var server = getRes.listen(2020,function (){
    var host = server.address().address;
    var port = server.address().port
    console.log('Example getRes listen at http://%s:%s',host,port)
})