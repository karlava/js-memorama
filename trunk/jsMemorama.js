
/*
	jsmemorama - proyecto
*/

var cartaVolteada = null;
var cartaActual = null;
var cartasRestantes = 0;



var memoramaHabilitado = true;

/* el "hashmap" del memorama */
var memorama;

/* contiene el estado de las cartas: 1 boca arriba, 0 boca abajo; */
var matrizMemorama;

function inicializarMemorama( contadorCartas ) {
	var i;

	numeroCartas = contadorCartas;

	matrizMemorama = new Array(numeroCartas)
	memorama = new Array(numeroCartas)

	for ( i=0; i<numeroCartas; i++ ) {
		matrizMemorama[i] = 0;
	}

	barajearMemorama( );
}

function barajearMemorama( ) {
	memorama[0] = 'A';	
	memorama[1] = 'B';	
	memorama[2] = 'A';	
	memorama[3] = 'B';
	memorama[4] = 'C';	
	memorama[5] = 'C';
}

function mostrarCarta( idCarta ) {

	/* Si la carta no esta boca arriba */
	if ( matrizMemorama[idCarta] == 0 ) {

	/* Si no esta esperando click para regresar las tarjetas a posicion anterior */
	if ( memoramaHabilitado == true ) {
		cartaActual = idCarta;

		if ( cartaVolteada != null ) {

			if ( cartaActual != cartaVolteada ) {
				mostrarImagen( cartaActual );
			
				if (memorama[cartaActual] == memorama[cartaVolteada]) {
					alert("acertaste");
					cartasRestantes -= 2;

					matrizMemorama[cartaActual] = 1;
					matrizMemorama[cartaVolteada] = 1;

					cartaVolteada = null;
					cartaActual = null;

					if( cartasRestantes == 0 ) {
						alert("felicidades, ganaste");
					}
				}
				else {
					alert("fallaste");
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
		alert("guardar cartas con ids: " + cartaVolteada + " " + cartaActual);
		ocultarImagen( cartaVolteada );
		ocultarImagen( cartaActual );
		memoramaHabilitado = true;
		cartaVolteada = null;
		cartaActual = null;
	}

	}
}

function mostrarImagen( idImagen ) {
	alert("con id: "+idImagen);
	reemplazarImagen = document.getElementById('carta'+idImagen);
	reemplazarImagen.src = 'carta'+memorama[idImagen]+'.gif';
	alert("imagen: "+memorama[idImagen]);
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
