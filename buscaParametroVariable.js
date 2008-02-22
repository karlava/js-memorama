/*
       buscaParametroVariable - proyecto
    Esta funcion se encarga de buscar el nombre de una variable en base a la posicion que se le pida dentro
    de un conjunto de elementos Variable=valor 
*/
function buscaParametroVariable(cadena,parametro,separador,posicion)
{   
   var i;
   var j=0;
   var subc;
   var subc2;
   var res;
   var cont=0;
   //alert("busca pos" + posicion);
   for(i=0;i<cadena.length-1;)
   {     	
		var y=0;            
      j=cadena.indexOf(separador,i);  
      if(j<0)
         {
            subc = cadena.substring(i,cadena.length);
            i=cadena.length;
         }
      else
         {
            subc = cadena.substring(i,j);
            i=j+1;
         }
	   if(posicion == cont)
	      { 
	         y=subc.indexOf("=",0);
	         res = subc.substring(0,y);
	         i = cadena.length;
	         
	      }
	   else
	      {				
				cont++;	         
	      }
   }
   return res;
}