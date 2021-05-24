// atribuição por referência
const a = {name: 'Teste'}
const b = a
b.name = 'Opa'
// resultado: a = {name: 'Opa'}

// atribuição por valor
let c = 3
let d = c
d++
// resultado: d = 4, c = 3 (foi feito uma cópia por valor)
// tipos primitivos fazem-se cópias de valores.

let valor
console.log(valor) // undefined - é quando a variável não foi inicializada.
console.log(valor2) // defined - significa que a variável não foi declarada.

valor = null // ausência de valor(em outras palavras ela está vazia)
console.log(valor)
console.log(valor.toString()) // O que vai acontecer é que terá um erro, por que não tem como ler uma coisa nula, ou seja sem valor.
const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço 
console.log(!!produto.preco)
console.log(produto)
