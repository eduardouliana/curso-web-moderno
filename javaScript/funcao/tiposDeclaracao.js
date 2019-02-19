// function declaration
function somar(x, y) {
    return x + y;
}

//function expression
const subtrair = function (x, y) {
    return x - y;
}

//named function expression
const multiplicar = function mult (x, y) {
    return x * y;
}

//arrow function
const dividir = (x, y) => x / y;

console.log(somar(10,5))
console.log(subtrair(10,5))
console.log(multiplicar(10,5))
console.log(dividir(10,5))