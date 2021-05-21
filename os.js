const os =require('os')

// info about current use of pc 

const user = os.userInfo()
console.log(user);

// method to get system time 
console.log(`the system uptime is ${os.uptime()} second`)

//info about the system status

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
}

console.log(currentOS)