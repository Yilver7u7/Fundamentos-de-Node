let saludar = "Hola bienvenido, ";
//Justos despuesde nuestro env, le estamos diciendo que de esta forma la declaramos en la consola
//let nombre = process.env.Nombre;

//De esta forma le damos un valor por default
let nombre = process.env.Nombre || "Said";
//Como el valor no esta definido y le damos un valor en la consola antes del node
console.log(saludar+nombre)

let web = process.env.Web || "https://github.com/Yilver7u7/Fundamentos-de-Node";
console.log("Tu pagina web es: "+web)


