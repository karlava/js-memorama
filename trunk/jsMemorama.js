
/*
	jsmemorama - proyecto
*/

/* La carta que esta volteada del turno anterior */
var cartaVolteada = null;
/* La carta que se acaba de voltear en este turno */
var cartaActual = null;

var cartasRestantes = 0;

var memoramaHabilitado = true;

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
	cartasRestantes = numeroCartas;

	arregloEstadosMemorama = new Array(numeroCartas);
	arregloImagenesMemorama = new Array(numeroCartas);

	for ( i=0; i<numeroCartas; i++ ) {
		arregloEstadosMemorama[i] = 0;
	}

	/* Rellenarlo inicialmente con los pares de cartas
		de la forma [0],[1] = 'A' [2],[3] = 'B', etc */
	for ( i=0, j=0; i<numeroCartas; i+=2, j++ ) {
		/* el codigo de la 'A' comienza en 65 */
		arregloImagenesMemorama[i] = String.fromCharCode(65+j);
		arregloImagenesMemorama[i+1] = String.fromCharCode(65+j);
	}
	alert("si");
	/* Barajear Memorama */
	fisherYates( arregloImagenesMemorama );
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

					if( cartasRestantes == 0 ) {
						alert("felicidades, ganaste");
					}
				}
				else {
					memoramaHabilitado = false;
				}
			}
			else {
				alert("escoje otra");				
			}

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
  por: Ashley Pond V. http://sedition.com/perl/javascript-fy.html
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
