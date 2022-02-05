/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    largo = txtIdLargo.value;
    largo = parseInt(largo);

    var ancho;
    ancho = txtIdAncho.value;
    ancho = parseInt(ancho);

    var perimetro;

    perimetro = largo * 2 + ancho * 2;
    perimetro = parseFloat(perimetro);

    var alambre;
    alambre = 3;
    alambre = parseFloat(alambre);

    var cantidadAlambre;
    cantidadAlambre = parseFloat(cantidadAlambre);

    cantidadAlambre = perimetro * alambre;

    var texto;
    texto = "Cantidad de alambre necesaria: ";

    alert(texto + cantidadAlambre);
    
   

   

  
}
function Circulo () 
{
    var radioTerreno;
    var radioTerreno = txtIdRadio.value;
    radioTerreno = parseFloat(radioTerreno);

    var cantidadAlambreFinal;
    
    var alambre;
    alambre = 3;

    var PI;
     PI = 3.14;

     var perimetroTerreno;

     perimetroTerreno = 2 * PI * radioTerreno;

        cantidadAlambreFinal = perimetroTerreno * alambre;

     var text;
     text = "Cantidad de alambre neceserio es: "  + cantidadAlambreFinal;

     alert(text + cantidadAlambreFinal);


    



	
}
function Materiales () 
{

    var largo;
    largo = txtIdLargo.value;
    largo = parseInt(largo);

    var ancho;
    ancho = txtIdAncho.value;
    ancho = parseInt(ancho);
    
    var cantidadMetroCuadrado;
    cantidadMetroCuadrado = ancho * largo;

    var bolsaCemento;
    bolsaCemento = 2;
    
    var bolsaCal;
    bolsaCal = 3;


    var bolsasNecesarariasCal;

    bolsasNecesarariasCal = cantidadMetroCuadrado * bolsaCal;

    var bolsasNecesariasCemento;

    bolsasNecesariasCemento = cantidadMetroCuadrado * bolsaCemento;

    var text;
    text = "Se necesitan: " + bolsasNecesarariasCal + " bolsas de cal " + " y " + bolsasNecesariasCemento + " bolsas de cemento" + " para las medidas del terreno rectangular";

    alert(text);

    
	
}