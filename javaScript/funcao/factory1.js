// Factory = função que retorna um novo objeto
// Factory = fabrica = fabricar um objeto
 
// Factory simples
function criarPessoa() {
    return {
        nome: 'Eduardo',
        sobrenome: 'Uliana'
    }
}

console.log(criarPessoa());