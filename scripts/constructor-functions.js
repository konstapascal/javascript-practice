function Vehicle(type, name) {
	this.type = type;
	this.name = name;
}

Vehicle.vehicleStaticFunction = function () {
	console.log('I am a vehicle static function!');
};

Vehicle.prototype.vehiclePrototypeFunction = function () {
	console.log('I am a vehicle shared function!');
};

function Car(brand, sound) {
	this.brand = brand;
	this.sound = sound;
	this.myBrand = function () {
		console.log('My brand is ' + this.brand + '!');
	};
}

// ALTERNATIVE 1
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// ALTERNATIVE 2
// Car.prototype.__proto__ = Vehicle.prototype;

//ALTERNATIVE 3
// Object.setPrototypeOf(Car.prototype, Vehicle.prototype);

Car.carStaticFunction = function () {
	console.log('I am a car static function!');
};

Car.prototype.carPrototypeFunction = function () {
	console.log('I am a car shared function!');
};

const vehicle = new Vehicle('vehicle', 'name');

const teslaCar = new Car('Tesla', 'Shhh..');
const bmwCar = new Car('BMW', 'Vrooom..');
