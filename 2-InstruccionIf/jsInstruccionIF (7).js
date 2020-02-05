function mostrar()
{
//tomo la edad
  var edad        = document.getElementById("edad").value;
  var estadoCivil = document.getElementById("estadoCivil").value;

  if(edad < 18 && estadoCivil != "Soltero") alert("no te podes casar capo");

}//FIN DE LA FUNCIÓN
