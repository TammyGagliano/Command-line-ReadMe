// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  //Github username
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  //Email address
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  //Project name
  {
    type: "input",
    message: "What is your project name?",
    name: "project",
  },
  //Description of Project
  {
    type: "input",
    message: "Please write a short description of your project?",
    name: "description",
  },
  //License Options
  {
    type: "list",
    message: "What kind of license should your project have?",
    name: "license",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD3", "None"],
  },
  //Dependencies
  {
    type: "input",
    message: "What kind of command should be run to install dependencies",
    name: "dependencies",
    default: "npm i",
  },
  //Test information
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "tests",
    default: "npm test",
  },
  //Repo information
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "repo",
  },
  //Contribution Guidelines
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "repo",
  },
];

// TODO: Create a function to write README file
function createNewFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(),fileName), data);
}

// Function call to initialize app
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    createNewFile("README.md",  generateMarkdown({ ...answers }));
  });
}

init();