// Valida o primeiro nome ao digitar no input e verifica se todos os campos foram preenchidos
const inputFirstName = document.getElementById("first-name");
inputFirstName.addEventListener("input", () => {
  firstNameValidation();
  checkFields();
});

// Valida o último nome ao digitar no input e verifica se todos os campos foram preenchidos
const inputLastName = document.getElementById("last-name");
inputLastName.addEventListener("input", () => {
  lastNameValidation();
  checkFields();
});

// Valida email conforme digita e verifica se todos os campos foram preenchidos
const inputEmail = document.getElementById("email");
inputEmail.addEventListener("input", () => {
  emailValidation();
  checkFields();
});

// Valida senha conforme digita e verifica se todos os campos foram preenchidos
const inputPassword = document.getElementById("password");
inputPassword.addEventListener("input", () => {
  passwordValidation();
  checkFields();
});

// Valida telefone enquanto digita e verifica se todos os campos foram preenchidos
const inputPhone = document.getElementById("phone");
inputPhone.addEventListener("input", () => {
  phoneValidation();
  checkFields();
});

// Valida bio enquanto digita e verifica se todos os campos foram preenchidos
const bioPhone = document.getElementById("bio");
bioPhone.addEventListener("input", () => {
  bioValidation();
  checkFields();
});

// Função que verifica se todos os campos foram preenchidos
const button = document.getElementById("button");
function checkFields() {
  if (
    inputFirstName.value !== "" &&
    inputLastName.value !== "" &&
    inputEmail.value !== "" &&
    inputPassword.value !== "" &&
    inputPhone.value !== "" &&
    bioPhone.value !== ""
  ) {
    button.style.backgroundColor = "green";
    button.disabled = false;
  } else {
    button.style.backgroundColor = "rgb(60, 60, 60)";
    button.disabled = true;
  }
}

// Função que valida Primeiro Nome
function firstNameValidation() {
  const input = document.getElementById("first-name");
  const errorMessage = document.getElementById("first-name-error");

  const pattern = /^[A-Za-z]{3,18}$/;

  if (pattern.test(input.value)) {
    input.style.borderColor = "green";
    errorMessage.innerHTML = "";
    return true;
  } else {
    input.style.borderColor = "red";
    errorMessage.textContent =
      "First name must be alphanumeric and contain 3 - 16 characteres";
    return;
  }
}

// Função que valida Último Nome
function lastNameValidation() {
  const input = document.getElementById("last-name");
  const errorMessage = document.getElementById("last-name-error");

  const pattern = /^[A-Za-z]{3,18}$/;

  if (pattern.test(input.value)) {
    input.style.borderColor = "green";
    errorMessage.innerHTML = "";
    return true;
  } else {
    input.style.borderColor = "red";
    errorMessage.textContent =
      "Last name must be alphanumeric and contain 3 - 16 characteres";
    return;
  }
}

// Função que valida e-mail
function emailValidation() {
  const input = document.getElementById("email");
  const errorMessage = document.getElementById("email-error");

  const pattern = /\S+@\S+\.\S+/;

  if (pattern.test(input.value)) {
    input.style.borderColor = "green";
    errorMessage.innerHTML = "";
    return true;
  } else {
    input.style.borderColor = "red";
    errorMessage.textContent =
      "Email must be a valid address, e.g. example@example.com";
    return;
  }
}

// Função que valida senha
function passwordValidation() {
  const input = document.getElementById("password");
  const errorMessage = document.getElementById("password-error");

  const pattern = /^[A-Za-z@_-]{6,20}$/;

  if (pattern.test(input.value)) {
    input.style.borderColor = "green";
    errorMessage.innerHTML = "";
    return true;
  } else {
    input.style.borderColor = "red";
    errorMessage.textContent =
      "Password must be alphanumeric (@, _ and - are also allowed) and between 6 - 20 characteres";
    return;
  }
}

// Função que valida telefone
function phoneValidation() {
  const input = document.getElementById("phone");
  const errorMessage = document.getElementById("phone-error");

  const pattern = /^\d{3}-\d{3}-\d{4}$/;

  if (pattern.test(input.value)) {
    input.style.borderColor = "green";
    errorMessage.innerHTML = "";
    return true;
  } else {
    input.style.borderColor = "red";
    errorMessage.textContent =
      "A valid telephone number (11 digits and 333-333-3334)";
    return;
  }
}

// Função que valida bio
function bioValidation() {
  const input = document.getElementById("bio");
  const errorMessage = document.getElementById("bio-error");

  const pattern = /^[a-z_-]{8,50}$/;

  if (pattern.test(input.value)) {
    input.style.borderColor = "green";
    errorMessage.innerHTML = "";
    return true;
  } else {
    input.style.borderColor = "red";
    errorMessage.textContent =
      "Bio must contain only lowercase letters, underscores, hyphen and be 8 - 50 characters";
    return;
  }
}
