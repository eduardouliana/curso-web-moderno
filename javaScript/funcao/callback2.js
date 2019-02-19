const notas = [1, 3, 5, 7, 9, 2, 4, 8]

//sem callback
const notasBaixas1 = [];
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i]);
    }
}
console.log(notasBaixas1);

//com callback sem arrow
/**
 * filter retorna caso a condição passada for verdadeira
 */
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7;
})
console.log(notasBaixas2);

const notasbaixas3 = notas.filter(nota => nota < 7);
console.log(notasbaixas3);

//cria a função para possível reaproveitamento
const notasMenorQue7 = nota => nota < 7;
const notasbaixas4 = notas.filter(notasMenorQue7);
console.log(notasbaixas4);