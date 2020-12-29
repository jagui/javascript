import two from './export.js'

function gimme_two() {
    return `two is ${two()}`;
}

document.body.innerHTML = gimme_two();