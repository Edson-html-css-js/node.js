// coleção dinamica de pares chave/valor
const produto = new Object
produto.nome = 'cadeira'
produto ['marca do produto'] = 'generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto ['marca do produto']
console.log(produto)

const carro = {
    modelo: 'a4',
    valor: 89000,
    nome: 'edson',
    idade: 56,
    endereco: {
        logradouro: 'rua 2',
        numero: 23
    }
},
condutores: [{
    nome:'lucas',
    idade: 32
},  {
nome: 'ana',
idade: 19
}],
calcularvalorseguro: function () {
    //..........
}
    
}

carro.prorietario.endereco.numero = 1000
