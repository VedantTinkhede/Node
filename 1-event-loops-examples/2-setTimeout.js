console.log('first'); // Logging first message

// Scheduling a callback to execute after 0 milliseconds
setTimeout(() => {
    console.log('second');
}, 0);

console.log('third'); // Logging third message before setTimeout executes