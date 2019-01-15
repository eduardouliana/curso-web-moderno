const escola = 'cod3r';

console.log(escola.charAt(4)); //caracter da posição x da string
console.log(escola.charCodeAt(3)); //caracter da tabela ascii
console.log(escola.indexOf('3')); //posição onde está este caracter
console.log(escola.substring(1)); //copiar da posição informada até o final
console.log(escola.substring(0,3)) //copiar da posição informada quantos caracteres vc informar
console.log('Escola '.concat(escola).concat('!')); //concatenar strings ou pode ser o +
console.log(escola.replace(3,'e')); //substirui uma pela outra
console.log('Ana, Maria, Pedro'.split(',')); //cria um array, quebrando pelo caracter informado

