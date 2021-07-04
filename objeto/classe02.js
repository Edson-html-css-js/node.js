// heranca com classe
class avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class pai extends avo {
    constructor(sobrenome, profissao = 'professor'){
        super(sobrenome)
        this.profissao = profissao
    }
}

class filho extends pai {
    constructor(){
        super('silva')
    }
}

 filho = new filho
console.log(filho)