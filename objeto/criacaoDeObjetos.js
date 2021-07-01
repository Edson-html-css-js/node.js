// usando a anotaçaõ literal 
const obj1 = {}
console.log(obj1)

// object em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Função construtoras
function produto(nome, preco, desc) {
    this.nome = nome 
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new produto ( 'caneta', 7.99, 0.15)
const p2 = new produto ('notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// função factory
function criarfuncionario(nome, salario, faltas){
    return{
        nome,
        salario,
        faltas,
        getsalario(){
            return (salario / 30) * (30 - faltas)
        }
    }
}

const f1 = criarfuncionario('edson',8000,4)
const f2 = criarfuncionario('licas',11500,1)
console.log(f1.getsalario(), f2.getsalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)

// uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "sou um JSON"}')
console.log(fromJSON.info)