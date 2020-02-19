/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/

do var numero = parseInt(document.getElementById("numero").value);
while(numero <= 0);

function NumerosPares(numero){
  var cantPar = 0;
  for(var i = 1; i <= numero; i++){
    if((i % 2) == 0){
      cantPar++;
    }
  }
  alert("hay " + cantPar + " números pares desde 1 hasta " + numero);
}

function NumerosImpares(numero){
  var cantImpar = 0;
  for(var i = 1; i <= numero; i++){
    if((i % 2) == 1){
      cantImpar++;
    }
  }
  alert("hay " + cantImpar + " números pares desde 1 hasta " + numero);
}

function NumerosDivisibles(numero){
  var cantDiv
  for(var i = 1; i <= numero; i++){
    if((i % numero) == 0){
      cantDiv++;
    }
  }
  alert("hay " + cantDiv + " números divisibles por " + numero);
}

function VerificarPrimo(numero){
  var cantDiv
  for(var i = 1; i <= numero; i++){
    if((i % numero) == 0){
      cantDiv++;
    }
  }
  if(cantDiv == 2){
    alert(numero + " es un número primo");
  }
}

function NumerosPrimos(numero){
  cantPrimos = 0;
  for(var i = 1; i < numero; i++){
    for(var x = 1; x <= i; x++){
      if((i % x) == 0) cantDiv++;
      if(cantDiv > 2) break;
    }
    if (cantDiv == 2) cantPrimos++;
  }
  alert("hay " + cantPrimos + " entre 1 y " + numero);
}
