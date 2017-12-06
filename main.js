'use strict';

// Número aleatorio

function getRandomInt(min, max) {
return Math.ceil(Math.random() * (max - min)) + min;
}
var numberRandom = getRandomInt(1,100);
console.log(numberRandom);

// var numberRandom = 50;  -- Borrar

//Cuando el usuario pulsa el botón de Prueba...
  // Guardo el número que introduce
  // Comparo el número del usuario y el número aleatorio y lanzo mensajes

var tryButton = document.querySelector("#try-buttom");
tryButton.addEventListener('click', ValueInput);

function ValueInput() {
  var inputUserNumber = document.querySelector("#inputUserNumber");
  var valueinputUserNumberAsString = inputUserNumber.value;
  var valueinputUserNumber = parseInt(valueinputUserNumberAsString); //Guardo el value del input
  messagesGame('#message-to-user', valueinputUserNumber, numberRandom,'¡Acertaste!', 'Demasiado alto', 'Demasiado bajo'); //hago comparaciones y pinto mensajes
}

function messagesGame(selector, condition1, condition2, messageWin, messageHigh, messageLow){
  var messageToUser = document.querySelector(selector);
  if (condition1 === condition2) {
    messageToUser.innerHTML = (messageWin);
  } else if (condition1 > condition2) {
    messageToUser.innerHTML = messageHigh;
  } else {
    messageToUser.innerHTML = messageLow;
  }
};


/*

// Cuando el jugador acierte el número, aparece la caja de introducir nombre y el botón

function removeClass(selector, condition1, condition2, nameClass) {
  var elementSelector = document.querySelector(selector);
  if (condition1 === condition2) {
    elementSelector.classList.remove(nameClass);
  }
}

removeClass('#container-input-name', numberUser, numberRandom,'display-none');

*/

// Actualizar el contador

/*

function saveAttemps() {
  var attemps = document.querySelector('.attempts');
  var acumulador = 0;

  tryButton.addEventListener("click",function(){

    var value = document.querySelector("#inputUserNumber").value;  // Aquí recojo el valor del input numberUser
    console.log(value);

    acumulador = acumulador + 1;
    attemps.innerHTML = (acumulador);

    //Guardar el número de intentos en la propiedad de un objeto)

    var acumuladorAttemps = parseInt(acumulador);

    var historic = {
      nameUser: 'Ana',
      attempts: acumuladorAttemps
    };

    // Que el histórico se pinte con el número de intentos cuando el usuario acierte

    if (numberUser === numberRandom) { //Esto NO iría así, si no cuando el usuario pulse el Guardar.
      var acumuladorDos = 0;
      var listHistoric = document.querySelector('#historic');
      listHistoric.innerHTML = '<li>' + historic.nameUser + ' - ' + acumuladorAttemps + ' intentos' + '</li>';
    }

  });
};

var contenidodelobjetoHistorico = saveAttemps();

*/
