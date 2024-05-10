
function Primo(numero) {
    if (numero <= 1) {
      return false;
    }
    for (let numero2 = 2; numero2<= Math.sqrt(numero); numero2++) {
      if (numero % numero2 === 0) {
        return false;
      }
    }
    return true;
  }
  

  function imprimirPrimos() {
    let contador = 0;
    let numero = 2; 
    while (contador < 5) {
      if (Primo(numero)) {
        console.log(numero);
        contador++;
      }
      numero++;
    }
  }
  
  imprimirPrimos();
  