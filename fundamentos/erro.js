function tratarErroElancar(erro){
   // throw new Error('sen querer')
   //throw 10
   //throw true
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirnomegritado(obj) {
    try {
        console.assert(obj.name.toUpperCase() + '!!!')
       } catch (e) {
           tratarErroElancar(e)
       }
    }
   

const obj = {nome:'edson'}
imprimirnomegritado(obj)