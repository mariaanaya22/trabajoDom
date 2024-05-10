let numero1= 0;
let numero2= 1;

console.log(numero1); 

for (let numero2 = 2; numero2 <= 10; numero2++) {
    const temp = numero1+ numero2;
    console.log(temp); 
    numero1= numero2;
    numero2= temp;
}
