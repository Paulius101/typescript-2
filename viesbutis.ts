enum roomSizes {
    vienvietis = 15,
        dvivietis = 30,
        trivietis = 45,
}

enum capacityOptions {
    vienas = 1,
        du = 2,
        trys = 3,
        keturi = 4,
}

class Room {
    public readonly size: number;
    public readonly capacity: number;

    public constructor(size: roomSizes = roomSizes.vienvietis, capacity: capacityOptions = capacityOptions.vienas) {
        this.size = size;
        this.capacity = capacity;
    }

    public comfort(): number {
        return this.size / this.capacity;
    }


    public printData(): void {
        console.log("-------");
        console.log(`Room size: ${this.size} kv.m.`);
        console.log(`Room capacity: ${this.capacity}`);
        console.log(`Room comfort: ${this.comfort()}`);
        console.log("-------");
    }

}

class Spa extends Room {
    public readonly poolSize: number;
    public readonly poolTemperature: number;

    constructor(size: number, capacity:number, poolSize: number, poolTemperature: number) {
        //super manau turetu paimti is Room kas ideta, o ne hardcodint.
        super(size, capacity)
        this.poolSize = poolSize;
        this.poolTemperature = poolTemperature;

    }

    public comfort(): number {
        super.comfort();
        return parseFloat(((this.size - this.poolSize) / this.capacity).toFixed(2))
    }


    public printData(): void {
        super.printData();
        console.log(`Pool size: ${this.poolSize} kv.m.`);
        console.log(`Pool temperature: ${this.poolTemperature} °C`);
        console.log("-------");
    }
}

class Hotel {
    public readonly name: string;
    public readonly address: string;
    public readonly stars: number;
    public readonly rooms: Room[]

    public constructor(name: string, address: string, stars: number) {
        this.name = name;
        this.address = address;
        this.stars = stars;
        this.rooms = []
    }

    public addRoom(room: Room): void {
        this.rooms.push(room)
    }

    private printRooms(minComfort ? : number): void {
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

    public printData(onlyComfort ? : boolean): void {
        console.log(`Hotel name: ${this.name}.`);
        console.log(`Hotel address:  ${this.address}`);
        console.log(`Hotel stars: ${this.stars}`);
        console.log("---");
        if (onlyComfort === true) {
            this.printRooms(15)
        }
        if (onlyComfort === undefined || onlyComfort === false) {
            this.printRooms()
        }
    }

}

const hotel = new Hotel("Urvas", "Urviniu g. 17", 5);
const room = new Room(roomSizes.vienvietis, capacityOptions.vienas);
const room1 = new Room(roomSizes.dvivietis, capacityOptions.du);
const room3 = new Room(roomSizes.dvivietis, capacityOptions.keturi)
const spa = new Spa(roomSizes.dvivietis,capacityOptions.trys,10, 39);
hotel.addRoom(room);
hotel.addRoom(room1);
hotel.addRoom(spa);
spa.printData()
hotel.printData();
hotel.printData(true);


