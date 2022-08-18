const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generatePage = require('./src/page-template')
const generateMarkdown = require('./generateMarkdown');
const { writeFile, copyFile } = require('./utils/generate-site');
const fs = require('fs');
const { exit } = require('process');

// It prompts the user for their/her/his team

// Manager
const ManagerPrompt = UserData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What's the manager's name? ",
            validate: usernameInput => {
                if(usernameInput){
                    return true;
                } else {
                    console.log('Please provide a valid name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What's the manager's id? ",
            validate: idInput => {
                if(idInput){
                    return true;
                } else {
                    console.log('Please provide a valid id number');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What's the manager's email? ",
            validate: emailInput => {
                if(emailInput){
                    return true;
                } else {
                    console.log('Please provide a valid email address');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "What's the manager's office number? ",
            validate: officeInput => {
                if(officeInput){
                    return true;
                } else {
                    console.log('Please provide a valid office number');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'add',
            message: 'What other teammate would like to add?',
            choices: ['Intern','Engineer', "Manager", "I am ok, thank you."]
        }
    ])
    .then(data => {
        const managerInput = new Manager(data.name, data.id, data.email, data.office);
        UserData.push(managerInput);
        if(data.add === 'Intern'){
            return InternPrompt(UserData);
        } else if(data.add === 'Engineer'){
            return EngineerPrompt(UserData);
        } else if(data.add === 'Manager'){
            return ManagerPrompt(UserData);
        } else{
            return UserData;
        }
    });
}

// Intern 

const InternPrompt = UserData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What's the intern's name? ",
            validate: usernameInput => {
                if(usernameInput){
                    return true;
                } else {
                    console.log('Please provide a valid name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What's the intern's id? ",
            validate: idInput => {
                if(idInput){
                    return true;
                } else {
                    console.log('Please provide a valid id number');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What's the intern's email? ",
            validate: emailInput => {
                if(emailInput){
                    return true;
                } else {
                    console.log('Please provide a valid email address');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What's the intern's school name? ",
            validate: officeInput => {
                if(officeInput){
                    return true;
                } else {
                    console.log('Please provide a valid school name');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'add',
            message: 'What other teammate would like to add?',
            choices: ['Intern','Engineer', "Manager", "I am ok, thank you."]
        }
    ])
    .then(data => {
        const internInput = new Intern(data.name, data.id, data.email, data.school);
        UserData.push(internInput);
        if(data.add === 'Intern'){
            return InternPrompt(UserData);
        } else if(data.add === 'Engineer'){
            return EngineerPrompt(UserData);
        } else if(data.add === 'Manager'){
            return ManagerPrompt(UserData);
        } else{
            return UserData;
        }
    })
};
const ReadmeFile = UserData => {
        return inquirer.prompt([
            {
                type: 'list',
                message: "Would like to add a README.md in your project?",
                choices: ['yes', 'no'],
                validate: readmeAnswer => {
                    if(readmeAnswer){
                        return init();
                    } 
                }
            }
      ]);
    };

// Engineer 

const EngineerPrompt = UserData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What's the engineer's name? ",
            validate: usernameInput => {
                if(usernameInput){
                    return true;
                } else {
                    console.log('Please provide a valid name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What's the engineer's id? ",
            validate: idInput => {
                if(idInput){
                    return true;
                } else {
                    console.log('Please provide a valid id number');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What's the enginer's email? ",
            validate: emailInput => {
                if(emailInput){
                    return true;
                } else {
                    console.log('Please provide a valid email address');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What's the engineer's Github username? ",
            validate: officeInput => {
                if(officeInput){
                    return true;
                } else {
                    console.log('Please provide a valid GitHub username');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'add',
            message: 'What other teammate would like to add?',
            choices: ['Intern','Engineer', "Manager", "I am ok, thank you."]
        }
    ])
    .then(data => {
        const EngineerInput = new Engineer(data.name, data.id, data.email, data.github);
        UserData.push(EngineerInput);
        if(data.add === 'Intern'){
            return InternPrompt(UserData);
        } else if(data.add === 'Engineer'){
            return EngineerPrompt(UserData);
        } else if(data.add === 'Manager'){
            return ManagerPrompt(UserData);
        } else{
            return UserData;
        }
    })
};

UserData = [];

ManagerPrompt(UserData)
    .then(UserData => {
        return generatePage(UserData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
      })
      .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
      })
      .then(copyFileResponse => {
        console.log(copyFileResponse);
      })
      .catch(err => {
        console.log(err);
      });



// // It Creates a README.md File 
// const questions = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'username',
//             message: "Enter your Github username: ",
//             validate: usernameInput => {
//                 if(usernameInput){
//                     return true;
//                 } else {
//                     console.log('Please provide a Github username');
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: 'Enter email address for QA ',

//             validate: emailInput => {
//                 if(emailInput){
//                     return true;
//                 } else {
//                     console.log('Please provide a correct email')
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name:'title',
//             message: 'What is your project title? (Required) ',
//             validate: nameInput => {
//                 if(nameInput){
//                     return true;
//                 } else {
//                     console.log('Please provide a name for your project');
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'description',
//             message: 'What is the description of your project (Required), use the following questions as guide: \n- What was your motivation? \n- Why did you build this specific project? \n- What problem does it solve? \n- What did you learn? ',

//             validate: descriptionInput => {
//                 if(descriptionInput){
//                     return true;
//                 } else {
//                     console.log('Please provide a description for your project')
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'installation',
//             message: 'Please provide the installation instructions ',
//             validate: instalationInput => {
//                 if(instalationInput){
//                     return true;
//                 } else {
//                     console.log('Please provide the installation instructions')
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'usage',
//             message: 'Please provide the usage information ',
//             validate: usageInput => {
//                 if(usageInput){
//                     return true;
//                 } else {
//                     console.log('Please provide the usage information')
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'contribution',
//             message: 'Provice contribution requirements ',
//         },
//         {
//             type: 'input',
//             name: 'tests',
//             message: 'Please enter test instructions ',
//             validate: testInput => {
//                 if(testInput){
//                     return true;
//                 } else {
//                     console.log('Please provide the installation instructions')
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'checkbox',
//             name: 'license',
//             message: 'Please provice the requiere license ',
//             choices: ['Apache 2.0','GNU GPLv3', 'MIT', 'Mozilla', 'GNU AGPLv3', 'GNU LGPLv3']
//         } 
//     ])
// };

// function writeToFile(fileName, data) {
//     fs.writeFile(`${fileName}`, data, (err) =>
//     err ? console.error(err): console.log('README.md Created'));
// }

// function init() {
//     questions()
//     .then((data) => {
//         writeToFile('README.md', generateMarkdown(data))
//     })
// };
// Function call to initialize app
//init();
