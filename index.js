class Trikampis {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        let duomenys = {};
    }
    spasudintiDuomenis() {
        console.log(`Krastine a: ${this.a}`);
        console.log(`Krastine b: ${this.b}`);
        console.log(`Krastine b: ${this.c}`);
        console.log(`Perimetras: ${this.perimetras}`);
        if (this.arTrikampisEgzistuoja) {
            console.log("Trikampis egzistuoja!");
        }
        else {
            console.log("Trikampis neegzistuoja!");
        }
        if (this.arTrikampisStatusis) {
            console.log("Trikampis statusis");
        }
        else {
            console.log("Trikampis ne statusis");
        }
        console.log("---------");
    }
    get perimetras() {
        return this.a + this.b + this.c;
    }
    get arTrikampisEgzistuoja() {
        return this.a + this.b > this.c &&
            this.b + this.c > this.a &&
            this.a + this.c > this.b;
    }
    get arTrikampisStatusis() {
        return this.a + this.b === this.c ||
            this.b + this.c === this.a ||
            this.a + this.c === this.b;
    }
}
const trikampis1 = new Trikampis(2, 3, 4);
const trikampis2 = new Trikampis(6, 3, 8);
trikampis1.spasudintiDuomenis();
trikampis2.spasudintiDuomenis();
