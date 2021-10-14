// enum fuelTypes {
//     benzinas = "Benzinas",
//         dyzelinas = "Dyzelinas",
// }

class Cars {
    public readonly model: string;
    public readonly date: string;
    public readonly color: string;
    public readonly fuel: string;

    constructor(model: string, date: string, color: string, fuel: string) {
        this.model = model;
        this.date = date;
        this.color = color;
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

let cars: Cars[] = [];

const DOMs = {
    listDOM: document.getElementById('list')as HTMLElement,
    modelInput: document.getElementById('model') as HTMLInputElement,
    dateInput: document.getElementById('date') as HTMLInputElement,
    colorInput: document.getElementById('color') as HTMLInputElement,
    fuelInput: document.getElementById('fuel') as HTMLInputElement,
    saveButton: document.getElementById('save') as HTMLElement,
}



DOMs.saveButton.addEventListener("click", () => {
    const model = DOMs.modelInput.value;
    const date = DOMs.dateInput.value;
    const color = DOMs.colorInput.value;
    const fuel = DOMs.fuelInput.value;

    const newCar = new Cars(model, date, color, fuel)

    cars.push(newCar)
console.log(cars);

    display()


})


function display(): void {
    DOMs.listDOM.innerHTML = "";
    for (const car of cars) {
        car.printEntry(DOMs.listDOM)
    }
    console.log("display");
    
}