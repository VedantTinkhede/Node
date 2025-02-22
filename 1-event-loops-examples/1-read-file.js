const { readFile, writeFile } = require('fs');

console.log('started a first task'); // Logging start message

// Reading a file asynchronously
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result); // Logging the file content
    console.log('completed first task'); // Logging completion
});

console.log('starting next task'); // Indicating the next task