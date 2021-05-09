function calcBmi(weight, height) {
	return ((weight / height / height) * 10000).toFixed(1);
}

console.log(calcBmi(72, 170))