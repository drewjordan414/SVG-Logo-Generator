// housekeeping 
const inquirer = require('inquirer');
const fs = require('fs');
// from the shapes.test.js file
const { Square, Triangle, Circle } = require('./lib/shapes');
// questions for inquirer prompt 
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
    let shape;
    switch(answers.shape) {
        case 'square':
            shape = new Square();
            break;
        case 'circle':
            shape = new Circle();
            break;
        case 'triangle':
            shape = new Triangle();
            break;
    }
    // set the color of the shape
    shape.setColor(answers.backgroundColor);
    // generate svg file 
    const scg = shape.render();
    // save svg file
    fs.writeFile('design.svg', svg, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});
