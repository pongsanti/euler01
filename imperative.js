// common function checking if number is multipled of number
const isMultipleOf = (multipleVal, input) => (input % multipleVal === 0)
// specific 'is multipled' check
const isMultipleOf3 = (input) => isMultipleOf(3, input)
const isMultipleOf5 = (input) => isMultipleOf(5, input)

let result = 0;
// loop through 1 - 999
for(let i = 1; i < 1000; i++) {
  if (isMultipleOf3(i) || isMultipleOf5(i)) {
    result += i;
  }
}

// Sum value
console.log(result);