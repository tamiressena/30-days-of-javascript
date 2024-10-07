// LEVEL3
// EX01
/* Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

The year color is changing every 1 second
The date and time background color is changing every on seconds
Completed challenge has background green
Ongoing challenge has background yellow
Coming challenges have background red */
const wrapper = document.querySelectorAll("div");
wrapper[0].style.display = "flex";
wrapper[0].style.flexDirection = "column";
wrapper[0].style.justifyContent = "center";
wrapper[0].style.alignItems = "center";
wrapper[0].style.fontFamily = "sans-serif";

const h1 = document.querySelector("h1");
h1.style.fontSize = "24px";
h1.style.fontWeight = "regular";

const h2 = document.querySelector("h2");
h2.style.textDecoration = "underline";
h2.style.display = "flex";
h2.style.justifyContent = "center";
h2.style.textAlign = "center";
h2.style.fontSize = "16px";
h2.style.fontWeight = "regular";

const span = document.querySelector("span");
span.style.fontSize = "64px";
span.style.color = "blue";
function changeYearColor() {
  span.style.color = span.style.color == "blue" ? "yellow" : "blue";
}
window.setInterval(changeYearColor, 1000);

const completed = document.getElementsByClassName("completed");
completed[0].style.backgroundColor = "#90EE90";
completed[0].style.margin = "4px";
completed[0].style.width = "70vh";
completed[0].style.padding = "20px";
completed[0].style.listStyleType = "none";

const ongoing = document.getElementsByClassName("ongoing");
ongoing[0].style.backgroundColor = "yellow";
ongoing[0].style.margin = "4px";
ongoing[0].style.width = "70vh";
ongoing[0].style.padding = "20px";
ongoing[0].style.listStyleType = "none";

const coming = document.getElementsByClassName("coming");
coming[0].style.backgroundColor = "#FF7171";
coming[0].style.margin = "4px";
coming[0].style.padding = "20px";
coming[0].style.width = "70vh";
coming[0].style.listStyleType = "none";

coming[1].style.backgroundColor = "#FF7171";
coming[1].style.margin = "4px";
coming[1].style.padding = "20px";
coming[1].style.width = "70vh";
coming[1].style.listStyleType = "none";

coming[2].style.backgroundColor = "#FF7171";
coming[2].style.margin = "4px";
coming[2].style.padding = "20px";
coming[2].style.width = "70vh";
coming[2].style.listStyleType = "none";

coming[3].style.backgroundColor = "#FF7171";
coming[3].style.margin = "4px";
coming[3].style.padding = "20px";
coming[3].style.width = "70vh";
coming[3].style.listStyleType = "none";

coming[4].style.backgroundColor = "#FF7171";
coming[4].style.margin = "4px";
coming[4].style.padding = "20px";
coming[4].style.width = "70vh";
coming[4].style.listStyleType = "none";

// create a function to update the date and time
function updateDateTime() {
  //create a new 'Date' object
  const now = new Date();
  // get the current date and time as a string
  const currentDateTime = now.toLocaleString();
  // update the 'textContent' property of the span
  document.querySelector("#datetime").textContent = currentDateTime;
}

// cores do background
const colors = [
  "#ff5733",
  "#33ff57",
  "#3357ff",
  "#ff33a8",
  "#f3ff33",
  "#ff8333",
];

let currentColorIndex = 0;

function changeDateColor() {
  const currentDateTime = document.getElementById("datetime");
  currentDateTime.style.padding = "8px 16px";
  currentDateTime.style.backgroundColor = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length; // muda as cores em loop
}

// call the 'updateDateTime' function every second
window.setInterval(function () {
  updateDateTime();
  changeDateColor();
}, 1000);
