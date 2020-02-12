function mostrar()
{
  var numero   = parseInt(prompt("ingresar un número"));
  var totalDiv = 0;        // suma de los divisores

  for(var i = 1; i <= numero; i++){
    if(numero % i == 0){
      totalDiv += i;
    }
  }

  if(totalDiv == (numero + 1)){
    alert(numero + " es un número primo");
  }

}
