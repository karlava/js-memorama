
/*
	jsmemorama - proyecto

	jsCreaTablero, crea las tags de html que seran usadas en el juego, mediante numero de columnas y de filas

*/

var urlActual = document.location.href.split('?');   // la URL

if( urlActual.length > 1 ) {

	var arregloVariables = urlActual[1].split('&');   //lo que trae la URL como paramentros

	if(arregloVariables.length == 2) {
	
		var columnas = arregloVariables[0].split('=');	
		var filas = arregloVariables[1].split('=');

	    /* checa si el nombre de los parametros es correcto */
		if( columnas[0] == "columnas" && filas[0] == "filas" ) {
			/* checa si el numero de imagenes no excede el limite */
			if( ( columnas[1] * filas[1] ) <= 25 ) {
				var i,j;
				var contadorCartas=0;

			/* recorre las columnas */

				for ( i=0; i<columnas[1]; i++ ) {
					document.writeln('<tr>');
				
					for ( j=0; j<filas[1]; j++ ) {
						document.writeln('<td>');
						document.writeln('<img id="carta' + contadorCartas + '" src="carta.gif" alt="carta" width="72" height="72" onclick="javascript: mostrarCarta(' + contadorCartas + ');"\/>');
						document.writeln('<\/td>');

						contadorCartas++;
					}

					document.writeln('<\/tr>');
				}

				inicializarMemorama(contadorCartas);
			}
		}
	}
} else {
	alert('Por favor, introduce los paramentros en la URL como sigue: memorama.html?columnas=3&filas=4');
}
