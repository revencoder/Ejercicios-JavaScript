// a continuación se muestra un mensaje
function convertidor(celsius) {
	var fahrenheit;
	celsius = prompt ("Ingrese los Grados Centígrados que desea convertir: ");
	fahrenheit = (9/5 * celsius) + 32;
	document.write ("Usted desea convertir: ",celsius," º a fahrenheit.",'<br/>') 
	document.write ("El resultado es: ", parseInt(fahrenheit)," grados fahrenheit.")
}
 convertidor();
