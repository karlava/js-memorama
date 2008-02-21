/*
   verificaCookie - proyecto
   Esta funcion se encarga de verificar el contenido de la cookie, en caso de que el jugador que se reciva como
   paramero tenga la puntuacion suficiente como para aparecer dentro del cuadro de mejores puntuaciones, la 
   funcion se encarga de colocarlo en la posicion adecuada, recorriendo a los jugadores necesarios.
*/

function verificaCookie(jugador,puntuacion)
{
	var cook;
	var parametro;
	var i;   
	var j;
	var cadena="";
   creaCookies();
   cook = unescape(document.cookie);
   for(i=0;i<5;i++)
      {
         var puntos;
         var juga;
         var cad;
         cad = buscaParametro(cook,"",";",i);
         juga = cad.substring(0,cad.indexOf("=",0));
         puntos = cad.substring(cad.indexOf("=",0)+1,cad.length);
         if(puntos<puntuacion)
         {               
            cadena = cadena + jugador + "=" + puntuacion + ";";
            jugador = juga;
            puntuacion = puntos;      
         }
         else if(puntos==puntuacion)
         {               
            cadena = cadena + jugador + "=" + puntuacion + ";";
            jugador = juga;
            puntuacion = puntos; 
         }
         else
         {	               
            cadena = cadena + juga + "=" + puntos + ";";
         }
      }
   document.cookie = escape(cadena);           
   
}