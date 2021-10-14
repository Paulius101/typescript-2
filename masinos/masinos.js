"use strict";
// enum fuelTypes {
//     benzinas = "Benzinas",
//         dyzelinas = "Dyzelinas",
// }
class Cars {
    constructor(model, date, color, fuel) {
        this.model = model;
        this.date = date;
        this.color = color;
        this.fuel = fuel;
    }
    printEntry(element) {
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
            </div>`;
        }
    }
}
let cars = [];
const DOMs = {
    listDOM: document.getElementById('list'),
    modelInput: document.getElementById('model'),
    dateInput: document.getElementById('date'),
    colorInput: document.getElementById('color'),
    fuelInput: document.getElementById('fuel'),
    saveButton: document.getElementById('save'),
};
DOMs.saveButton.addEventListener("click", () => {
    const model = DOMs.modelInput.value;
    const date = DOMs.dateInput.value;
    const color = DOMs.colorInput.value;
    const fuel = DOMs.fuelInput.value;
    const newCar = new Cars(model, date, color, fuel);
    cars.push(newCar);
    console.log(cars);
    display();
});
function display() {
    DOMs.listDOM.innerHTML = "";
    for (const car of cars) {
        car.printEntry(DOMs.listDOM);
    }
    console.log("display");
}
