function factorial () {
	var n = Number(prompt("Ingrese el factorial"));
	document.write(n,"!","<br>");
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	
	alert(total);
	document.write("El resultado es: ",total);
}

factorial()



