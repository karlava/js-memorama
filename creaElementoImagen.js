/*
	transformaCadena - proyecto
	funcion que crea un nodo elemento "img" a un nodo padre que recive como parametro.
	parametros:
		padre: Es el nodo padre al que se le creara un nodo hijo de tipo "img".
		identificador:Es el identificador por medio del cual se podra reconocer al nodo "img" que se va a crear.(esto 
		por lo que habiamos quedado de que ibamos a identificar las imagenes en base a su fila columna, asi, solo 
		mandariamos en este parametro, por ejemplo, "01","11", ...)
		ancho: Hace referencia al ancho que tendra la imagen del nodo hijo que se esta creando.
		alto: Hace referencia a la altura que tendra la imagen del nodo hijo que se esta creando.
		srcc: Hace referencia al atributo source de la imagen.  
*/
function creaElementoImagen(padre,identificador,ancho,alto,srcc)
{  
   var imagen=document.createElement("img");
   imagen.width=ancho;
   imagen.height=alto;
   imagen.src=srcc;
   padre.appendChild(imagen);
   imagen.setAttribute("id",identificador);  
   creaAtributoElemento(identificador,"class","mandemama");
}