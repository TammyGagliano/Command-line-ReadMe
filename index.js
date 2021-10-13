// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
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
}
.then({
    description, 
    tableOfContents,
    installation, 
    usage, 
    license, 
    contributing,
    tests, 
    questions
})=> {

    //template to be used 
    const template = # ${title}

    * [Installation](#installation)
    * [Usage](#usage)
    * [contribution](#contribution)
    * [Credits](#credits)
    * [License](#license)
    # Installation
    ${installation}
    # Usage
    ${usage}
    ## Contribution
    ${contribution}
    ### Instructions
    ${instructions}
    ## Credits
    ${credit}
    ## License
    ${license}
    
    # Contact :${}
    * Github :${}
    * LinkedIn :${}
    * Email :${};

    // Function to create our ReadME file.
    createNewFile(title, template);
});
    

// TODO: Create a function to write README file
function createNewFile (fileName, data) {
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`,data,(err)=>{
    
        // then we will write a call back function 
    if (err) {
        console.log(err);
    } else {
        console.log('Your README File has been generated!');
    })
}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



