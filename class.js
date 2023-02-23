// class is syntactic sugar

// Create class
class Instructor {
	// Properties
	name;
	designation = "Web instructor";
	team = "web team";
	location;
	// set dynamic value with constructor
	constructor(name, location) {
		this.name = name;
		this.location = location;
	}
	// Methods
	settime(time) {
		console.log(`set time to ${time}`);
	}
	setLocation(location) {
		console.log(`set location: ${location}`);
	}
}

// create new object
const me = new Instructor("amir", "Dhaka");
console.log(me);

const you = new Instructor("khamir", "Dhakass");
console.log(you);
