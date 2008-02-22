
/*
	@desc: Crea las tags html que seran usadas en el juego, mediante el numero de columnas y de filas pasado a traves de la url.
	@author: Jorge Sampayo jdsampayo@gmail.com; basado en el código de Iván Nieto Pérez de mundojavascript.com

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

var cronoId = null;
var cronoEjecutandose = false;
var decimas, segundos, minutos;

var textoCronoGlobal, textoCronoParcial;

function detenerCrono() {
	if (cronoEjecutandose) {
		clearTimeout(cronoId);
	}

	cronoEjecutandose = false;
}

function inicializarCrono() {
//inicializa contadores globales
	decimas = 0;
	segundos = 0;
	minutos = 0;

//pone a cero los marcadores
	textoCronoGlobal = document.getElementById('textoCronoGlobal');
	textoCronoParcial = document.getElementById('textoCronoParcial');

	textoCronoGlobal.value = '00:00:0';
	textoCronoParcial.value = '00:00:0';
}

function mostrarCrono() {  
//incrementa el crono
	decimas++;
	if ( decimas > 9 ) {
		decimas = 0;
		segundos++;
		if ( segundos > 59 ) {
			segundos = 0;
			minutos++;
			if ( minutos > 99 ) {
				alert('Limite de la cuenta');
				detenerCrono();
				return true;
			}
		}
	}

//configura la salida
	var valorCrono = '';
	valorCrono = (minutos < 10) ? '0' + minutos : minutos;
	valorCrono += (segundos < 10) ? ':0' + segundos : ':' + segundos;
	valorCrono += ':' + decimas;

	textoCronoGlobal.value = valorCrono;

	cronoId = setTimeout(mostrarCrono, 100);
	cronoEjecutandose = true;

	return true;
}

function iniciarCrono() {
	detenerCrono();
	inicializarCrono();
	mostrarCrono();
}

function obtenerParcial() {
//obtiene cuenta parcial
	textoCronoParcial.value = textoCronoGlobal.value;
}
