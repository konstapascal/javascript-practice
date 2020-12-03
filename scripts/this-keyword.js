console.log('1', this);

globalFunction();

function globalFunction() {
	console.log('2', this);
	insideFunction();

	function insideFunction() {
		console.log('3', this);
	}
}
