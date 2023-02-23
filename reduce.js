const numbers = [23, 45, 76, 98, 23, 56, 12, 54, 77];

// array.reduce(accumulation function, initial value)
// Accumulation function (previous value, current value)
const total = numbers.reduce((previous, current) => {
	return previous + current, 0;
});
