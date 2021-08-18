const nums = [1, 2, 3 ,4, 5]

//map é um for com proposito
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paradinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.' , ',')}`

resultado = nums.map(soma10).map(triplo).map(paradinheiro)
console.log(resultado)