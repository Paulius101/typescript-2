class Trikampis {
    a: number
    b: number
    c:number

    constructor (a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c= c;
    }

    spausdintiDuomenis() {
        console.log(`Krastine a: ${this.a}`);
        console.log(`Krastine a: ${this.b}`);
        console.log(`Krastine a: ${this.c}`);
    }

}

const trikampis1 = new Trikampis(5,6,7);
const trikampis2= new Trikampis(7,3,4);

console.log(trikampis1.spausdintiDuomenis());



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
 */
