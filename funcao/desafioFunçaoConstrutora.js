function pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`meu nome é ${nome}`)
    }
}

const p1 = new pessoa('edson')
p1.falar()
console.log(p1.nomw)