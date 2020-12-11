console.log('1', this);

globalFunction();

function globalFunction() {
	console.log('2', this);
	insideFunction();

	function insideFunction() {
		console.log('3', this);
	}
}

const obj = {
	name: 'Konsta',
	func1() {
		console.log(this);
	}
};

const extractedFunc = obj.func1;

obj.func1();
extractedFunc();
