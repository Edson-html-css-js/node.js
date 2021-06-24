// novo recurso javascript  es 2015

const pessoa = {
    nome: 'edson',
idade: 5,
endereco: {
    logradouro: 'rua ABC',
    numero: 23
  }

}

const {nome,idade } = pessoa
console.log(nome, idade)

const{nome: n, idade: i } = pessoa // estou mandando ele pegar nome e idade, da onde? de =pessoa
console.log(n , i)

const { endereco:{ logradouro, numero ,cep}} = pessoa
console.log(logradouro,numero ,cep)
