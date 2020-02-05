function mostrar()
{
//tomo la edad
  var mesDelAño = document.getElementById('mes').value;

  switch(mesDelAño){
    case "Febrero":
      alert("este mes tiene 29 o menos dias")
      break;
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
    case "Julio":
    case "Agosto":
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
    case "Enero":
      alert("este mes tiene 30 o más dias")
      break;
  }




}//FIN DE LA FUNCIÓN
