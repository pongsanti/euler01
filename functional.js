const R = require('ramda')
const {mulOf3Or5} = require('./src/multiply_of')

const finalFunction = R.compose(R.sum, R.filter(mulOf3Or5), R.range(1))

// Sum value
console.log(finalFunction(1000))