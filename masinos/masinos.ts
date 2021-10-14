 enum fuelTypes {
     benzinas = "benzinas",
         dyzelinas = "dyzelinas",
 }

 const formSaveDOM = document.getElementById('add_car') as HTMLElement
 const formUpdateDOM = document.getElementById('update_car') as HTMLElement
 const listDOM = document.getElementById('list') as HTMLElement

 function renderAddForm(): string {
     return formSaveDOM.innerHTML = `<form>
                <input id="model" type="text" placeholder="Modelis">
                <input id="date" type="date" placeholder="Pagaminimo data">
                <input id="color" type="text" placeholder="Spalva">
                <input id="fuel" list="fuelList" name="fuelTypes" placeholder="Kuro tipas">
                <datalist id="fuelList">
                    <option value="${fuelTypes.benzinas}">
                    <option value="${fuelTypes.dyzelinas}">
                </datalist>

                <button id="save" type="button">Prideti</button>
            </form>`
 }

 function renderUpdateForm(): string {
     return formUpdateDOM.innerHTML = ` <form>
                <input id="model" type="text" placeholder="Modelis">
                <input id="date" type="date" placeholder="Pagaminimo data">
                <input id="color" type="text" placeholder="Spalva">
                <input id="fuel" list="fuel" name="fuelTypes" placeholder="Kuro tipas">
                <datalist id="fuelTypes">
                    <option value="${fuelTypes.benzinas}">
                    <option value="${fuelTypes.dyzelinas}">
                </datalist>

                <button class="save" type="button">Atnaujinti</button>
            </form>`
 }

 renderAddForm()
 renderUpdateForm()

 function display(): void {
     listDOM.innerHTML = "";
     for (const car of cars) {
         car.printEntry(listDOM)
     }
     const imgDOM = listDOM.querySelector(".entry .actions .edit")
     const deleteDOM = listDOM.querySelector(".entry .actions .delete")
     console.log(imgDOM);
     console.log(deleteDOM);
 }

 const DOMs = {
     modelInput: document.getElementById('model') as HTMLInputElement,
     dateInput: document.getElementById('date') as HTMLInputElement,
     colorInput: document.getElementById('color') as HTMLInputElement,
     fuelInput: document.getElementById('fuel') as HTMLInputElement,
     saveFormButton: formSaveDOM.querySelector('button') as HTMLElement,
     editFormButton: formUpdateDOM.querySelector('button') as HTMLElement,
 }

 class Cars {
     public readonly model: string;
     public readonly date: string;
     public readonly color: string;
     public readonly fuel: fuelTypes;
     private id: number;

     constructor(model: string, date: string, color: string, fuel: fuelTypes = fuelTypes.benzinas, id ? : number) {
         this.model = model;
         this.date = date;
         this.color = color;
         this.fuel = fuel;
         this.id = id || Math.round(Math.random() * 10000);
     }

     public generateID(): number {
         return this.id
     }

     public printEntry(element ? : HTMLElement): void {
         if (element) {
             element.innerHTML += `<div id="${this.generateID()}" class="entry">
                <div class="entry_parameter">${this.model}</div>
                <div class="entry_parameter">${this.date}</div>
                <div class="entry_parameter">${this.color}</div>
                <div class="entry_parameter">${this.fuel}</div>
                <div class="actions">
                    <img class="edit" src="./edit.png" alt="Atnaujinti">
                    <img class="delete" src="./delete.png" alt="Istrinti">
                </div>
            </div>`
         }
     }
 }

 let cars: Cars[] = [];

 DOMs.saveFormButton.addEventListener("click", () => {
     const model = DOMs.modelInput.value;
     const date = DOMs.dateInput.value;
     const color = DOMs.colorInput.value;
     const fuel = DOMs.fuelInput.value;

     const newCar = new Cars(model, date, color, fuel)

     cars.push(newCar)
     console.log(cars);

     display()
     renderAddForm()
 })

 imgDOM.addEventListener("click", () => {
     formSaveDOM.classList.add('hide');
     formUpdateDOM.classList.remove('hide')
 })

 

 DOMs.editFormButton.addEventListener("click", () => {

 })