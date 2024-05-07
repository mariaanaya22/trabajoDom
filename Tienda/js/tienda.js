const botonesCarrito = document.querySelectorAll('.carro');
const vacion = document.querySelector('#vaciar');

vacion.addEventListener('click',
    function(){
        let lista = document.getElementById('ule');
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
    }
)

botonesCarrito.forEach(boton => {
    boton.addEventListener('click', () => {
        const articulo = boton.previousElementSibling.textContent;
        agregarAlCarrito(articulo);
    });
});

function agregarAlCarrito(articulo) {
    const carrito = document.getElementById('ule');
    const nuevoItem = document.createElement('li');
    const icono = document.createElement("i");
    icono.classList.add("fas", "fa-times", "icono");
    icono.addEventListener("click",
        function(){
            carrito.removeChild(nuevoItem);
        }
    )
    nuevoItem.appendChild(document.createTextNode(articulo)); 
    nuevoItem.appendChild(icono);
    carrito.appendChild(nuevoItem); 
}


const modal = document.getElementById('myModal');
const btn = document.getElementById('myBtn');
const closeBtn = document.getElementsByClassName('close')[0];

btn.addEventListener('click', function() {
    modal.style.display = 'block';

});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
