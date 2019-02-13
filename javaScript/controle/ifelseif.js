Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim;
}

const imprimirResultado = function (nota) {
    if (nota.entre(0, 3.99)){
        console.log('Reprovado')
    }else if (nota.entre(4, 6.99)){
        console.log('Recuperação')
    } else if (nota.entre(7, 10)){
        console.log('Aprovado')
    }else {
        console.log('Nota inválida');
    }
}

imprimirResultado(3);
imprimirResultado(6);
imprimirResultado(8);
imprimirResultado(-1);