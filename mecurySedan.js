
const VehicleModule = require("./vehicle").Vehicle

class Sedan extends Vehicle {
    constructor (make, model, year, color, mileage) {
        super (make, model, year, color, mileage) {
            this.maximumPassengers = 5;
            this.passenger = 0;
            this.numberOfWheels = 5;
            this.maximumSpeed = 160;
            this.fuel = 10;
            this.scheduleService = false;
        }
    }

    loadPassenger (num) {
        if (this.passenger < this.maximumPassengers) {
            if ((num + this.passenger) <= this.maximumPassengers) {
            this.passenger = num;
            console.log ("let's go for a ride!")
        } else {
            console.log ("not enough space in Sedan")
        }

    }

    start() {
        if (this.fuel > 0) {
            console.log ("Sedan has started");
            return this.start == 'true';
        } else {
            console.log("out of fuel");
            this.start == 'false';
        }
    }

    scheduleService() {
        if (this.mileage > 30,000) {
            this.scheduleService = true;
            return this.scheduleService
        }
    }

}

let mySedan = new Sedan ('Mercury', 'A28', '2010', 'black', '100,000' ) 
mySedan.start()
mySedan.scheduleService()
mySedan.loadPassanger(4)