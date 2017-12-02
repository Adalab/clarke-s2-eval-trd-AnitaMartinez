'use strict';


// Número aleatorio

function getRandomInt(min, max) {
    return Math.ceil(Math.random() * (max - min)) + min;
}

var numberRandom = getRandomInt(1,100);
console.log(numberRandom); // Borrar




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






/*
var firstName = prompt('como te llamas?');
if (firstName == 'Ana' || firstName =='Gemma') {
    alert('Hola bellas');

} else {
  alert('fuera!')

}

*/
