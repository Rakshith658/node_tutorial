const fs = require('fs')

fs.readFile('./content/first.txt','utf8',(err,result)=>{
    if (err) {
        console.log(err);
        return;
    }
    const first = result
    fs.readFile('./content/Second.txt','utf8',(err,result)=>{
        if (err) {
            console.log(err);
            return;
        }
        const second = result
        fs.writeFile('./content/result.txt',
        `the content in the files is ${first},${second}`,
        {flag:'a'},
        (err,result)=>{
            if (err) {
                console.log(err);
                return;
            }
           console.log(result);
        })
    })
})