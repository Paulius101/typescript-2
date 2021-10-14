"use strict";
// enum fuelTypes {
//     benzinas = "Benzinas",
//         dyzelinas = "Dyzelinas",
// }
var Cars = /** @class */ (function () {
    function Cars(model, date, color, fuel) {
        this.model = model;
        this.date = date;
        this.color = color;
        this.fuel = fuel;
    }
    Cars.prototype.printEntry = function (element) {
        if (element) {
            element.innerHTML += "<div id=\"ivestis_id\" class=\"entry\">\n                <div class=\"entry_parameter\">" + this.model + "</div>\n                <div class=\"entry_parameter\">" + this.date + "</div>\n                <div class=\"entry_parameter\">" + this.color + "</div>\n                <div class=\"entry_parameter\">" + this.fuel + "</div>\n                <div class=\"actions\">\n                    <img id=\"edit\" src=\"./edit.png\" alt=\"Atnaujinti\">\n                    <img id=\"delete\" src=\"./delete.png\" alt=\"Istrinti\">\n                </div>\n            </div>";
        }
    };
    return Cars;
}());
var cars = [];
var DOMs = {
    listDOM: document.getElementById('list'),
    modelInput: document.getElementById('model'),
    dateInput: document.getElementById('date'),
    colorInput: document.getElementById('color'),
    fuelInput: document.getElementById('fuel'),
    saveButton: document.getElementById('save'),
};
DOMs.saveButton.addEventListener("click", function () {
    var model = DOMs.modelInput.value;
    var date = DOMs.dateInput.value;
    var color = DOMs.colorInput.value;
    var fuel = DOMs.fuelInput.value;
    var newCar = new Cars(model, date, color, fuel);
    cars.push(newCar);
    console.log(cars);
    display();
});
function display() {
    DOMs.listDOM.innerHTML = "";
    for (var _i = 0, cars_1 = cars; _i < cars_1.length; _i++) {
        var car = cars_1[_i];
        car.printEntry(DOMs.listDOM);
    }
    console.log("display");
}
