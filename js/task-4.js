'use strict'

const form = document.querySelector('.login-form');

form.addEventListener('submit', send);

function send(evt) {
    evt.preventDefault();

    let submitedData = {};

    submitedData.email = form.elements.email.value.trim();
    submitedData.password = form.elements.password.value.trim();
    
    if (submitedData.email === '' || submitedData.password === '') {
        alert('All form fields must be filled in');
    } else {
        console.log(submitedData);
        form.reset();
    }
}