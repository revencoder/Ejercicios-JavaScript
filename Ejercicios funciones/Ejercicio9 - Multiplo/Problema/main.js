/*function mult10(x)
{
var salida='Multiplos de '+x+'\n';
var mult=0;
for(i=1;i<=10;i++)
{
mult=mult+x;
salida=salida+mult+' - ';
}
return salida;
}
a=parseInt(prompt('Escribe un numero entero',''));
alert(mult10(a));*/


function multiplo(){
	a=parseInt(prompt('Escribe un numero entero',''));
	var mult=0;
	var contador=" ";
	for(i=1;i<=10;i++){
		mult+=a;
		contador = contador+mult+"<br>";
	}
	document.write(contador);
}
multiplo()