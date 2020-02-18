/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var resultado;

function comenzar() {
  var primerNumero  = Math.floor(Math.random() * (10 + 1));
  var segundoNumero = Math.floor(Math.random() * (10 + 1));
  var operador  = Math.floor(Math.random() * (3));
  document.getElementById("PrimerNumero" ).value = primerNumero;
  document.getElementById("SegundoNumero").value = segundoNumero;
  switch(operador){
    case 0:
      operador = "+";
      resultado = primerNumero + segundoNumero;
      break;
    case 1:
      operador = "-";
      resultado = primerNumero - segundoNumero;
      break;
    case 2:
      operador = "x";
      resultado = primerNumero * segundoNumero;
      break;
    case 3:
      operador = "/";
      resultado = primerNumero / segundoNumero;
      break;
  }
  document.getElementById("Operador").value = operador;
}


function Responder() {
  var respuesta = parseInt(document.getElementById("Respuesta").value);
  if(respuesta == resultado) alert("el resultado es correcto");
  else alert("el resultado no es correcto");

}
