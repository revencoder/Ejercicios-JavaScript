
var vector = [2,4,5,6,7,2,8,1,8,3];
var longitud = vector.length;

var menor = null;
for (var i = 0; i < longitud - 1; i++){
	var actual = vector [i];
	var siguiente = vector [i+1];
	if (menor != null){
		if (menor > siguiente)
			menor = siguiente;
	}
	else{
		if (actual < siguiente)
			menor = actual;
		else
			menor = siguiente;
	}
}
 console.log (menor)








