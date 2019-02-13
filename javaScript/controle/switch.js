const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9://dessa forma caso for 10 ou 9 entra nesse bloco a seguir
            console.log('Aprovado, parabéns');
            break;
        case 8: case 7:
            console.log('Aprovado');
            break;
        case 6: case 5: case 4:
            console.log('Recuperação');
            break;
        case 3: case 2: case 1: case 0:
            console.log('Reprovado');
            break;
        default:
            console.log('Nota inválida');
    }
}


imprimirResultado(3);
imprimirResultado(6);
imprimirResultado(8);
imprimirResultado(-1);