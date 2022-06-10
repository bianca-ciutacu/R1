`use strict`;

function Vehicle(name, color, engine, fuel, wheels) {
  this.name = name;
  this.color = color;
  this.engine = engine;
  this.fuel = fuel;
  this.wheels = wheels;
}

Vehicle.prototype.drive = function () {};
Vehicle.prototype.park = function () {};
function Car(name, color) {
  Vehicle.call(this, name, color, Car.ENGINE, Car.FUEL, Car.WHEELS);
}
Car.FUEL = `petrol`;
Car.ENGINE = 1.6;
Car.WHEELS = 4;
Car.prototype = Object.create(Vehicle.prototype);
function Moto(name, color) {
  Vehicle.call(this, name, color, Moto.ENGINE,Car.FUEL, Moto.WHEELS);
}
Moto.WHEELS = 2;
Moto.ENGINE = ` 700 cmc`;
Moto.prototype = Object.create(Vehicle.prototype);
function Bus(name, engine, fuel) {
  Vehicle.call(this, name, Bus.WHEELS, engine, fuel, Bus.WHEELS);
}
Bus.WHEELS = 16;
Bus.COLOR = "yellow";
Bus.prototype = Object.create(Vehicle.prototype);
function Engine(name, capacity) {
  this.name = name;
  this.capacity = capacity;
}
Engine.prototype.run = function () {
  console.log("Running");
};
Engine.prototype.start = function () {
  console.log("Starting");
  this.run();
};
Engine.prototype.stop = function () {
  console.log("Has stopped");
};
function CarFleet(lotNumber, vehicle, color) {
  this.lotNumber = lotNumber;
  this.vehicle = vehicle;
  this.fleet = [];
  for (let i = 0; i < this.lotNumber; i++) {
    this.fleet.push(new Car(vehicle, color));
  }
}

function MotoFleet(lotNumber, name, color) {
  this.lotNumber = lotNumber;
  this.vehicle = name;
  this.fleet = [];
  for (let i = 0; i < this.lotNumber; i++) {
    this.fleet.push(new Moto(name, color));
  }
}

const loganFleet = new CarFleet(20, `Dacia Logan`, `White`);

const suzukiFleet = new MotoFleet(10, `Suzuki`, `White`);

console.log(loganFleet, suzukiFleet);
