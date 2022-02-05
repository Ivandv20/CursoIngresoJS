/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()

{
	var importe;

	importe = txtIdImporte.value;

	importe = parseInt(importe);

	var porcentaje = 25

	var resultado;

	resultado = txtIdResultado.value;

	resultado = parseInt(resultado);

	resultado = importe - (importe * porcentaje/100);





	alert(resultado);
}
