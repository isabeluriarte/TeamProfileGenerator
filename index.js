const inquirer = require("inquirer")
const Employee = require("./lib/employee")
const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")


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
        type: "input",
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

