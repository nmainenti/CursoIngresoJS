function mostrar()
{
//tomo la edad
  var edad = document.getElementById("edad").value;
  if      (edad >= 18)                alert("mayor de edad");
  else if (edad <= 17 && edad >= 13)  alert("adolescente");
  else if (edad < 13)                 alert("niño");


}//FIN DE LA FUNCIÓN
