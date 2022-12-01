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

function hablar(callbackHablar){
    setTimeout(() => {
        console.log("Bla bla bla bla bla ")
        callbackHablar()
    },1000)

}
//**************************************** */
function adios(nombre,otrocallback){
    setTimeout(() => {
        console.log("Adios "+nombre);
        otrocallback();
    },1000)
}

function conversacion(nombre, veces,callback){
    if (veces>0) {
        hablar(function(){
            conversacion(nombre,--veces,callback);
        })
    }else{
        callback(nombre)
    }
}
saludar("Pepe", function(nombre){
    conversacion(nombre,3,function(){
        adios(nombre, function(){
            console.log("Terminando proceso...")
        })
    })
})

/*saludar("Yilver", function(nombre){
    hablar(function(){
        hablar(function(){
            hablar(function(){
                adios(nombre, function(){
                    console.log("Terminando proceso...")
                })
            })
        })
    })
})*/

