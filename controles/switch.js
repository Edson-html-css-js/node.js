const imprimaresultado = function (nota){
    switch (Math.floor(nota)){
        case 10:
            case 9:
                console.log('quadro de honra')
                break
                case 8: case 7:
                    console.log("aprovado")
                    break

                    case 6: case 5: case 4:
                        console.log('recuperação')
                        break
                        case 3: case 2: case 1: case 0:
                            console.log('reprovado')
                            break
                            default:
                                console.log('nota invalida')
    }
}

imprimaresultado(10)
imprimaresultado(8.9)
imprimaresultado(6.55)
imprimaresultado(2.3)
imprimaresultado(-1)
imprimaresultado(11)