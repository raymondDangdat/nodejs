const os = require('os')

// info about current user
const user =  os.userInfo()
console.log(user)

// method returns the system uptime in secods
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freem: os.freemem(),
}
console.log(currentOS);