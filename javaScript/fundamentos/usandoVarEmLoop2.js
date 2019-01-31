const funcs = [];

for (var i = 0; i < 10; i++){
    funcs.push(function (){
        console.log(i);
    })
}

funcs[2](); //mostra as 2 vezes o valor atual de var...
funcs[8](); //mostra as 2 vezes o valor atual de var...