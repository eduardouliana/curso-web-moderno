const saudacao = 'Bom Dia';

function exec() {
    const saudacao = 'Eae maluco';
    return saudacao;
}

//Objetos são grupos de aninhados de pares nomes/valor
const cliente = {
    nome: 'Eduardo',
    peso: '83',
    idade: 24,
    endereco: {
        logradouro: 'Rua La Salle',
        numero: 401
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);