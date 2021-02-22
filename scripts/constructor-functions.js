function Car(brand, sound) {
	this.brand = brand;
	this.sound = sound;
	this.myBrand = function () {
		console.log('My brand is ' + this.brand + '!');
	};
}

Car.staticFunction = function () {
	console.log('I am a static function!');
};

Car.prototype.prototypeFunction = function () {
	console.log('I am a shared function!');
};

const newObj = Object.create(Car.prototype);

const teslaCar = new Car('Tesla', 'Shhh..');
const bmwCar = new Car('BMW', 'Vrooom..');

console.log(teslaCar);
console.log(bmwCar);
