import { global } from "./global.js";

export class Button {
    clickable = true;
    color = "black";
    constructor(x, y, width, height, text, fontSize, fontFamily, backgroundcolor, onclick,screenID) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.text = text;
        this.fontSize = fontSize;
        this.fontFamily = fontFamily;
        this.backgroundcolor = backgroundcolor;
        this.onclick = onclick;
        this.screenID = screenID;
    }

    draw() {
        this.color=this.backgroundcolor;
        if(global.currentScreen==this.screenID){
            if(this.click()==true){
                this.color="grey";
        }
        global.ctx.fillStyle = this.color;
        global.ctx.fillRect(this.x, this.y, this.width, this.height);

        global.ctx.fillStyle = "white";
        global.ctx.font = `${this.fontSize}px ${this.fontFamily}`;

        const textMetrics = global.ctx.measureText(this.text);
        const textY = this.y + (this.height + this.fontSize) / 2.3;
        const textX = this.x + (this.width - textMetrics.width) / 2;

        global.ctx.fillText(this.text, textX, textY);
        }
    }

    click(){
        return !(global.mouseX < this.x || global.mouseX > this.x + this.width || global.mouseY < this.y || global.mouseY > this.y + this.height)
    }
    clickme(){
        if(this.clickable==true){
            if(this.click()==true){
                this.onclick();
        }
    }
}}
