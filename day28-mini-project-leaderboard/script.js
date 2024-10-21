// VERIFICA SE OS CAMPOS FORAM PREENCHIDOS
const userInputs = document.getElementsByTagName("input");
const header = document.getElementById("header");
const errorMessage = document.createElement("p");

for (let input of userInputs) {
  input.addEventListener("blur", () => {
    for (let i = 0; i < userInputs.length; i++) {
      if (userInputs[i].value === "") {
        errorMessage.className = "errorMessage";
        errorMessage.textContent = "All fields are required";
        header.appendChild(errorMessage);
      } else {
        errorMessage.innerHTML = "";
        errorMessage.style.margin = "0";
      }
    }
  });
}

// AO CLICAR NO BOTÃO VERIFICA SE TODOS OS INPUTS FORAM PREENCHIDOS (NO CENÁRIO EM QUE O USUÁRIO NÃO CLICA EM NENHUM INPUT E VAI DIRETO CLICAR NO BOTÃO)
const addPlayer = document.getElementById("add-player");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const country = document.getElementById("country");
const score = document.getElementById("score");
const defaultContent = document.getElementById("content");

addPlayer.addEventListener("click", () => {
  let allFilled = true;

  for (let input of userInputs) {
    if (input.value === "") {
      allFilled = false;
      errorMessage.className = "errorMessage";
      errorMessage.textContent = "All fields are required";
      header.appendChild(errorMessage);
      break;
    }
  }
  if (allFilled) {
    errorMessage.innerHTML = "";
    generateCard();
  }
});

// ADICIONANDO CARD AO CLICAR NO BOTÃO
function generateCard() {
  const card = document.createElement("div");

  // Limpa mensagem default
  defaultContent.innerHTML = "";
  defaultContent.style.margin = "0";

  // Adiciona card com as informações preenchidas pelo usuário
  card.className = "card";
  document.body.appendChild(card);

  // Div para nome e hora/data
  const nameAndDate = document.createElement("div");
  card.appendChild(nameAndDate);

  // Nome
  const fullName = document.createElement("p");
  fullName.textContent = (firstName.value + " " + lastName.value).toUpperCase();
  nameAndDate.appendChild(fullName);

  // Data e hora
  const dateAndTime = document.createElement("p");
  const newDate = new Date();
  const currentDateTime = newDate.toLocaleString();
  dateAndTime.textContent = currentDateTime;
  dateAndTime.className = "dateAndTime";
  nameAndDate.appendChild(dateAndTime);

  // País
  const countryName = document.createElement("p");
  countryName.textContent = country.value.toUpperCase();
  card.appendChild(countryName);

  // Score
  const scoreValue = document.createElement("p");
  let currentScore = parseFloat(score.value);
  scoreValue.textContent = currentScore;
  card.appendChild(scoreValue);

  // Botões
  const buttons = document.createElement("div");
  buttons.style.display = "flex";
  buttons.style.justifyContent = "space-between";
  buttons.style.margin = "0 16px";
  card.appendChild(buttons);

  const deleteUser = document.createElement("button");
  deleteUser.className = "deleteButton";
  buttons.appendChild(deleteUser);
  deleteUser.addEventListener("click", () => {
    deleteUserCard(card);
  });

  const increaseScore = document.createElement("button");
  increaseScore.textContent = "+5";
  increaseScore.className = "actionButtons";
  buttons.appendChild(increaseScore);
  increaseScore.addEventListener("click", () => {
    currentScore += 5;
    scoreValue.textContent = currentScore;
  });

  const decreaseScore = document.createElement("button");
  decreaseScore.textContent = "-5";
  decreaseScore.className = "actionButtons";
  buttons.appendChild(decreaseScore);
  decreaseScore.addEventListener("click", () => {
    currentScore -= 5;
    scoreValue.textContent = currentScore;
  });
}

function deleteUserCard(card) {
  card.remove();
}
