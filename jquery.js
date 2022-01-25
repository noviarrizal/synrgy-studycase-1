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

$(document).ready(function () {
  $(".box").each(function (i) {
    $(this).addClass("box-style");
    $(this).css("background-color", data[i].color);
    $(this).html(data[i].title.toUpperCase());
    const handleCLick = function () {
      $("#color-1").css("background-color", data[i].color);
      $("#color-1").html(data[i].title.toUpperCase());
    };
    $(this).click(handleCLick);

    if (i === 0) {
      $("#box1").addClass("box-style-2");
    }
  });
});
