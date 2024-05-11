document.getElementById('inicio').addEventListener('submit', function() {
    let nombredelUsuario = document.getElementById('nombreUsuario').value;
    let contraseña = document.getElementById('contraseña').value;

    // Almacenar las credenciales en localStorage
    localStorage.setItem('Nombre de usuario', nombredelUsuario);
    localStorage.setItem('Contraseña', contraseña);

    alert('Credenciales almacenadas en localStorage.  ver las en la consola.');
});

// Guardar un valor en localStorage:
localStorage.setItem('clave', 'valor');
// Esto guarda el valor 'valor' con la clave 'clave' en el localStorage.


// Recuperar un valor de localStorage:
var valor = localStorage.getItem('clave');
// Esto recupera el valor almacenado con la clave 'clave' y lo asigna a la variable 


// Eliminar un valor de localStorage:
// localStorage.removeItem('clave');


localStorage.setItem('Nombre', 'Maria josea');

let Nombre = localStorage.getItem('Maria jose')







localStorage.setItem('Apellido', 'anaya');

let Apellido = localStorage.getItem('juan');
// Guardar un valor en localStorage:
localStorage.setItem('clave', 'valor');
// Esto guarda el valor 'valor' con la clave 'clave' en el localStorage.


// Recuperar un valor de localStorage:
var valor = localStorage.getItem('clave');
// Esto recupera el valor almacenado con la clave 'clave' y lo asigna a la variable 


// Eliminar un valor de localStorage:
// localStorage.removeItem('clave');