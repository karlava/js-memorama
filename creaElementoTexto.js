/*
	transformaCadena - proyecto
	funcion que crea un nodo elemento "img" a un nodo padre que recive como parametro.
	parametros:
		IdentificadorPadre: Es el identificador del nodo padre al que se le creara un nodo hijo de tipo "texto".
		texto:es el texto que formara parte del nodo texto. 
*/
function creaElementoTexto(identificadorPadre,texto)
{  
   var padre = document.getElementById(identificadorPadre);   
   var elemento=document.createTextNode(texto);
   padre.appendChild(elemento);
}