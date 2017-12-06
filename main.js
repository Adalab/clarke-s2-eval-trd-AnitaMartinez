'use strict';

var acumulador = 0;
var inputUserNumber = document.querySelector("#inputUserNumber");

// Número aleatorio

function getRandomInt(min, max) {
  return Math.ceil(Math.random() * (max - min)) + min;
}
var numberRandom = getRandomInt(1,100);
console.log( 'Número aleatorio es ' + numberRandom);


//Cuando el usuario pulsa el botón de Prueba...
// Guardo el número que introduce
// Comparo el número del usuario y el número aleatorio y lanzo mensajes
// Actualizo el contador
//Si acierta, muestro el div con el botón de escribe tu nombre

var tryButton = document.querySelector("#try-buttom");
tryButton.addEventListener('click', operationsInputNumber);

function operationsInputNumber() {
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
  //Pintamos el histórico con los datos del objeto
  //Desaparece la caja de escribe tu nombre
  //Genero un nuevo número aleatorio
  //Contador de intentos a 0

var saveNameButtom = document.querySelector("#saveName-buttom");
var historic = document.querySelector("#historic");
saveNameButtom.addEventListener('click', operationsInputName);

function operationsInputName() {
  var inputUserName = document.querySelector("#input-user-name");
  var valueinputUserName = inputUserName.value; //Guardo el value del input
  var nameAndAttems =
  {
    nameUser: valueinputUserName,
    attemps: acumulador
  };

  historic.innerHTML += '<li>' + nameAndAttems.nameUser + ' - ' + nameAndAttems.attemps + ' intentos' + '</li>'; //Pinto el nombre y el número de intentos en el histórico

  addClass('#container-input-name','display-none'); //Desaparece la caja de escribe tu nombre

  function newRandom (min, max) {
    return Math.ceil(Math.random() * (max - min)) + min;
  }
  numberRandom = newRandom(1,100);
  console.log('Nuevo número aleatorio es ' + numberRandom); //Nuevo número aleatorio

  acumulador = 0;
  attemps.innerHTML = acumulador;   // Contador de intentos a 0

  var messageToUser = document.querySelector('#message-to-user');
  messageToUser.innerHTML = '<p>Escribe un número y dale a <span class="italic">Prueba</span></p>'; //Vuelta a mensaje inicial

  inputUserName.value = '';
  inputUserNumber.value = ''; //Reinicio de inputs

};

//Función para que desaparezca la caja de escribe tu nombre
function addClass(selector, nameClass) {
  var elementSelector = document.querySelector(selector);
  elementSelector.classList.add(nameClass);
};
