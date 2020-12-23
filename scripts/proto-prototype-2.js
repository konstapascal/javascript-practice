function Animal(_size, _name) {
	this.size = _size;
	this.name = _name;
}

Animal.prototype.getDetails = function () {
	console.log(`${this.name} + ${this.size}`);
};

// ------------------------------

const animal_1 = new Animal(100, 'animal_1');
const animal_2 = new Animal(200, 'animal_2');

console.log(animal_1);
console.log(animal_2);

// console.log(animal_1.__proto__);
// console.log(animal_1.__proto__.__proto__);
// console.log(animal_1.__proto__.__proto__.__proto__);
