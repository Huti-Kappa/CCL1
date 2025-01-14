import { global } from "./global.js";

export class Button {
    constructor(){

    }

    draw(){
        global.ctx.fillStyle="black";
        global.ctx.fillRect=(0,0,100,50);
    }

}
