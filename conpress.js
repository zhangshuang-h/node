var fs = require('fs')
var zlib = require('zlib')

// 压缩get.txt文件为get.txt.gz
fs.createReadStream('get.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('get.txt.gz'))
console.log('文件压缩完成')