// Array em js é um objeto!

console.log(typeof Array, typeof new Array, typeof[])

let aprovados = new Array('bia', 'edson', 'ana')
console.log(aprovados)

aprovados = ['bia', 'edson', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'paulo'
aprovados.push('edson')
console.log(aprovados.length)

aprovados[9] = 'rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['bia', 'carlos', 'ana']
aprovados.splice(1, 0 ,'ivam', 'luvas')
console.log(aprovados)
