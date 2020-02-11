/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
  var precioUno = parseInt(document.getElementById("PrecioUno").value);
  var precioDos = parseInt(document.getElementById("PrecioDos").value);
  var precioTres = parseInt(document.getElementById("PrecioTres").value);

  alert(precioUno + precioDos + precioTres);
}

function Promedio() {
  var precioUno = parseInt(document.getElementById("PrecioUno").value);
  var precioDos = parseInt(document.getElementById("PrecioDos").value);
  var precioTres = parseInt(document.getElementById("PrecioTres").value);

  alert((precioUno + precioDos + precioTres) / 3);
}

function PrecioFinal() {
  var precioUno = parseInt(document.getElementById("PrecioUno").value);
  var precioDos = parseInt(document.getElementById("PrecioDos").value);
  var precioTres = parseInt(document.getElementById("PrecioTres").value);
  var subtotal = precioUno + precioDos + precioTres;
  var iva = 21;

  alert(subtotal + (subtotal * iva) / 100);
}
