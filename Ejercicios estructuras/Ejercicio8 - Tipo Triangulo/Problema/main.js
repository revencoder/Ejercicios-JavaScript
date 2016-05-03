function triangulo(){
	var lado1,lado2,lado3,a;

	lado1=parseInt(prompt("Ingrese el primer lado: "));
	lado2=parseInt(prompt("Ingrese el segundo lado: "));
	lado3=parseInt(prompt("Ingrese el tercer lado: "));

	if(lado1>lado2){
		a = lado1;
		lado1 = lado2;
		lado2 = a;
	}

	if(lado3>lado1){
		a = lado3;
		lado3 = lado2;
		lado2 = lado1;
		lado1 = a;
	}

	if(lado3<lado2){
		a = lado2;
		lado2 = lado3;
		lado3 = a;
	}

	document.write(lado1,lado2,lado3);

	if (lado3>=lado1+lado2){
	document.write("Esto no es un triángulo");
	}

	else
	
		if ((lado1==lado2)&&(lado2==lado3)){
		document.write("Triángulo Equilátero");
		
		}

	else

		if ((lado1==lado2)||(lado1==lado3)||(lado2==lado3)){
		document.write("Triángulo Isósceles");
		}
		

	else{
	document.write("Triángulo Escaleno");
	}

	if
	((lado3<lado1+lado2)&&(lado3*lado3==lado1*lado1+lado2*lado2)){
	document.write(" Es un Rectángulo");
	}

}

triangulo()



