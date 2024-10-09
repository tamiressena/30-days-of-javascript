// Check the requirement of this project from both images(jpg and gif). All the data and CSS has been implemented using JavaScript only. The data is found on starter folder project_3. The drop down button has been created using details HTML element.
// Link do exercício: https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/22_Day_Manipulating_DOM_object/22_day_manipulating_DOM_object.md#exercises-level-3

import { asabenehChallenges2020 } from "./challenge-info.js";

// TÍTULO
const title = document.createElement("div");
title.style.display = "flex";
title.style.justifyContent = "center";
title.style.alignItems = "flex-end";
title.style.gap = "16px";
title.style.margin = "50px 0px";
document.body.appendChild(title);

const titleText = document.createElement("h1");
titleText.textContent = asabenehChallenges2020.challengeTitle;
titleText.style.fontFamily = "sans-serif";
titleText.style.fontSize = "24px";
titleText.style.margin = "0px 0px 10px 0px";
title.appendChild(titleText);

const titleYear = document.createElement("h2");
titleYear.textContent = asabenehChallenges2020.challengeYear;
titleYear.style.fontFamily = "sans-serif";
titleYear.style.fontSize = "80px";
titleYear.style.margin = "0px";
title.appendChild(titleYear);

function changeYearColor() {
  titleYear.style.color = titleYear.style.color == "blue" ? "yellow" : "blue";
}
window.setInterval(changeYearColor, 1000);

// SUBTÍTULO
const subtitle = document.createElement("h3");
subtitle.textContent = asabenehChallenges2020.challengeSubtitle;
subtitle.style.display = "flex";
subtitle.style.justifyContent = "center";
subtitle.style.alignItems = "flex-end";
subtitle.style.fontFamily = "sans-serif";
subtitle.style.margin = "0px 50px 30spx 50px";
document.body.appendChild(subtitle);

// DATA E HORA
const dateTimeDiv = document.createElement("div");
dateTimeDiv.className = "datetime";
dateTimeDiv.style.display = "flex";
dateTimeDiv.style.justifyContent = "center";
dateTimeDiv.style.width = "190px";
dateTimeDiv.style.margin = "auto";
document.body.appendChild(dateTimeDiv);

const dateTime = document.createElement("div");
dateTime.className = "datetime";
dateTimeDiv.appendChild(dateTime);

function updateDateTime() {
  //create a new 'Date' object
  const now = new Date();
  // get the current date and time as a string
  const currentDateTime = now.toLocaleString();
  // update the 'textContent' property of the span
  dateTime.textContent = currentDateTime;
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
  dateTime.style.display = "flex";
  dateTime.style.padding = "8px 16px";
  dateTime.style.width = "200px";
  dateTime.style.fontFamily = "sans-serif";
  dateTime.style.backgroundColor = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length; // muda as cores em loop
}

// call the 'updateDateTime' function every second
window.setInterval(function () {
  updateDateTime();
  changeDateColor();
}, 1000);

// CARDS
const cards = document.createElement("div");
cards.style.display = "flex";
cards.style.flexDirection = "column";
cards.style.alignItems = "center";
cards.style.margin = "50px";

document.body.appendChild(cards);

for (let count = 0; count < asabenehChallenges2020.challenges.length; count++) {
  const card = document.createElement("div");
  card.style.display = "flex";
  card.style.width = "800px";
  card.style.justifyContent = "space-between";
  card.style.alignItems = "center";
  card.style.padding = "4px 24px";
  card.style.fontFamily = "sans-serif";
  card.style.margin = "2px";

  if (asabenehChallenges2020.challenges[count].status == "Done") {
    card.style.backgroundColor = "#90EE90";
  } else if (asabenehChallenges2020.challenges[count].status == "Ongoing") {
    card.style.backgroundColor = "yellow";
  } else if (asabenehChallenges2020.challenges[count].status == "Coming") {
    card.style.backgroundColor = "#FF7171";
  }
  cards.appendChild(card);

  const courseTitle = document.createElement("p");
  courseTitle.textContent = asabenehChallenges2020.challenges[count].name;
  card.appendChild(courseTitle);

  const courseDetails = document.createElement("details");
  card.appendChild(courseDetails);

  const detailsTitle = document.createElement("summary");
  detailsTitle.textContent = asabenehChallenges2020.challenges[count].topics[0];
  detailsTitle.style.margin = "22px 24px";
  courseDetails.appendChild(detailsTitle);

  const cardTopics = document.createElement("ul");

  for (
    let i = 0;
    i < asabenehChallenges2020.challenges[count].topics.length;
    i++
  ) {
    const topicItem = document.createElement("li");
    topicItem.textContent = asabenehChallenges2020.challenges[count].topics[i];
    cardTopics.appendChild(topicItem);
  }

  courseDetails.appendChild(cardTopics);

  const courseStyle = document.createElement("p");
  courseStyle.textContent = asabenehChallenges2020.challenges[count].status;
  card.appendChild(courseStyle);
}

