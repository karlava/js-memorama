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
*/
function creaElemento(identificadorPadre,identificador,tipoElemento)
{  
   var padre = document.getElementById(identificadorPadre);   
   var elemento=document.createElement(tipoElemento);
   elemento.setAttribute("id",identificador);   
   padre.appendChild(elemento);
   return elemento; 
}