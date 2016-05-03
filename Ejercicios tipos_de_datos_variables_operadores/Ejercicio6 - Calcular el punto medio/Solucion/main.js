function puntoMedio(){
	var m,x,y;
	x = [7,-4];
	y = [5,6];
	m = [(x[0] + y[0])/2,(x[1] + y[1])/2];
	alert("El punto medio del segmento \n de extremos, los puntos:\n" + "(" + x + ")" +
	 " y " + "(" + y + ")" +" "+ "es" + " "+ "(" + m+ ")")
	document.write(m);	
}

puntoMedio()



