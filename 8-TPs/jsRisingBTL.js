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
  while(edad < 18 || edad > 90);
  do var sexo   = (prompt("Ingresar sexo (M = Masculino , F = Femenino")).toLowerCase();
  while(sexo != "f" && sexo != "m");
  do var ecivil = parseInt(prompt("Ingresar estado civil (1 = Soltero , 2 = Casado , 3 = Divorciado , 4 = Viudo"));
  while(ecivil < 1 || ecivil > 4);
  do var sueldo = parseInt(prompt("Ingresar sueldo bruto (mayor o igual a 8000)"));
  while(sueldo < 8000);
  do var legajo = parseInt(prompt("Ingresar número de legajo, solo números, cuatro cifras, sin ceros a la izquierda"));
  while(legajo > 9999);
  do var nacionalidad = (prompt("Ingresar nacionalidad (A = Argentino , E = Extranjero , N = Nacionalizado")).toLowerCase();
  while(nacionalidad != "a" && nacionalidad != "e" && nacionalidad != "n");


}
