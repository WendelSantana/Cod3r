// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereço: {
        logradouro: 'Rua ABC',
        numero: 1000
    },

    conta: {
        ag: '3138',
        num: '0202'
    }
}

const { nome, idade } = pessoa // destructuring
console.log(nome, idade)

const { nome: n, idade: i} = pessoa //destructuring
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereço: logradouro, numero, cep } = pessoa
console.log(logradouro, numero, cep)

const { conta: { ag, num } } = pessoa
console.log(ag, num)
