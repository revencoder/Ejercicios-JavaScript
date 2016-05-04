function info(){
	var frase = prompt("Ingresa alguna frase");
	if(frase==frase.toUpperCase())
		document.write(frase, " :la frase o palabra se encuentra en mayúscula");
	else if(frase==frase.toLowerCase())
		document.write(frase, " :la frase o palabra se encuentra en minúscula");
	else
		document.write(frase, " :la frase o palabra es mixta, tienes mayúsculas y minúsculas");
}
info()

