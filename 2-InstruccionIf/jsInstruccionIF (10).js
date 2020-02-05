function mostrar()
{
	//Genero el número RANDOM entre 1 y 10
  var randomNum = Math.floor(Math.random() * 10 + 1);

  switch(randomNum){
    case 10:
    case 9:
      alert("buenardo");
      break;
    case 8:
    case 7:
    case 6:
    case 5:
    case 4:
      alert("aprobado");
      break;
    case 3:
    case 2:
    case 1:
      alert("a casa");
      break;
  }

}//FIN DE LA FUNCIÓN
