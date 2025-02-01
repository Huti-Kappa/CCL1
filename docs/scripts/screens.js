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
