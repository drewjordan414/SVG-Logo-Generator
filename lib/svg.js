class SVG {
    constructor() {
      this.width = 300;
      this.height = 200;
      this.shape = null;
      this.text = '';
      this.textColor = '';
    }
  
    setShape(shape) {
      this.shape = shape;
    }
  
    setText(text, color) {
      if (text.length > 3) {
        throw new Error('Text must not exceed 3 characters.');
      }
      this.text = text;
      this.textColor = color;
    }
  
    render() {
      let svgStr = `<svg version="1.1" width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">`;
  
      if (this.shape) {
        svgStr += this.shape.render();
      }
  
      if (this.text) {
        svgStr += `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
      }
  
      svgStr += `</svg>`;
  
      return svgStr;
    }
  }
  
  module.exports = SVG;
  