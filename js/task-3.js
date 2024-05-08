'use strict'

let nameOut = document.querySelector('#name-output');

const input = document.querySelector('#name-input');

input.addEventListener('input', showName);

function showName(evt) {
    evt.preventDefault();
    nameOut.textContent = input.value.trim() || 'Anonymous';
}