const names = require('./4-names')
console.log(names);

const sayhi = require('./5-utils')
sayhi(names.john)

const person = require('./6-alternative-flavour')

require('./7-mind-grenade')  // since we are not exporting anything from 7-mind-grenade.js, we can just require it and it will run the code in it.

