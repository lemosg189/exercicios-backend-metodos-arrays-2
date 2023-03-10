const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]

const frutasFormatado = []
let index = -1

for (const fruta of frutas) {
    let maiuscula = fruta[0].toUpperCase()
    const minusculas = fruta.slice(1).toLowerCase()
    index++
    frutasFormatado.push(`${index} - ${maiuscula}${minusculas}`)

}
console.log(frutasFormatado)