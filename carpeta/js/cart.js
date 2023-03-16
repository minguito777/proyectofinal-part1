const productoContenedor = document.getElementById('juegos-contain')

let carrito = []

productoContenedor.addEventListener('click', (e) => {
    if (e.target.classList.contains('agregar')) {
        validarJuegosEnCarrito(e.target.id)

    }
});

const validarJuegosEnCarrito = (juegoId) => {
    const isRepeated = carrito.some(juego => juego.id == juegoId)

    if (isRepeated) {
        const juego = carrito.find(juego => juego.id == juegoId)
        juego.cantidad++
        const cantidad = document.getElementById(`cantidad${juego.id}`)
        cantidad.innerText = `cantidad: ${juego.cantidad}`
        actualizeTotalsCarrito(carrito)
    } else {
        const juego = juegos.find(juego => juego.id == juegoId)
        carrito.push(juego)
        pintarJuegoEnCarrito(juego)
        actualizeTotalsCarrito(carrito)
        Swal.fire({
            position: 'top-start',
            icon: 'success',
            title: 'Su juego ha sigo agregado al carrito',
            showConfirmButton: false,
            timer: 1500
          })
    }
};

const pintarJuegoEnCarrito = (juego) => {
    const contenedor = document.getElementById('carrito-contenedor')
    const div = document.createElement('div')
    div.classList.add('productoEnCarrito')
    div.innerHTML = `
                    <p>${juego.nombre}</p>
                    <p>Precio: ${juego.precio}</p>
                    <p id=cantidad${juego.id}>Cantidad: ${juego.cantidad}</p>
                    <button class="btn waves-effect waves-ligth boton-eliminar" value="${juego.id}">X</button>
    
    
    
    `
    contenedor.appendChild(div)

};

const pintarCarrito = (carrito) => {
    const contenedor = document.getElementById('carrito-contenedor')
    contenedor.innerHTML = ''

    carrito.forEach(juego => {
        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')
        div.innerHTML = `
                        <p class="name">${juego.nombre} </p>
                        <p class="red">Precio:$$ ${juego.precio}</p>
                        <p class="cant" id=cantidad${juego.id}>Cantidad: ${juego.cantidad}</p>
                        <button class="btn elim boton-eliminar " value="${juego.id}">X</button>
        
        
        `
        contenedor.appendChild(div)
    });
};


const deleteGameCarrito = (juegoId) => {
    const indice = carrito.findIndex(juego => juego.id == juegoId)
    carrito.splice(indice, 1)
    pintarCarrito(carrito)
    actualizeTotalsCarrito(carrito)
};

const actualizeTotalsCarrito = (carrito) => {
    const totalCantidad = carrito.reduce((acc, jue) => acc + jue.cantidad, 0)
    const compraTotal = carrito.reduce((acc, jue) => acc + (jue.precio * jue.cantidad), 0)
    const contadorCarrito = document.getElementById('cuenta-compras')
    const precio = document.getElementById('precioTotal')

    contadorCarrito.innerText = totalCantidad
    precio.innerText = compraTotal

    guardarStorage(carrito)
};

const guardarStorage = (carrito) => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
};

const storage = () => {
    const carritoStorage = JSON.parse(localStorage.getItem('carrito'))
    return carritoStorage
};

if (localStorage.getItem('carrito')) {
    
    carrito = storage()
    pintarCarrito(carrito)
    actualizeTotalsCarrito(carrito)
}


