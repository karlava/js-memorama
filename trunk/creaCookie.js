/*
   creaCookie() - proyecto
   Esta funcion se encarga de crear la cookie con datos iniciales para las puntuaciones iniciales.
*/

function creaCookie()
{
 var cook = document.cookie;
 var parametros;
 if(cook==null || cook=="")
 {
     alert("ss");
     parametros = agregaParametro("cecy=1000;patypaletas=900;carmina=800;chaps=700;","sampayo","600",";");
     document.cookie = escape(parametros);  
 }  
 else
}