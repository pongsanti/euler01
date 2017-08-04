const {mulOf3, mulOf5, isMulOf3} = require('./multiply_of')

test('6 is multiplied of 3', () => {
  expect(mulOf3(6)).toBeTruthy()
})

test('10 is multiplied of 5', () => {
  expect(mulOf5(10)).toBeTruthy()
})

test('6 is multiplied of 3', () => {
  expect(isMulOf3(6)).toBeTruthy()
})