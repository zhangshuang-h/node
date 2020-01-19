var fs = require('fs')
var zlib = require('zlib')

// 解压input.txt.gz文件为input.txt
fs.createReadStream('get.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('get.txt'))
console.log('文件解压缩完成')