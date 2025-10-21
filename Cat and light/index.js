function switchOff() {
  document.getElementById("bulbImage").src =
    "./bulb-go-off-img.png";
  document.getElementById("catImage").src =
    "./cat-eyes-img.png";
  document.getElementById("switchStatus").textContent = "Switched Off";
  document.getElementById("onSwitch").style.backgroundColor = "#22c55e";
  document.getElementById("offSwitch").style.backgroundColor = "#cbd2d9";
}

function switchOn() {
  document.getElementById("bulbImage").src =
    "./bulb-go-on-img.png";
  document.getElementById("catImage").src =
    "./cat-img.png";
  document.getElementById("switchStatus").textContent = "Switched On";
  document.getElementById("offSwitch").style.backgroundColor = "#e12d39";
  document.getElementById("onSwitch").style.backgroundColor = "#cbd2d9";
}