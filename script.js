const color = ["#ffbe76", "#ff7979", "#6ab04c"];
const colorName = ["Spaced Nectirane", "Pink Glamour", "Pure Apple"];
const getDiv = document.getElementsByTagName("div");
const getColor = document.getElementById("color");
getColor.style.display = "flex";
getColor.style.justifyContent = "center";

for (let i = 0; i < getDiv.length; i++) {
  getDiv[i].style.width = "200px";
  getDiv[i].style.height = "200px";
  getDiv[i].style.backgroundColor = color[i];
  getDiv[i].innerHTML += "<h1>" + colorName[i] + "</h1>";
}

let titleName = document.getElementsByTagName("h1");
console.log(titleName);
for (let i = 0; i < titleName.length; i++) {
  titleName[i].style.color = "white";
  titleName[i].style.alignSelf = "auto";
  titleName[i].style.textAlign = "center";
}
