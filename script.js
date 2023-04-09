window.addEventListener('load', function() {
const boton = document.getElementById('cambiar-imagen');
const imagen = document.getElementById('imagen').getElementsByTagName('img')[0];

const imagenes = [
	'IMG/Capybara01.png','IMG/Capybara02.png','IMG/Capybara03.jpg','IMG/Capybara04.jpg','IMG/Capybara05.png',
    'IMG/Capybara06.png','IMG/Capybara07.png','IMG/Capybara08.png','IMG/Capybara09.png'
];

let indiceImagen = 0;

boton.addEventListener('click', function() {
    indiceImagen++;
    if (indiceImagen >= imagenes.length) {indiceImagen = 0;}
    imagen.src = imagenes[indiceImagen];
});
});
