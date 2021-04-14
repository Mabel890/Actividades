const cantidadNumeros = Number(prompt('¿Cuántos números desea ingresar?: '));

let numero = [], mayor = 0;

for (let i = 0; i < cantidadNumeros; i++) {
    numero[i] = Number(prompt('Ingrese un número: '));
}

mayor = numero[0];

for (let i = 1; i < cantidadNumeros; i++) {
    if (mayor < numero[i]) {
        mayor = numero[i];
    }
}
console.log(mayor + 'es el número mayor');