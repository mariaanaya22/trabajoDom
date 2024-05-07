function caracteres(n, caracter) {
  
    let resultado = "";
    
  
    for (let numero= 0; numero < n; numero++) {
        resultado += caracter;
    }
    
  
    return resultado;
}


console.log(caracteres(10, 'x')); 
