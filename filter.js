const numbers = [23, 45, 76, 98, 23, 56, 12, 54, 77];

const big = numbers.filter((x) => x < 50);
const even = numbers.filter((x) => x % 2 === 0);
const odd = numbers.filter((x) => x % 2 === 1);
console.log(even);

const users = [
	{
		id: 1,
		name: "panku",
		father: "jhonku",
		mother: "monku",
		address: "kocukhet",
		phone: 82364517923,
		price: 1800,
	},
	{
		id: 1,
		name: "panku",
		father: "jhonku",
		mother: "monku",
		address: "kocukhet",
		phone: 82364517923,
		price: 2000,
	},
	{
		id: 1,
		name: "panku",
		father: "jhonku",
		mother: "monku",
		address: "kocukhet",
		phone: 82364517923,
		price: 45000,
	},
	{
		id: 1,
		name: "panku",
		father: "jhonku",
		mother: "monku",
		address: "kocukhet",
		phone: 82364517923,
		price: 2300,
	},
];

const bigPrice = users.filter((x) => x.price > 2000);
console.log(bigPrice);
