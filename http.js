const http = require('http')

const server = http.createServer((req,res)=>{
    if (req.url === '/') {
        res.end('Rakshith Kumar S')
    }
    if (req.url=== '/about') { 
        res.end("Welcom ot my home page")
    }
    res.end(`<h1>Oops</h1>`)
})

server.listen(5000)