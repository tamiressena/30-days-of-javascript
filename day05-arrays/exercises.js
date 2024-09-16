// LEVEL 1
// EXERCISE 01
// Declare an empty array;
const arr = [];

// EXERCISE 02
// Declare an array with more than 5 number of elements
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// EXERCISE 03
// Find the length of your array
console.log(nums.length);

// EXERCISE 04
// Get the first item, the middle item and the last item of the array
console.log("First item: " + nums[0]);

let middleItem = Math.floor(nums.length / 2);
console.log("Middle item: " + nums[middleItem]);

let lastItem = nums.length - 1;
console.log("Last item: " + nums[lastItem]);

// EXERCISE 05
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [0, true, "country", "age", 4.5, false];
console.log("Length of the array: " + mixedDataTypes.length);

// EXERCISE 06
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// EXERCISE 07
// Print the array using console.log()
console.log(itCompanies);

// EXERCISE 08
// Print the number of companies in the array
console.log("Number of companies: " + itCompanies.length);

// EXERCISE 09 and 19
// Print the first company, middle and last company
console.log("First: " + itCompanies[0]);

let middle = Math.floor(itCompanies.length / 2);
console.log("Middle: " + itCompanies[middle]);

let last = itCompanies.length - 1;
console.log("Last: " + itCompanies[last]);

// EXERCISE 10
// Print out each company
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

// EXERCISE 11
// Change each company name to uppercase one by one and print them out
// itCompanies[0] = "FACEBOOK";
// itCompanies[1] = "GOOGLE";
// itCompanies[2] = "MICROSOFT";
// itCompanies[3] = "APPLE";
// itCompanies[4] = "IBM";
// itCompanies[5] = "ORACLE";
// itCompanies[6] = "AMAZON";
// console.log(itCompanies);

// EXERCISE 12
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(
  `${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies.`
);

// EXERCISE 13
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let company = "Google";
if (itCompanies.includes(company)) {
  console.log("The company is in the list.");
} else {
  console.log("The company is not in the list.");
}

// EXERCISE 14
// Filter out companies which have more than one 'o' without the filter method
// let string = itCompanies.toString();
// console.log(string);
// nomes = string.split(",");
// console.log(nomes);

// EXERCISE 15
// Sort the array using sort() method
console.log(itCompanies.sort());

// EXERCISE 16
console.log(itCompanies.reverse());

// EXERCISE 17
// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));

// EXERCISE 18
// Slice out the last 3 companies from the array
console.log(itCompanies.slice(4));

// EXERCISE 19
//Slice out the middle IT company or companies from the array
console.log(itCompanies.slice[middle]);

// EXERCISE 20
// Remove the first IT company from the array
console.log(itCompanies.shift());

// EXERCISE 21
// Remove the last IT company from the array
console.log(itCompanies.pop());

// EXERCISE
// Remove all IT companies
console.log(itCompanies.splice());

// EXERCISE
//
// EXERCISE
//
// EXERCISE
//
// EXERCISE
//
// EXERCISE
//
// EXERCISE
//
