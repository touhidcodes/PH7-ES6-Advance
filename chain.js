const users = [{ id: 1, name: "touhid", age: "23" }];

console.log(users[0].name);

const data = {
	id: 500,
	address: {
		street1: "23 b lane",
		street2: "56 d",
	},
	post: 34000,
	City: "Dhaka",
};

const address = data.address.street1;
console.log(address);

const address2 = data.addrss?.street1;
console.log(address);
