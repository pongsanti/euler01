const R = require('ramda')

const arrayOf = (x) => (R.range(1, x))

module.exports = arrayOf
