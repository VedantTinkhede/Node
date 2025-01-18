// local
const secret ='secret'               // since we are not exporting this, it is not available outside this file

// share
const john = `john`
const peter = `peter`


module.exports = {john, peter}      // this is an object with two properties john and peter
                                   // we define that only john and peter are to be shared
