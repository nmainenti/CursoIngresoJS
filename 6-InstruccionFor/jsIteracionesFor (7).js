function mostrar()
{
  var numero  = parseInt(prompt("ingresar un número"));
  var cantDiv = 0;

  document.write("<p> Números divisores </p>");

  for(var i = 1; i <= numero; i++){
    if((numero % i) == 0){
      document.write("<p>" + i + "</p>");
      cantDiv++;
    }
  }

  document.write("<p> Cantidad de divisores </p>");
  document.write(cantDiv);

}//FIN DE LA FUNCIÓN
