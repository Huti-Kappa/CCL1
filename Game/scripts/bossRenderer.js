import { SpriteRender } from "./spriteRenderer.js";
import { global } from "./global.js";
import { Text } from "./text.js";

export class Boss {
    constructor(x, y, width, height, image, cols, rows, start, end, dialogue, delays,f,g,idleX,idleY) {
        this.sprite = new SpriteRender(x, y, width, height);
        this.sprite.loadImagesFromSpritesheet(image, cols, rows);
        this.sprite.switchCurrentSprites(start, end);
        this.dialogue = dialogue;
        this.check = true;
        this.counter = true;
        this.speeches = [];
        this.counter = 0;
        this.delays = delays; // Array of delays between each speech text (in milliseconds)
        this.state = 0; // State for tracking the dialogue
        this.timeAccumulator = 0; // Accumulates time for delays
        this.f = f;
        this.g = g;
        this.start = start;
        this.end = end;
        this.idleX = idleX;
        this.idleY = idleY;
        // Create speech Text objects dynamically
        for (let i = 0; i < this.dialogue.length; i++) {
            this.speeches.push(new Text(-300, 200, 100, 100, this.dialogue[i][0], 25, "mania", "white"));
        }
    }

    draw() {
        this.sprite.draw();
    }

    talk() {
        if(this.check==false){
            this.sprite.switchCurrentSprites(this.f,this.g);
            this.check =true;
        }
        // Update the accumulator with deltaTime
        this.timeAccumulator += global.deltaTime;
        // Check if the state is within valid range
        if (this.state < this.speeches.length) {
            
            const currentSpeech = this.speeches[this.state];
            currentSpeech.draw(25);
            global.voice.startMusic();

            // Check if the current speech is fully rendered
            if (currentSpeech.p >= currentSpeech.text.length) {
                const delay = this.delays[this.state] || 1000; // Use custom delay or default to 1000ms
                global.voice.stopMusic();
                this.sprite.switchCurrentSprites(this.idleX,this.idleY)
                //this.sprite.switchCurrentSprites(this.f, this.g);
                // If the delay has passed, move to the next speech
                if (this.timeAccumulator > delay) {
                    console.log("executed");
                    this.state++; // Move to the next speech
                    this.timeAccumulator = 0; // Reset the accumulator
                    this.check = false;
                } 
            }
        }
    }

    switchSprites(start, end) {
        this.sprite.switchCurrentSprites(start, end);
    }


}
