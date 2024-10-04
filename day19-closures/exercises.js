// LEVEL1
// EX01
// Create a closure which has one inner function
function numeroDeAnimais() {
  var count = 0;
  function plusAnimal() {
    count++;
    return count;
  }
  return plusAnimal;
}

var animais = numeroDeAnimais();
console.log(animais());
console.log(animais());

// EX02
// Create a closure which has three inner functions
function moduloMatematico() {
  let result = 0;
  function somaUm() {
    result++;
    return result;
  }
  function menosUm() {
    result--;
    return result;
  }
  function somaDois() {
    result = result + 2;
    return result;
  }
  return {
    somaUm: somaUm,
    menosUm: menosUm,
    somaDois: somaDois,
  };
}

let calculadora = moduloMatematico();

console.log(calculadora.somaUm());
console.log(calculadora.menosUm());
console.log(calculadora.somaUm());
console.log(calculadora.somaUm());
console.log(calculadora.somaDois());
