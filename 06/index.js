const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

let resposta = []


resposta = cidades.filter((qtdLetras) => {
    return qtdLetras.length <= 8
})

console.log(resposta)