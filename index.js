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
        type: 'list',
        message: 'What color do you want the background to be?',
        choices: ['green', 'blue', 'bisque', 'dodgerblue', 'purple', 'red'],
        name: 'backgroundColor',
    }
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

    // shape.setSize(width, height)

    const svgObj = new SVG();
    svgObj.setShape(shape);
    svgObj.setText(answers.text, answers.textColor, answers.backgroundColor);
    // svgObj.setSize(width, height);
    // svgObj.setTextColor(answers.backgroundColor);

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
