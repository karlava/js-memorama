
/*
	jsmemorama - proyecto
*/

function mostrarImagen( idImagen ){
	reemplazarImagen = document.getElementById('imagen'+idImagen);
	alert('Imagen: '+idImagen);

	reemplazarImagen.src = 'carta'+idImagen+'.gif';
	alert('Reemplazo: '+reemplazarImagen.src);
}
