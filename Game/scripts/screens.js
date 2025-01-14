import { global } from "./global.js";

export class Screen {
    buttons = [];
    counter = 0;

    constructor(){
    }

    draw(){
        global.ctx.fillStyle ="black";
        global.ctx.fillRect(0,0,global.canvas.width,global.canvas.height);
        for (const key in this.buttons) {
            this.buttons[key].draw();
        }
    }


    addButton(toAdd){
        this.buttons[this.counter] = toAdd;
        this.counter++;
    }

}
