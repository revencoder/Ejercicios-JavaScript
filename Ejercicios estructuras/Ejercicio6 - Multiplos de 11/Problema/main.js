function multiplo(){
	var salida='';
	var sum=0;
	for(numero=11;numero<3000;numero=numero+11){
			salida=salida+numero+'<br>';
			sum=sum+numero;
	}
document.write("<br>" + salida + "<br>");
document.write("<br>", "La Suma de todos ellos es = " +sum);	
}

multiplo()



