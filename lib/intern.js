const Employee = require("./employee")

class Intern extends Employee {
    constructor(name, id, title, school){
        super(name, id, title);
        this.school = school;
    }

    getSchool(){

    }

    getRole(){

        // overridden to return "Intern"
    }

}

module.exports = Intern;