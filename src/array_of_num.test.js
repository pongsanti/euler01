const arrayOfNum = require('./array_of_num')

test('Generate array of number 10', () => {
  let arr = arrayOfNum(10)
  expect(arr.length).toBe(9)
  expect(arr[0]).toBe(1)
  expect(arr[8]).toBe(9)
})