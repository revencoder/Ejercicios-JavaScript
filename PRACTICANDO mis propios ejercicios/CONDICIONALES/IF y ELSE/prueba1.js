// a continuación se muestra un mensaje
function condicionales(){
	var ubicacion = prompt("¿Dónde vives?");

	if(ubicacion === "Lima"){
		alert("La moneda es Nuevos Soles")
	} 
	else if(ubicacion === "Santiago"){
		alert("La moneda es Pesos Chilenos")
	}
	else if(ubicacion === "Mexico DF"){
		alert("La moneda es Pesos Mexicanos")
	}
	else{
		alert("No podemos identificar cual es la moneda")
	} 

}
condicionales()