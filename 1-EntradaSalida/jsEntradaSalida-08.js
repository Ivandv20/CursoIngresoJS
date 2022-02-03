/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{  

	 var dividendo
	 dividendo = txtIdNumeroDividendo.value;
    dividendo = parseInt(dividendo);

    var divisor 

	divisor =  txtIdNumeroDivisor.value;
	divisor = parseInt(divisor);

	var resultado

	resultado = dividendo % divisor;



	alert("El resto es  " + resultado);
}
