function rand ({min = 0, max = 1000} = {}){
    //inverte as variáveis caso a menor for maior
    //if (min > max) {min, max} = {max, min}

    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);//arredonda pra baixo
}

const obj = {max:50, min: 40}
console.log(rand(obj));