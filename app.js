const http = require('http')
const fs = require('fs')

http.createServer((req,res)=>{
    // const text = fs.readFileSync("./content/big.txt",'utf8')
    // res.end(text)
    const stream = fs.createReadStream("./content/big.txt",{encoding:'utf8'})
    stream.on('open',(data)=>{stream.pipe(res)})
    stream.on('error',(err)=>{console.log(err);})
}).listen(5000)