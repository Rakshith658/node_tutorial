const {createReadStream} =require('fs')

const stream = createReadStream('./content/big.txt',{encoding:'utf8',highWaterMark:90000})

stream.on('data',(result)=>{
    console.log(result);
})

stream.on('error',(error)=>{
    console.log(error);
})