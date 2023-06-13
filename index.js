const inquirer = require('inquirer');
const fs = require('fs');
const SVG = require('./lib/svg');
const { Square, Triangle, Circle } = require('./lib/shapes');

const questions = [
    {
        type: 'list',
        message: 'What shape do you want to create?',
        choices: ['square', 'circle', 'triangle'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'What is the text you want to display? (3 characters max)',
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
    {
        type: 'list',
        message: 'What size do you want the shape to be?',
        choices: ['small', 'medium', 'large'],
        name: 'size',
    },
];

inquirer.createPromptModule()(questions).then((answers) => {
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
    // shape.setColor(answers.backgroundColor);

    let width, height;
    switch(answers.size) {
        case 'small':
            width = 100;
            height = 100;
            break;
        case 'medium':
            width = 200;
            height = 200;
            break;
        case 'large':
            width = 300;
            height = 300;
            break;
        default:
            console.log('Invalid size');
            return;
    }
    // shape.setSize(width, height)

    const svgObj = new SVG();
    svgObj.setShape(shape);
    svgObj.setText(answers.text, answers.textColor);
    svgObj.setSize(width, height);

    const svgString = svgObj.render();
    const svgDirectory = './examples';

    if (!fs.existsSync(svgDirectory)) {
        fs.mkdirSync(svgDirectory);
    } else {
        console.log('Directory exists.');
    }

    fs.writeFile(`${svgDirectory}/design.svg`, svgString, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});
