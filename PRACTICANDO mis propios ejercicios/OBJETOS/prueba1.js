var persona = {
	edad: 20,
	nombre: "Juan",
	saludo: function(){
		console.log("Hola " + this.nombre);
	}
};

console.log(persona)
console.log (persona.edad)
console.log (persona.nombre)
persona.saludo()
