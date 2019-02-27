//Factory com parâmetros

function criarProduto(nome, preco) {
    return {
        /*nome: nome,
        preco: preco
        ou direto assim pq tem o mesmo nome vv*/
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('café', 10));
console.log(criarProduto('feijão',20));