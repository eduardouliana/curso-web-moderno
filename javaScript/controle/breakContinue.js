const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let x in notas) {
    if (x == 5) {
        break//ao chegar no index 5 para o for
    }
    console.log(`${x} = ${notas[x]}`);
}

for (let y in notas) {
    if (y == 5) {
        continue //ao chegar no index 5 não mostra o 5 e continua para o próximo
    }
    console.log(`${y} = ${notas[y]}`);
}