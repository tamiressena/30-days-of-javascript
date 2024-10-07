const titles = document.querySelectorAll("h1");
titles.forEach((title, i) => {
  title.style.fontSize = "24px"; // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.fontSize = "20px";
  } else {
    title.style.fontSize = "30px";
  }
});
