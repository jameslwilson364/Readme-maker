// these lines call fs and inquirer
const inquirer = require('inquirer');
const fs = require('fs');

// this function takes the user's input and then writes the READMEGEN file
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
    const licenseChoice = response.projectLicense;
    console.log(licenseChoice);
    if (licenseChoice == 'GNU General Public License v3.0') {
    const userName = `# ${response.projectName}
    
- Description: ${response.projectDescription}

![](./assets/GNU.svg)

## Table of Contents
1. [Installation Instructions](#installation)
2. [Usage Information](#usage)
3. [Contribution Information](#cont)
4. [Test Instructions](#test)
5. [License Information](#license)
6. [Questions and Contact Information](#questions)

<a id="installation"></a>
## Installation Instructions
- ${response.projectInstallation}

<a id="usage"></a>
## Usage Information
- ${response.projectUsage}

<a id="cont"></a>
## Contribution Information
- ${response.projectCont}

<a id="test"></a>
## Test Instructions
- ${response.projectTest}

<a id="license"></a>
## License Information
- ${response.projectLicense}

<a id="questions"></a>
## Questions?
- https://github.com/${response.projectGitHub}
- ${response.projectEmail}

## End File`;
    
    // writes to the new file
    fs.writeFile('READMEGEN.md', `${userName}`, (err) =>
    err ? console.error(err) : console.log('README logged!')
    );
    
    
  } else if (licenseChoice == 'MIT License') {
    const userName = `# ${response.projectName}
    
- Description: ${response.projectDescription}

![](./assets/MIT.svg)

## Table of Contents
1. [Installation Instructions](#installation)
2. [Usage Information](#usage)
3. [Contribution Information](#cont)
4. [Test Instructions](#test)
5. [License Information](#license)
6. [Questions and Contact Information](#questions)

<a id="installation"></a>
## Installation Instructions
- ${response.projectInstallation}

<a id="usage"></a>
## Usage Information
- ${response.projectUsage}

<a id="cont"></a>
## Contribution Information
- ${response.projectCont}

<a id="test"></a>
## Test Instructions
- ${response.projectTest}

<a id="license"></a>
## License Information
- ${response.projectLicense}

<a id="questions"></a>
## Questions?
- https://github.com/${response.projectGitHub}
- ${response.projectEmail}

## End File`;
    
    // writes to the new file
    fs.writeFile('READMEGEN.md', `${userName}`, (err) =>
    err ? console.error(err) : console.log('README logged!')
    );
  } else if (licenseChoice == 'Mozilla Public License 2.0' ) { 
    const userName = `# ${response.projectName}
    
  - Description: ${response.projectDescription}
  
  ![](./assets/Mozilla.svg)

  ## Table of Contents
  1. [Installation Instructions](#installation)
  2. [Usage Information](#usage)
  3. [Contribution Information](#cont)
  4. [Test Instructions](#test)
  5. [License Information](#license)
  6. [Questions and Contact Information](#questions)
  
  <a id="installation"></a>
  ## Installation Instructions
  - ${response.projectInstallation}
  
  <a id="usage"></a>
  ## Usage Information
  - ${response.projectUsage}
  
  <a id="cont"></a>
  ## Contribution Information
  - ${response.projectCont}
  
  <a id="test"></a>
  ## Test Instructions
  - ${response.projectTest}
  
  <a id="license"></a>
  ## License Information
  - ${response.projectLicense}
  
  <a id="questions"></a>
  ## Questions?
  - https://github.com/${response.projectGitHub}
  - ${response.projectEmail}
  
  ## End File`;
      
      // writes to the new file
      fs.writeFile('READMEGEN.md', `${userName}`, (err) =>
      err ? console.error(err) : console.log('README logged!')
      );

  } else if (licenseChoice == 'The Unlicense') {
    const userName = `# ${response.projectName}
    
- Description: ${response.projectDescription}

![](./assets/Unlicense.svg)

## Table of Contents
1. [Installation Instructions](#installation)
2. [Usage Information](#usage)
3. [Contribution Information](#cont)
4. [Test Instructions](#test)
5. [License Information](#license)
6. [Questions and Contact Information](#questions)

<a id="installation"></a>
## Installation Instructions
- ${response.projectInstallation}

<a id="usage"></a>
## Usage Information
- ${response.projectUsage}

<a id="cont"></a>
## Contribution Information
- ${response.projectCont}

<a id="test"></a>
## Test Instructions
- ${response.projectTest}

<a id="license"></a>
## License Information
- ${response.projectLicense}

<a id="questions"></a>
## Questions?
- https://github.com/${response.projectGitHub}
- ${response.projectEmail}

## End File`;
    
    // writes to the new file
    fs.writeFile('READMEGEN.md', `${userName}`, (err) =>
    err ? console.error(err) : console.log('README logged!')
    );
  } else {
    console.log("You failed to pick a license");
  }
});
} 

// this function calls the writeFile
function init() {
  writeFile();
}

// this initializes the readme maker
init();


