/* Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
Even numbers background is green
Odd numbers background is yellow
Prime numbers background is red */

let title = document.createElement("h1");
title.textContent = "Number Generator";
title.style.textAlign = "center";
title.style.fontFamily = "sans-serif";
title.style.fontWeight = "regular";
title.style.marginTop = "50px";
document.body.appendChild(title);

let subtitle = document.createElement("h2");
subtitle.textContent = "30DaysOfJavaScript: DOM Day 2";
subtitle.style.textAlign = "center";
subtitle.style.fontFamily = "sans-serif";
subtitle.style.textDecoration = "underline";
document.body.appendChild(subtitle);

let author = document.createElement("h3");
author.textContent = "Author: Asabeneh Yetayeh";
author.style.textAlign = "center";
author.style.fontFamily = "sans-serif";
author.style.textDecoration = "underline";
document.body.appendChild(author);

// for (i = 0; i < 102; i++) {
//   let div = document.createElement("p");
//   div.textContent = i;
//   document.body.appendChild(div);
//   div.style.display = "flex";
//   div.style.width = "300px";
// }

let div = document.createElement("div");
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.flexWrap = "wrap";
div.style.fontSize = "40px";
div.style.fontFamily = "sans-serif";
div.style.marginLeft = "270px";
div.style.marginRight = "270px";
div.style.marginTop = "50px";
div.style.marginBottom = "100px";

let number;

for (let i = 0; i < 102; i++) {
  number = document.createElement("p");
  number.textContent = i;
  number.style.width = "100px";
  number.style.height = "50px";
  number.style.margin = "2px";
  number.style.textAlign = "center";
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

  div.appendChild(number);
}

document.body.appendChild(div);
