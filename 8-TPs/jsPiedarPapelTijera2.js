var eleccionMaquina;
var contadorEmpates = 0;
var contadorGanadas = 0;
var contadorPerdidas = 0;

// 1 - piedra
// 2 - papel
// 3 - tijera

function comenzar() {
	eleccionMaquina = Math.floor(Math.random() * (3 + 1));
}

function piedra() {
	switch (eleccionMaquina) {
		case 1:
			alert("tie");
			contadorEmpates++;
			break;
		case 2:
			alert("loss");
			contadorPerdidas++;
			break;
		case 3:
			alert("win");
			contadorGanadas++;
			break;
	}
	mostrarResultado();
	comenzar();
}

function papel() {
	switch (eleccionMaquina) {
		case 1:
			alert("win");
			contadorGanadas++;
			break;
		case 2:
			alert("tie");
			contadorEmpates++;
			break;
		case 3:
			alert("loss");
			contadorPerdidas++;
			break;
	}
	mostrarResultado();
	comenzar();
}

function tijera() {
	switch (eleccionMaquina) {
		case 1:
			alert("loss");
			contadorPerdidas++;
			break;
		case 2:
			alert("win");
			contadorGanadas++;
			break;
		case 3:
			alert("tie");
			contadorEmpates++;
			break;
	}
	mostrarResultado()
}

function mostrarResultado() {
	document.getElementById("ganadas"  ).value = contadorGanadas;
	document.getElementById("perdidas" ).value = contadorPerdidas;
	document.getElementById("empatadas").value = contadorEmpates;
}