function agregar(){
	var nombres = [":)","holi","Cómo","te","encuentras"];
	var names = prompt("Ingrese dato");
	nombres.push(names);

	for (names in nombres)
		document.write(nombres[names]+"<br>")

}
agregar()


