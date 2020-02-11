function mostrar()
{

  var negativo = 0;
  var positivo = 0;
  var cantPositivos = 0;
  var cantNegativos = 0;
  var cantCeros     = 0;
  var cantPares     = 0;
	var respuesta = 0;

  while (respuesta != "basta") {
    respuesta = prompt("ingresar un número - basta para parar");
    var respuestaInt = parseInt(respuesta);
    if (respuestaInt) {             // sumar la respuesta solo si es un numero
      if (respuestaInt % 2 == 0) cantPares++;
      if (respuestaInt > 0){
        positivo += respuestaInt;
        cantPositivos++;
      }
      else if (respuestaInt < 0){
        negativo += respuestaInt;
        cantNegativos++;
      }
      else cantCeros++;
    }
  }

  document.write("<p> Suma de negativos "     + negativo                + "</p>");
  document.write("<p> Cantidad de negativos " + cantNegativos           + "</p>");
  document.write("<p> Promedio de negativos " + negativo/cantNegativos  + "</p>");
  document.write("<p> Suma de positivos "     + positivo                + "</p>");
  document.write("<p> Cantidad de positivos " + cantPositivos           + "</p>");
  document.write("<p> Promedio de negativos " + positivo/cantPositivos  + "</p>");
  document.write("<p> Cantidad de ceros "     + cantCeros               + "</p>");
  document.write("<p> Cantidad de pares "     + cantPares               + "</p>");
  document.write("<p> Suma total "            + (positivo + negativo)   + "</p>");


}
