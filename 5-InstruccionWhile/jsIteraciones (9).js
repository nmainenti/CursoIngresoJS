function mostrar()
{

  var hiscore   = 0;
  var lowscore  = 0;
	var respuesta = 0;

  while (respuesta != "basta") {
    respuesta = prompt("ingresar un número - basta para parar");
    if (parseInt(respuesta)) {             // sumar la respuesta solo si es un numero
      if     (parseInt(respuesta) > hiscore  || hiscore  == 0) hiscore  = parseInt(respuesta);
      else if(parseInt(respuesta) < lowscore || lowscore == 0) lowscore = parseInt(respuesta);
    }
  }

  document.getElementById("maximo").value = hiscore;
  document.getElementById("minimo").value = lowscore;

}//FIN DE LA FUNCIÓN
