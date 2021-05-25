// Função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // o segundo parâmetro (3) virou um undefined, ou seja a soma de 2 + undefined, o resultado é NaN(Not a Number)
imprimirSoma(2, 3, 4, 5, 6, 7, 8, 9) // Vai pegar os primeros dois parâmetros e o resto será ignorado.
imprimirSoma() // NaN

// Função com retorno 

    function soma(a, b = 1){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())
