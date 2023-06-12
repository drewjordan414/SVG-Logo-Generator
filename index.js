// housekeeping 
const inquirer = require('inquirer');
const fs = require('fs');
const SVG = require('./lib/svg');
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
        message: 'What is the text you want to display? (3 characters max)',
        // upper and lowercase condtions 
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
        choices: [`${small}`, `${medium}`, `${large}`],
        name: 'size',
    },
]
// if user chooses small make the size 100x100, medium 200x200, large 300x300

// shapes class

// svg container

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
    shape.setColor(answers.backgroundColor);
     if (size === small){
            width: 100,
            height: 100,
        } else if (size === medium){
            width: 200,
            height: 200,
        } else if (size === large){
            width: 300,
            height: 300,
        } else{
            console.log('Please choose a size.');
        }
    // save object
    const svgObj = new SVG();
    svgObj.setShape(shape);
    svgObj.setText(answers.text, answers.textColor);
    svgObj.setBackgroundColor(answers.backgroundColor);
    svgObj.setBorderColor(answers.borderColor);
    svgObj.setSize(answers.size);
    const svgString = svgObj.render();
    // save svg file
    const svgDirectory = './examples';
    if (!fs.existsSync(svgDirectory)){
        fs.mkdirSync(svgDirectory);
    } else{
        console.log('Directory doesnt exists.');
    }
    fs.writeFile(`${svgDirectory}/design.svg`, svgString, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});
