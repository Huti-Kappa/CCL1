import { global } from "./global.js";

export class Button {
    clickable = false;

    constructor(x, y, width, height, text, fontSize, fontFamily, onClick) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.text = text;
        this.fontSize = fontSize;
        this.fontFamily = fontFamily;
        this.onClick = onClick; // Callback for click action
    }

    draw() {
        global.ctx.fillStyle = "black";
        global.ctx.fillRect(this.x, this.y, this.width, this.height);

        global.ctx.fillStyle = "white";
        global.ctx.font = `${this.fontSize}px ${this.fontFamily}`;

        const textMetrics = global.ctx.measureText(this.text);
        const textY = this.y + (this.height + this.fontSize) / 2;
        const textX = this.x + (this.width - textMetrics.width) / 2;

        global.ctx.fillText(this.text, textX, textY);
        if(this.click()==true){
            if(global.isMouseClicked==true){
            console.log("LOL")}
        }
    }

    click(){
        return !(global.mouseX < this.x || global.mouseX > this.x + this.width || global.mouseY < this.y || global.mouseY > this.y + this.height)
    }

    clicked(){
        if(this.clickable == true){
            if (this.click()==true){
                console.log("IT WORKED!");
            }
        }
    }
}
