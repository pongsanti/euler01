const {mulOf3, mulOf5} = require('./multiply_of')

test('6 is multiplied of 3', () => {
  expect(mulOf3(6)).toBeTruthy()
})

test('10 is multiplied of 5', () => {
  expect(mulOf5(10)).toBeTruthy()
})
