
const carrinho =[
    '{"nome": "borracha", "preco": 3.45 }',
    '{"nome": "caderno", "preco": 13.90 }',
    '{"nome": "kit de laps", "preco": 42.22   } ',
    '{ "nome": "caneta", "preco": 7.50}'
]
//retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenaspreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenaspreco)
console.log(resultado)