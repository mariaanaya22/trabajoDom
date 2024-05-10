let contraseña;
const contraseñavalida= "contraseña222";

do {
    contraseña = prompt("ingresa tu contraseña");
} while (contraseña !== contraseñavalida);

console.log("Contraseña válida ingresada");
