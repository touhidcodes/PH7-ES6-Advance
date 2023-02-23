const students = [
	{
		id: 01,
		age: 15,
		class: "ten",
		marks: {
			math: 89,
			bio: 67,
			ban: 45,
			chem: 78,
			phy: 78,
		},
	},
	{
		id: 02,
		age: 15,
		class: "ten",
		marks: {
			math: 89,
			bio: 67,
			ban: 45,
			chem: 78,
			phy: 78,
		},
	},
	{
		id: 03,
		age: 15,
		class: "ten",
		marks: {
			math: 89,
			bio: 67,
			ban: 45,
			chem: 78,
			phy: 78,
		},
	},
	{
		id: 04,
		age: 15,
		class: "ten",
		marks: {
			math: 89,
			bio: 67,
			ban: 45,
			chem: 78,
			phy: 78,
		},
	},
];

const marks = students.marks;

const chem = students.marks["phy"];
console.log(chem);
