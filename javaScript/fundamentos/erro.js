function tratarErroELancar(erro) {
    throw 'Ocorreu um erro' + erro.name + erro.message;
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase());
    } catch (e) {
        tratarErroELancar(e);
    } finally {
        console.log('Obrigado por usar nosso programa');
    }
}

const obj = {nome: 'Eduardo'}
imprimirNomeGritado(obj)