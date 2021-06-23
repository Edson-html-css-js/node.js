// funcao sem retorno
function imprimirsoma(a, b){
    console.log(a + b)
}

imprimirsoma(3, 10)
imprimirsoma(2)
imprimirsoma(2,4)


// funcao com retorno
function soma(a, b =3){
    return a + b
}

console.log(soma (2,10))
console.log(soma(2))