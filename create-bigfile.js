const {writeFileSync} = require('fs')

for (let index = 0; index < 10000; index++) {
    writeFileSync('./content/big.txt',`Hello world ${index} \n`,{flag:'a'})
}