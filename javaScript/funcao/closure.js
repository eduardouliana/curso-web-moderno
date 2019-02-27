//Closure é o escopo criado quando uma funcão é declarada
//Esse escopo permite a função acessar e manipular cariaveis externas a funcao

//Contexto lexico em ação:
const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x;
    }
    return dentro;
}

const minhaFuncao = fora()
console.log(minhaFuncao())