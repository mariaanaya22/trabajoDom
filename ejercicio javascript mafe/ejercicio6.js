function Mayor(numero1, numero2, numero3) {
  
    if (numero1 > numero2 && numero1 > numero3) {
        return numero1;
    } else if (numero2 > numero1 && numero2 > numero3) {
        return numero2;
    } else if (numero3 > numero1 && numero3 > numero2) {
        return numero3;
    } else {
      
        return "son iguales";
    }
}


console.log(Mayor(5, 8, 3)); 
console.log(Mayor(10, 10, 10));
