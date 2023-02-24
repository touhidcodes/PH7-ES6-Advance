// Parent Class
class PHeroMember {
	name;
	location;
	id;
	constructor(name, location, id) {
		this.name = name;
		this.location = location;
		this.id = id;
	}
}

class Instructor extends PHeroMember {
	designation = "Web instructor";
	team;

	constructor(name, location, id, team) {
		super(name, location, id);
		this.team = team;
	}
	settime(time) {
		console.log(`set time to ${time}`);
	}
	setLocation(location) {
		console.log(`set location: ${location}`);
	}
	provideFeedback() {
		console.log(`${this.name} thank you for your feedback`);
	}
}

class Developer extends PHeroMember {
	designation = "Web instructor";
	team = "web team";
	tech;
	constructor(name, location, id, tech) {
		super(name, location, id);
		this.tech = tech;
	}
	developer(feature) {
		console.log(`please develope ${feature}`);
	}
	releaseWeb(version) {
		console.log(`app version: ${version}`);
	}
}

const dev = new Instructor("Jhankar", "Abroad", 001, "PHero");
const dev2 = new Developer("Anis", "BD", 3, "dev");
console.log(dev, dev2);
