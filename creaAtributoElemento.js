/*
   Esta funcion establece un atributo a un elemento dado en base al identificador del elemento.
   paramatros:
   	identificador: Es el atributo por medio del cual se buscara al elemento dentro del arbol del documento.
   	nombreAtributo: Es el nombre con el que se creara el nuevo atributo.
   	valorAtributo: Es el valor con el que se creara el nuevo atributo.
*/
function creaAtributoElemento(identificador,nombreAtributo,valorAtributo)
{  
   var elemento = document.getElementById(identificador);
   elemento.setAttribute(nombreAtributo,valorAtributo);
   var elemento2 =  document.getElementById(identificador);
   alert (elemento2.getAttribute(nombreAtributo));
}