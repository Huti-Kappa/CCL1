import { SpriteRender } from "./spriteRenderer.js";
import { global } from "./global.js";
import { Text } from "./text.js";

export class Boss {
    constructor(x, y, width, height, image, cols, rows, start, end, dialogue, delays, f, g, idleX, idleY) {
        // Initialize sprite
        this.sprite = new SpriteRender(x, y, width, height);
        this.sprite.loadImagesFromSpritesheet(image, cols, rows);
        this.sprite.switchCurrentSprites(start, end);

        // Initialize dialogue-related properties
        this.dialogue = dialogue;
        this.delays = delays; // Array of delays between each speech text (in milliseconds)
        this.speeches = dialogue.map((line) => new Text(-300, 200, 100, 100, line[0], 25, "mania", "white"));
        this.state = 0; // State for tracking the dialogue
        this.timeAccumulator = 0; // Accumulates time for delays

        // Initialize sprite state variables
        this.isTalking = true;
        this.switchBackToIdle = true;
        this.startFrame = start;
        this.endFrame = end;
        this.talkFrameStart = f;
        this.talkFrameEnd = g;
        this.idleFrameStart = idleX;
        this.idleFrameEnd = idleY;
    }

    // Draws the Boss sprite on the canvas.
    draw() {
        this.sprite.draw();
    }

    // Manages the Boss's dialogue and speech display.
    talk() {
        if (!this.isTalking) {
            this.sprite.switchCurrentSprites(this.talkFrameStart, this.talkFrameEnd);
            this.isTalking = true;
        }

        this.timeAccumulator += global.deltaTime;

        if (this.state < this.speeches.length) {
            const currentSpeech = this.speeches[this.state];
            currentSpeech.draw(25);
            global.voice.startMusic();

            if (currentSpeech.p >= currentSpeech.text.length) {
                const delay = this.delays[this.state] || 1000; // Use custom delay or default to 1000ms
                global.voice.stopMusic();
                this.sprite.switchCurrentSprites(this.idleFrameStart, this.idleFrameEnd);

                if (this.timeAccumulator > delay) {
                    this.state++;
                    this.timeAccumulator = 0;
                    this.isTalking = false;
                }
            }
        }
    }

    // Switches the current sprite animation to the specified range.
    switchSprites(start, end) {
        this.sprite.switchCurrentSprites(start, end);
    }

    // Resets the Boss's dialogue and animation state for re-entry into the fight.
    reset() {
        this.state = 0; // Reset dialogue state
        this.timeAccumulator = 0; // Reset delay timer
        this.isTalking = true; // Reset talking animation
        this.speeches.forEach((speech) => {
            speech.reset(); // Reset Text objects (e.g., character rendering position)
        });
        this.sprite.switchCurrentSprites(this.idleFrameStart, this.idleFrameEnd); // Reset to idle animation
    }
}
