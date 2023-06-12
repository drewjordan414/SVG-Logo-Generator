// housekeeping 
const inquirer = require('inquirer');
const fs = require('fs');
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
]

// shapes class
class Shape{
    constructor(){
        this.color = 'green';
    }
    setColor(color){
        this.color = color;
    }
}
class Circle extends Shape{
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}
class Square extends Shape{
    render(){
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    }
}
class Triangle extends Shape{
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

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
    const svg = shape.render();
    // save svg file
    fs.writeFile('design.svg', svg, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});
