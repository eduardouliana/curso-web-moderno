// IIFE -> Immediately Invoked Function Expression

(function() {
    console.log('Será executado na hora');
    console.log('Foge do escopo mais abrangente')
})()

//ou

(() => {
    console.log('Será executado na hora');
    console.log('Foge do escopo mais abrangente')
})()