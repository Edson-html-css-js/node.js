const pilotos = ['vetel', 'Alonso', 'raikkonen', 'massa']
pilotos.pop() // tira o ultimo elemento da lista
console.log(pilotos)

pilotos.push('vestappen')
console.log(pilotos)

pilotos.shift()// remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2,0, 'Bottas', ' Massa')
console.log(pilotos)

//remover
pilotos.splice(3,1)
console.log(pilotos)

const aluguspilotos1 = pilotos.slice(2) // novo array
console.log(aluguspilotos1)

const aluguspilotos2 = pilotos.slice(1,4)
console.log(aluguspilotos2)