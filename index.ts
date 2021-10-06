class Trikampis {
        a: number;
        b: number;
        c:number;

        public constructor (a: number, b: number, c: number) {
            this.a = a;
            this.b = b;
            this.c= c;
        }

 public spausdintiDuomenis(): void {
            console.log(`Krastine a: ${this.a}`);
            console.log(`Krastine b: ${this.b}`);
            console.log(`Krastine c: ${this.c}`);
            console.log(`Perimetras ${this.apskaiciuotiPerimetra()}`)
            console.log(`Egzistuoja? ${this.trikampioPatikrinimas()}`)
    }

        public apskaiciuotiPerimetra(): number{
            return this.a + this.b + this.c
    }

        public trikampioPatikrinimas():boolean {
            if(this.a + this.b > this.c && this.a + this.c > this.b && this.b + this.c > this.a) {
            return true;
        }
            else return false;
        } 

}

const trikampis1 = new Trikampis(5,6,7);
const trikampis2= new Trikampis(7,3,100);

console.log(trikampis1.spausdintiDuomenis());
console.log(trikampis2.spausdintiDuomenis());


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
