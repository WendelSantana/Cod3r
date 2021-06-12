function trataErroELancar(erro) {
    //throw new Error('...')
    // throw 10 
    // throw true
    throw 'mensagem'
    /*throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date(erro.date)
    */ 
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        trataErroELancar(e)
    } finally {
        console.log('done!')
    }
}
const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)
