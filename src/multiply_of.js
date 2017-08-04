const R = require('ramda')

const mulOfNum = (num, input) => (input % num === 0)
const mulOf = R.curry(mulOfNum)

const mulOf3 = mulOf(3)
const mulOf5 = mulOf(5)

const mulOf3Or5 = (value) => (mulOf3(value) || mulOf5(value))

const isMulOf3 = (value) => (R.equals(0, R.modulo(value, 3)))


module.exports = {mulOf3, mulOf5, mulOf3Or5, isMulOf3}
