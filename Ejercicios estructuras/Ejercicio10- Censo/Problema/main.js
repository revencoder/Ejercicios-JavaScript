function censo(){
	var suma = 0;
	var sumamujeres = 0;
	var sumavarones = 0;
	var mayoresvar = 0;
	do{
		var dni = parseInt(prompt("Ingreso número de DNI"));
		
	if(dni > 0)
	{
		var edad = parseInt(prompt("Ingrese su edad"));
		var sexo = prompt("Ingrese Femenino o Masculino");
		
		if(sexo == "Masculino")
		{
			sumavarones = sumavarones + 1;
			if(edad>=16&&edad<=65)
				mayoresvar = mayoresvar + 1;
		}
		if(sexo == "Femenino")
		{
			sumamujeres = sumamujeres + 1;
		}
		suma = suma + 1 ;
		}
	}

	while(dni != 0);
		document.write("total de personas: " ,suma, "<br>");
		document.write("total de mujeres censadas: ",sumamujeres, "<br>");
		document.write("total de varones censados: ",sumavarones, "<br>");
		document.write("varones mayores de 16 y menores de 65: ",mayoresvar, "<br>");
	}
censo()



