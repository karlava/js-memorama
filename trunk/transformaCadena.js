
/*
	transformaCadena - proyecto
*/

function transformaCadena(cadena,identificador)
{
   var i;
   var elemento;
   elemento = document.getElementById(identificador);
   if(cadena!=null)
   {
   cadena = cadena.toLowerCase(cadena);   
   for(i = 0; i<cadena.length;i++)
      {
         var imagen=document.createElement("img");
         if(cadena.charAt(i)!=" ")
         {                                 
            imagen.src='carta0'+cadena.charAt(i)+'.gif';      
         }
         else
         {           
            imagen.src='carta00.gif';
         }
         imagen.width="52";
         imagen.height="52";
         elemento.appendChild(imagen);
      }		
    }
    else
       alert("No existe contenido que tranformar...")
}
