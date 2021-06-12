// par nome/valor

const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa'
    return saudacao // contexto léxico 2
}

// Objetos são grupos aninhados de pares nome/valores
const client = {
    nome: 'Pedro',
    idade: 32,
    peso: 92,
    endereço: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(client)