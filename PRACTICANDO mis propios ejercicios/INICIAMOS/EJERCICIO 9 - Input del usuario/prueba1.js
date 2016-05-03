// a continuación se muestra un mensaje
function datos(){
	alert("A continuación usted deberá llenar sus datos: ");
	var nombre,direccion,edad;
	nombre = prompt ("¿Cuál es tu nombre?");
	document.write ("Tu nombre es = ", nombre,'<br/>')
	edad = prompt ("¿Cuál es su edad?");
	document.write ("Su edad es = ",edad,'<br/>');
	direccion = prompt ("¿Dónde vives?");
	document.write ("Usted vive en = ",direccion);
}
datos()






