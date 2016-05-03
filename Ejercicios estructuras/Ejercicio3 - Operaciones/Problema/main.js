function operaciones(){
	var a = Number(prompt("Ingrese el primer número"));
	var	b = Number(prompt("Ingrese el segundo número"));

	if(a>b){
		var suma = a + b;
		document.write("La suma es: ",suma,"<br>");
	}
	else{
		var resta = a - b;
		document.write("La resta es: ",resta,"<br>");
	}
		
	
	if(a===b){
		alert("Son iguales");
	}

	else{ 
		var multiplicar = a * b;
		var dividir = a/b;
		document.write("La multiplicación es: ",multiplicar,"<br>","La división es: ",dividir);
	}
	
}

operaciones()



