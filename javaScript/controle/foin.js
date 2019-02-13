const notas = [6.4, 5, 10, 8, 9, 10, 3];

for (let i in notas) {
    console.log(i, notas[i]);
}

const pessoa = {
    nome: 'Eduardo',
    sobrenome: 'Uliana',
    idade: 24,
    peso: 85
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`);
}