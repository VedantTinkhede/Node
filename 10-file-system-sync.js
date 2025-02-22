const { readFileSync, writeFileSync } = require('fs'); // Importing synchronous file system methods

console.log('start'); // Logging start message

// Reading files synchronously
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// Writing to a new file (appending with 'flag: a')
writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    { flag: 'a' }
);

console.log('done with this task'); // Logging completion
console.log('starting the next one'); // Indicating the next step