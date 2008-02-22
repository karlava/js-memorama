
/*
	@desc: Crea las tags html que seran usadas en el juego, mediante el numero de columnas y de filas pasado a traves de la url.
	@author: Jorge Sampayo jdsampayo@gmail.com

	Copyright: 2008 Jorge Sampayo, Rodolfo Anaya, Jazmine Aguilar

	This file is part of js-memorama: http://code.google.com/p/js-memorama/

    js-memorama is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    js-memorama is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Foobar.  If not, see <http://www.gnu.org/licenses/>.
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
			if( ( columnas[1] * filas[1] ) <= 50 ) {
				var i,j;
				var contadorCartas=0;

			/* crea la tabla incial */
				document.writeln('<table border="1" style="text-align:center; margin: 0em auto 1em auto;">');
	  	   		document.writeln('<tbody id="memorama">');

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

			/* cierra la tabla */
				document.writeln('<\/tbody>');
				document.writeln('<\/table>');

				inicializarMemorama(contadorCartas);
			}
		}
	}
} else {
	alert('Por favor, introduce los paramentros en la URL como sigue: memorama.html?columnas=3&filas=4');
}
