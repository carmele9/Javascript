// Seleccionamos la lista y el botón
const lista = document.getElementById("lista");
const btnAnadir = document.getElementById("btnAñadir");

// Creamos una función para añadir un nuevo elemento
btnAnadir.addEventListener("click", function() {
    // Creamos un nuevo elemento de lista
    const nuevoElemento = document.createElement("li");

    // Contamos el número actual de elementos en la lista
    const posicion = lista.children.length + 1;

    // Establecemos el texto del nuevo elemento
    nuevoElemento.textContent = `Elemento ${posicion}`;

    // Añadimos la clase de Bootstrap
    nuevoElemento.classList.add("list-group-item", "list-group-item-secondary");

    // Añadimos el nuevo elemento a la lista
    lista.appendChild(nuevoElemento);
});
