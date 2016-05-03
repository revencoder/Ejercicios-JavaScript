var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
 
var numero = Number(prompt("Introduce tu número de DNI"));
document.write("El número de DNI proporcionado es: ", numero,"<br>");
 
if(numero < 0 || numero > 99999999) {
  alert("El número proporcionado no es válido");
}
else {
  var letraCalculada = numero % 23;
  if(letraCalculada<=23) {
    /*document.write("El número proporcionado es: ",letraCalculada,"<br>");*/
    document.write("letra es: ",letras[letraCalculada]);
  }
  else {
    alert("El número raro");
  }
}




