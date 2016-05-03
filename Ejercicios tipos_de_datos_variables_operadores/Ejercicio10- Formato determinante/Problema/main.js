function determinante(){
	var a = [],b;
	alert("Ingresa los datos de las variables determinantes que quieres hallar");

	a[0] = Number(prompt("Primer dato"));
	a[1] = Number(prompt("Segundo dato"));
	a[2] = Number(prompt("Tercer dato"));
	a[3] = Number(prompt("Cuarto dato"));

		b = a[0]*a[3]-a[1]*a[2];

	document.write("Primer dato: ",a[0],"<br/>");
	document.write("Segundo dato: ",a[1],"<br/>");
	document.write("Tercer dato: ",a[2],"<br/>");
	document.write("Cuarto dato: ",a[3],"<br/>");
	alert ("Datos tabulados: \n" + a[0]+" "+a[1]+ "\n"+ a[2]+" "+ a[3]);
	document.write("El resultado es: ",b);
}

determinante()



