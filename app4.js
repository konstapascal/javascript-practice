const person = {
	firstname: 'default',
	lastname: 'default',
	age: 'default',
	printInfo: function () {
		return `${this.firstname} ${this.lastname} - ${this.age}`;
	},
};

const numbers = [1, 2, 3];
const fruits = new Array('apple', 'orange', 'mango');

const konsta = {
	firstname: 'konsta',
	lastname: 'pascal',
};

konsta.__proto__ = person;

console.log(person);
console.log(numbers);

// ES6 classes
class Person {
	constructor(firstname, lastname, age) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.age = age;
	}

	printInfo2() {
		return (
			this.firstname + ' ' + this.lastname + ' - ' + this.age + ' ' + this.job
		);
	}
}

class Student extends Person {
	constructor(firstname, lastname, age, grade) {
		super(firstname, lastname, age);
		this.grade = grade;
	}

	printInfo2() {
		return (
			this.firstname + ' ' + this.lastname + ' - ' + this.age + ' ' + this.grade
		);
	}
}

class Professor extends Person {
	constructor(firstname, lastname, age, job) {
		super(firstname, lastname, age);
		this.job = job;
	}

	profFunction() {
		return 'I am in professor';
	}
}

class Trainee extends Professor {
	constructor(firstname, lastname, age, job) {
		super(firstname, lastname, age, job);
	}
}

const johnPerson = new Person('Ted', 'Person', 32);
const johnPerson2 = new Person('Ted2', 'Person2', 33);

const konsta2 = new Student('Konstantinos', 'Pascal', 22, 'A');
const konsta3 = new Student('Konstantinos2', 'Pascal2', 22, 'A2');

const johnProf = new Professor('John', 'Prof', 42, 'professor');
const johnProf2 = new Professor('John2', 'Prof2', 42, 'professor2');

const trainee = new Trainee('Trainee', 'train2', 22, 'trainee');

console.log(johnPerson2);
console.log(konsta2);
console.log(johnProf2);
console.log(trainee);
