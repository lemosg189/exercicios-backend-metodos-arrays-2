const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"]

let ExisteAlcool = palavras.some(function (palavra) {
    return palavra === 'cerveja' || palavra === 'vodka'
})

if (ExisteAlcool) {
    console.log('revise sua lista, joão. possui bebida com venda proibida!');
} else {
    console.log('tudo certo, vamos as compras!');
}

