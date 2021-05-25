// Armazenando uma função em uma variável
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// Retorno implícito - que não está aparecendo o "return"
const subtracao = (a, b) => a - b // com dois parâmetros
console.log(subtracao(2, 3))

const print2 = a => console.log(a) // com um parâmetro
print2('Wendel sabe programar!')
