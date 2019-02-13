function teste1 (num){
    if (num > 10) 
        console.log('dentro do if');
    console.log('fora do if');
}

teste1(10);
teste1(20);

function teste2(num) {
    if(num > 10);//com este ';' faz com que o if não faça nada, pq termina ali 
        console.log(num);
}

teste2(10);
teste2(20);