var fs = require('fs')
// var data = 'over';
var data1 = '这是写入的数据'
// 创建可读流
// var readerStream = fs.createReadStream('input.txt')
// // 设置编码为utf-8
// readerStream.setEncoding('UTF8')
//  // 处理流事件 data  end  error
// readerStream.on('data',function(chunk){
//     data+=chunk  // 有数据可读时触发
// })
// readerStream.on('end',function (){
//     console.log(data) // 没有更多数据可读时触发
// })
// readerStream.on('error',function (err){
//     console.log(err.stack) // 在接收和写入的过程中发生错误触发
// })
// console.log('程序执行完毕')

 // 创建写入流
// var writeStream = fs.createWriteStream('input.txt')
// // 使用utf8编码写入数据
// writeStream.write(data1,'UTF8')
// // 标记文件末尾
// writeStream.end()
//
// // 处理流事件 data  end error
// writeStream.on('finish',function (){
//     console.log('写入完成') // 当数据全部写入底层系统时触发
// })
// writeStream.on('error',function (err){
//     console.log(err.stack)
// })
//
// console.log('程序执行完毕')

 // 通过读取一个文件中的内容写入另一个文件
var readStream = fs.createReadStream('get.txt')
var writeStream = fs.createWriteStream('push.txt')
// 管道读写操作
// 读取get中的内容  写到push中
readStream.pipe(writeStream)
console.log('程序执行完毕')