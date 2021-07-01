let pessoa = {
    nome: 'edson',
    idade: 2,
    peso: 15
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'datanascimento,', {
enumerable: true,
writable: false,
value: '01/01/2019'
})

pessoa.datanascimento ='01/01/2017'
console.log(pessoa.datanascimento)
console.log(Object.keys(pessoa))