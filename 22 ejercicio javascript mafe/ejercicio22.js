function fibonacci(n) {
    let fib = [0, 1];
    for (let numero = 2; numero< n; numero++) {
      fib[numero] = fib[numero - 1] + fib[numero - 2];
    }
    return fib;
  }
  
  const primerosdiez = fibonacci(10);
  console.log("Los primeros 10 términos de la serie de Fibonacci son");
  console.log(primerosdiez.join(", "));
  