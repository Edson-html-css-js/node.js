//pessoa -> 123 -> {...}

const pessoa = {nome: 'edson'}
pessoa.nome = 'pedro'

console.log(pessoa)

// pessoa <-- 456 -> {....} <-
//pessoa ={nome: 'ana'}

Object.freeze(pessoa)

pessoa.nome = 'maria'
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: ' joao'})
pessoaConstante.nome = 'lucas'
console.log(pessoaConstante)