class Room {
    constructor(size, capacity) {
        this.size = size;
        this.capacity = capacity;
    }
    comfort(size, capacity) {
        return this.size / this.capacity;
    }
    printData() {
        console.log("-------");
        console.log(`Room size: ${this.size} kv.m.`);
        console.log(`Room capacity: ${this.capacity}`);
        console.log(`Room comfort: ${this.comfort(this.size, this.capacity)}`);
        console.log("-------");
    }
}
const room = new Room(30, 2);
console.log(room.printData());
