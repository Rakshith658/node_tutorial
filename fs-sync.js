const fs = require('fs')

console.log('starting the task');

const first = fs.readFileSync('./content/first.txt','utf8')
const second = fs.readFileSync('./content/second.txt','utf8')

fs.writeFileSync('./content/result.txt',`the content in the files is ${first},${second}`,{flag:'a'})

const result = fs.readFileSync('./content/result.txt','utf8')

console.log(result);

console.log('task is done');
console.log('starting the next task');