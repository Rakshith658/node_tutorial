const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('respons',()=>{
    console.log(`data recived`);
})
customEmitter.on('respons',(name,id)=>{
    // console.log(`Rakshith Kumar S`);
    console.log(name);
    console.log(id);
})
customEmitter.emit('respons','Rakshith',1)
