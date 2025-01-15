import { global } from "./global.js";

export class Text {

    color = "white";
    constructor(x, y, width, height, text, fontSize, fontFamily, color) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.text = text;
        this.fontSize = fontSize;
        this.fontFamily = fontFamily;
        this.color = color;
    }

    draw() {
        global.ctx.fillStyle = "white";
        global.ctx.fillStyle = this.color;
        global.ctx.font = `${this.fontSize}px ${this.fontFamily}`;
        global.ctx.fillText(this.text, global.centerX-this.x/2, this.y);
    }
}



