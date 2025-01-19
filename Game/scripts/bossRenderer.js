import { SpriteRender } from "./spriteRenderer.js";
import { global } from "./global.js";
import { Text } from "./text.js";

export class Boss {
    constructor(x,y,width,height,image,cols,rows,start,end,dialogue){
        this.sprite = new SpriteRender(x,y,width,height);
        this.sprite.loadImagesFromSpritesheet(image,cols,rows);
        this.sprite.switchCurrentSprites(start, end);
        this.dialogue = dialogue;
        this.counter = 0;
        this.speech = new Text(-300,200,100,100,this.dialogue[this.counter][0],25,"mania","white");
    }

    draw(){
        this.sprite.animate()
    }

    talk(){
        this.speech.draw(100);
    }

    switchSprites(start,end){
        this.sprite.switchCurrentSprites(start, end);
    }

}