class Room {
    public readonly size: number;
    public readonly capacity: number;

    public constructor(size: number, capacity: number) {
        this.size = size;
        this.capacity = capacity;
    }

    public comfort(size: number, capacity: number): number {
        return this.size / this.capacity;
    }


public printData():void {
console.log("-------");
console.log(`Room size: ${this.size} kv.m.`);
console.log(`Room capacity: ${this.capacity}`);
console.log(`Room comfort: ${this.comfort(this.size, this.capacity)}`);
console.log("-------");
}

}

const room = new Room(30,2);
console.log(room.printData());
