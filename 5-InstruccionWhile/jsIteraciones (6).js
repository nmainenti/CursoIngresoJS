function mostrar()
{
	var iteracion = 0;
	var contador=0;
	var acumulador=0;

	do{
		contador = parseInt(prompt("ingrese un numero"));
		acumulador += contador;
		iteracion++;
	}
	while(iteracion < 5);



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN