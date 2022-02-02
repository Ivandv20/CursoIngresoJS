/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{

	var NombreIngresado;

	NombreIngresado = prompt ("Ingrese su nombre");

	document.getElementById("txtIdNombre").value = NombreIngresado;

}

