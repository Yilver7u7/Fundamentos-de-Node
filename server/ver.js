const veamos = ()=>{
    return new Promise((resolve, reject) =>{
        if (true) {
            resolve("Todo bien mi perro")
        }else {
            reject("Algo no esta bien ");
        }
    })
}
veamos()
.then(response =>console.log(response))
.catch(error =>console.log(error))


