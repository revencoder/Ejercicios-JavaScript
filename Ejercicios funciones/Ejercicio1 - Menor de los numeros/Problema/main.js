function menor(){
	var a = Number(prompt("Ingrese el primer número"));
	var b = Number(prompt("Ingrese el segundo número"));
	var c = Number (prompt("Ingrese el tercer número"));

	alert("Los número ingresados son: "+a+" "+b+" "+c+" ");

	if (a<b && a<c){
		alert("El número: "+a+" es el menor.");
	}

	if (b<a && b<c){
		alert("El número: "+b+" es el menor.");
	}

	if (c<a && c<b){
		alert("El número: "+c+" es el menor.");
	}
}
menor()




