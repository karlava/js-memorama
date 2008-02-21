/*
   creaCookie() - proyecto
   Esta funcion se encarga de crear la cookie con datos iniciales para las puntuaciones iniciales.
*/

function creaCookies()
{
 document.cookie = null; 
 var cook = document.cookie;
 
 var parametros;
 //alert("..........." + cook + "sss");
 if(cook==null || cook=="")
 {
     parametros = agregaParametro("cecy=1000;patypaletas=900;carmina=800;chaps=700;","sampayo","600",";");
     document.cookie = escape(parametros);
     //alert("crea cookie" + unescape(document.cookie));  
 }  
}