let carrito = [];
let total = 0;

document.addEventListener("DOMContentLoaded", function () {
    const botonesAgregar = document.querySelectorAll('.btn-comprar');
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElemento = document.getElementById('total');
    const form = document.getElementById('form-contacto');
    const mensajeExito = document.getElementById('mensaje-exito');

    function actualizarCarrito() {
        listaCarrito.innerHTML = '';
        carrito.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.nombre} - $${item.precio}`;
            listaCarrito.appendChild(li);
        });
        totalElemento.textContent = `$${total.toLocaleString()}`;
    }

    botonesAgregar.forEach((boton, index) => {
        boton.addEventListener('click', () => {
            const producto = document.querySelectorAll('.producto')[index];
            const nombre = producto.querySelector('h2').textContent;
            const precioTexto = producto.querySelector('p').textContent;
            const precio = parseInt(precioTexto.replace('$', '').replace('.', ''));

            carrito.push({ nombre, precio });
            total += precio;
            actualizarCarrito();
        });
    });

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            mensajeExito.textContent = "¡Gracias por contactarnos!";
            form.reset();
        });
    }
});
