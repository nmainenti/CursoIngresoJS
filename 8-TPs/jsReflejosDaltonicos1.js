/*En la pantalla se mostrarán 6 botones de
distintos colores,  al comenzar el juego se
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar
 el botón correcto se informara cuanto tiempo tardo.
*/
var color;
var tiempo;
var t0;
var t1;


function comenzar() {
  color = Math.floor(Math.random() * 6);
  switch (color) {
    case 0:
      color = "azul";
      break;
    case 1:
      color = "amarillo";
      break;
    case 2:
      color = "marron";
      break;
    case 3:
      color = "verde";
      break;
    case 4:
      color = "celeste";
      break;
    case 5:
      color = "rojo";
      break;
  }
  document.getElementById("ColorElejido").value = color;
  t0 = performance.now();
}


function Responder(colorParametro) {
  if(colorParametro == color) {
    t1 = performance.now();
    tiempo = t1 - t0;
    alert("tardaste " + (tiempo / 1000).toFixed(2) + " segundos");
  }
  else Responder(colorParametro);

}


