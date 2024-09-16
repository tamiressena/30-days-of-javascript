// LEVEL 1
let firstName = "Tamires";
console.log(typeof firstName);

let lastName = "Afonso";
console.log(typeof lastName);

let country = "BR";
console.log(typeof country);

let city = "Monte Mor";
console.log(typeof city);

let age = 27;
console.log(typeof age);

let isMarried = false;
console.log(typeof isMarried);

console.log("10" === 10);

console.log(parseInt("9.8") === 10);

const now = new Date();
console.log(now.getFullYear()); // ano atual
console.log(now.getMonth() + 1); // mês atual, janeiro = 0, por isso +1
console.log(now.getDate()); // dia do mês
console.log(now.getHours()); // pega somente o valor da hora, sem os minutos
console.log(now.getMinutes()); // pega somente o valor dos minutos, sem a hora
console.log(now.getTime()); // Find out the numbers of seconds elapsed from January 1, 1970 to now.

// LEVEL 2
let nome = "Tamires".length;
let comprimento = nome > 7;
comprimento ? console.log("Seu nome é longo") : console.log("Seu nome é curto");
comprimento = false;

let firstName2 = "Tamires";
let lastName2 = "Afonso";
let validacao = firstName2.lenght > lastName2.lenght;
validacao
  ? console.log("Seu nome é maior que seu sobrenome")
  : console.log("Seu nome é menor que seu sobrenome");
validacao = false;

let myAge = 250;
let yourAge = 25;
console.log(`I am ${myAge - yourAge} years older than you.`);

let birthYear = 1997 <= now.getFullYear - 18;
birthYear
  ? console.log(
      `You are ${now.getFullYear - birthYear}. You are old enough to drive.`
    )
  : console.log(
      `You are ${
        now.getFullYear - birthYear
      }. You will be allowed to drive after ${
        18 - (now.getFullYear - birthYear)
      } years.`
    );
