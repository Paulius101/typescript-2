"use strict";
var fuelTypes;
(function (fuelTypes) {
    fuelTypes["benzinas"] = "benzinas";
    fuelTypes["dyzelinas"] = "dyzelinas";
})(fuelTypes || (fuelTypes = {}));
var formSaveDOM = document.getElementById('add_car');
var formUpdateDOM = document.getElementById('update_car');
var listDOM = document.getElementById('list');
function renderAddForm() {
    return formSaveDOM.innerHTML = "<form>\n                <input id=\"model\" type=\"text\" placeholder=\"Modelis\">\n                <input id=\"date\" type=\"date\" placeholder=\"Pagaminimo data\">\n                <input id=\"color\" type=\"text\" placeholder=\"Spalva\">\n                <input id=\"fuel\" list=\"fuelList\" name=\"fuelTypes\" placeholder=\"Kuro tipas\">\n                <datalist id=\"fuelList\">\n                    <option value=\"" + fuelTypes.benzinas + "\">\n                    <option value=\"" + fuelTypes.dyzelinas + "\">\n                </datalist>\n\n                <button id=\"save\" type=\"button\">Prideti</button>\n            </form>";
}
function renderUpdateForm() {
    return formUpdateDOM.innerHTML = " <form>\n                <input id=\"model\" type=\"text\" placeholder=\"Modelis\">\n                <input id=\"date\" type=\"date\" placeholder=\"Pagaminimo data\">\n                <input id=\"color\" type=\"text\" placeholder=\"Spalva\">\n                <input id=\"fuel\" list=\"fuel\" name=\"fuelTypes\" placeholder=\"Kuro tipas\">\n                <datalist id=\"fuelTypes\">\n                    <option value=\"" + fuelTypes.benzinas + "\">\n                    <option value=\"" + fuelTypes.dyzelinas + "\">\n                </datalist>\n\n                <button class=\"save\" type=\"button\">Atnaujinti</button>\n            </form>";
}
renderAddForm();
renderUpdateForm();
function display() {
    listDOM.innerHTML = "";
    for (var _i = 0, cars_1 = cars; _i < cars_1.length; _i++) {
        var car = cars_1[_i];
        car.printEntry(listDOM);
    }
    var imgDOM = listDOM.querySelector(".entry .actions .edit");
    var deleteDOM = listDOM.querySelector(".entry .actions .delete");
    console.log(imgDOM);
    console.log(deleteDOM);
}
var DOMs = {
    modelInput: document.getElementById('model'),
    dateInput: document.getElementById('date'),
    colorInput: document.getElementById('color'),
    fuelInput: document.getElementById('fuel'),
    saveFormButton: formSaveDOM.querySelector('button'),
    editFormButton: formUpdateDOM.querySelector('button'),
};
var Cars = /** @class */ (function () {
    function Cars(model, date, color, fuel, id) {
        if (fuel === void 0) { fuel = fuelTypes.benzinas; }
        this.model = model;
        this.date = date;
        this.color = color;
        this.fuel = fuel;
        this.id = id || Math.round(Math.random() * 10000);
    }
    Cars.prototype.generateID = function () {
        return this.id;
    };
    Cars.prototype.printEntry = function (element) {
        if (element) {
            element.innerHTML += "<div id=\"" + this.generateID() + "\" class=\"entry\">\n                <div class=\"entry_parameter\">" + this.model + "</div>\n                <div class=\"entry_parameter\">" + this.date + "</div>\n                <div class=\"entry_parameter\">" + this.color + "</div>\n                <div class=\"entry_parameter\">" + this.fuel + "</div>\n                <div class=\"actions\">\n                    <img class=\"edit\" src=\"./edit.png\" alt=\"Atnaujinti\">\n                    <img class=\"delete\" src=\"./delete.png\" alt=\"Istrinti\">\n                </div>\n            </div>";
        }
    };
    return Cars;
}());
var cars = [];
DOMs.saveFormButton.addEventListener("click", function () {
    var model = DOMs.modelInput.value;
    var date = DOMs.dateInput.value;
    var color = DOMs.colorInput.value;
    var fuel = DOMs.fuelInput.value;
    var newCar = new Cars(model, date, color, fuel);
    cars.push(newCar);
    console.log(cars);
    display();
    renderAddForm();
});
imgDOM.addEventListener("click", function () {
    formSaveDOM.classList.add('hide');
    formUpdateDOM.classList.remove('hide');
});
DOMs.editFormButton.addEventListener("click", function () {
});
