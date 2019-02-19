function somar() {
    let soma = 0;
    for (i in arguments) {
        soma += arguments[i];
    }
    return soma;
}

console.log(somar());
console.log(somar(1));
console.log(somar(1, 2, 3));
console.log(somar(1 ,10, 100, 2200, 4));
