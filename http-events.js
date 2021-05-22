const http = require('http')

const server = http.createServer()

server.on('request',(req,res)=>{
    // console.log('wlecom');
    res.end('welcom')
})

server.listen(5000)