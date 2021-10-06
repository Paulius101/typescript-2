var Trikampis = (function () {
    function Trikampis(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    Trikampis.prototype.spausdintiDuomenis = function () {
        console.log("Krastine a: " + this.a);
        console.log("Krastine a: " + this.b);
        console.log("Krastine a: " + this.c);
    };
    return Trikampis;
}());
var trikampis1 = new Trikampis(5, 6, 7);
var trikampis2 = new Trikampis(7, 3, 4);
console.log(trikampis1.a);
