// housekeeping 
const inquirer = require('inquirer');
const fs = require('fs');
const questions = [
    {
        type: 'list',
        message: 'What shape do you want to create?',
        choices: ['square', 'circle', 'triangle'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'What is the text you want to display?',
        name: 'text',
    },
    {
        type: 'input',
        message: 'What color do you want the text to be?',
        name: 'textColor',
    },
    {
        type: 'input',
        message: 'What color do you want the background to be?',
        name: 'backgroundColor',
    },
    {
        type: 'input',
        message: 'What color do you want the border to be?',
        name: 'borderColor',
    },
]

// prompt the user for the shape they want to create
inquirer.createPromptModule()(questions).then((answers) => {
    console.log(answers);
});
//define baase shape class with common properties and methods
// class Shape {
//     constructor(name, text, textColor, backgroundColor, Shape) {
//         this.name = name;
//         this.text = text;
//         this.textColor = textColor;
//         this.backgroundColor = backgroundColor;
//         this.Shape = Shape;
//     }
// }
// define subclasses for each type of shape that extend the shape class
// generate the design based on the user input

// save the design to a file