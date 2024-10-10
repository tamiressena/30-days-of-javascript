let container = document.createElement("div");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignItems = "center";
container.style.marginTop = "200px";
document.body.appendChild(container);

let text = document.createElement("p");
text.textContent = "Press any keyboard key";
text.style.width = "600px";
text.style.height = "100px";
text.style.margin = "25px";
text.style.fontSize = "50px";
text.style.fontFamily = "sans-serif";
text.style.textAlign = "center";
text.style.alignContent = "center";
text.style.boxShadow = "2px 2px 5px 0px rgba(199,199,199,1)";
container.appendChild(text);

let keycode = document.createElement("p");

document.body.addEventListener("keypress", (e) => {
  let key = e.key.toUpperCase();

  text.textContent = "You pressed " + key;
  keycode.textContent = e.keyCode;
  keycode.style.width = "100px";
  keycode.style.height = "100px";
  keycode.style.margin = "25";
  keycode.style.fontSize = "50px";
  keycode.style.fontWeight = "500";
  keycode.style.fontFamily = "sans-serif";
  keycode.style.color = "#6bbb5a";
  keycode.style.textAlign = "center";
  keycode.style.alignContent = "center";
  keycode.style.boxShadow = "2px 2px 5px 0px rgba(199,199,199,1)";
  container.appendChild(text);
  container.appendChild(keycode);
});
