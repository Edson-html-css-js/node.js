/*function nomes() {
    return {
        nome: 'edson',
        sobrenome: 'lucas',
        idade:30,
        nome: 'elza',
        nome:'luiz'
    }
}
console.log(nomes())
*/

function criarproduto(nome,preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarproduto('notebook',2199.50))
console.log(criarproduto('ipad', 1199.55))