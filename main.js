'use strict';


// Número aleatorio

/*

function getRandomInt(min, max) {
    return Math.ceil(Math.random() * (max - min)) + min;
}

var numberRandom = getRandomInt(1,100);
console.log(numberRandom); // Borrar

*/

var numberRandom = 50;


// Comparar el número del usuario y el número aleotorio y lanzar mensajes

var numberUserAsString = '50'; // Vendría por el input
var numberUser = parseInt(numberUserAsString);

var messageToUser = document.querySelector('#message-to-user');

if (numberUser === numberRandom) {
  messageToUser.innerHTML = ('¡Acertaste!');
} else if (numberUser > numberRandom) {
  messageToUser.innerHTML = 'Demasiado alto';
} else {
  messageToUser.innerHTML = 'Demasiado bajo';
}

// Actualizar el contador --> Hacerlo con eventos


// cuando el jugador acierte el número, aparece la caja de introducir nombre y el botón

if (numberUser === numberRandom) {
  var containerInputName = document.querySelector('#container-input-name');
  containerInputName.classList.remove('display-none');
}
