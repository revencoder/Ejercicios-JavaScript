/*function banco(){
	var numCuenta = Number(prompt("Ingrese su numero de cuenta es: "));
	var nomCliente = prompt("Su nombre");
	var c;
	var saldo=null;

	do{
		saldo = Number(prompt("Ingrese su saldo"));
	}

	while(saldo > 0 || saldo = 0)

}
:) Cecilia y Stefanny (Equipo)

banco()*/


function banco(){
var cuenta;
var cliente;
var saldo=0;
var saldoacre=0;

do{
  cuenta=parseInt(prompt('Ingrese nro de cuenta:'));    
  if (cuenta>=0)
  {
   cliente=prompt('Ingrese el nombre del cliente:');
    saldo=parseFloat(prompt('Ingrese su saldo actual:'));
      if (saldo>0)
      {
        saldoacre+=saldo;
        document.write(cliente+' tiene saldo acreedor<br>',saldo,"<br>");
      }
      else
      {
        if (saldo<0)
        {
          document.write(cliente+' tiene saldo deudor<br>',saldo,"<br>");
        }
        else
        {
          document.write(cliente+' tiene saldo nulo<br>',saldo,"<br>");
        }
      }      
    }
  }while(cuenta>0);
document.write('Suma total de acreedores:'+saldoacre);
}

banco()



