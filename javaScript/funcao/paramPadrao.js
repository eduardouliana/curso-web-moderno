function soma1(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
}

console.log(soma1());
console.log(soma1(1, 2));

function soma2(a = 1, b = 1, c = 1) {
    return a + b + c;
}

console.log(soma1());
console.log(soma1(1, 2));
console.log(soma1(10, 20, 30  ));

