const users = [
	{
		id: 1,
		name: "panku",
		father: "jhonku",
		mother: "monku",
		address: "kocukhet",
		phone: 82364517923,
	},
	{
		id: 1,
		name: "panku",
		father: "jhonku",
		mother: "monku",
		address: "kocukhet",
		phone: 82364517923,
	},
	{
		id: 1,
		name: "panku",
		father: "jhonku",
		mother: "monku",
		address: "kocukhet",
		phone: 82364517923,
	},
	{
		id: 1,
		name: "panku",
		father: "jhonku",
		mother: "monku",
		address: "kocukhet",
		phone: 82364517923,
	},
];

// MAP have return
const address = users.map((x) => x.address);
console.log(address);

// For Each have no return
users.forEach((x) => x.phone);
