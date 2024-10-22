// script.js
const popup = document.getElementById('popup');
const botonGuardar = document.getElementById('boton-guardar');
const botonMostrar = document.getElementById('mostrar-popup');
const inputNombre = document.getElementById('nombre');

const bienvenidatexto = document.getElementById('bienvenidatexto');
const bienvenidanombre = document.getElementById('bienvenidanombre');
const bienvenidainfo = document.getElementById('bienvenidainfo');

// Mostrar el popup al hacer clic en el botón "Mostrar Popup"
botonMostrar.addEventListener('click', () => {
    popup.style.display = 'block';
});

// Escuchamos el evento de scroll
window.addEventListener('scroll', function() {
    // Calculamos la cantidad de scroll en píxeles
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Verificamos si se ha hecho scroll más de 100 píxeles
    if (scrollPosition > 100) {
        bienvenidatexto.classList.add('desvanecido');  // Desvanecer
    } else {
        bienvenidatexto.classList.remove('desvanecido');  // Volver a aparecer si el scroll es menor a 100
    }
});

// Guardar el nombre y personalizar la tarjeta al hacer clic en "Guardar"
botonGuardar.addEventListener('click', () => {
    const nombreIngresado = inputNombre.value.trim();
    if (nombreIngresado) {
        // Personalizar el contenido de la tarjeta
        bienvenidanombre.textContent = `Hola, ${nombreIngresado}!`;
        bienvenidainfo.textContent = `Entre la realidad y la fantasía existe un mundo maravilloso lleno de vida, el universo de lo muy, muy pequeño. ${nombreIngresado} es un hermoso nombre, 
                    te presentaré a tus nuevos amigos...`;
        
        // Ocultar el popup
        popup.style.display = 'none';
    } else {
        alert('Por favor, ingresa tu nombre.');
    }
});
