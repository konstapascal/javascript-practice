console.log('start');

const hasMoney = true;
const isHappy = false;

const p1 = new Promise((resolve, reject) => {
	if (hasMoney && isHappy) {
		resolve('both are true');
	}
	reject('1 or both are false');
});

p1.then((msg) => console.log(msg)).catch((err) => console.log(err));

console.log('end');
