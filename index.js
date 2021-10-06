var Trikampis = (function () {
    function Trikampis(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    Trikampis.prototype.spausdintiDuomenis = function () {
        console.log("Krastine a: " + this.a);
        console.log("Krastine b: " + this.b);
        console.log("Krastine c: " + this.c);
        console.log("Perimetras " + this.apskaiciuotiPerimetra());
        console.log("Egzistuoja? " + this.trikampioPatikrinimas());
    };
    Trikampis.prototype.apskaiciuotiPerimetra = function () {
        return this.a + this.b + this.c;
    };
    Trikampis.prototype.trikampioPatikrinimas = function () {
        if (this.a + this.b > this.c && this.a + this.c > this.b && this.b + this.c > this.a) {
            return true;
        }
        else
            return false;
    };
    return Trikampis;
}());
var trikampis1 = new Trikampis(5, 6, 7);
var trikampis2 = new Trikampis(7, 3, 100);
console.log(trikampis1.spausdintiDuomenis());
console.log(trikampis2.spausdintiDuomenis());
