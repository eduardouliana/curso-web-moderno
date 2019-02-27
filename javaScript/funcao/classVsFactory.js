class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }
    
}
const p1 = new Pessoa('João');
p1.falar();

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const p2 = criarPessoa('João')
p2.falar()

//ou assim que daí é uma função construtora
function Pessoa2(nome) {
    this.nome = nome;
    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`);
    }
    
}
const p3 = new Pessoa2('João');
p3.falar();