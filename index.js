// I need fs and inquirer
const inquirer = require('inquirer');
const fs = require('fs');


// license gives a list of options exercise 20; also grab the list of options from github and adds a badge

// link the table of contents to the corresponding sections of the README

function writeFile() {
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project name?',
      name: 'projectName',
    },
    {
        type: 'input',
        message: 'What is your project description?',
        name: 'projectDescription',
      },
    {
    type: 'input',
    message: 'What is your project installation instructions?',
    name: 'projectInstallation',
    },
    {
        type: 'input',
        message: 'What is your project usage information?',
        name: 'projectUsage',
    },
    {
        type: 'input',
        message: 'What is your project contribution guidelines?',
        name: 'projectCont',
    },
    {
        type: 'input',
        message: 'What is your project test instructions?',
        name: 'projectTest',
    },
    {
        type: 'list',
        message: 'What license do you want to apply?',
        name: 'projectLicense',
        choices: ['GNU General Public License v3.0', 'MIT License', 'Mozilla Public License 2.0', 'The Unlicense'],
    },
    {
        type: 'input',
        message: 'What is your github user name?',
        name: 'projectGitHub',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'projectEmail',
    },
    
  ])
  .then((response) => {
    console.log(response.projectName);
    const userName = `# ${response.projectName}
    
- Description: ${response.projectDescription}

## Table of Contents
1. Installation Instructions
2. Usage Information
3. Contribution Information
4. Test Instructions
5. License Information
6. Questions and Contact Information

## Installation Instructions
- ${response.projectInstallation}

## Usage Information
- ${response.projectUsage}

## Contribution Information
- ${response.Cont}

## Test Instructions
- ${response.projectTest}

## License Information
- ${response.projectLicense}

## Questions?
- https://github.com/${response.projectGitHub}
- ${response.projectEmail}

## End File`;
    fs.writeFile('READMEGEN.md', `${userName}`, (err) =>
    err ? console.error(err) : console.log('README logged!')
    );
    
  });
}


function init() {
  writeFile();
}


init();
