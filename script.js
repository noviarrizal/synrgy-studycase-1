const data = [
  { color: "#ffff", title: "White" },
  { color: "#1abc9c", title: "Turquiose" },
  { color: "#2ecc71", title: "Emerald" },
  { color: "#27ae60", title: "Nephritis" },
  { color: "#2980b9", title: "Beliza Hole" },
  { color: "#8e44ad", title: "Wisteria" },
  { color: "#2c3e50", title: "Midnight Blue" },
  { color: "#f1c40f", title: "Sun Flower" },
  { color: "#e67e22", title: "Carrot" },
  { color: "#e74c3c", title: "Alizarian" },
];

let box = document.getElementsByClassName("box");
for (let i = 0; i < box.length; i++) {
  box[i].classList.add("box-style");
  box[i].innerHTML = data[i].title.toUpperCase();
  box[i].style.background = data[i].color;
  box[i].addEventListener("click", function () {
    box[0].style.background = data[i].color;
    box[0].innerHTML = data[i].title.toUpperCase();
  });
  if (i === 0) {
    box[i].classList.add("box-style-2");
  }
}
