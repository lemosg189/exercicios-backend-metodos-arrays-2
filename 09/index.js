const numeros = [10, 987, -886, 0, 12, 199, -45, -67]

let numerosPositivos = []

for (const numero of numeros) {
    if (numero > 0) {
        numerosPositivos.push(numero)
    }
}
console.log(numerosPositivos);