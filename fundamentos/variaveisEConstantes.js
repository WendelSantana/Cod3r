var a = 3
let b = 2 // não pode ser redefinido no mesmo escopo.

var a = 40
// let b = 50
b = 50

var a = 60

console.log(a, b)

a = 300
b = 400

const c = 5
// c = 100 o valor não muda.
console.log(c)
