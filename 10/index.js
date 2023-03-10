const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]

let numerosPares = []

for (const numero of numeros) {
    if (numero % 2 === 0) {
        numerosPares.push(numero)
    }
}
console.log(numerosPares)