function mostrar()
{
	var respuesta = 0;
	var positivo  = 0;
  var negativo  = -1;   // elemento neutro
  var negativoContador = 0;

  while (respuesta != "basta") {
    respuesta = prompt("ingresar un número - basta para parar");
    if (parseInt(respuesta)) {                // sumar la respuesta solo si es un numero
      if (respuesta > 0) positivo += parseInt(respuesta);
      else {
        negativo *= parseInt(respuesta)
        negativoContador++;
      }
    }
  }

  if (negativoContador == 0) negativo = 0;    // si no se escribe ningun numero negativo se muestra el valor
                                              // en el que 'negativo' fue inicializado, -1

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}
