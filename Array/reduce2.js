const alunos = [
    {nome: 'edson', nota: 7.3, bolsista: true},
    {nome: 'lucas', nota: 9.2, bolsista: false },
    {nome: 'isak', nota: 9.8, bolsista: true},
    {nome: 'ana', nota: 8.7, bolsista: false}

]

// desafio 1: todos os alunos são bolsistas?

const todosBolsistas = ( resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))


// desafio 2: algum aluno é bolsista?

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))



