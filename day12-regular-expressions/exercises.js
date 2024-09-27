// LEVEL1
// EX01
// Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
// let string =
//   "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
// let pattern = /\d+/g;
// const values = string.match(pattern);
// console.log(values);

// let [perMonth1, perYear, perMonth2] = values;
// let total = (+perMonth1 + +perMonth2) * 12 + +perYear;
// console.log(total);

// EX02
// The position of some particles on the horizontal x-axis -1, 2, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
const txt =
  "The position of some particles on the horizontal x-axis -1, 2, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.";

let pattern = /.\d+/g;
const points = txt.match(pattern);
console.log(points);

const stringToNum = [];

for (let element of points) {
  element = Number(element);
  stringToNum.push(element);
}
console.log(stringToNum);

let menorNum = 0;
let maiorNum = 0;

for (i = 0; i < stringToNum.length; i++) {
  if (stringToNum[i] <= menorNum) {
    menorNum = stringToNum[i];
  } else if (stringToNum[i] >= maiorNum) {
    maiorNum = stringToNum[i];
  }
}

let distance = maiorNum - menorNum;
console.log(distance);

// EX03
/* Write a pattern which identify if a string is a valid JavaScript variable

is_valid_variable('first_name') # True
is_valid_variable('first-name') # False
is_valid_variable('1first_name') # False
is_valid_variable('firstname') # True */

function is_valid_variable(varName) {
  const pattern = /(^\D)(?!\-)/g;
  const result = pattern.test(varName);
  return result;
}

console.log(is_valid_variable("first_name"));
console.log(is_valid_variable("first-name"));
console.log(is_valid_variable("1first_name"));
