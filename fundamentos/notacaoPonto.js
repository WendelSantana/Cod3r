console.log(Math.ceil(6.1))
console.log(Math.floor(6.1))
console.log(typeof console) // object

// criar dinamicamente um atributo dentro de um objeto
const obj1 = {}
const obj2 = {}

obj1.name = 'Bola'
obj2['name'] = 'Bola2'
console.log(obj1.name)

function Obj(name) {
    this.name = name
    this.exec = function () {
        console.log('Exec...')
    }
}

// const obj2 = new Obj('Carro')
const obj3 = new Obj('Moto')

console.log(obj2.name)
console.log(obj3.name)
obj3.exec()
