// closure é o escopo criado quando uma funçõa é declarada
// Esse escopo permite a funçaõ acessar e manipular variáveis externas á função


// contesto léxico em ação!

const x = 'global'

function fora() {
    const x = 'local'
    function dentro(){
        return x 
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())