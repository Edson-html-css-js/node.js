// cadeia de prototipo (prototype chain)
Object.prototype.attr0 = '0' // nãon faca isso em casa

const avo = { attr1: 'A'}
const pai = {__proto__:avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'c'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velatual: 0,
    velmax:200,
    acelerarmais(delta) {
        if (this.velatual + delta <= this.velmax) {
            this.velatual += delta
        } else {
            this.velatual = this.velmax
        }
    },
    status() {
        return `${this.velatual}km/h de ${this.velmax}km/h `
    }
}

const ferrari = {
    modelo: 'f40',
    velmax: 325 //shadowing
}

const volvo = {
    modelo: 'v40',
    status() {
        return ` ${this.modelo}: ${super.status()} `
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarmais(100)
console.log(volvo.status())