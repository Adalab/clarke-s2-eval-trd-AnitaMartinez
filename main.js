'use strict';

/*

// Número aleatorio

function getRandomInt(min, max) {
    return Math.ceil(Math.random() * (max - min)) + min;
}

var numberRandom = getRandomInt(1,100);

*/

var numberRandom = 50;  // Borrar
console.log(numberRandom); // Borrar

var numberUserAsString = '50'; // Vendría por el input
var numberUser = parseInt(numberUserAsString);

// Comparar el número del usuario y el número aleotorio y lanzar mensajes

function messagesGame(selector, condition1, condition2, messageWin, messageHigh, messageLow){
  var messageToUser = document.querySelector(selector);
  if (condition1 === condition2) {
    messageToUser.innerHTML = (messageWin);
  } else if (numberUser > numberRandom) {
    messageToUser.innerHTML = messageHigh;
  } else {
    messageToUser.innerHTML = messageLow;
  }
};

messagesGame('#message-to-user', numberUser, numberRandom,'¡Acertaste!', 'Demasiado alto', 'Demasiado bajo');

// Cuando el jugador acierte el número, aparece la caja de introducir nombre y el botón

function removeClass(selector, condition1, condition2, nameClass) {
  var elementSelector = document.querySelector(selector);
  if (condition1 === condition2) {
    elementSelector.classList.remove(nameClass);
  }
}

removeClass('#container-input-name', numberUser, numberRandom,'display-none');

// Actualizar el contador

var tryButton = document.querySelector("#try-buttom");
var acumulador = 0;
var attemps = document.querySelector('.attempts');

tryButton.addEventListener("click",function(){
  acumulador = acumulador + 1;
  console.log(acumulador);
  attemps.innerHTML = (acumulador);
});


// Almacenar el nombre del jugador y el número de intentos en una estructura de datos
//Provisional

var nameUser = 'Ana';
var attemptsAsString = '1';
var attempts1 = parseInt(attemptsAsString);


var historic = {
  nameUser: nameUser,
  attempts: attempts1
};

console.log(historic);


// Una vez guardado en el histórico, automáticamente la sección de histórico se repinta para mostrar los nuevos datos

if (historic.attempts > 0) {
  var listHistoric = document.querySelector('#historic');
  listHistoric.innerHTML = listHistoric.innerHTML + '<li>' + historic.nameUser + ' - ' + historic.attempts + ' intento/s';
}
