// if humidity > 0.5 or the heat >= 36, it's unbearable return false
// if 25 < heat < 36 and the humidity > 0.4, also unbearable return false
// otherwise, it's sunbathing time :), return true

function bareable(heat, humidity) {
	if (heat >= 36 || humidity > 0.5) return false;
	if (heat > 25 && heat < 36 && humidity > 0.4) return false;

	return true;
}

console.log(bareable(12, 0.99));
console.log(bareable(32, 0.01));
