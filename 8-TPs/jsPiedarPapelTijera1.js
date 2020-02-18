/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/

// 1 - piedra
// 2 - papel
// 3 - tijera

var eleccionMaquina;

function comenzar() {
  eleccionMaquina = Math.floor(Math.random() * (3 + 1));
}

function piedra() {
  switch(eleccionMaquina){
    case 1:
      alert("tie");
      break;
    case 2:
      alert("loss");
      break;
    case 3:
      alert("win");
      break;
  }
}

function papel() {
  switch(eleccionMaquina){
    case 1:
      alert("win");
      break;
    case 2:
      alert("tie");
      break;
    case 3:
      alert("loss");
      break;
  }
  
}

function tijera() {
  switch(eleccionMaquina){
    case 1:
      alert("loss");
      break;
    case 2:
      alert("win");
      break;
    case 3:
      alert("tie");
      break;
  }
  
}