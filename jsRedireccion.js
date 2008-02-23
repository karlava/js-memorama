
/*
	@desc: Manda a llamar a memorama.html mandandole el numero de filas y columnas
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
    along with js-memorama.  If not, see <http://www.gnu.org/licenses/>.
*/

function jugar( ) {
	var columnasE = document.getElementById('columnas');
	var filasE = document.getElementById('filas');

	var columnas = columnasE.value;
	var filas = filasE.value;

	if( isNaN(filas) || isNaN(columnas) ) {
		alert('Error en el numero de filas o columnas');
	}
	else {
		if( ((filas * columnas) > 50) || ((filas * columnas) < 3) ) {
			alert('Por favor, reviza que el numero total de cartas no exceda las 50 y sea mayor a 2');
		}
		else {
			var filasR = Math.round(filas);
			var columnasR = Math.round(columnas);

			window.location = 'memorama.html?columnas=' + columnasR + '&filas=' + filasR;
		}
	}
}
