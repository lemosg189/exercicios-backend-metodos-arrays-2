const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "A Montanha Mágica";

if (nomeDoLivro) {
    console.log(livros.indexOf(nomeDoLivro) + 1)

} else {
    console.log('Esse livro não consta na biblioteca')
}

