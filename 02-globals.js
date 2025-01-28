// globals - no window

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log(__dirname);
setInterval(() => {                         // its a built in function that will do things after a certain interval
    console.log('hello world');
    
}, 1000);                                   // 1000 milliseconds = 1 second. Thus it will print 'hello world' every second