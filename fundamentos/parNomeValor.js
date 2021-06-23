const saudacao = ' ola' //contexto léxico 1
 
function exec(){
    const saudacao = 'opa falaaa' // contexto lexico 2
    return saudacao
}

// ojetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'edson',
    idade: 32,
    peso: 80,
    endereco:{
        logradouro: ' rua dos marmores',
        numero: 23
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)