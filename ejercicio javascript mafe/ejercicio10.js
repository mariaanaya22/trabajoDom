let aleatorio;
do {
    aleatorio = Math.floor(Math.random() * 10) + 1; 
    console.log("Número generado:", aleatorio);
} while (aleatorio !== 7);
console.log("Se ha obtenido un 7");
