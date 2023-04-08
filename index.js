// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
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

    // Function to write README file
    function writeToFile(fileName, data); {
        fs.writeFile(fileName, data, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("README.md file generated successfully!");
        });
    }

    writeToFile('README.md', generateMarkdown(answers));
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
