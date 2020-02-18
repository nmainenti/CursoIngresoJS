/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var precio    = 35;
    var cantidad  = parseInt(document.getElementById("Cantidad").value);
    var marca     = document.getElementById("Marca").value;
    var iibb      = 10;
    var descuento;
    var subtotal;

    if(cantidad >= 6) descuento = 50;
    else if(cantidad == 5 &&  (marca == "ArgentinaLuz")) descuento = 40;
    else if(cantidad == 5 && !(marca == "ArgentinaLuz")) descuento = 30;
    else if(cantidad == 4){
        if(marca == "ArgentinaLuz" || marca == "FelipeLamparas") descuento = 25;
        else descuento = 20;  
    }
    else if(cantidad == 3){
         if(marca == "ArgentinaLuz") descuento = 15;
         else if(marca == "FelipeLamparas") descuento = 10;
         else descuento = 5;
    }

    subtotal = precio * cantidad - (precio * cantidad * (descuento * 0.01));
    document.getElementById("precioDescuento").value = subtotal;            // informar total sin IIBB?

    if (subtotal > 120) {
        alert("usted pago $" + (subtotal * (iibb * 0.01)  + " de IIBB"));
    }

}