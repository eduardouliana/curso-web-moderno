function Pessoa() {
    this.idade = 0;

    setInterval(() => {
        this.idade++;
        console.log(this.idade);
    }/*.bind(this)*/,2000)
}
new Pessoa