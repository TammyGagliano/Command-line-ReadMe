// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'project',
    },
    {
      type: 'input',
      message: 'Please write a short description of your project?',
      name: 'description',
    },
    {
      type: 'list',
      message: 'What kind of license should your project have?',
      name: 'license',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD3', 'None'],
    },
    {
        type: 'input',
        message: 'What kind of command should be run to install dependencies',
        name: 'dependencies',
        //pre-generated answer: ['npm i'],
      },
      {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'tests',
        //pre-generated answer: ['npm test'],
      },
      {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'repo',
      },
      {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'repo',
      },
  ])


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();






inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'list',
      message: 'What languages do you know?',
      name: 'languages',
      choices: ['HTML', 'CSS', 'Javascript'],
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'chat'],
    },
  ])

  //the parameter will store the answers that the user supplies
  .then((response) => {
     // console.log(response)

  // Now we need to translate this information and store it in a file
  // Also, the data that is stored in here will need to be converted from a JSON object to a string
    fs.writeFile('response.txt', JSON.stringify(response), (err) => {

    // then we will write a call back function 
    if (err) {
        console.log(err);
    } else {
        console.log('It worked!');
    }      
});
});

