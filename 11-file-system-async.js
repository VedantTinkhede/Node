const { log } = require('console');
const { readFile, writeFile } = require('fs');

log('start'); // Log start message

// Read first file asynchronously
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    
    // Read second file asynchronously
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;

        // Write the combined content to a new file
        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('done with this task'); // Log task completion
        });
    });
});

console.log('starting the next one'); // Indicating the next task