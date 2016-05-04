 function ordenar(x1,x2,x3)
  {
    if (x1<x2 && x1<x3)
    {
      document.write(x1+" ");
      if (x2<x3)
      {
        document.write(x2+" "+x3);
      }
      else
      {
        document.write(x3+" "+x2);
      }
    }
    else
    {
      if (x2<x3)
      {
        document.write(x2+" ");
        if (x1<x3)
        {
          document.write(x1+" "+x3);
        }
        else
        {
          document.write(x3+" "+x1);
        }
      }
      else
      {
        document.write(x3+" ");
        if (x1<x2)
        {
          document.write(x1+" "+x2);
        }
        else
        {
          document.write(x2+" "+x1);
        }
      }
    } 
  }

  var valor1,valor2,valor3;
  valor1=prompt("Ingrese primer valor:"," ");
  valor1=parseInt(valor1);
  valor2=prompt("Ingrese segundo valor:"," ");
  valor2=parseInt(valor2);
  valor3=prompt("Ingrese tercer valor:"," ");
  valor3=parseInt(valor3);
  document.write("Los tres valores ingresados son:a ",valor1," ",valor2," ",valor3,"<br>"); 
  document.write("Los valores ordenados de menor a mayor son: ");
  ordenar(valor1,valor2,valor3);



