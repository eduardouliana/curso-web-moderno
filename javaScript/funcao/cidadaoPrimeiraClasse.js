// criar função de forma literal
function nome() {

}

// armazenar em variaveis
const fun1 = function () {}

//armazenar em array
const array = [function (a, b) {return a + b}]
console.log(array[0](2,3));

const obj = { }
obj.falar = function () {return 'Olá'}
console.log(obj.falar());

//passar função de parametro
function run (fun) {
    fun();
}

run(function () { console.log('Executando')});

//uma função pode conter/retornar uma funçao
function soma (a, b){
    return function (c){
        console.log(a + b + c);
    }
}
soma(2, 3)(4);
//ou
const cincoMais = soma(2, 3);
cincoMais(4);
