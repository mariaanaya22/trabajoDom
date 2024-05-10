function multiplicar2() {
    let numero = parseInt(prompt("Ingrese en número de la tabla de multiplicar"));
    let multiplicador = 1;
    let tablaMultiplicar = "Tabla de multiplicar del " + numero + ":\n";

    while (multiplicador <= 10) {
        let resultado = numero * multiplicador;
        tablaMultiplicar += numero + " x " + multiplicador + " = " + resultado + "\n";
        multiplicador++;
    }
    return tablaMultiplicar;
}

let tabla = multiplicar2();
console.log(tabla);
