/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos.
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso() {
  do var edad   = parseInt(prompt("Ingresar edad (18 a 90)"));
  while(edad < 18 || edad > 90 || isNaN(edad));
  do var sexo   = (prompt("Ingresar sexo (M = Masculino , F = Femenino")).toLowerCase();
  while(sexo != "f" && sexo != "m");
  do var ecivil = parseInt(prompt("Ingresar estado civil (1 = Soltero , 2 = Casado , 3 = Divorciado , 4 = Viudo"));
  while(ecivil < 1 || ecivil > 4 || isNaN(ecivil));
  do var sueldo = parseInt(prompt("Ingresar sueldo bruto (mayor o igual a 8000)"));
  while(sueldo < 8000 || isNaN(sueldo));
  do var legajo = parseInt(prompt("Ingresar número de legajo, solo números, cuatro cifras, sin ceros a la izquierda"));
  while(legajo > 9999 || isNaN(legajo));
  do var nacionalidad = (prompt("Ingresar nacionalidad (A = Argentino , E = Extranjero , N = Nacionalizado")).toLowerCase();
  while(nacionalidad != "a" && nacionalidad != "e" && nacionalidad != "n");

  switch(sexo){
    case 'f':
      sexo = "Femenino";
      break;
    case 'm':
      sexo = "Masculino";
      break;
  }
  switch(ecivil){
    case 1:
      ecivil = "Soltero";
      break;
    case 2:
      ecivil = "Casado";
      break;
    case 3:
      ecivil = "Divorciado";
      break;
    case 4:
      ecivil = "Viudo";
      break;
  }
  switch(nacionalidad){
    case 'a':
      nacionalidad = "Argentino";
      break;
    case 'e':
      nacionalidad = "Extranjero";
      break;
    case 'n':
      nacionalidad = "Nacionalizado";
      break;
  }

  document.getElementById("Edad").value = edad;
  document.getElementById("Sexo").value = sexo;
  document.getElementById("EstadoCivil").value = ecivil;
  document.getElementById("Sueldo").value = sueldo;
  document.getElementById("Legajo").value = legajo;
  document.getElementById("Nacionalidad").value = nacionalidad;
}
