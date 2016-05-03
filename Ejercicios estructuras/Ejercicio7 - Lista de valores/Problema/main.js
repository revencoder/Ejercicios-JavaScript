
function listaValores(){
	var x = 0;
	var total1 = 0;
	var numero;

	while(x<3){
		numero=parseInt(prompt("Ingrese valor de la primera lista: "));
		total1 += numero;
		x++;
	}


	var total2 = 0;
	x = 0;

	while(x<3){
		numero=parseInt(prompt("Ingrese valor de la segunda lista: "));
		total2 += numero;
		x++;
	}

	if(total1 > total2){
		
		document.write("Lista 1 mayor");
	}

	else{
		if(total1 < total2){
		document.write("Lista 2 mayor");

		}

	else{
		document.write("Listas iguales");
		}
	}
}

listaValores()
