

var separador= "////////////////////////////////////////////////////////////////";
var factura = {
	empresa : {
		nombre : " ",
		direccion : " ",
		telefono : " ",
		nif : " "
	},
	cliente : {
		nombre : " ",
		direccion : " ",
		telefono : " "
	},
	elementos: [
    { descripcion: "Producto 1", cantidad: 2 , precio: 10.00 },
    { descripcion: "Producto 2", cantidad: 2 , precio: 10.00 },
    { descripcion: "Producto 3", cantidad: 2 , precio: 10.00 }
  	],
	informacion: {
		importe : 0.0,
		igv: 18,
		total:0,
		formadepago : " "
	}
};



//INPUT DE USUARIO

factura.empresa.nombre = prompt("Ingrese el nombre de la empresa");
factura.empresa.direccion = prompt("Ingrese la direccion");
factura.empresa.telefono = prompt("Ingrese telefono");
factura.empresa.nif = prompt("Ingrese el RUC");
factura.cliente.nombre = prompt("Ingrese el nombre del cliente");
factura.cliente.direccion = prompt("Ingrese direccion del cliente");
factura.cliente.telefono = prompt("Ingrese telefono del cliente");

//OUTPUT 
document.write("FACTURA: ","<br>");
document.write("Datos de la empresa: ","<br>");
document.write("Nombre de la empresa: ", factura.empresa.nombre,"<br>");
document.write("Dirección: ", factura.empresa.direccion,"<br>");
document.write("Teléfono: ", factura.empresa.telefono,"<br>");
document.write("RUC: ", factura.empresa.nif,"<br>");
document.write(separador,"<br>");
document.write("Datos del cliente: ","<br>");
document.write("Nombre del cliente: ", factura.cliente.nombre,"<br>");
document.write("Dirección: ", factura.cliente.direccion,"<br>");
document.write("Teléfono: ", factura.cliente.telefono,"<br>");
document.write(separador,"<br>");

//MÉTODO
factura.calculoTotal = function (){
	for(var i=0;i<this.elementos.length;i++){
		this.informacion.importe += this.elementos[i].cantidad*this.elementos[i].precio;
		document.write("Cantidad de elementos: " ,this.elementos[i].cantidad + " ","<br>");
		document.write("Precios: S/. ",this.elementos[i].precio + " ","<br>");
	}

	var igv = (1 + (this.informacion.igv/100));
	this.informacion.total = (this.informacion.importe * igv).toFixed(2);
		document.write("IGV: ", factura.informacion.igv,"%","<br>");
}

factura.total = function (){
	this.calculoTotal();
	alert("TOTAL = " + this.informacion.total + " soles");
}
factura.total();







