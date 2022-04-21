// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
     {
            type: 'input',
            name: 'projectTitle',
            message: 'Please enter your project title. (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('You must enter the title of  your project!');
                    return false;
                }
            }
         },
         {
            type: 'input',
            name: 'description',
            message: 'Please enter a description your project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You must enter a description your project!');
                    return false;
                }
            }
         },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter installation instructions for your project. (Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('You must enter installation instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please describe the usage of your project .  (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('You must provide usage information!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'badgetype',
            message: 'Please select License Type (Required)',
            choices: ['Apache', 'Mozilla', 'MIT', 'Eclipse', 'Apple', 'None']
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How may others contribute to this project ?(Required)',
            validate: contributingInput => {
            if (contributingInput) {
                    return true;
                } else {
                    console.log('Please provide contribution information');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please list testing instructions . (Required)',
            validate: testInput => {
            if (testInput) {
                    return true;
                } else {
                    console.log('You must list the testing instructions.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub user name? (Required)',
            validate: testInput => {
            if (testInput) {
                    return true;
                } else {
                    console.log('You must provide your GitHub user name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address (Required)',
            validate: testInput => {
            if (testInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        }

]

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFileSync(fileName, data, (err) => {
        if (err) {
            console.log(err);
        }
        console.log("README.md File Created")
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(response => {
        writeToFile('README.md', generateMarkdown(response))   

    })
};

// Function call to initialize app
init()


