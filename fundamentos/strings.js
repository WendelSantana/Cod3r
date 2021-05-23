const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // JavaScript é uma linguagem mais tranquila, ele vai mostrar branco na tela por que não achou nada que correspondesse.
console.log(escola.charCodeAt(3)) // mostra o código do carácter.
console.log(escola.indexOf('3')) // mostra se tem o carácter e em qual posição está
console.log(escola.substring(1))
console.log(escola.substring(0, 4)) // mostra os caracteres que escolher
console.log('Escola '.concat(escola).concat("!")) // concatena o que for pedido.
console.log('Escola ' + escola + '!')
console.log('3' + 2) // Não vai somar, vai concatenar
console.log(escola.replace(3, 'e'))
console.log('Ana, Maria, Pedro'.split(','))
