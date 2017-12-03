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


function saveAttemps() {
  var attemps = document.querySelector('.attempts');
  var tryButton = document.querySelector("#try-buttom");
  var acumulador = 0;

  tryButton.addEventListener("click",function(){
    acumulador = acumulador + 1;
    attemps.innerHTML = (acumulador);

    //Guardar el número de intentos en la propiedad de un objeto

      var acumuladorAttemps = parseInt(acumulador);

      var historic = {
        nameUser: 'Ana',
        attempts: acumuladorAttemps
      };
      console.log(historic);

      // Una vez guardado en el histórico, automáticamente la sección de histórico se repinta para mostrar los nuevos datos

      if (historic.attempts > 0) {   //Aquí tendría que hacer un for
        var listHistoric = document.querySelector('#historic');
        listHistoric.innerHTML = listHistoric.innerHTML + '<li>' + historic.nameUser + ' - ' + historic.attempts + ' intento/s';
      }

  });
};

var contenidodelobjetoHistorico = saveAttemps();
