// Lista de imágenes de fondo (ajusta según tus archivos en img/)
const fondoImagenes = [
    'img/naturaleza1.jpg',
    'img/naturaleza2.jpg',
    'img/naturaleza3.jpg',
    'img/naturaleza4.jpg'   ,
    'img/naturaleza5.jpg',                  
    'img/naturaleza6.jpg',
    'img/naturaleza7.jpg',              
    'img/naturaleza8.jpg',
    'img/naturaleza9.jpg',  
    'img/naturaleza10.jpg',
    'img/naturaleza11.jpg',
    'img/naturaleza12.jpg',
    'img/naturaleza13.jpg',

    // Añade más si tienes más imágenes
];

// Crea o selecciona el div para la imagen de fondo expandida
let bgDiv = document.getElementById('background-image');
if (!bgDiv) {
    bgDiv = document.createElement('div');
    bgDiv.id = 'background-image';
    document.body.prepend(bgDiv);
}

function cambiarFondo() {
    const random = Math.floor(Math.random() * fondoImagenes.length);
    bgDiv.style.backgroundImage = `url('${fondoImagenes[random]}')`;
}

// Cambia el fondo al cargar la página
cambiarFondo();

// Cambia el fondo cada 20 segundos (20000 ms)
setInterval(cambiarFondo, 20000);

// Efecto simple de animación de fondo (puedes personalizarlo)
document.addEventListener('DOMContentLoaded', () => {
    // Aquí puedes agregar animaciones o efectos visuales si lo deseas
    // Por ejemplo, cambiar la opacidad de los fondos al hacer scroll
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const top = document.getElementById('background-top');
        const bottom = document.getElementById('background-bottom');
        top.style.opacity = 1 - Math.min(scrollY / 300, 1);
        bottom.style.opacity = 1 - Math.min((document.body.scrollHeight - window.innerHeight - scrollY) / 300, 1);
    });
});