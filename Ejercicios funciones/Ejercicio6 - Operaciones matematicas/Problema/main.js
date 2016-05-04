function opMatematicas(){
	var suma,resta,multiplicacion,division,residuo;
	var operacion = prompt("Elige Operación(suma,resta,multiplicacion,division o residuo)");
	var num1 = Number(prompt("Ingrese primer número"));
	var num2 = Number(prompt("Ingrese segundo número"));

	switch(operacion){
		case "suma":
		 var sumando = num1+num2;
		 	document.write(sumando);
		 	break;

		case "resta":
		 var restando = num1 - num2;
		 	document.write(restando);
		 	break;

		case "multiplicacion":
		 var multiplicando = num1*num2;
		 	document.write(multiplicando);
		 	break;

		case "division":
		 var dividiendo = num1/num2;
		 	document.write(dividiendo);
		 	break;

		case "residuo":
		 var residuo = num1%num2;
		 	document.write(residuo);
		 	break;

	}

}
opMatematicas()



