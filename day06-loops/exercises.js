// LEVEL 1
// EXERCISE 01
// Iterate 0 to 10 using for loop, do the same using while and do while loop

// for (i = 0; i <= 10; i++) {
//   console.log(i);
// }

// let i = 0;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// EXERCISE 02
//Iterate 10 to 0 using for loop, do the same using while and do while loop

// for (i = 10; i >= 0; i--) {
//   console.log(i);
// }

// let i = 10;

// while (i <= 0) {
//   console.log(i);
//   i--;
// }

// do {
//   console.log(i);
//   i--;
// } while (i >= 0);

// EXERCISE 03
// Iterate 0 to n using for loop
// let i = 0;
// let n = 43; //adicionar o número desejado

// for (i = 0; i <= n; i++) {
//   console.log(i);
// }

// EXERCISE 04
// Write a loop that makes the following pattern using console.log():
// #
// ##
// ###
// ####
// #####
// ######
// #######

let i = 0;
let valores = 0;

for (i = 0; i <= 7; i++) {
  console.log("#".repeat(valores));
  valores += 1;
}

// EXERCISE 05
// Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

for (i = 0; i <= 10; i++) {
  console.log(`${i} X ${i} = ${i * i}`);
}

// EXERCISE 06
// Using loop print the following pattern
// i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

console.log(`i    i^2    i^3`);

for (i = 0; i <= 10; i++) {
  console.log(`${i}    ${i ** 2}    ${i ** 3}`);
}

// EXERCISE 07
// Use for loop to iterate from 0 to 100 and print only even numbers
for (i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// EXERCISE 08
// Use for loop to iterate from 0 to 100 and print only odd numbers
for (i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// EXERCISE 10
// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
soma = 0;
for (i = 0; i <= 100; i++) {
  soma += i;
}
console.log(soma);

// EXERCISE 11
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let odds = 0;
let evens = 0;

for (i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    odds += i;
  } else if (i % 2 === 0) {
    evens += i;
  }
}

console.log(
  `The sum of all evens from 0 to 100 is ${evens}. And the sum of all odds from 0 to 100 is ${odds}.`
);

// EXERCISE 12
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let array = [evens, odds];
console.log(array);

// EXERCISE 13
// Develop a small script which generate array of 5 random numbers
// let list = [];
// for (i = 0; i < 5; i++) {
//   number = Math.ceil(Math.random(5) * 10);
//   list.push(number);
// }
// console.log(list);

let list = [];
for (i = 0; i < 5; i++) {
  number = Math.ceil(Math.random(5) * 10);
  list.push(number);
}
console.log(list);

// LEVEL 02
// EXERCISE 16
// Print all the elements of array as shown below.

// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]

// HTML
// CSS
// JS
// REACT
// NODE
// EXPRESS
// MONGODB

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

let firstList = fullStack[0];
let secondList = fullStack[1];

let thirdList = firstList.concat(secondList);

for (i = 0; i < thirdList.length; i++) {
  console.log(thirdList[i]);
}

// EXERCISE 06
// Use the countries array to create the following array of arrays:
// [
//     ['Albania', 'ALB', 7],
//     ['Bolivia', 'BOL', 7],
//     ['Canada', 'CAN', 6],
//     ['Denmark', 'DEN', 7],
//     ['Ethiopia', 'ETH', 8],
//     ['Finland', 'FIN', 7],
//     ['Germany', 'GER', 7],
//     ['Hungary', 'HUN', 7],
//     ['Ireland', 'IRE', 7],
//     ['Iceland', 'ICE', 7],
//     ['Japan', 'JAP', 5],
//     ['Kenya', 'KEN', 5]
//   ]

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

// let finalArray = [];

// for (i = 0; i < countries.length; i++) {
//   let sigla = countries[i].slice(0, 3);
//   let maiuscula = sigla.toUpperCase();
//   var count = [countries[i], maiuscula, countries[i].length];
//   finalArray.push(count);
// }

// console.log(finalArray);

// EXERCISE 07
// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

// for (i = 0; i < countries.length; i++) {
//   let land = countries[i].toString();
//   let land2 = land.includes("land");
//   if (land2 === true) {
//     console.log(land);
//   } else {
//     console.log('All these countries are without land.')
//   }
// }

// EXERCISE 08
// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
// for (i = 0; i <= countries.length; i++) {
//     let country = countries[i];
//     if (country[country.length - 1] === "a" && country[country.length - 2] === "i") {
//       console.log(country);
//     } else {
//       console.log( 'These are countries ends without ia') // não consegui deixar essa condição fora do if
//     }
//   }

// EXERCISE 09
// Using the above countries array, find the country containing the biggest number of characters.
let maior = 0;
for (i = 0; i <= countries.length; i++) {
  var land = countries[i].toString();
  tamanho = land.length;
  if (tamanho > maior) {
    maior = tamanho;
  }
}

if (maior === land.length) {
  console.log(land);
}
