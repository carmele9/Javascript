// Seleccionamos todos los enlaces que tienen la clase "toggle-content"
const enlaces = document.querySelectorAll('.toggle-content');

// Recorremos cada uno de los enlaces
enlaces.forEach(enlace => {
    enlace.addEventListener('click', function(event) {
        event.preventDefault(); // Evitamos el comportamiento por defecto

        // Obtenemos el elemento padre (el div contenedor)
        const contenido = enlace.previousElementSibling; // El párrafo anterior


        // Verificamos si el contenido es visible o no
        if (contenido.style.display === 'none' || contenido.style.display === '') {
            // Si está oculto, lo mostramos
            contenido.style.display = 'block';
            // Cambiamos el texto del enlace
            enlace.textContent = 'Ocultar contenidos';
        } else {
            // Si está visible, lo ocultamos
            contenido.style.display = 'none';
            // Cambiamos el texto del enlace
            enlace.textContent = 'Mostrar contenidos';
        }
    });
});
