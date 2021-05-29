console.log('a =', a)
var a = 3 
console.log('a =', a)

// Para funções é a mesma coisa

function teste(){
    console.log('a =', a)
    var a = 3
    console.log('a =', a)
}

teste()

console.log('a =', a)

console.log('a =', a) // No let não acontece o hoisting
let a = 3 
console.log('a =', a)
