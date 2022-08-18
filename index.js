const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: "Enter your Github username: ",
            validate: usernameInput => {
                if(usernameInput){
                    return true;
                } else {
                    console.log('Please provide a Github username');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email address for QA ',

            validate: emailInput => {
                if(emailInput){
                    return true;
                } else {
                    console.log('Please provide a correct email')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name:'title',
            message: 'What is your project title? (Required) ',
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    console.log('Please provide a name for your project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project (Required), use the following questions as guide: \n- What was your motivation? \n- Why did you build this specific project? \n- What problem does it solve? \n- What did you learn? ',

            validate: descriptionInput => {
                if(descriptionInput){
                    return true;
                } else {
                    console.log('Please provide a description for your project')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide the installation instructions ',
            validate: instalationInput => {
                if(instalationInput){
                    return true;
                } else {
                    console.log('Please provide the installation instructions')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide the usage information ',
            validate: usageInput => {
                if(usageInput){
                    return true;
                } else {
                    console.log('Please provide the usage information')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Provice contribution requirements ',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please enter test instructions ',
            validate: testInput => {
                if(testInput){
                    return true;
                } else {
                    console.log('Please provide the installation instructions')
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please provice the requiere license ',
            choices: ['Apache 2.0','GNU GPLv3', 'MIT', 'Mozilla', 'GNU AGPLv3', 'GNU LGPLv3']
        } 
    ])
};

function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}`, data, (err) =>
    err ? console.error(err): console.log('README.md Created'));
}

function init() {
    questions()
    .then((data) => {
        writeToFile('README.md', generateMarkdown(data))
    })
};

// Function call to initialize app
init();
