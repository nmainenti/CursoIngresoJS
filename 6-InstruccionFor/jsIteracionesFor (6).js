function mostrar()
{
  var numero  = parseInt(prompt("ingresar un número"));
  var cantPar = 0;

  document.write("<p> Números pares </p>");

  for(var i = 1; i <= numero; i++){
    if((i % 2) == 0){
      document.write("<p>" + i + "</p>");
      cantPar++;
    }
  }

  document.write("<p> Cantidad de pares </p>");
  document.write(cantPar);

}//FIN DE LA FUNCIÓN
