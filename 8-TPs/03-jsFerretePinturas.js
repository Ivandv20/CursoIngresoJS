/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{

 var temperaturaIngresada;

 temperaturaIngresada = txtIdTemperatura.value; 
 temperaturaIngresada = parseFloat(temperaturaIngresada);

 var temperaturaCentigrados;
 temperaturaCentigrados = (temperaturaIngresada - 32) * 5 / 9;
 temperaturaCentigrados = temperaturaCentigrados.toFixed(2);

 alert(temperaturaIngresada + " Fahrenheit son: " + temperaturaCentigrados + " centigrados...");

	
}

function CentigradosFahrenheit () 
{

    var temperaturaIngresada;

    temperaturaIngresada = txtIdTemperatura.value; 
    temperaturaIngresada = parseFloat(temperaturaIngresada);
   
    var temperaturaFahrenheit;
    temperaturaFahrenheit = (temperaturaIngresada * 9 / 5) + 32
    temperaturaFahrenheit = temperaturaFahrenheit.toFixed(2);
   
    alert(temperaturaIngresada + " Centigrados son: " + temperaturaFahrenheit + " fahrenheit...");
   
	
}
