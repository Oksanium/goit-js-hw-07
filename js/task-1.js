'use strict'

const categories = document.querySelectorAll('.item');

console.log(`Number of  categories: ${categories.length}`);

// console.log(categories);
function getDetails(elem) {
    const category = elem.querySelector('h2').textContent;
    console.log(`Category: ${category}`);

    const elemAmount = elem.querySelectorAll('li').length;
    console.log(`Elements: ${elemAmount}`);
}


categories.forEach(getDetails);