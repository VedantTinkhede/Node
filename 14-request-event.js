const http = require('http'); // Importing HTTP module

// Creating an HTTP server using EventEmitter API
const server = http.createServer();

// Listening for request events
server.on('request', (req, res) => {
    res.end('Welcome'); // Responding to the request
});

server.listen(5000); // Server listening on port 5000
