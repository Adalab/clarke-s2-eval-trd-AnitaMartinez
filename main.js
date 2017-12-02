'use strict';


// Número aleatorio
function getRandomInt(min, max) {
    return Math.ceil(Math.random() * (max - min)) + min;
}

console.log(getRandomInt(1,100));
