function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 1000,
    desc: 0.10,
    getPreco
}

global.preco = 20
global.desc = 0.10
console.log(getPreco());
console.log(produto.getPreco())

const carro = { preco: 50000, desc: 0.25}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.30, '$'))//passa os parâmetros direto na função
console.log(getPreco.apply(carro [0.30, '$']))//passa os parâmetros dentro de um array