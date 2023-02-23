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

const smallPrice = users.find((x) => x.price > 2000);
console.log(smallPrice);
