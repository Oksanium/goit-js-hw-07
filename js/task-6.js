'use strict'

const creatorBtn = document.querySelector('button[data-create]');
const destructorBtn = document.querySelector('button[data-destroy]');

creatorBtn.addEventListener('click', validateNumber);
destructorBtn.addEventListener('click', destroyBoxes);

const boxesHouse = document.querySelector('#boxes');

function validateNumber() {
  const num = Number(document.querySelector('input').value);
  if (num >= 1 && num <= 100) {
    createBoxes(num);
  }
}

function createBoxes(amount) {
  let boxesArr = [];
  let side = 20;

  for (let i = 0; i < amount; i++) {
    side += 10;
    const newBox = document.createElement('div');
    newBox.style.width = `${side}px`;
    newBox.style.height = `${side}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    boxesArr.push(newBox);
  }
  boxesHouse.append(...boxesArr);
}

function destroyBoxes() {
  boxesHouse.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
