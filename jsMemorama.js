
/*
	@desc: Este codigo se encarga de la funcion del juego del memorama, en el ambito de jugarlo en si.
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

/* La carta que esta volteada del turno anterior */
var cartaVolteada;
/* La carta que se acaba de voltear en este turno */
var cartaActual;

var numeroCartas = 0;
var cartasRestantes;

/* Si el juego recibe los eventos o los ignora */
var memoramaHabilitado = false;
var juegoCorriendo = false;

/* el "hashmap" del memorama 
   la posicion del arreglo es el id de la carta
   el valor es la imagen

	ej. memorama[0] = 'A';  la cartaO -> imagenA
*/
var arregloImagenesMemorama;

/* contiene el estado de las cartas
	1 boca arriba, 0 boca abajo; 
*/
var arregloEstadosMemorama;

function reiniciarJuego( ) {
	var i;

	juegoCorriendo = false;

	detenerCrono( );
	inicializarCrono( );

	for ( i=0; i<numeroCartas; i++ ) {
		arregloEstadosMemorama[i] = 0;
		ocultarImagen( i )
	}

	iniciarJuego( );
}

function iniciarJuego( ) {
	if( juegoCorriendo == false ) {
	/* Barajear Memorama */
		fisherYates( arregloImagenesMemorama );

		cartaActual = null;
		cartaVolteada = null;
		cartasRestantes = numeroCartas;

		iniciarCrono( );
		memoramaHabilitado = true;
		juegoCorriendo = true;
	}
}

function finalizarJuego( ) {
	detenerCrono();
	
	alert("¡¡¡Felicidades!!! Ganaste");

	obtenerParcial();

	memoramaHabilitado = false;
}

function inicializarMemorama( contadorCartas ) {
	var i, j;

	numeroCartas = contadorCartas;

	arregloEstadosMemorama = new Array(numeroCartas);
	arregloImagenesMemorama = new Array(numeroCartas);

	for ( i=0; i<numeroCartas; i++ ) {
		arregloEstadosMemorama[i] = 0;
	}

	/* Rellenarlo inicialmente con los pares de cartas
		de la forma [0],[1] = 'A'; [2],[3] = 'B', etc */
	for ( i=0, j=0; i<numeroCartas; i+=2, j++ ) {
		/* el codigo de la 'A' comienza en 65 */
		arregloImagenesMemorama[i] = String.fromCharCode(65+j);
		arregloImagenesMemorama[i+1] = String.fromCharCode(65+j);
	}
}

function mostrarCarta( idCarta ) {

	/* Si la carta no esta boca arriba */
	if ( arregloEstadosMemorama[idCarta] == 0 ) {

	/* Si no esta esperando click para regresar las tarjetas a posicion anterior */
	if ( memoramaHabilitado == true ) {
		cartaActual = idCarta;

		if ( cartaVolteada != null ) {

			if ( cartaActual != cartaVolteada ) {
				mostrarImagen( cartaActual );
			
				if (arregloImagenesMemorama[cartaActual] == arregloImagenesMemorama[cartaVolteada]) {
					cartasRestantes -= 2;

					arregloEstadosMemorama[cartaActual] = 1;
					arregloEstadosMemorama[cartaVolteada] = 1;

					cartaVolteada = null;
					cartaActual = null;

					if( cartasRestantes <= 1 ) {
						finalizarJuego( );
					}
				}
				else {
					memoramaHabilitado = false;
				}
			}
			/* else -> escogio la misma carta dos veces */

		}
		else {
			cartaVolteada = cartaActual;
			mostrarImagen( cartaActual );
		}
	}
	else {
		ocultarImagen( cartaVolteada );
		ocultarImagen( cartaActual );
		memoramaHabilitado = true;
		cartaVolteada = null;
		cartaActual = null;
	}

	}
}

function mostrarImagen( idImagen ) {
	reemplazarImagen = document.getElementById('carta'+idImagen);
	reemplazarImagen.src = 'carta'+arregloImagenesMemorama[idImagen]+'.gif';
}

function ocultarImagen( idImagen ) {
	reemplazarImagen = document.getElementById('carta'+idImagen);
	reemplazarImagen.src = 'carta.gif';
}

/* Algoritmo para desordenar un arreglo 
   @author: Ashley Pond V. http://sedition.com/perl/javascript-fy.html
*/
function fisherYates ( myArray ) {
  var i = myArray.length;
  if ( i == 0 ) return false;

  while ( --i ) {
     var j = Math.floor( Math.random() * ( i + 1 ) );
     var tempi = myArray[i];
     var tempj = myArray[j];
     myArray[i] = tempj;
     myArray[j] = tempi;
   }
}
