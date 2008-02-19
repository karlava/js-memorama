
/*
	jsmemorama - proyecto
*/

var cartaVolteada = null;
var cartaActual = null;
var numeroCartas = 4;
var cartasRestantes = numeroCartas;

var memoramaHabilitado = true;

/* el "hashmap" del memorama */
var memorama = new Object;

function barajearMemorama( ) {
	memorama['1'] = 1;	
	memorama['2'] = 3;	
	memorama['3'] = 1;	
	memorama['4'] = 3;
}

function mostrarCarta( idCarta ) {
	if ( memoramaHabilitado == true ) {
		alert("sacaste carta");
		cartaActual = idCarta;
		if ( cartaVolteada != null ) {
			if ( cartaActual != cartaVolteada ) {
				mostrarImagen( cartaActual );
			
				if (memorama[cartaActual] == memorama[cartaVolteada]) {
					alert("acertaste");
					cartasRestantes -= 2;
				}
				else {
					alert("fallaste");
				}
				memoramaHabilitado = false;
			}
			else {
				alert("escoje otra");				
			}

		}
		else {
			alert("primer carta");
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
		alert("guardadas");
	}
}

function mostrarImagen( idImagen ) {
	alert("con id: "+idImagen);
	reemplazarImagen = document.getElementById('carta'+idImagen);
	reemplazarImagen.src = 'carta'+memorama[idImagen]+'.gif';
}

function ocultarImagen( idImagen ) {
	reemplazarImagen = document.getElementById('carta'+idImagen);
	reemplazarImagen.src = 'carta0.gif';
}

/* Para correr funciones al cargar la pagina */
function agregarEvento( objeto, tipo, funcion ){ 
   if (objeto.addEventListener){ 
      objeto.addEventListener( tipo, funcion, false );
   }
   else if (objeto.attachEvent){ 
      objeto["e"+tipo+funcion] = funcion; 
      objeto[tipo+funcion] = function(){ objeto["e"+tipo+funcion]( window.event ); } 
      objeto.attachEvent( "on"+tipo, objeto[tipo+funcion] ); 
   } 
} 
	
agregarEvento( window, 'load', barajearMemorama );
