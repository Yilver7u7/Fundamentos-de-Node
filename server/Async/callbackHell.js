/*function soyAsincrona(miCallback){
    setTimeout(() => {
        console.log("Estoy siendo asincrona")
        miCallback();
    }, 3000);
    
}

function terminado(){
    console.log("Terminando proceso...")
}
soyAsincrona(terminado)*/
console.log("Iniciando proceso...")
function terminado(){
    console.log("Terminando proceso...")
}

function saludar(nombre,miCallback){
    setTimeout(() => {
        console.log("Hola, bienvenido "+nombre);
        miCallback(nombre);
    }, 2000);
}

function adios(nombre,otrocallback){
    setTimeout(() => {
        console.log("Adios "+nombre);
        otrocallback();
    },1000)
}

/*Esta es la manera en la que se inician de esta manera los callbacks */
saludar("Yilver", function(nombre){
    adios(nombre, function(){
        console.log("Terminando proceso...")
    })
})
