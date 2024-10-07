// LEVEL1
// EX01
// Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
const paragraph = document.querySelector("p");
console.log(paragraph);

// EX02
// Get each of the the paragraph using document.querySelector('#id') and by their id
const paragraph1 = document.querySelector("#first-paragraph");
console.log(paragraph1);

const paragraph2 = document.querySelector("#second-paragraph");
console.log(paragraph2);

const paragraph3 = document.querySelector("#third-paragraph");
console.log(paragraph3);

// EX03
// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const p = document.querySelectorAll(".paragraph");
console.log(p);

// EX04
// Loop through the nodeList and get the text content of each paragraph
for (let i = 0; i < p.length; i++) {
  console.log(p[i]);
}

// EX05
// Set a text content to paragraph the fourth paragraph,Fourth Paragraph
const p1 = document.querySelectorAll("p");
p1[3].setAttribute("class", "paragraph");
p1[3].setAttribute("id", "fourth-paragraph");
p1[3].textContent = "Fourth Paragraph";
console.log(p1[3]);

// EX06
// Set id and class attribute for all the paragraphs using different attribute setting methods
p1[0].className = "paragraph";
p1[1].setAttribute("class", "paragraph");
p1[2].classList.add("paragraph");
p1[3].className = "paragraph";

console.log(p1[0]);
console.log(p1[1]);
console.log(p1[2]);
console.log(p1[3]);

// LEVEL2
// EX01
// Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
// p1[0].style.color = "blue";
// p1[1].style.fontFamily = "sans-serif";
// p1[2].style.fontSize = "40px";
// p1[3].style.backgroundColor = "red";

// EX02
// Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
// const parag = document.querySelectorAll("p");

// parag.forEach((item, i) => {
//   if (i % 2 !== 0) {
//     item.style.color = "green";
//   } else {
//     item.style.color = "red";
//   }
// });
