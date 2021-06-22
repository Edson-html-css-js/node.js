const pesso1 = 1.0
const peso2 = Number('2.0')

console.log(pesso1,peso2)
console.log(Number.isInteger(pesso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.800
const avaliacao2 = 6.800

const total = avaliacao1 * pesso1 + avaliacao2 * peso2
const media = total / (pesso1 + peso2)

console.log(media)
console.log(media.toString(2)) //media em binario
console.log(typeof media)
console.log(typeof Number)
