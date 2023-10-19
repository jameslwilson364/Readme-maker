// I need fs and inquirer
const inquirer = require('inquirer');
const fs = require('fs');

// overall goal
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled 
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// TODO: Create an array of questions for user input


// project title prompt; project title at the top #title
// description; needs a section
// installation instructions; needs a section
// usage information; needs a section
// contribution guidelines; needs a section
// test instructions; needs a section
// license gives a list of options exercise 20; also grab the list of options from github and adds a badge
// github username; added to questions with a link to my GitHub profile
// email address; added to questions with instructions on how to reach me with additional questions
// link the table of contents to the corresponding sections of the README

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
    
    ## Description
    - ${response.projectDescription}

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
    - ${response.projectGitHub}
    - ${response.projectEmail}
    
    ## End File`;
    fs.writeFile('READMEGEN.md', `${userName}`, (err) =>
    err ? console.error(err) : console.log('Commit logged!')
    );
    
  });

  

// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
