function factorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * factorial (numero - 1);
    }
  }
  
  
  const numero = 5;
  console.log("El factorial de", numero, "es", factorial(numero));
  