const skills = [
  ["🌿", "Educator"],
  ["📓", "Instructor"],
  ["🔥", "Motivator"],
  ["🔥", "Motivation Speaker"],
  ["📖", "Instructor"],
  ["💻", "Programmer"],
];

let skillsContainer = document.getElementById("skills");
let emojis = document.createElement("p");
let skillsItems = document.createElement("p");
skillsItems.className = "animatedText";
skillsContainer.appendChild(emojis);
skillsContainer.appendChild(skillsItems);

skillsContainer.style.display = "flex";
skillsContainer.style.alignItems = "center";
skillsContainer.style.gap = "1%";
skillsContainer.style.paddingLeft = "20px";
emojis.style.fontSize = "20px";
skillsItems.style.fontSize = "20px";

let currentSkillIndex = 0;

function changeText() {
  emojis.textContent = skills[currentSkillIndex][0];
  skillsItems.textContent = skills[currentSkillIndex][1];

  currentSkillIndex = (currentSkillIndex + 1) % skills.length; // Incrementa o índice
}

const techs = [
  ["Node", "green"],
  ["Pandas", "blue"],
  ["Numpy", "darkblue"],
  ["Redux", "purple"],
  ["MongoDB", "green"],
  ["JavaScript", "yellowgreen"],
  ["Python", "darkblue"],
  ["React", "lightblue"],
];

const tech = document.getElementById("techs");
const language = document.createElement("p");
language.className = "languages";
tech.appendChild(language);

let currentColorIndex = 0;

function changeColor() {
  language.textContent = techs[currentColorIndex][0];
  language.style.color = techs[currentColorIndex][1];

  currentColorIndex = (currentColorIndex + 1) % techs.length; // Incrementa o índice
}

// Chama a função
setInterval(changeText, 1700);

setInterval(changeColor, 1000);
