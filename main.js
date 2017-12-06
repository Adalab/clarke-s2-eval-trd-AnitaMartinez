'use strict';

// Número aleatorio

function getRandomInt(min, max) {
return Math.ceil(Math.random() * (max - min)) + min;
}
var numberRandom = getRandomInt(1,100);
console.log(numberRandom);


//Cuando el usuario pulsa el botón de Prueba...
  // Guardo el número que introduce
  // Comparo el número del usuario y el número aleatorio y lanzo mensajes
  // Actualizo el contador
  //Si acierta, muestro el div con el botón de escribe tu nombre

var tryButton = document.querySelector("#try-buttom");
tryButton.addEventListener('click', ValueInput);

function ValueInput() {
  var inputUserNumber = document.querySelector("#inputUserNumber");
  var valueinputUserNumberAsString = inputUserNumber.value;
  var valueinputUserNumber = parseInt(valueinputUserNumberAsString); //Guardo el value del input
  messagesGame('#message-to-user', valueinputUserNumber, numberRandom,'¡Acertaste!', 'Demasiado alto', 'Demasiado bajo'); //hago comparaciones y pinto mensajes
  addAndPaint(); //actualizo el contador
  removeClass('#container-input-name', valueinputUserNumber, numberRandom,'display-none'); //Si acierta, muesto la caja para guardar el nombre
};

//Función para comparaciones entre aleatorio y el número del usuario y pinto mensaje
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

//Función para actualizar el contador
var attemps = document.querySelector('.attempts');
var acumulador = 0;

function addAndPaint() {
  acumulador = acumulador + 1;
  attemps.innerHTML = acumulador;

}

//Función para que si el usuario acierta, aparezca la caja de escribe tu nombre
function removeClass(selector, condition1, condition2, nameClass) {
  var elementSelector = document.querySelector(selector);
  if (condition1 === condition2) {
    elementSelector.classList.remove(nameClass);
  };
}


//Cuando el usuario pulsa el botón de guardar...
  //Guardamos el nombre y el número de intentos en un objeto


var saveNameButtom = document.querySelector("#saveName-buttom");

saveNameButtom.addEventListener('click', fun);

function fun() {
  var inputUserName = document.querySelector("#input-user-name");
  var valueinputUserName = inputUserName.value; //Guardo el value del input
  var nameAndAttemps = {
    nameUser: valueinputUserName,
    attemps: acumulador
    }
  console.log(nameAndAttemps);
};











/*


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
