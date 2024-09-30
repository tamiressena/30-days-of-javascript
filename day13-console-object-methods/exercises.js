// LEVEL1
// EX01
// Display the countries array as a table
const countries = [
  "Albania",
  "Belgium",
  "Canada",
  "Denmark",
  "Estonia",
  "Finland",
];

console.table(countries);

// EX02
// Display the countries object as a table
const canada = {
  name: "Canada",
  capital: "Ottawa",
  population: 38005238,
  region: "Americas",
  area: 9984670,
};

console.table(canada);

// EX03
// Use console.group() to group logs
const names = ["Asabeneh", "Brook", "David", "John"];
console.group("Names");
console.log(names);
console.groupEnd();

// LEVEL2
// EX01
// 10 > 2 * 10 use console.assert()
console.assert(10 > 2 * 10, "10 is not bigger than 20");

// EX02
// Write a warning message using console.warn()
console.warn("Perigo! Essa ação é destrutiva.");

// EX03
// Write an error message using console.error()
console.error("Você errou! Tente novamente!");

// LEVEL3
// EX01
// Check the speed difference among the following loops: while, for, for of, forEach

console.time("while");
i = 0;
while (i <= 10) {
  if (i % 2 !== 0) {
    let errorMessage = `${i} is not even`;
    console.log(errorMessage);
  }
  i++;
}
console.timeEnd("while");
//14.359ms

console.time("for loop");
for (let i = 0; i <= 10; i += 1) {
  if (i % 2 !== 0) {
    let errorMessage = `${i} is not even`;
    console.log(errorMessage);
  }
}
console.timeEnd("for loop");
//2.375ms

console.time("for of");
arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (i of arr) {
  if (i % 2 !== 0) {
    let errorMessage = `${i} is not even`;
    console.log(errorMessage);
  }
}
console.timeEnd("for of");
//2.514ms

console.time("forEach");
array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.forEach((i) => {
  if (i % 2 !== 0) {
    let errorMessage = `${i} is not even`;
    console.log(errorMessage);
  }
});
console.timeEnd("forEach");
//2.052ms

//forEach is the fastest loop method in that case
