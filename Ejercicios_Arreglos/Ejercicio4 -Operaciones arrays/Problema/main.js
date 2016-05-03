function operaciones(){
	var valores = [true, 5, false, "hola", "adios", 2];
	var resultado = valores[3] > valores[4];
	alert(resultado);

	var valor1 = valores[0];
	var valor2 = valores[2];
	var resultado = valor1||valor2;
	
	alert(resultado);

	resultado = valor1 && valor2;
	alert(resultado);

	//Las cinco operaciones matemáticas

	var a = valores[1];
	var b = valores[5];

	var suma = a + b;
	alert(suma);

	var resta = a-b;
	alert(resta);

	var multiplicacion = a*b;
	alert(multiplicacion);

	var division = a/b;
	alert(division);

	var resto = a%b;
	alert(resto);

}
operaciones()



