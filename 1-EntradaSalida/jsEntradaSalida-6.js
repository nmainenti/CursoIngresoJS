/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
/*
function sumar()
{
    var numPrim   = document.getElementById("numeroUno").value;
    var numSeg    = document.getElementById("numeroDos").value;
    var numPrim_int = parseInt(numPrim);
    var numSeg_int  = parseInt(numSeg);
    alert(numPrim_int + numSeg_int);
}
*/

function sumar()
{
    var numPrim   = parseInt(document.getElementById("numeroUno").value);
    var numSeg    = parseInt(document.getElementById("numeroDos").value);
    alert(numPrim + numSeg);
}
