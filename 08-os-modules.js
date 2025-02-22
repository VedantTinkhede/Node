const os = require('os'); // Importing the built-in 'os' module

// Getting information about the current user
const user = os.userInfo();
//console.log(user);

// Logging system uptime
//console.log(`The system uptime is ${os.uptime()} seconds`);

// Getting various OS details
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
};

console.log(currentOS);