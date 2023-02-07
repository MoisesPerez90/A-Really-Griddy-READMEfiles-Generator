// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type : 'input',
        name : 'title',
        message : "What's your project title?"
    },
    {
        type : 'input',
        name : 'description',
        message : "What's your project description?"
    },
    {
        type : 'input',
        name : 'usage',
        message : "What's your project usage?"
    },
    {
        type : 'input',
        name : 'contributing',
        message : "What are your your contributors?"
    },
    {
        type : 'input',
        name : 'installation',
        message : "What are your installation instructions?"
    },
    {
        type : 'input',
        name : 'email',
        message : "What's your email for further questions?"
    },
    {
        type : 'input',
        name : 'github',
        message : "What's your github link for further questions?"
    },
    {
        type : 'list',
        name : 'license',
        message : "What's your project title?",
        choices : ['MIT', 'ISC', 'GNUPLv3'],
        
    },
    {
        type : 'input',
        name : 'tests',
        message : "Write some tests for your application",       
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Your README file has been successfully created!'));
}


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            let layout = generateMarkdown(response);
            writeToFile('README.md', layout);
            return response;
        })
        .catch((error)=>console.log(error));
}

// Function call to initialize app
init();

// TODO: Export functions needed to write in README file

module.exports = writeToFile;