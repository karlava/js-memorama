
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

var puntaje;
var intentos;
var intentosFallidos;

var destreza;
var textoDestreza;

/* Si el juego recibe los eventos o los ignora */
var memoramaHabilitado = false;

/* Si se esta jugando o esperando el inicio */
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

function reiniciarJuego( ) {
	var i;

	juegoCorriendo = false;

	detenerCrono( );
	inicializarCrono( );

	for ( i=0; i<numeroCartas; i++ ) {
		arregloEstadosMemorama[i] = 0;
		ocultarImagen( i )
	}

	textoDestreza.value = '0%';

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

		puntaje = 0;
		intentos = 0;
		intentosFallidos = 0;
		destreza = 0;
	}
}

function finalizarJuego( ) {
	detenerCrono();
	
	obtenerPuntaje();

	obtenerParcial();

	memoramaHabilitado = false;
}

function obtenerPuntaje( ) {
	var bonusNC, bonusD, bonusI, bonusT;
	var subTotalD, subTotalI, subTotalT;

	/* Bonus de numero de cartas */
	bonusNC = numeroCartas * 1000;
	
	/* Bonus de destreza */
	bonusD = destreza / 100;
	subTotalD = bonusNC * bonusD;
	
	/* Bonus de tablero con numero impar de cartas */
	bonusI = cartasRestantes * 3000;
	subTotalI = subTotalD + bonusI;

	/* Bonus de tiempo */
	bonusT = ( minutos * 60 ) * 10;
	bonusT += segundos * 10; 
	bonusT += decimas;
	bonusT *= 10;
	subTotalT = subTotalI - bonusT;

	puntuacion = ( bonusNC * bonusD ) + bonusI - bonusT;

	alert('Bonus Numero Cartas: ' + bonusNC + '\n * ' + bonusD + ' de Destreza: = ' + subTotalD + '\n + ' + bonusI + ' de Bonus Impar: = ' + subTotalI + '\n - ' + bonusT + ' de Tiempo: = ' + subTotalT + '\n\n TU PUNTUACION = ' + puntuacion);
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
					intentos+=1;
					calcularDestreza( );

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

		intentos += 1;
		intentosFallidos += 1;
		calcularDestreza( );
	}

	}
}

function calcularDestreza( ) {
	destreza = Math.round( (intentos - intentosFallidos) * 100 / intentos );

	if( textoDestreza == null ) {
		textoDestreza = document.getElementById('destreza');
	}

	if( ! isNaN(destreza) ) {
		textoDestreza.value = destreza + '%';
	}
}

function mostrarImagen( idImagen ) {
	var reemplazarImagen = document.getElementById('carta'+idImagen);
	reemplazarImagen.src = 'carta'+arregloImagenesMemorama[idImagen]+'.gif';
}

function ocultarImagen( idImagen ) {
	var reemplazarImagen = document.getElementById('carta'+idImagen);
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
