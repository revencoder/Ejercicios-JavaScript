function conversionEdad(){
	var nombre,edad,vida;
	nombre = prompt("¿Cual es tu nombre?");
	document.write("Tu nombre: ",nombre,"<br/>");
	edad = prompt("¿Cuál es tu edad?");
	document.write("Tu edad es: ",edad,"<br/>");

	vida = edad*365;

	document.write("Hasta ahora has vivido: ",vida," días");
}




