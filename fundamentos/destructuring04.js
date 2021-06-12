function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) // max, min
console.log(rand([992])) // min
console.log(rand([, 10])) // min = 0, max = 10
console.log(rand([]))
console.log(rand()) // undefined is not iterable (cannot read property Symbol(Symbol.iterator))
