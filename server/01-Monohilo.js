console.log("Hola mundo")

/*Esto deja un evento activo cada x cantidad de tiempo se repite*/
let i = 0;
setInterval(() => {
    console.log("El turno es: "+i);
    i++;
}, 500);

console.log("Segunda instrucción")
