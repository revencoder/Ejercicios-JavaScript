function areaCirculo(){
	var a,x,y;
	x = Math.PI;
	y = Number(prompt("Ingresa el radio del círculo"));
	a = x * (y*y);
	document.write("El área del círculo es: ", a.toFixed(2));
}

areaCirculo()

