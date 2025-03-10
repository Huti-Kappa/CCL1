import { SpriteRender } from "./spriteRenderer.js";
import { global } from "./global.js";

export class Center{
    left = new SpriteRender(global.canvas.width/2 -100,global.canvas.height/2-90,40,40);
    top = new SpriteRender(global.canvas.width/2 -20,global.canvas.height/2-100,40,40);
    right = new SpriteRender(global.canvas.width/2 +60,global.canvas.height/2-20,40,40);
    bottom = new SpriteRender(global.canvas.width/2 -20,global.canvas.height/2+60,40,40);
    constructor(){
        this.left.loadImagesFromSpritesheet('./images/hit_1_sheet.png',4,1);
        this.left.switchCurrentSprites(0, 0);
        this.top.loadImagesFromSpritesheet('./images/hit_2_sheet.png',4,1);
        this.top.switchCurrentSprites(0, 0);
        this.right.loadImagesFromSpritesheet('./images/hit_3_sheet.png',4,1);
        this.right.switchCurrentSprites(0, 0);
        this.bottom.loadImagesFromSpritesheet('./images/hit_4_sheet.png',4,1);
        this.bottom.switchCurrentSprites(0, 0);
    }
    startAnimation(){
        this.left.startAnimationOnce();
        this.top.startAnimationOnce();
        this.right.startAnimationOnce();
        this.bottom.startAnimationOnce();
   
    }

    draw(){
        this.left.draw();
        this.top.draw();
        this.right.draw();
        this.bottom.draw();
    }

    active(){
        return this.bottom.active;
        
    }


    
}