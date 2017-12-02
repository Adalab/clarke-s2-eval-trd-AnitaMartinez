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


// Comparar el número del usuario y el número aleotorio y lanzar mensajes ..Y...
// Cuando el jugador acierte el número, aparece la caja de introducir nombre y el botón

var numberUserAsString = '50'; // Vendría por el input
var numberUser = parseInt(numberUserAsString);

var messageToUser = document.querySelector('#message-to-user');

if (numberUser === numberRandom) {
  messageToUser.innerHTML = ('¡Acertaste!');
  // Cuando el jugador acierte el número, aparece la caja de introducir nombre y el botón
  var containerInputName = document.querySelector('#container-input-name');
  containerInputName.classList.remove('display-none');
} else if (numberUser > numberRandom) {
  messageToUser.innerHTML = 'Demasiado alto';
} else {
  messageToUser.innerHTML = 'Demasiado bajo';
}

// Actualizar el contador --> Hacerlo cuando me enseñen eventos

// Almacenar el nombre del jugador y el número de intentos en una estructura de datos
//Provisional

var nameUser = 'Ana';
var attemptsAsString = '1';
var attempts = parseInt(attemptsAsString);


var historic = {
  nameUser: nameUser,
  attempts: attempts
};

console.log(historic);


// Una vez guardado en el histórico, automáticamente la sección de histórico se repinta para mostrar los nuevos datos

if (historic.attempts > 0) {
  var listHistoric = document.querySelector('#historic');
  listHistoric.innerHTML = listHistoric.innerHTML + '<li>' + historic.nameUser + ' - ' + historic.attempts + ' intento/s';
}
