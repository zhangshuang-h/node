var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
// event.on('some_event',function(){
//     console.log('some_event 事件触发')
// })
// setTimeout(()=>{
//     event.emit('some_event')
// },1000)

// event.on('someEvent',function (arg1,arg2){
//     console.log('listener1',arg1,arg2)
// })
// event.on('someEvent',function (arg1,arg2){
//     console.log('listener2',arg1,arg2)
// })
// event.emit('someEvent','arg1的参数','arg2的参数')
//  -----------------------------
// 监听器1
var listener1 = function listener () {
    console.log('listener1监听触发')
}
var listener2 = function listener(){
    console.log('listener2监听触发')
}
event.addListener('connection',listener1)
event.on('connection',listener2)
var eventListeners = event.listenerCount('connection');
console.log(eventListeners+'个监听器监听连接事件')
event.emit('connection')
event.removeListener('connection',listener1)
console.log('listener1不再被监听')
event.emit('connection')
eventListeners = event.listenerCount('connection')
console.log(eventListeners+'个监听器监听连接事件')
console.log('程序执行完毕')