const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
];

const nomesFormatado = []

for (const nome of nomes) {
    if (nome.slice(0, 1).toLowerCase() === 'a') {
        nomesFormatado.push(nome)
    }
}

console.log(nomesFormatado)