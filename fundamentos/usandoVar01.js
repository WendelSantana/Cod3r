/* 
No JavaScript, só existe 
dois tipos de escopo: 
1° - global, posso ser acessado de qualquer
lugar da aplicação 
2° - restrito dentro de uma função, onde só pode ser 
acessado dentro da função.
*/

// Global
{
    {
        {
            {
              var sera = 'Será???'
              console.log(sera)
            }
        }
    }
}

console.log(sera)

// Restrito dentro de uma função
function teste() {
    var local = 123
    console.log(local)
}

teste() // Só para testar se funciona a função
console.log(local)
