/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
	function mostrarAumento()
	{
 
		var sueldo; 

		sueldo = txtIdSueldo.value;
		sueldo = parseInt(sueldo);

		var porcentaje;

		porcentaje = 10

		var resultado;

		resultado = txtIdResultado.value;
		resultado = parseInt(resultado);

		resultado = sueldo + (sueldo / 100*porcentaje);

		alert(resultado);

  




}
