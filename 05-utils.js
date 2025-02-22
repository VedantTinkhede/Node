// Function to log a greeting message
const sayHi = (name) => {
    console.log(`Hello there ${name}`);
};

// Exporting the function so it can be used in other files
module.exports = sayHi; // this is the way to export a function. This will share it as a function to other files.