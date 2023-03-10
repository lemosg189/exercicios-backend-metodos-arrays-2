const numeros = [0, 122, 4, 6, 8, 44, 3]

const apenasPares = numeros.every(function (numero) {
    return numero % 2 === 0
})

if (apenasPares) {
    console.log('array válido')
} else {
    console.log('array inválido');
}

// const existePar = (valor) =>{
//     if(numeros % 0){

//     }
// }