// SOBRE O AUTOR
// nome
const authorFullName = document.createElement("p");
let names =
  asabenehChallenges2020.author.firstName +
  " " +
  asabenehChallenges2020.author.lastName;
authorFullName.textContent = names;
authorFullName.style.display = "flex";
authorFullName.style.justifyContent = "center";
authorFullName.style.fontFamily = "sans-serif";
authorFullName.style.fontSize = "24px";
document.body.appendChild(authorFullName);

// resumo
const resume = document.createElement("p");
resume.textContent = asabenehChallenges2020.author.bio;
resume.style.display = "flex";
resume.style.width = "800px";
resume.style.margin = "auto";
resume.style.textAlign = "center";
resume.style.fontFamily = "sans-serif";
resume.style.fontSize = "16px";
document.body.appendChild(resume);

// titulos, skills e qualificações
const careerInfo = document.createElement("div");
careerInfo.style.display = "flex";
careerInfo.style.justifyContent = "center";
careerInfo.style.margin = "25px 100px";
document.body.appendChild(careerInfo);

let titles = ["Title", "Skills", "Qualifications"];
for (let i = 0; i < 3; i++) {
  // cria 3 colunas
  const columns = document.createElement("div");
  columns.style.width = "250px";
  careerInfo.appendChild(columns);

  // nomeia as colunas
  const columnTitle = document.createElement("p");
  columnTitle.textContent = titles[i];
  columnTitle.style.fontFamily = "sans-serif";
  columnTitle.style.fontWeight = "600";
  columns.appendChild(columnTitle);

  // cria as listas e insere os tópicos
  if (i == 0) {
    const columnList = document.createElement("ul");
    columns.appendChild(columnList);

    for (let c = 0; c < asabenehChallenges2020.author.titles.length; c++) {
      const listTopics = document.createElement("li");
      listTopics.textContent = asabenehChallenges2020.author.titles[c];
      listTopics.style.fontFamily = "sans-serif";
      listTopics.style.fontSize = "14px";
      listTopics.style.lineHeight = "1.5";
      columnList.appendChild(listTopics);
    }
  } else if (i == 1) {
    const columnList = document.createElement("ul");
    columns.appendChild(columnList);

    for (let c = 0; c < asabenehChallenges2020.author.skills.length; c++) {
      const listTopics = document.createElement("li");
      listTopics.textContent = asabenehChallenges2020.author.skills[c];
      listTopics.style.fontFamily = "sans-serif";
      listTopics.style.fontSize = "14px";
      listTopics.style.lineHeight = "1.5";
      columnList.appendChild(listTopics);
    }
  } else if (i == 2) {
    const columnList = document.createElement("ul");
    columns.appendChild(columnList);

    for (
      let c = 0;
      c < asabenehChallenges2020.author.qualifications.length;
      c++
    ) {
      const listTopics = document.createElement("li");
      listTopics.textContent = asabenehChallenges2020.author.qualifications[c];
      listTopics.style.fontFamily = "sans-serif";
      listTopics.style.fontSize = "14px";
      listTopics.style.lineHeight = "1.5";
      columnList.appendChild(listTopics);
    }
  }
}

// keywords
const keywordsDiv = document.createElement("div");
keywordsDiv.style.display = "flex";
keywordsDiv.style.flexDirection = "column";
keywordsDiv.style.justifyContent = "center";
keywordsDiv.style.padding = "25px 250px";
document.body.appendChild(keywordsDiv);

const keywordsTitle = document.createElement("p");
keywordsTitle.textContent = "Keywords";
keywordsTitle.style.fontFamily = "sans-serif";
keywordsTitle.style.fontWeight = "600";
keywordsDiv.appendChild(keywordsTitle);

// pílulas
const keywordsContainer = document.createElement("div");
keywordsContainer.style.display = "flex";
keywordsContainer.style.gap = "12px";
keywordsContainer.style.flexWrap = "wrap";
keywordsDiv.appendChild(keywordsContainer);

for (let k = 0; k < asabenehChallenges2020.keywords.length; k++) {
  const keywords = document.createElement("p");
  keywords.textContent = "#" + asabenehChallenges2020.keywords[k];
  keywords.style.backgroundColor = "lightblue";
  keywords.style.padding = "4px 8px";
  keywords.style.borderRadius = "20px";
  keywords.style.margin = "0px";
  keywordsContainer.appendChild(keywords);
}
