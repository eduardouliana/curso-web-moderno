let dobro = function (a) {
    return 2 * a;
}

dobro = (a) => {
    return 2 * a;
}

/*
Quando possui apenas 1 parâmetro pode remover os ()
Quando possui apenas 1 linha de cod pode remover as {}
Invocando assim o retorno implícito
*/
dobro = a => 2 * a
console.log(dobro(10))

let ola = function () {
    return 'Olá';
}

ola = () => 'Olá';

console.log(ola())