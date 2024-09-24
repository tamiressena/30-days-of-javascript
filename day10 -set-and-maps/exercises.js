// LEVEL 1
// EX01
// Create an empty set
const set = new Set();
// console.log(set);

// EX02
// Create a set containing 0 to 10 using loop
for (i = -1; i < 10; i++) {
  set.add(i + 1);
}
console.log(set);

// EX03
// Remove an element from a set
console.log(set.delete(5));
console.log(set.size);

// EX04
// Clear a set
set.clear();
console.log(set);

// EX05
// Create a set of 5 string elements from array
const arr = ["Atum", "Beringela", "Catupiry", "Damasco", "Enguia"];

const foods = new Set(arr);
console.log(foods);

// EX06
// Create a map of countries and number of characters of a country
const countries = [
  "Argentina",
  "Brasil",
  "Colombia",
  "Dinamarca",
  "Equador",
  "Finlândia",
  "Groelândia",
];

const countriesList = new Map();

for (const count of countries) {
  countriesList.set(count, count.length);
}

console.log(countriesList);

// LEVEL 2
// EX01
// Find a union b
// const a = [1, 2, 3, 4]
// const b = [3, 4, 5, 6]
// const c = [...a, ...b]

// const C = new Set(c)
// console.log(C)

// EX02
// Find a intersection b
// const a = [1, 2, 3, 4]
// const b = [3, 4, 5, 6]

// let c = a.filter(num => b.includes(num))
// let C = new Set(c)
// console.log(C)

// EX03
// Find a with b
const a = [1, 2, 3, 4];
const b = [3, 4, 5, 6];

let c = a.filter((num) => !b.includes(num));
let C = new Set(c);
console.log(C);
