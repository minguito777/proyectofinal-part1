const pintarProductos = (data) => {
    const contenedor = document.getElementById("juegos-contain");

    data.forEach(juego => {
        const div = document.createElement('div');
        div.classList.add('flex');
        div.innerHTML += `<div class="card" style="width: 18rem;">
                             <img src="${juego.imagen}" class="card-img-top" alt="${juego.nombre}">
                                <div class="card-body">
                                    <h5 class="card-title">${juego.nombre}</h5>
                                    <h5 class="card-title">$$${juego.precio}</h5>
                                    <p class="card-text">${juego.desc}</p>
                                    <a id=${juego.id} class="btn btn-warning agregar">AGREGAR AL CARRITO</a>
                                </div>
                            </div>
        
                            `
        contenedor.appendChild(div).addEventListener('click', () => {

            Toastify({
            
                text: "AGREGADO AL CARRITO",
                duration: 5000,
                avatar: `${juego.imagen}`,
                close: true,
                gravity: "top", 
                position: "right", 
                stopOnFocus: true, 
                style: {
                    background: "linear-gradient(to right, #14098dda, #e305f3);",
                    
                },
                offset: {
                    x: 500, 
                    y: 10 
                },




            }).showToast()
        });



    });





};

//toast
