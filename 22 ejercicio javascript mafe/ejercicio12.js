let numero;
do {
    numero = parseInt(prompt("ingresa un número entre 1 y 5"));
} while (numero < 1 || numero > 5);

console.log("El número ingresado es", numero);
