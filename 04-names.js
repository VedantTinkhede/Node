// Defining local and shared variables
const secret = 'secret'; // Local variable (not exported)

// Shared variables
const john = 'john';
const peter = 'peter';

// Exporting the shared variables as an object
module.exports = { john, peter }; // This is the way to export multiple variables. This is the way to make them available to other files.
// Exporting the shared variables as an array