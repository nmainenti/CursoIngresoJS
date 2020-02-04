/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/


function sumar()
{
  var numPrim = parseInt(document.getElementById("numeroUno").value);
  var numSeg  = parseInt(document.getElementById("numeroDos").value);
  alert(numPrim + numSeg);
}

function restar()
{
  var numPrim = parseInt(document.getElementById("numeroUno").value);
  var numSeg  = parseInt(document.getElementById("numeroDos").value);
  alert(numPrim - numSeg);
}

function multiplicar()
{
  var numPrim = parseInt(document.getElementById("numeroUno").value);
  var numSeg  = parseInt(document.getElementById("numeroDos").value);
  alert(numPrim * numSeg);
}

function dividir()
{
  var numPrim = parseInt(document.getElementById("numeroUno").value);
  var numSeg  = parseInt(document.getElementById("numeroDos").value);
  alert(numPrim / numSeg);
}

