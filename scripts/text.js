import { global } from "./global.js";

export class Text {

    color = "white";
    textCreationTime= 0;
    p = 0;
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

    draw(speed) {
        this.textCreationTime += global.deltaTime*1000;
        if(this.textCreationTime>speed){
            this.p++;
            this.textCreationTime=0;
        }
        global.ctx.fillStyle = "white";
        global.ctx.fillStyle = this.color;
        global.ctx.font = `${this.fontSize}px ${this.fontFamily}`;
        global.ctx.fillText(this.text.slice(0,this.p), global.centerX-this.x/2, this.y);
    }

    reset() {
        this.textCreationTime = 0; // Reset the timer for character rendering
        this.p = 0; // Reset the number of characters rendered
    }
}



