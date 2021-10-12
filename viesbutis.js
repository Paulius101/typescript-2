var roomSizes;
(function (roomSizes) {
    roomSizes[roomSizes["vienvietis"] = 15] = "vienvietis";
    roomSizes[roomSizes["dvivietis"] = 30] = "dvivietis";
    roomSizes[roomSizes["trivietis"] = 45] = "trivietis";
})(roomSizes || (roomSizes = {}));
var capacityOptions;
(function (capacityOptions) {
    capacityOptions[capacityOptions["vienas"] = 1] = "vienas";
    capacityOptions[capacityOptions["du"] = 2] = "du";
    capacityOptions[capacityOptions["trys"] = 3] = "trys";
    capacityOptions[capacityOptions["keturi"] = 4] = "keturi";
})(capacityOptions || (capacityOptions = {}));
class Room {
    constructor(size = roomSizes.vienvietis, capacity = capacityOptions.vienas) {
        this.size = size;
        this.capacity = capacity;
    }
    comfort() {
        return this.size / this.capacity;
    }
    printData() {
        console.log("-------");
        console.log(`Room size: ${this.size} kv.m.`);
        console.log(`Room capacity: ${this.capacity}`);
        console.log(`Room comfort: ${this.comfort()}`);
        console.log("-------");
    }
}
class Spa extends Room {
    constructor(size, capacity, poolSize, poolTemperature) {
        super(size, capacity);
        this.poolSize = poolSize;
        this.poolTemperature = poolTemperature;
    }
    comfort() {
        super.comfort();
        return parseFloat(((this.size - this.poolSize) / this.capacity).toFixed(2));
    }
    printData() {
        super.printData();
        console.log(`Pool size: ${this.poolSize} kv.m.`);
        console.log(`Pool temperature: ${this.poolTemperature} °C`);
        console.log("-------");
    }
}
class Hotel {
    constructor(name, address, stars) {
        this.name = name;
        this.address = address;
        this.stars = stars;
        this.rooms = [];
    }
    addRoom(room) {
        this.rooms.push(room);
    }
    printRooms(minComfort) {
        console.log("Rooms:");
        for (const room of this.rooms) {
            if (room.comfort() >= minComfort) {
                room.printData();
                console.log("---");
            }
            if (minComfort === undefined) {
                room.printData();
                console.log("---");
            }
        }
        console.log("================");
    }
    printData(onlyComfort) {
        console.log(`Hotel name: ${this.name}.`);
        console.log(`Hotel address:  ${this.address}`);
        console.log(`Hotel stars: ${this.stars}`);
        console.log("---");
        if (onlyComfort === true) {
            this.printRooms(15);
        }
        if (onlyComfort === undefined || onlyComfort === false) {
            this.printRooms();
        }
    }
}
const hotel = new Hotel("Urvas", "Urviniu g. 17", 5);
const room = new Room(roomSizes.vienvietis, capacityOptions.vienas);
const room1 = new Room(roomSizes.dvivietis, capacityOptions.du);
const room3 = new Room(roomSizes.dvivietis, capacityOptions.keturi);
const spa = new Spa(roomSizes.dvivietis, capacityOptions.trys, 10, 39);
hotel.addRoom(room);
hotel.addRoom(room1);
hotel.addRoom(spa);
spa.printData();
hotel.printData();
hotel.printData(true);
