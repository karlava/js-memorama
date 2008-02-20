/*
	buscaParametroUrl - proyecto
	parametros:
		parametro: este hace referencia al parametro del cual se esta buscando su valor dentro de la cadena de la URL.
	valor de retorno:
		res: Esta variable contiene el valor del parametro que se esta buscando dentro de la URL.
		     En caso de no encontrar una coincidencia devolvera null. 
*/
function buscaParametroUrl(parametro)
   {
      var elementos = document.location.href.split('?');      
      var params = elementos[1].split('&');
      var i=0;
      var res;
      var bandera=0;
      if(parametro != null)
      {
	      while(params[i]!= null && bandera==0)
	         {            
	            var param = params[i].split('=');
	            if(param[0]==parametro)
	               {
	                  res = param[1];
	                  bandera++;
	               }
	            i++;
	         }
	   }
	   else
	      alert("Error no se recivio el parametro esperado");
      return res;
   }