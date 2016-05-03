function traduciendo(){
	var palabra = prompt("Ingresa la palabra: casa o mesa o perro o gato");

	switch(palabra){
		case "casa":
			document.write("house");
			break;
		case "gato":
			document.write("cat");
			break;
		case "mesa":
			document.write("table");
			break;
		case "perro":
			document.write("dog");
			break;
		default:
			document.write("No existe palabra");
	}
}

traduciendo()



