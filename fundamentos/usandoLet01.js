let numero = 1

{
    let numero = 2 /* caso não seja encontrado o parâmetro, será 
    procurado em outro escopo próximo. */
    console.log('dentro =', numero)
}
console.log('fora =', numero)
