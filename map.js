const numbers = [1, 2, 4, 5, 6, 7, 8, 9];

function getDoubles(numbers) {
	const output = [];
	for (const number of numbers) {
		const double = output;
		output.push(double);
	}
	return output;
}

function doubleItFun(num) {
	const number = num * 2;
	return number;
}

const output = (num) => num * 2;
const result = getDoubles(numbers);
console.log(result);

const mapArray = numbers.map(getDoubles);
console.log(mapArray);
