// array of questions for user
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown.js");

const questions = [
    // Title
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    // Description
    {
        type: "input",
        message: "Give a short description of your project: ",
        name: "description"
    },
    // Table of contents
    // Usage
    {
        type: "input",
        message: "Describe the usage of your project: ",
        name: "usage"
    },
    // License
    {
        type: "input",
        message: "Give the licensing of your product: ",
        name: "license"
    },
    // Contributing
    {
        type: "input",
        message: "Name any contributors: ",
        name: "contributing"
    },
    // Tests
    {
        type: "input",
        message: "List any tests: ",
        name: "tests"
    },
    // Questions
    {
        type: "input",
        message: "Give any questions for this project: ",
        name: "questions"
    },
];

// function to write README file
function writeToFile(data) {
    fs.appendFile("ReadMe.md", generateMarkdown(data))
}

// function to initialize program
function init() {
    try{
        inquirer.prompt(questions)
        .then(response => {
            console.log(response);
            writeToFile(response);
        })
        .catch(error=>{
            console.log("Error: " + error);
        })
    }catch(err){
        console.log("Error: " + err);
    }
}

// function call to initialize program
init();
