const http = require('http'); // Importing the HTTP module

// Creating a basic HTTP server
const server = http.createServer((req, res) => {
    console.log('request event'); // Logging request event
    res.end('Hello World'); // Sending a response
});

// Listening on port 5000
server.listen(5000, () => {
    console.log('Server listening on port : 5000....'); // Logging server start
});
