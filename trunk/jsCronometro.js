/*
	Basado en el código de Iván Nieto Pérez de mundojavascript.com
	Adaptado al memorama por Jorge Sampayo, jdsampayo[arroba]gmail.com
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
