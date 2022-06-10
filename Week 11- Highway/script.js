`use strict`;

class Vehicle {
  constructor(name, fuel, wheels, doors) {
    this.name = name;
    this.wheels = wheels;
    this.fuel = fuel;
    this.doors = doors;
  }
  highwayDrive() {
    console.log(`${this.name} is driving on the highway!`);
  }
}

class Car extends Vehicle {
  constructor(name, fuel) {
    super(name, fuel);
    this.wheels = 4;
    this.doors = 5;
  }
}

class Bus extends Vehicle {
  constructor(name, fuel) {
    super(name, fuel);
    this.wheels = 6;
    this.doors = 3;
  }
}

class Motorcycle extends Vehicle {
  constructor(name, fuel) {
    super(name, fuel);
    this.wheels = 2;
    this.doors = 0;
  }
  highwayDrive() {
    console.log(`${this.name} is driving on the highway only if the road is dry!`);
  }
}

const bmw = new Car(`BMW`, `gas`);
const mercedesBus = new Bus(`MercedesBus`, `diesel`);
const yamaha = new Motorcycle(`Yamaha`, `gas`);

yamaha.highwayDrive();
bmw.highwayDrive();

class Highway {
  constructor(...carType) {
    carType.forEach(elem => {
      console.log(`${elem.name} is on the highway!`);
    });
  }
}

const a1 = new Highway(bmw, yamaha, mercedesBus);
