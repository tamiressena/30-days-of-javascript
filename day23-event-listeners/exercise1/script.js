const input = document.querySelector("input");
const p = document.querySelector("p");

const button = document.querySelector("button");

const numbersContainer = document.createElement("div");
numbersContainer.style.display = "flex";
numbersContainer.style.flexWrap = "wrap";
numbersContainer.style.alignItems = "center";
numbersContainer.style.justifyContent = "center";
numbersContainer.style.width = "800px";
numbersContainer.style.margin = "auto";
numbersContainer.style.marginBottom = "100px";
document.body.appendChild(numbersContainer);

// button.addEventListener("click",
function gerarNumeros() {
  let value = input.value.trim();
  let type = parseInt(value);

  if (isNaN(type) || type < 0) {
    p.textContent = "Enter number value on the input field to generate numbers";
    p.style.color = "red";
    p.style.fontSize = "12px";
  } else {
    p.innerHTML = "";
    numbersContainer.innerHTML = "";
    for (let i = 0; i < type; i++) {
      let number = document.createElement("p");
      number.textContent = i;
      number.style.textAlign = "center";
      number.style.width = "100px";
      number.style.height = "40px";
      number.style.margin = "2px";
      number.style.paddingBottom = "2px";
      number.style.fontSize = "40px";
      number.style.color = "white";

      if (i % 2 === 0) {
        number.style.backgroundColor = "#6bbb5a";
      } else if (i % 2 === 1) {
        number.style.backgroundColor = "#fdcf00";
      }

      let divisores = 0;
      for (let x = 1; x <= i; x++) {
        if (i % x == 0) {
          divisores++;
        }
      }
      if (divisores == 2) {
        number.style.backgroundColor = "#512dfa";
      }

      numbersContainer.appendChild(number);
    }
  }
}

button.addEventListener("click", gerarNumeros);
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    gerarNumeros();
  }
});
