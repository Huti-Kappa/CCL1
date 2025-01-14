import { global } from "./global.js";

export class Screen {
    constructor(){

    }

    draw(){
        global.ctx.fillStyle ="black";
        global.ctx.fillRect(0,0,global.canvas.width,global.canvas.height);
    }

}
