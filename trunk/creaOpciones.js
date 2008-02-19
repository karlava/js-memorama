/*
	transformaCadena - proyecto
	funcion que crea un nodo elemento "img" a un nodo padre que recive como parametro.
	parametros:
		IdentificadorPadre: Es el identificador del nodo padre al que se le creara un nodo hijo de tipo "tipoElemento".
		identificador:Es el identificador por medio del cual se podra reconocer al nodo "img" que se va a crear.(esto 
		por lo que habiamos quedado de que ibamos a identificar las imagenes en base a su fila columna, asi, solo 
		mandariamos en este parametro, por ejemplo, "01","11", ...)
		tipoElemento: se refiere al tipo de nodo elemeneto que se va a crear, por ejemplo "img","tr","td","h1",...
	Parametros de retorno: una variable que hace referencia al elemento que se acaba de crear en la funcion.
	
	rd;amm;ass 
*/
function creaOpciones(cadena,separador,identificadorPadre)
{  
   var i;
   var j=0;
   var idopc=0;
   var pos;
   var subc;
   var elemento;
   for(i=0;i<cadena.length-1;)
   {      
      pos=i;      
      j=cadena.indexOf(separador,pos);
      subc = cadena.substring(i,j);
      elemento = creaElemento(identificadorPadre,"opc"+idopc,"option");
      creaAtributoElemento("opc"+idopc,"value",idopc);      
      creaElementoTexto("opc"+idopc,subc);
      i=j+1;
      idopc++;
   } 
}