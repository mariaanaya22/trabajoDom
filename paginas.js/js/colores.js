console.log("Colores");

let botonazul = document.querySelector("#azul");
let botonverde = document.querySelector("#verde");
let botonrojo = document.querySelector("#rojo");
let botonrosado = document.querySelector("#rosado");

//CREAMOS LA ETIQUETA SECTION
// let section = document.createElement("section");
let body = document.querySelector("body")
let cuadrito = document.querySelector("#cuadrito")
let cuadrobotonazul = document.querySelector("#cuadroazul");
let cuadrobotonverde = document.querySelector('#cuadroverde');
let cuadrobotonrojo = document.querySelector('#cuadrorojo');
let cuadorbotonrosado= document.querySelector('#cuadrorosado');

//cuadro 

cuadrobotonazul.addEventListener("click", 
    function mensaje(){
        console.log("Buscando el color amarillo");
        cuadrito.style.backgroundColor = 'blue';
    }
)
cuadrobotonverde.addEventListener("click", 
    function mensaje(){
        console.log("Buscando el color amarillo");
        cuadrito.style.backgroundColor = 'green';
    }
)
cuadrobotonrojo.addEventListener("click", 
    function mensaje(){
        console.log("Buscando el color amarillo");
        cuadrito.style.backgroundColor = 'red';
    }
)
cuadorbotonrosado.addEventListener("click", 
    function mensaje(){
        console.log("Buscando el color amarillo");
        cuadrito.style.backgroundColor = 'pink';
    }
)

   
cuadrobotonverde.addEventListener("click", 
    function mensaje(){
        console.log("Buscando el color amarillo");
        cuadrito.style.backgroundColor = 'green';
    }
)

// botones de arriba

botonazul.addEventListener("click", 
    function mensaje(){
        console.log("Buscando el color azul");
        document.body.style.backgroundColor = 'blue';
    }
)
botonverde.addEventListener("click", 
    function mensaje(){
        console.log("Buscando el color verde");
        document.body.style.backgroundColor = 'green';
    }
)
botonrojo.addEventListener("click", 
    function mensaje(){
        console.log("Buscando el color rojo");
        document.body.style.backgroundColor = 'red';
    }
)
botonrosado.addEventListener("click", 
    function mensaje(){
        console.log("Buscando el color rosado");
        document.body.style.backgroundColor = 'pink';
    }
)



console.log(cuadrito);