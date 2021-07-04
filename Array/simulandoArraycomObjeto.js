const quasearray = {0: 'edson', 1: 'ana', 2: 'bia'}
console.log(quasearray)
Object.defineProperty(quasearray, 'tostring',{
    value: function(){return Object.values(this)},
    enumerable: false
})

console.log(quasearray[2])

const meuArray = ['rafael', 'ana', 'bia']
console.log(quasearray.tostring(), meuArray)