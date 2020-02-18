/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var temporizador;
var resultado;

setTimeout(Responder, 4000);

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

