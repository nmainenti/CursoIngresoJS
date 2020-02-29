
function mostrar()
{
  var mayorPersonasEstadia = 0;
  var huespedPersonas  = 0;
  var mayorPersonas    = 0;
  var mayorEstadia     = 0;
  var efectivo         = 0;
  var tarjeta          = 0;
  var qr               = 0;
  var reservas         = 0;
  var continuar        = 's';
  var formaPago;

  do {
    reservas++;
    var huesped  = prompt("Ingresar nombre de huésped");
    do var personas = parseInt(prompt("Ingresar cantidad de personas"));
    while(isNaN(personas));
    do var estadia  = parseInt(prompt("Ingresar cantidad de días de estadía"));
    while(isNaN(estadia));
    do var pago  = prompt("Ingresar forma de pago: efectivo, tarjeta, o QR").toLowerCase;
    while(formaPago != "efectivo" || formaPago != "tarjeta" || formaPago != "qr");

    if(personas > mayorPersonas) {
      mayorPersonas   = personas;
      huespedPersonas = huesped;
    }
    if(estadia  > mayorEstadia){
      mayorEstadia         = estadia;
      mayorPersonasEstadia = personas;
    }
    switch(pago.toLowerCase){
      case "efectivo":
        efectivo++;
        break;
      case "tarjeta":
        tarjeta++;
        break;
      case "qr":
        qr++;
        break;
    }
    continuar = prompt("s para continuar o n para finalizar");
  }
  while(continuar.toLowerCase == 's');

  if(efectivo > tarjeta && efectivo > qr) formaPago = "efectivo";
  else if(tarjeta < qr)                   formaPago = "tarjeta";
  else                                    formaPago = "qr";

  document.writeln("<p>" + huespedPersonas + " fue el huésped que trajo más personas en una reserva, cuando trajo a " + mayorPersonas + " personas </p>");
  document.writeln("<p>La reserva más larga fue de " + mayorPersonasEstadia + " personas por " + mayorEstadia + " días</p>");
  document.writeln("<p>La forma de pago más usada fue " + formaPago + "</p>");
}
