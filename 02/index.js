const palavras = ["livro", "caneta", "sol", "carro", "orelha"]

let qtdLetras = 0

for (const palavra of palavras) {
    if (palavra.length > 5) {
        qtdLetras = palavra.length
    }
}

if (qtdLetras === 0) {
    console.log('array validado')
} else {
    console.log('existe palavra inválida')
}