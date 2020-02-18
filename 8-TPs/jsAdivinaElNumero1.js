/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var numeroIngresado;
var contadorIntentos = 0;
var winstate         = false;                                       

function comenzar()
{
  winstate = false;                                                 // reinicia el winstate del juego
  contadorIntentos = 0;                                             // reinicia el contador
  document.getElementById("intentos").value = 0;                    // reinicia el contador visible
	numeroSecreto = Math.floor(Math.random() * (100 + 1));
  alert(numeroSecreto);
}

function verificar()
{
  if(winstate == true) return;                                      // escapa de la funcion si el juego ya está ganado
  contadorIntentos++;
  numeroIngresado = document.getElementById("numero").value;
  if(numeroSecreto == numeroIngresado) {
    alert("ganaste en " + contadorIntentos + " intentos");
    winstate = true;
  }
  else if(numeroSecreto > numeroIngresado) alert("falta un poco");
  else if(numeroSecreto < numeroIngresado) alert("te pasaste bro");
  document.getElementById("intentos").value = contadorIntentos;
}