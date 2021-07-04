const aprovados = ['agata', 'edson', 'lucas', 'nicolas']

aprovados.forEach(function(nome, indice,){
    console.log(`${indice + 1}) ${nome}`)
   
})

aprovados.forEach(nome => console.log(nome))

const exibiraprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibiraprovados)