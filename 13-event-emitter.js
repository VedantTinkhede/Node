// Import the 'events' module which provides the EventEmitter class
const EventEmitter = require('events');  // class 

// Create an instance of EventEmitter
const customEmitter = new EventEmitter();  // object

// Register an event listener for the 'response' event
customEmitter.on('response', (name, id) => {
    // This function will be called when the 'response' event is emitted
    console.log(`data received user ${name} with id:${id}`);
})

// Emit the 'response' event with arguments 'name' and 'id'
customEmitter.emit('response', 'John', 34);