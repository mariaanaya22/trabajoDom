function calcular(numeros) {
    if (numeros.length === 0) {
        return "No se colocaron números para calcular el promedio";
    }
    let suma = 0;
    for (let numero1 = 0; numero1 < numeros.length; numero1++) {
        suma += numeros[numero1];
    }
    let promedioo = suma / numeros.length;
    return "El promedio de los números colocados es: " + promedioo;
}

console.log(calcular([10, 15, 20])); 




