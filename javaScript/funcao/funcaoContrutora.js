function Carro (velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0;

    //atributo publico
    this.acelerar = () => {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta;
        }else {
            velocidadeAtual = velocidadeMaxima;
        }
    }

    //atributo publico
    this.getVelocidadeAtual = () => {
        return velocidadeAtual;
    }
}

const gol = new Carro;
gol.acelerar();
console.log(gol.getVelocidadeAtual());

const ferrari = new Carro(350, 50);
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());