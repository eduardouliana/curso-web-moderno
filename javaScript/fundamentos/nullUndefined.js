let valor //não inicializada - Undefined

console.log(valor)

valor = null; // não tem valor - Null
console.log(valor)
//console.log(valor.toString)// erro..
const produto = {};
console.log(produto)
console.log(produto.preco)

produto.preco = 10;
console.log(produto)

produto.preco = undefined //evitar fazer isso
//delete produto.preco //isso vai remover o preco do produto

console.log(produto)