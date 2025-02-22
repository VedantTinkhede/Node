const http = require('http'); // Importing HTTP module

// Creating an HTTP server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home Page');
    } else if (req.url === '/about') {
        // Blocking code: loops through a large number of iterations
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`);
            }
        }
        res.end('About Page');
    } else {
        res.end('Error Page');
    }
});

server.listen(5000, () => {
    console.log('Server listening on port : 5000....');
});
// Output:
// Server listening on port : 5000....