let numero;

do {
    numero = parseFloat(prompt("ingresa un número positivo"));
    if (numero <= 0 || isNaN(numero)) {
        console.log("Error: Debes ingresar un número positivo");
    }
} while (numero <= 0 || isNaN(numero));

console.log("Número ingresado", numero);
