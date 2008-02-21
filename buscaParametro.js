/*
    buscaParametro - proyecto
    Esta funcion se encarga de buscar el valor de una variable que se recive  como "parametro" dentro de una cadena que 
    contiene un conjunto de elementos "variable"="valor" tomando como caracter de separacion de elementos el valor que se 
    recive en el parametro "separador". Regresa null en caso de que no encuentre el "parametro" dentro de la "cadena".
*/
function buscaParametro(cadena,parametro,separador)
{   
   var i;
   var j=0;
   var subc;
   var subc2;
   var res;
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
      y=subc.indexOf("=",0);
      subc2 = subc.substring(0,y);
      if(subc2==parametro)
         {
            res = subc.substring(y+1,subc.length);
            i = cadena.length;
         }
      else
         {
            i=j+1;
         }
   }
   return res;
}