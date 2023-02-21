// 1. var let const
const number = [2, 3, 4, 5, 6];
let salary = 400;
salary = 200;

// 2. Default Parameters
function salaryCalculator(salary, tax = 0.25, bonus = 0) {
	const remaining = salary - salary * tax;
	const total = remaining + bonus;
	return total;
}

// 3. Template String
const template = `my name is touhid and my salary is: ${salaryCalculator(
	150000
)}`;

console.log(template);

// 4. Arrow function
const add = (x) => x * 2;
const salaryCalc = (salary, tax, bonus) => {
	const remaining = salary - salary * tax;
	const total = remaining + bonus;
	return total;
};

// 5. Spread Out
const ages = [12, 45, 64, 23, 24];
const newAges = [...ages, 45, 21, 34];

// 6. Destructuring
const { x, y, ...z } = { x: 12, y: 23, z: 33, name: "sakib", salary: 2300 };
console.log(x, y, z);

const num = [2, 4, 5, 6, 7];
const [a, b, c] = num;
console.log(a, b, c);
