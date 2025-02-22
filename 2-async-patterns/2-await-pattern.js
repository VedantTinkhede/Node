const { readFile, writeFile } = require('fs').promises; // Using Promises with fs module

const start = async () => {
    try {
        // Read files asynchronously using await
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        
        // Write file asynchronously
        await writeFile(
            './content/result-mind-grenade.txt',
            `THIS IS AWESOME : ${first} ${second}`,
            { flag: 'a' }
        );
        
        console.log(first, second); // Log file contents
    } catch (error) {
        console.log(error); // Handle errors
    }
};

start();
