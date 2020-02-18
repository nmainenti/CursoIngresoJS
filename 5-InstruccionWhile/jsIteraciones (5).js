function mostrar() {
  var sexo;
  do  sexo = prompt("ingrese f ó m .");
  while (sexo != "f" && sexo != "m");

  document.getElementById("Sexo").value = sexo;
}

/*
function mostrar()
{

    var sexo = prompt("ingrese f ó m .");
    while(1){
        sexo = prompt("ingrese f ó m .");
        if(sexo == "f" || sexo == "m") break;
    }

    document.getElementById('Sexo').value=sexo;

}
*/
