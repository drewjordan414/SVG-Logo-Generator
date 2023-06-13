class SVG {
    constructor() {
        this.width = 300;
        this.height = 200;
        this.shape = null;
        this.text = '';
        this.textColor = '';
        this.backgroundColor = '';
    }

    setShape(shape) {
        this.shape = shape;
    }

    setSize(width, height){
        this.width = width;
        this.height = height;
    }

    setText(text, color) {
        this.text = text;
        this.textColor = color;
        this.backgroundColor = color;
    }
    // setTextColor(color) {
    //     this.backgroundColor = color;
    // }

    render() {
        return `<svg version="1.1" width="${this.width}" height="${this.height}"  xmlns="http://www.w3.org/2000/svg">` +
            `${this.shape ? this.shape.render() : ''}` +
            `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>` +
            `</svg>`;
    }
}

module.exports = SVG;