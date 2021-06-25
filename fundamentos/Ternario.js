const resultado = nota => nota >= 7 ? 'aprovado' : 'reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))

//const status = nota >= 7 ? 

let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(this.a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando uma variavel maluca sem VAR e LET!
abc = 3 // não faça isso em casa !!
console.log(abc)