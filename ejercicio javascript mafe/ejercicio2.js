function NumeroPrimo() {
    let num12 = parseFloat(prompt("Ingrese su número"));
    if (num12 === 2) {
        return "El número " + num12 + " es primo";
    } else if (num12 % 2 === 0 || num12 <= 1) {
        return "El número " + num12 + " no es primo";
    } else {
        for (let i = 3; i <= Math.sqrt(num12); i += 2) {
            if (num12 % i === 0) {
                return "El número " + num12 + " no es primo";
            }
        }
        return "El número " + num12 + " es primo";
    }
}

console.log(NumeroPrimo());