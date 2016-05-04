
var numero = prompt("Introduce un número entero");
var resultado = parImpar(numero);


function parImpar(numero){
	if(numero % 2 == 0){
		document.write("Es par");
	}
	if(numero % 2 == 1){
		document.write("Es impar");
	}
}

parImpar()



