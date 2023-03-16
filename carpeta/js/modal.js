const openModal = document.querySelector('#el-carrito');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');
const deleteM = document.querySelector('.modal__container');



openModal.addEventListener('click', (e) =>{
    e.preventDefault()
    modal.classList.add('modal--show');
} );
closeModal.addEventListener('click', (e) =>{
    e.preventDefault()
    modal.classList.remove('modal--show');
} );

deleteM.addEventListener('click', (e) =>{
    
    e.stopPropagation()
    if (e.target.classList.contains('boton-eliminar')) {
        deleteGameCarrito(e.target.value)
        console.log(deleteM)
    }
    
});






























