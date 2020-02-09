function mostrar()
{

	var numero;
	do {
		numero = prompt("ingrese un número entre 0 y 10.");
		if(numero == "") numero = 100; 							// al cerrar prompt() vacio devuelve ""
	}
	while(numero < 0 || 9 < numero);


}