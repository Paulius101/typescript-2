enum fuelTypes {
    benzinas = "Benzinas",
        dyzelinas = "Dyzelinas",
}

class Cars {
    public readonly model: string;
    public readonly date: string;
    public readonly color: string;
    public readonly fuel: string;

    constructor(model: string, date: string, color: string, fuel: fuelTypes) {
        this.model = model;
        this.date = date;
        this.fuel = fuel;
    }

    public printEntry(element ? : HTMLElement): void {
        if (element) {
            element.innerHTML += `<div id="ivestis_id" class="entry">
                <div class="entry_parameter">${this.model}</div>
                <div class="entry_parameter">${this.date}</div>
                <div class="entry_parameter">${this.color}</div>
                <div class="entry_parameter">${this.fuel}</div>
                <div class="actions">
                    <img id="edit" src="./edit.png" alt="Atnaujinti">
                    <img id="delete" src="./delete.png" alt="Istrinti">
                </div>
            </div>`
        }
    }
}

