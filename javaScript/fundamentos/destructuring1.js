const pessoa = {
    nome: 'Eduardo',
    idade: 24,
    endereco: {
        logradouro: 'Rua La Salle',
        numero: 401
    }
}

//extrai de dentro do objeto e cria variáveis com os nomes
const { nome, idade} = pessoa;

//posso setar o nome das variáveis caso preferir
const {nome: nom, idade: idad} = pessoa;

//objeto dentro de objeto
const {endereco: {logradouro, numero}} = pessoa;