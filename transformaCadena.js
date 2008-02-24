
/*
	transformaCadena - proyecto
	funcion que transforma una cadena de caracteres a su equivalente en las cartas de letras.
	parametros:
		cadena: Es la cadena de caracteres que se desea transformar.
		identificadorPadre:Es el identificador del nodo padre-elemento en el que se van a agregar los hijos "img" 
*/

function transformaCadena(cadena,identificadorPadre,ancho,alto)
{
   var i;
   if(cadena!=null)
   {
   cadena = cadena.toUpperCase(cadena);   
   for(i = 0; i<cadena.length;i++)
      {
         if(cadena.charAt(i)!=" ")
         {                                 			
				creaElementoImagen(identificadorPadre,"carta"+i,ancho,alto,'carta'+cadena.charAt(i)+'.gif');                  
         }
         else
         {           
				creaElementoImagen(identificadorPadre,"carta"+i,ancho,alto,'carta00.gif');            
         }
      }		
    }
    else
       alert("No existe contenido que tranformar...")
}
