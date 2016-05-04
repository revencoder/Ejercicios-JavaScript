function palindromo(){
	var palindromo = prompt("Ingrese algún posible palidromo");
	palindromo = palindromo.toLowerCase();
	var letrasEspacios = palindromo.split(" ");
	

	var palindromoSinEspacios = "";
	for(i in letrasEspacios){
		if(letrasEspacios[i] != " "){
			palindromoSinEspacios += letrasEspacios[i];
		}
	}
	var letras = palindromoSinEspacios.split("");
	var letrasReves = palindromoSinEspacios.split("").reverse();

	var iguales = true;
	for(i in letras){
		if(letras[i] == letrasReves[i]){

		}
		else{
			iguales = false;
		}
	}
	var resultado = " ";
	if(iguales){
		resultado += " Es un palindromo.";
	}
	else{
		resultado += " No es un palindromo.";
	}
	document.write(resultado);
}
palindromo()



