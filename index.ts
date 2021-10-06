/**
 * 1. Susikurkite TypeScript projektą
 *
 * 2. Parašykite programą, kuri padeda dirbti su trikampiais
 *
 * 3. Aprašykite klasę "Trikampis", kuri turėtu tris atributus
 * simbolizuojančius visas tris trikampio kraštines (a, b, c).
 *
 * 4. Trikampio kraštinių reikšmės turi būti priskiriamos sukuriant
 * objektą (konstruktoriuje).
 *
 * 5. Aprašykite metodą "spausdintiDuomenis()", kuris atspausdina
 * visus trikampio duomenis (kraštines) į konsolę.
 *
 * 6. Papildykite klasę metodu, kuris apskaičiuoja ir grąžina
 * trikampio perimetrą. Spausdinant trikampio duomenis
 * atspausdinkite ir jo perimetrą.
 *
 * 7. Parašykite metodą, kuris nusako, ar toks trikampis gali
 * egzistuoti (metodas turi grąžinti boolean reikšmę).
 * Spausdindami duomenis pasakykite, ar toks trikampis gali
 * egzistuoti.
 *
 * 8. Papildykite klasę metodu, kuris nurodo, ar trikampis yra
 * statusis.
 *
 */

class Trikampis {
    public a: number;
    public b: number;
    public c: number;

    public constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
        let duomenys = {}
    }

    public spasudintiDuomenis(): void {
        console.log(`Krastine a: ${this.a}`);
        console.log(`Krastine b: ${this.b}`);
        console.log(`Krastine b: ${this.c}`);
        console.log(`Perimetras: ${this.perimetras}`);

        if (this.arTrikampisEgzistuoja) {
            console.log("Trikampis egzistuoja!");
        } else {
            console.log("Trikampis neegzistuoja!");
        }

        if (this.arTrikampisStatusis) {
            console.log("Trikampis statusis")
        } else {
            console.log("Trikampis ne statusis");
        }

        console.log("---------");
    }

    public get perimetras(): number {
        return this.a + this.b + this.c;
    }

    public get arTrikampisEgzistuoja(): boolean {
        return this.a + this.b > this.c &&
            this.b + this.c > this.a &&
            this.a + this.c > this.b;
    }

    public get arTrikampisStatusis(): boolean {
        return this.a ** 2 + this.b ** 2 === this.c ** 2 ||
            this.b ** 2 + this.c ** 2 === this.a ** 2 ||
            this.a ** 2 + this.c ** 2 === this.b ** 2;
    }


}

const trikampis1 = new Trikampis(2, 3, 4);
const trikampis2 = new Trikampis(6, 3, 8);

trikampis1.spasudintiDuomenis();
trikampis2.spasudintiDuomenis();