// 25  =>  25 + 12 + 6 + 3 + 1 = 47

function halvingSum(num) {
	let halves = [];

	while (num >= 1) {
		halves.push(num);
		num = Math.floor(num / 2);
	}

	return halves.reduce((acc, curr) => acc + curr);
}

console.log(halvingSum(25));
