module.exports.items = ['item1', 'item2'] // this is the way to export an array. This is the way to make it available to other files.
const person = {
    name: 'bob',

}

module.exports.singleperson = person  // this is the way to export an object. This will share it as a variable to other files.