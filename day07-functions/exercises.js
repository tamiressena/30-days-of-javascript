// LEVEL 1
// EX01 and 02
// Declare a function fullName and it print out your full name.
function fullName(fistName, lastName) {
  return `${fistName} ${lastName}`;
}

console.log(fullName("Tamires", "Sena"));

// EX03
// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumber(num1, num2) {
  return num1 + num2;
}

console.log(addNumber(22, 32));

// EX04
// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function area(length, width) {
  return length * width;
}

console.log(area(3, 5));

// EX05
// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeter(length, width) {
  return 2 * length + 2 * width;
}

console.log(perimeter(3, 5));

// EX06
// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height) {
  return length * width * height;
}

console.log(volumeOfRectPrism(2, 3, 4));

// EX07
// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(raio) {
  return Math.PI * raio * raio;
}

console.log(areaOfCircle(3));

// EX08
// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(raio) {
  return Math.PI * 2 * raio;
}

console.log(circumOfCircle(2));

// EX09
// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass, volume) {
  return mass / volume;
}

console.log(density(6, 2));

// EX10
// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speedKmH(distanceKm, timeH) {
  return distanceKm / timeH;
}

console.log(speedKmH(100, 4));

// EX11
// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight(mass, gravity) {
  return mass * gravity;
}

console.log(weight(200, 4));

// EX12
// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(celsius) {
  return `${(celsius * 9) / 5 + 32}ºF`;
}

console.log(convertCelsiusToFahrenheit(37));

// EX13
// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
function bmi(weightKg, heightM) {
  indice = weightKg / (heightM * heightM);

  if (indice < 18.5) {
    return "Underweight";
  } else if (indice >= 18.5 && indice <= 24.9) {
    return "Normal weight";
  } else if (indice >= 25 && indice <= 29.9) {
    return "Overweight";
  } else if (indice >= 30) {
    return "Obese";
  } else {
    return "Invalid value";
  }
}

// EX14
// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer
function checkSeason(month) {
  let m = String(month).toLowerCase();
  if (m == "december" || m == "january" || m == "february") {
    return "Summer";
  } else if (m == "march" || m == "april" || m == "may") {
    return "Autumm";
  } else if (m == "june" || m == "july" || m == "august") {
    return "Winter";
  } else if (m == "september" || m == "october" || m == "november") {
    return "Spring";
  } else {
    return "Valor inválido";
  }
}

console.log(checkSeason("maio"));

// EX 15
// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

console.log(findMax(-4, -17, -23));

// LEVEL 2
// EX01
// Linear equation is calculated as follows: ax + b = 0. Write a function which calculates value of a linear equation, solveLinEquation.
const math = require("mathjs");

function solveLinEquation(a, b) {
  const coefficients = [[a]];
  const constants = [b];

  const solution = math.lusolve(coefficients, constants);
  return solution;
}

console.log(solveLinEquation(3, 18));

// EX02
// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadEquation(a, b, c) {
  let result = math.polynomialRoot(c, b, a);
  return result;
}

console.log(solveQuadEquation(1, -1, 0));

// EX03
// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr) {
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  // return;
}

console.log(printArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// EX04
// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime(d, m, y, h, min) {
  return `${d}/${m}/${y} ${h}:${min}`;
}

console.log(showDateTime(18, 9, 2024, 14, 5));

// EX05
// Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x, y) {
  return `(${y}, ${x})`;
}

console.log(swapValues(2, 3));

// EX 06
// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(array) {
  var newArray = [];
  while (array.length) {
    newArray.push(array.pop());
  }
  return newArray;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

// EX07
// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(array) {
  var capitalizedArray = [];

  var item = array.toString();
  var maiuscula = item.toUpperCase();
  capitalizedArray = maiuscula.split(",");

  return capitalizedArray;
}

console.log(capitalizeArray(["banana", "maça", "pera"]));

// EX08
// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
var array = [];

function addItem(item) {
  array.push(item);
  return array;
}

console.log(addItem(2));
console.log(addItem(5));

// EX09
// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
var array = [1, 2, 3, 4, 5];

function removeItem(index) {
  var deletar = array.splice(index, 1);
  var newArray = array.filter((index) => !deletar.includes(index));
  return newArray;
}

console.log(removeItem(1));

// EX10
// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range
function sumOfNumbers(number) {
  var soma = 0;
  for (i = 0; i <= number; i++) {
    soma += i;
  }
  return soma;
}

console.log(sumOfNumbers(10));

// EX11
// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(number) {
  var soma = 0;
  for (i = 0; i <= number; i++) {
    if (i % 2 === 1) {
      soma += i;
    }
  }
  return soma;
}

console.log(sumOfOdds(10));

// EX12
// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(number) {
  var soma = 0;
  for (i = 0; i <= number; i++) {
    if (i % 2 === 0) {
      soma += i;
    }
  }
  return soma;
}

console.log(sumOfEven(10));

// EX13
// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(number) {
  somaOdds = 0;
  somaEvens = 0;
  for (i = 0; i <= number; i++) {
    if (i % 2 === 1) {
      somaOdds += 1;
    } else {
      somaEvens += 1;
    }
  }
  return `The number of odds are ${somaOdds} and the number of evens are ${somaEvens}`;
}

console.log(evensAndOdds(100));

// EX14
// Write a function which takes any number of arguments and return the sum of the arguments
function sum() {
  soma = 0;

  for (i = 0; i < arguments.length; i++) {
    soma += arguments[i];
  }

  return soma;
}

console.log(sum(1, 2, 3, 4, 5, 6));

// EX15
// Write a function which generates a randomUserIp.
function randomUserIp() {
  let byte1 = Math.floor(Math.random() * 256);
  let byte2 = Math.floor(Math.random() * 256);
  let byte3 = Math.floor(Math.random() * 256);
  let byte4 = Math.floor(Math.random() * 256);
  return `${byte1}.${byte2}.${byte3}.${byte4}`;
}

console.log(randomUserIp());

// EX16
// Write a function which generates a randomMacAddress
function randomMacAddress() {
  let array = [];

  for (i = 0; i < 12; i++) {
    sum = "";
    // gera número automaticamente, entre 0 e F
    var digit = Math.floor(Math.random() * 17);

    // transforma número acima 9 na representação hexa
    if (digit == 10) {
      digit = "A";
    } else if (digit == 11) {
      digit = "B";
    } else if (digit == 12) {
      digit = "C";
    } else if (digit == 13) {
      digit = "D";
    } else if (digit == 14) {
      digit = "E";
    } else if (digit == 15) {
      digit = "F";
    } else {
      digit = digit;
    }

    // transforma números em string
    let num = digit.toString();

    // gera lista de números e os insere no array
    sum += num;
    array.push(sum);
  }
  // transforma array em string
  let mac = array.toString();
  // retira todas as vírgulas
  let maca = mac.replace(/,/g, "");
  // deixa no formato correto
  let macfinal =
    maca.slice(0, 2) +
    ":" +
    maca.slice(2, 4) +
    ":" +
    maca.slice(4, 6) +
    ":" +
    maca.slice(6, 8) +
    ":" +
    maca.slice(8, 10) +
    ":" +
    maca.slice(10, 12);

  return macfinal;
}

console.log(randomMacAddress());
