function soBoaNoticia (nota) {
    if(nota >=7){
         console.log('Aprovado com '+ nota)
    }
}

soBoaNoticia(8.5)
soBoaNoticia(6.5)

function seforverdadeeufalo(valor){
    if (valor) {
        console.log(`É verdade.... ${valor}` )
    }
}
seforverdadeeufalo()
seforverdadeeufalo(null)
seforverdadeeufalo(undefined)
seforverdadeeufalo(NaN)
seforverdadeeufalo('')
seforverdadeeufalo(0)
seforverdadeeufalo(-1)
seforverdadeeufalo(' ')
seforverdadeeufalo('?')
seforverdadeeufalo([])
seforverdadeeufalo([1, 2])
seforverdadeeufalo({})