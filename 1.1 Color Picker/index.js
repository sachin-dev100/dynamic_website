let backgroundColorElement = document.getElementById("colorPickerContainer");
let colorNameElement = document.getElementById("selectedColorHexCode");

function to_grey() {
  backgroundColorElement.style.backgroundColor = "#e0e0e0";
  colorNameElement.textContent = "#e0e0e0";
}

function to_green() {
  backgroundColorElement.style.backgroundColor = "#6fcf97";
  colorNameElement.textContent = "#6fcf97";
}

function to_blue() {
  backgroundColorElement.style.backgroundColor = "#56ccf2";
  colorNameElement.textContent = "#56ccf2";
}

function to_pink() {
  backgroundColorElement.style.backgroundColor = "#bb6bd9";
  colorNameElement.textContent = "#bb6bd9";
}
