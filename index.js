// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Title",
        message: "What is your project's title?",
    },
    {
        type: "input",
        name: "Description",
        message: "Please provide a brief description for your project:",
    },
    {
        type: "input",
        name: "Installation",
        message: "What are the steps required to install your project?",
    },
    {
        type: "input",
        name: "Usage",
        message: "Please provide instructions and examples for use.",
    },
    {
        type: "list",
        name: "License",
        message: "Choose a license for your project.",
        choices: ["MIT", "Apache", "GPL", "BSD", "None"],
    },
    {
        type: "input",
        name: "Contributing",
        message: "Please provide guidelines for contributing to your project.",
    },
    {
        type: "input",
        name: "Tests",
        message: "Please provide instructions for running tests.",
    },
    {
        type: "input",
        name: "GitHub",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
];

inquirer.prompt(questions).then(function (answers) {
    console.log(answers);
});

// TODO: Create a function to write README file
function writeToFile('README.md', generateMarkdown(answers)); {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
