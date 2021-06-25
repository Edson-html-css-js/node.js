Number.prototype.entre = function (inicio, fim){
return this >= inicio && this <= fim

}

const imprimaresultado = function (nota) {
    if (nota.entre (9, 10)) {
        console.log('quadro de honra')
    }else if (nota.entre (7, 8.99)){
        console.log('Aprovado')
    } else if (nota.entre (4, 6.99)){
        console.log('rcuperação')
    } else if (nota.entre(0, 3.98)){
        console.log('reprovado')
    }else {
        console.log('Nota invalida')
    }
}

imprimaresultado(10)
imprimaresultado(8.5)
imprimaresultado(6.55)
imprimaresultado(2.3)
imprimaresultado(-1)
imprimaresultado(11)
