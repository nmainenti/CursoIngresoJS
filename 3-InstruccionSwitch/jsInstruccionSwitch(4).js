function mostrar()
{
//tomo la edad
  var mesDelAño = document.getElementById('mes').value;

  switch(mesDelAño){

    case "Febrero":
      alert("este mes tiene 28 o 29 días")
      break;

    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
      alert("este mes tiene 30 días")
      break;

    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
      alert("este mes tiene 31 días")
      break;

  }




}//FIN DE LA FUNCIÓN
