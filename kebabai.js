class Produktas {
    constructor(pavadinimas, svoris, kaina) {
        this.kaina = kaina;
        this.svoris = svoris;
        this.pavadinimas = pavadinimas;
        this.barcode = 100000 + Math.round(Math.random() * 10000);
    }
    spausdintiDuomenis() {
        console.log(`Produktas: ${this.pavadinimas}`);
        console.log(`Barkodas: ${this.barcode}`);
        console.log(`Svoris: ${this.svoris} g.`);
        console.log(`Kaina: ${this.kaina} eur.`);
    }
}
var BulvytesTipas;
(function (BulvytesTipas) {
    BulvytesTipas["Lazdeles"] = "lzdl";
    BulvytesTipas["Laiveliai"] = "lvl";
    BulvytesTipas["Puseles"] = "psls";
})(BulvytesTipas || (BulvytesTipas = {}));
class A {
}
const a = new A();
a.x;
class B extends A {
    metodas() {
        this.z;
        this.x;
    }
}
class Bulvytes extends Produktas {
    constructor(kiekis, tipas = BulvytesTipas.Lazdeles) {
        super("Bulvytės", 150, 2);
        this.tipas = tipas;
        this.kiekis = kiekis;
    }
    spausdintiDuomenis() {
        super.spausdintiDuomenis();
        console.log(`Kiekis: ${this.kiekis}`);
        console.log(`Tipas: ${this.tipas}`);
        console.log("-------");
    }
}
var PadazoTipas;
(function (PadazoTipas) {
    PadazoTipas[PadazoTipas["Cesnakinis"] = 0] = "Cesnakinis";
    PadazoTipas[PadazoTipas["Astrus"] = 1] = "Astrus";
    PadazoTipas[PadazoTipas["Pikantiskas"] = 2] = "Pikantiskas";
    PadazoTipas[PadazoTipas["BBQ"] = 3] = "BBQ";
})(PadazoTipas || (PadazoTipas = {}));
class Padazas extends Produktas {
    constructor(tipas, pavadinimas) {
        super(pavadinimas, 40, 0.6);
        this.tipas = tipas;
    }
    spausdintiDuomenis() {
        super.spausdintiDuomenis();
        console.log(`Padažo tipas: ${PadazoTipas[this.tipas]}`);
    }
}
class Kebabas extends Produktas {
    constructor(svoris = 700) {
        super("Kebabas", svoris, 4.5);
        this.padazai = [];
    }
    pridetiPadaza(padazas) {
        this.padazai.push(padazas);
    }
    ;
    spausdintiDuomenis() {
        super.spausdintiDuomenis();
        console.log("Padažai:");
        console.log("================");
        for (const padazas of this.padazai) {
            padazas.spausdintiDuomenis();
            console.log("---");
        }
        console.log("================");
    }
}
const UI = {
    nameInput: document.getElementById("produktoPavadinimas"),
    priceInput: document.getElementById("produktoKaina"),
    weightInput: document.getElementById("produktoSvoris"),
    addButton: document.getElementById("pridetiProdukta"),
};
const produktai = [];
UI.addButton.addEventListener("click", (e) => {
    const pavadinimas = UI.nameInput.value;
    const svoris = Number(UI.weightInput.value);
    const kaina = Number(UI.priceInput.value);
    const naujasProduktas = new Produktas(pavadinimas, svoris, kaina);
    produktai.push(naujasProduktas);
    console.log(produktai);
});
