// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue)](https://shields.io)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `##License
      Copyright ${license} license`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
 
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Testing](#testing)
  * [License](#license)
  * [Questions](#questions)

  # Description
  ${data.description}
  
  # Installation
  To install dependencies, run these commands:
  ${data.installation}

  # Usage
  Instructions for use:
  ${data.usage}
  ${renderLicenseSection(data.license)}
  
  ## Contributions
  If you would like to contribute, please adhere to these guidelines:
  ${data.contributions}
  
  ## Testing
  Instructions for testing application:
  ${data.testing}
  
  ## License
  This project is covered under the ${data.license} license.
  ${renderLicenseLink(data.license)}


  ## Questions
  For further questions:
  ${data.questions}
  
  Contact Information:_
  GitHub:[${data.gitbhub}] (https://github.com/${data.github}/)
  Email: Contact me at : ${data.email} with any questions you may have!
  `;
}

module.exports = generateMarkdown;
