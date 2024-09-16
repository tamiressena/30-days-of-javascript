
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
    var xyz = countries[i];
    var land = xyz.toString();
    tamanho = land.length;
    if (tamanho > maior) {
        maior = tamanho;
    }
}

if (maior === land.length) {
  console.log(land);
}