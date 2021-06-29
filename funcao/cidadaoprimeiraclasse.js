// funcao em JS é first-class object (citizens)
// higher-order function

// criar de forma literal

function fun1() { }

// armazenar em uma variavel
const fun2 = function() {}

// armazenamento em um array 
const array = [function (a, b) {return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// armazenar em um atributo de objeto

const obj = {}
obj.falar = function (){return 'opa'}
console.log(obj.falar())

// passar fução como parametro

function run(fun){
    fun()
}
run(function () {console.log('exetutando,.......') })

//uma funçaõ pode retornar/conter um função

function soma(a, b){
    return function (c) {
        console.log(a +b +c)
    }
}

soma(2, 3) (4)