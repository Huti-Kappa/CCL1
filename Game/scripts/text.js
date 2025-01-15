import { global } from "./global.js";

export class Text {

    color = "black";
    constructor(x, y, width, height, text, fontSize, fontFamily) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.text = text;
        this.fontSize = fontSize;
        this.fontFamily = fontFamily;;
    }

    draw() {
        global.ctx.fillStyle = "white";
        global.ctx.font = `${this.fontSize}px ${this.fontFamily}`;
        global.ctx.fillText(this.text, this.x, this.y);
    }
}



