
function miFuncion() {
	var i, n, multiplicacion, x;
	// Sumatoria de "n" números
	document.write("Ingrese la cantidad",'<br/>');
	n = prompt ('Ingrese la cantidad de números que desea multiplicar');
	i = 0;
	multiplicacion = 1;
	while (i<n) {
		x = Number(prompt('Ingrese los números a multiplicar'));
		document.write (x,'<br/>');
		i = i+1;
		multiplicacion = multiplicacion * x;
	}
	document.write("El producto es = ",multiplicacion,'<br/>');
}




