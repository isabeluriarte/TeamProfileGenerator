const inquirer = require("inquirer")
const Employee = require("./lib/employee")
const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")

let employeeArr = [];


// prompt user to build engineer team
const managerQuestions = [
    {
        type: "input",
        message: "What is your manager's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is your manager's ID?",
        name: "managerID"
    },
    {
        type: "input",
        message: "What is your manager's email?",
        name: "managerEmail"
    },
    {
        type: "number",
        message: "What is your manager's office number?",
        name: "OfficeNum"
    }];

const addMember = 
    {
        type: "list",
        message: "What type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add any more team members"],
        name: "teamMember"
    };

const engineerQuestions = [
    {
        type: "input",
        message: "What is your engineer's name?",
        name: "engineerName"
    },
    {
        type: "input",
        message: "What is your engineer's ID?",
        name: "engineerID"
    },
    {
        type: "input",
        message: "What is your engineer's email?",
        name: "engineerEmail"
    },
    {
        type: "input",
        message: "What is your engineer's GitHub username?",
        name: "githubUsername"
    }];

const internQuestions = [
    {
        type: "input",
        message: "What is your intern's name?",
        name: "internName"
    },
    {
        type: "input",
        message: "What is your intern's ID?",
        name: "internID"
    },
    {
        type: "input",
        message: "What is your intern's email?",
        name: "internEmail"
    },
    {
        type: "input",
        message: "What is your intern's school?",
        name: "school"
    }];

// generate a team.html page in output directory
    // each member should display:
        // Name
        // Role
        // ID
        // Role-specific property

inquirer.prompt(managerQuestions).then(function(res){
    console.log(res)
    var whatever = new Manager(res.managerName, res.managerID, res.managerEmail, res.OfficeNum);
    employeeArr.push(whatever);
    ask();
})



async function ask(){
    let res = await inquirer.prompt(addMember);
    let r;
    let employee;
    switch (res.teamMember) {
        case "Engineer":
            r = await inquirer.prompt(engineerQuestions);
            employee = new Engineer(r.engineerName, r.engineerID, r.engineerEmail, r.githubUsername);
            employeeArr.push(employee);
            ask();
            break;
        case "Intern":
            r = await inquirer.prompt(internQuestions);
            employee = new Intern(r.internName, r.internID, r.internEmail, r.school);
            employeeArr.push(employee);
            ask();
            break;
        default:
            //make the html thing
            console.log(employeeArr)
            break;
    }

}