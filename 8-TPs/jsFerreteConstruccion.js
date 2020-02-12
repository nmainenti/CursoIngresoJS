/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo ()
{
  var largo = parseInt(document.getElementById("Largo").value);
  var ancho = parseInt(document.getElementById("Ancho").value);

  var perimetro = ((largo + ancho) * 2);
  alert("se necesitan " + perimetro * 3 + " metros de alambre");
}

function Circulo ()
{
  var radio = parseInt(document.getElementById("Radio").value);

  var perimetro = 6.28 * radio;
  alert("se necesitan " + perimetro + " metros de alambre");
}

function Materiales ()
{
  var largo = parseInt(document.getElementById("Largo").value);
  var ancho = parseInt(document.getElementById("Ancho").value);
  var area  = largo * ancho;

  var cemento = area * 2;  // se necesitan 2 bolsas por m^2
  var cal     = area * 3;  // se necesitan 3 bolsas por m^2

  alert("se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");
}
