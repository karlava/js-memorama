/* creaTablaPuntuaciones-proyecto
	Esta funcion se encarga de crear la tabla de puntuaciones en base a la informacion de los jugadores que esta almacenada 
	en la cookie y al parametro que recive como "nodoPadre", el cual tiene que ser relacionado con una tabla.
*/
function creaTablaPuntuaciones(numeroFil,numeroCol,nodoPadre,ancho,alto)
   {
      creaCookies();
      var cook;
      var i=0;
      var j;
      cook = unescape(document.cookie);
      var fin = 	numeroFil + 1;
      for(i=0; i < fin; i = i + 1)
      {
         creaElemento(nodoPadre,"fila"+i,"tr")
         for(j=0;j<numeroCol;j++)
         {
            if(j==0 && i==0)
               {
                  creaElemento("fila"+i,"columna"+j,"td");
                  transformaCadena("  jugador  ","columna"+j,ancho,alto);
                  creaElemento("columna"+j,"esp","br");
                  creaElemento("columna"+j,"esp","br");
               }
            else if(j==1 && i==0)
               {
                  creaElemento("fila"+i,"columna"+j,"td");
                  transformaCadena("  puntos  ","columna"+j,ancho,alto);
                  creaElemento("columna"+j,"esp","br");
                  creaElemento("columna"+j,"esp","br");
               }
            else if(j==0)
               {
                  var jugador = buscaParametroVariable(cook,"",";",i-1);
                  creaElemento("fila"+i,jugador+j,"td");
                  transformaCadena(jugador,jugador+j,ancho,alto);
                  creaAtributoElemento(jugador+j,"style","text-align:left;");
               }
            else if(j==1)
               {
                  var puntos = buscaParametroValor(cook,"",";",i-1);
                  creaElemento("fila"+i,"jugadorp"+j,"td");
                  transformaCadena(puntos,"jugadorp"+j,ancho,alto);
               }
         }
      }
   }