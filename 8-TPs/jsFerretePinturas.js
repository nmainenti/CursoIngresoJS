/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

// (0°C × 9/5) + 32 = 32°F
// (32°F − 32) × 5/9 = 0°C

function FahrenheitCentigrados () 
{
    var F = parseInt(document.getElementById("Temperatura").value);
    var C = (F - 32) * 5/9;
    
    alert(C);
}

function CentigradosFahrenheit () 
{
    var C = parseInt(document.getElementById("Temperatura").value);
    var F = (C * 9/5) + 32;
    
    alert(F);
}
