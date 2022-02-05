/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
   var PrecioUno;
   PrecioUno = txtIdPrecioUno.value;
   PrecioUno = parseInt(PrecioUno);

var PrecioDos;

PrecioDos = txtIdPrecioDos.value;

PrecioDos = parseInt(PrecioDos);

var PrecioTres;

PrecioTres = txtIdPrecioTres.value;

PrecioTres = parseInt(PrecioTres);

var resultado;

resultado = PrecioUno + PrecioDos + PrecioTres;



alert(resultado);
    
	
}
function Promedio () 
{

 var PrecioUno;
    PrecioUno = txtIdPrecioUno.value;
    PrecioUno = parseInt(PrecioUno);
 
 var PrecioDos;
 
 PrecioDos = txtIdPrecioDos.value;
 
 PrecioDos = parseInt(PrecioDos);
 
 var PrecioTres;
 
 PrecioTres = txtIdPrecioTres.value;
 
 PrecioTres = parseInt(PrecioTres);
 
 var Promedio;

 promedio = PrecioUno + PrecioDos + PrecioTres; 

 var resultado = promedio / 3;
	
  alert(resultado);
}
function PrecioFinal () 
{
    var PrecioUno;
    PrecioUno = txtIdPrecioUno.value;
    PrecioUno = parseInt(PrecioUno);
 
 var PrecioDos;
 
 PrecioDos = txtIdPrecioDos.value;
 
 PrecioDos = parseInt(PrecioDos);
 
 var PrecioTres;
 
 PrecioTres = txtIdPrecioTres.value;
 
 PrecioTres = parseInt(PrecioTres);

 var Suma;

 Suma = PrecioUno + PrecioDos + PrecioTres;
 
var Iva;

Iva = 21

var PrecioFinal;

PrecioFinal = Suma + (Suma / 100*Iva);
 

 
 
 alert(PrecioFinal);
}