const Employee = require("./employee")

class Engineer extends Employee {
    constructor(name, id, title, github){
        super(name, id, title);
        this.github = github; 
        // github username?
    }

    getGithub(){

    }

    getRole(){

        // overridden to return "Engineer"
    }
}

module.exports = Engineer;