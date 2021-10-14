"use strict";
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
 * 9. Sukurkite masyvą, kuris saugo trikampių reikšmes,
 * panaudodami ciklą atspausdinkite visų masyvę esančių trikampių
 * duomenis.
 *
 * 10. ND: Papildykite programą funkcionalumu, kuris trikampių
 * masyvą užpildo trikampiais (50 reikšmių), kurių kraštinės yra
 * atsitiktinės reikšmės.
 *
 * Papildoma: Vėliau programa masyvą prafiltravus
 * paliktų tik egzistuojančius trikampius ir atspausdintų jų duomenis.
 */
var Trikampis = /** @class */ (function () {
    function Trikampis(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    Trikampis.prototype.spasudintiDuomenis = function () {
        console.log("Krastine a: " + this.a);
        console.log("Krastine b: " + this.b);
        console.log("Krastine b: " + this.c);
        console.log("Perimetras: " + this.perimetras);
        if (this.arTrikampisEgzistuoja) {
            console.log("Trikampis egzistuoja!");
        }
        else {
            console.log("Trikampis neegzistuoja!");
        }
        console.log("Trikampis " + (this.arTrikampisEgzistuoja ? "egzistuoja" : "neegzistuoja") + ".");
        console.log("Trikampis " + (this.arStatus ? "yra" : "nera") + " statusis.");
        console.log("---------");
    };
    Object.defineProperty(Trikampis.prototype, "perimetras", {
        get: function () {
            return this.a + this.b + this.c;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Trikampis.prototype, "arStatus", {
        get: function () {
            var a2 = this.a * this.a;
            var b2 = this.b * this.b;
            var c2 = this.c * this.c;
            return a2 + b2 === c2 ||
                a2 + c2 === b2 ||
                b2 + c2 === a2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Trikampis.prototype, "arTrikampisEgzistuoja", {
        get: function () {
            return this.a + this.b > this.c &&
                this.b + this.c > this.a &&
                this.a + this.c > this.b;
        },
        enumerable: false,
        configurable: true
    });
    return Trikampis;
}());
var trikampiai = [new Trikampis(3, 4, 5)];
trikampiai.push(new Trikampis(6, 3, 8));
for (var _i = 0, trikampiai_1 = trikampiai; _i < trikampiai_1.length; _i++) {
    var trikampis = trikampiai_1[_i];
    trikampis.spasudintiDuomenis();
}
