/*
    agregaParametro-Proyecto
    Esta funcion se encarga de agregar conjuntos "variable"="valor"separandolos por medio del caracter que se le mande
    como separador, si se da el caso de que una variable ya este contenida dentro de la cadena del parametro "cadena1"
    la funcion se encarga de buscar y remplazar el "valor" de la "variable" esta podra ser util por ejemplo al 
    agregar elementos a las cookies.
    Parametros:
    	cadena1:Este parametro contiene el conjunto de valores "variable"="valor" al que se le desea agregar o modificar 
    			  un conjunto.
    	variable: este parametro hace referencia al nombre de la variable que se va a modificar o agregar al parametro 
				    "cadena1".
		valor: este parametro hace referencia al valor que se desea asociar a la "variable" que se va a modificar o agregar 
				 al parametro "cadena1".
		seperador: este hace referencia al caracter que se usa o usara para separar el conjunto de elementos
					  "variable" = "valor".
	  valor de retorno: 
	  	cadena1: este contiene el nuevo valor de "cadena1" en el cual ya fueron hechas la modificaciones "variable" = "valor".
    	
*/
function agregaParametro(cadena1,variable,valor,separador)
{
   var i;
   var j=0;
   var subc;
   if(cadena1==null||cadena1=="")
   {            
            cadena1 = variable+"="+valor+separador;
            i=cadena1.length;
            bandera=1;
   }
   else
   {
	   for(i=0;i<cadena1.length-1;)
	   {      
	      var x=0;
	      var y=0;
	      var variable1;
	      var valor1;
	      var cadena2;
	      var cadena3;
	      var bandera=0; 
	      j=cadena1.indexOf(separador,i);
      	subc = cadena1.substring(i,j);
			y = subc.indexOf("=",0); 				
			variable1=subc.substring(x,y);
			valor1=subc.substring(y+1,subc.length);
			if(variable==variable1)
			   {
			      if(i!=0)
			         {	            
			            cadena2 = cadena1.substring(0,i);
			            cadena3 = cadena1.substring(j+1,cadena1.length);
			            cadena1 = cadena2 + variable1 + "=" + valor + separador + cadena3;
			            bandera = 1;
			         }   
			      else
			         {				            
			            cadena3 = cadena1.substring(j+1,cadena1.length);
			            cadena1 = variable1 + "=" + valor + separador + cadena3;
			            bandera = 1;
			         }
			   } 
      i=j+1;      
      if(bandera==1)
         i=cadena1.length;
	   }
	   if(bandera==0) 
	      {             
	         cadena1 = cadena1 + variable+"="+valor+separador;
	      }
	}  
   return cadena1;  
}