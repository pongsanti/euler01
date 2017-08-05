const R = require('ramda')

const mulOfNum = (num, input) => (input % num === 0)
const mulOf = R.curry(mulOfNum)

const mulOf3 = mulOf(3)
const mulOf5 = mulOf(5)

const mulOf3Or5 = (value) => (mulOf3(value) || mulOf5(value))

module.exports = {mulOf3, mulOf5, mulOf3Or5}
