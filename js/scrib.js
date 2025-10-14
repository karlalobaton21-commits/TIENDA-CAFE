document.addEventListener("DOMContentLoaded", () => {
    const botonesComprar = document.querySelectorAll(".btncomprar");
    const carrito = document.getElementById("carrito");
    const contador = document.getElementById("contador-carrito");

    let cantidad = 0;

    botonesComprar.forEach(boton => {
        boton.addEventListener("click", () => {
            cantidad++;
            contador.textContent = cantidad;

            carrito.classList.add("mostrar");
        });
    });
});