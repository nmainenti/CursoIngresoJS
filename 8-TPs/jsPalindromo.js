/*3.		Un palíndromo (del griego palin dromein, volver a ir atrás)
				  	<br>	Es una palabra, número o frase que se lee igual adelante que atrás.
				  	<br>Si se trata de un numeral, usualmente en notación indoarábiga, se llama capicúa.

					<br>	debemos poder identificar las frases numeros o palabras que son palindromos

					<br> 1°: De la cadena original , buscamos los espacios y los eliminamos.
					<br> 2°: La palabra original ,le invertimos el orden de las letras
					<br> 3°: Comparamos las dos cadenas y si son iguales , es un palindromo.

observaciones: el ejercicio pretende explicar el length de los string y un recorrido sobre una cadena.
Temas que quedan fuera del alcance deseado:
  1- como sacar los carateres que no son letras
  2- como cambiar las vocales con acento
  3- las letras mayusculas
  4- vectores
*/
function verificarPalindromo ()
{
  var palabra = document.getElementById("palabra").value;
  var palabraSinEspacios = palabra.replace(/\s+/g, '');
  var palabraInvertida   = invertirString(palabraSinEspacios);
  if(palabraSinEspacios == palabraInvertida) alert("\"" + palabra + "\"" +  " es un palíndromo");
  else alert("\"" + palabra + "\"" + " no es un palíndromo");
}

function invertirString(str){
  var nuevaStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    nuevaStr += str[i];
  }
  return nuevaStr;
}

/*
algunos palindromos para testear:
neuquen
luz azul
a ti no bonita
amad a la dama
ateo poco poeta
la ruta natural
la tele letal
*/
