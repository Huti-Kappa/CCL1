import { global } from "./global.js";

export class Screen {
    buttons = [];
    counter = 0;
    counter2 = 0;
    texts = [];
    constructor(){
    }

    draw(){
        global.ctx.fillStyle ="black";
        global.ctx.fillRect(0,0,global.canvas.width,global.canvas.height);
        for (const key in this.texts) {
            this.texts[key].draw(15);
        }
        for (const key in this.buttons) {
            this.buttons[key].draw();
        }
    }


    addButton(toAdd){
        this.buttons[this.counter] = toAdd;
        this.counter++;
    }

    addText(text) {

        this.texts[this.counter2] = text;
        this.counter2++;
    }

}
