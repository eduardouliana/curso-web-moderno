const valores = [20, 30 ,50 ,80]

//acessar
console.log(valores[1])

//adicionar
valores[4] = 10;
valores.push('oi', 'teste', 'Dudu');

//remover
valores.pop();//remove o ultimo
delete valores[0];//remove o valor do index x

console.log(valores)