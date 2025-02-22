const EventEmitter = require('events'); // Importing the 'events' module

// Creating an instance of EventEmitter
const customEmitter = new EventEmitter();

// Register an event listener for the 'response' event
customEmitter.on('response', (name, id) => {
    console.log(`Data received: user ${name} with id: ${id}`);
});

// Emit the 'response' event with arguments 'name' and 'id'
customEmitter.emit('response', 'John', 34);