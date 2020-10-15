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
    {
        type: "input",
        message: "Installation instructions: ",
        name: "install"
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
        type: "list",
        message: "Give the licensing of your product: ",
        name: "license",
        choices: [
            "[![Generic badge](https://img.shields.io/badge/<SUBJECT>-<STATUS>-<COLOR>.svg)](https://shields.io/)"
            ,
            "[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](http://shields.io/)"
            ,
            "[![Website cv.lbesson.qc.to](https://img.shields.io/website-up-down-green-red/http/cv.lbesson.qc.to.svg)](http://cv.lbesson.qc.to/)"
            ,
            "[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)"
        ]
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
    console.log("Here")
    fs.writeFile("ReadMe.md", generateMarkdown(data), (err) => {
        if (err) throw (err)
    })
    console.log("success")
}

// function to initialize program
function init() {
    try {
        inquirer.prompt(questions)
            .then(data => {
                console.log(data);
                writeToFile(data);
            })
            .catch(error => {
                console.log("Error: " + error);
            })
    } catch (err) {
        console.log("Error: " + err);
    }
}

// function call to initialize program
init();
