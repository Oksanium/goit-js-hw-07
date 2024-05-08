'use strict'

const colorName = document.querySelector('.color');

const btn = document.querySelector('.change-color');

btn.addEventListener('click', setBGcolor);

function setBGcolor(evt) {
  const colorCode = getRandomHexColor();
  document.querySelector('body').style.backgroundColor = colorCode;
  colorName.textContent = colorCode;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
