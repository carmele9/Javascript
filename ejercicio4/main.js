// Variable global que sirve para rastrear si el texto se puede ver
let isTextVisible = false;

function toggleText() {
    // Seleccionamos el elemento
    const additionalText = document.querySelector(".additional");
    const link = document.querySelector("a");

    // Alternamos la visibilidad
    if (isTextVisible) {
        additionalText.classList.remove("visible");
        additionalText.classList.add("hidden");
        link.textContent = "Seguir leyendo";
    } else {
        additionalText.classList.remove("hidden");
        additionalText.classList.add("visible");
        link.textContent = "Ocultar exceso de texto";
    }

    // Cambiamos el estado de visibilidad
    isTextVisible = !isTextVisible;
}
