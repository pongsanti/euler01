const R = require('ramda')
const {mulOf3Or5} = require('./src/multiply_of')
const arrOf = require('./src/array_of_num')

let result = R.compose(
  R.reduce(R.add, 0),
  R.filter((num) => (mulOf3Or5(num))),
  arrOf)(1000)

console.log(result)
