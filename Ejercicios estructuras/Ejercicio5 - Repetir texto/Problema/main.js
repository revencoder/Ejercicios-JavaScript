// Escribe aquí tu codigo Javascript

function miTexto(){
	var texto = prompt("Ingrese texto ha repetir");
	var c = prompt("Cuántas veces quieres que se repita");
	for(var i=1; c>=i; i++)
		document.write(texto,"<br>")
}

miTexto()

