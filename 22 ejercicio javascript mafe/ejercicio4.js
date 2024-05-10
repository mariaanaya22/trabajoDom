function imprimir(limite) {
   
    for (let numero = 0; numero <= limite; numero++) {
        
        if (numero % 2 === 0) {
            console.log(numero);
        }
    }
}

imprimir(20);
