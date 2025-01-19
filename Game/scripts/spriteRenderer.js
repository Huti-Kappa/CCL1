import { global } from "./global.js"

export class SpriteRender {
    active = true;
    name = "";
    x = 100;
    y = 500;
    previousX = 0;
    previousY = 0;
    width = 50;
    height = 50;

    animationData = {
        "animationSprites": [],
        "timePerSprite": 0.05,
        "currentSpriteElapsedTime": 0,
        "firstSpriteIndex": 0,
        "lastSpriteIndex": 0,
        "currentSpriteIndex": 0
    };

    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.previousX = x;
        this.previousY = y;
    }

    storePositionOfPreviousFrame = function () {
        this.previousX = this.x;
        this.previousY = this.y;
    }

    animate = function () {
        let sprite = this.getNextSprite();
        global.ctx.drawImage(sprite, this.x, this.y, this.width, this.height);
    };

    draw = function () {
        let sprite = this.animationData.animationSprites[0];
        global.ctx.drawImage(sprite, this.x, this.y, this.width, this.height);
    };

    getNextSprite = function () {
        this.animationData.currentSpriteElapsedTime += global.deltaTime;

        if (this.animationData.currentSpriteElapsedTime >= this.animationData.timePerSprite) {
            this.animationData.currentSpriteIndex++;
            this.animationData.currentSpriteElapsedTime = 0;
            if (this.animationData.currentSpriteIndex > this.animationData.lastSpriteIndex) {
                this.animationData.currentSpriteIndex = this.animationData.firstSpriteIndex
            }
        }
        return this.animationData.animationSprites[this.animationData.currentSpriteIndex];
    };


    loadImages = function (imageSources) {
        /* first load images from path */

        for (let i = 0; i < imageSources.length; i++) {
            let image = new Image();
            image.src = imageSources[i];
    
            /* after images have been loaded, they are added to an array that consists of each single sprite for our animation */
            this.animationData.animationSprites.push(image);
        }

    };

    loadImagesFromSpritesheet(spritesheetPath, cols, rows) {
        // Calculate the number of rows and columns
        //const cols = Math.floor(spritesheetWidth / singleSpriteWidth);
        //const rows = Math.floor(spritesheetHeight / singleSpriteHeight);
        const totalSprites = cols * rows;
    
        // Pre-create an array with `Image` objects for all sprites
        this.animationData.animationSprites = Array.from({ length: totalSprites }, () => new Image());
    
        // Load the spritesheet
        const spritesheet = new Image();
        spritesheet.src = spritesheetPath;
    
        // Add a "load" event listener to the spritesheet
        spritesheet.addEventListener("load", () => {
            const spritesheetWidth = spritesheet.width;
            const spritesheetHeight = spritesheet.height;
            const singleSpriteWidth = Math.floor(spritesheetWidth / cols);
            const singleSpriteHeight = Math.floor(spritesheetHeight / rows);


            // Create a temporary canvas to extract sprites from the spritesheet
            const tempSpritesheetCanvas = document.createElement("canvas");
            const tempSpritesheetCtx = tempSpritesheetCanvas.getContext("2d");
            tempSpritesheetCanvas.width = singleSpriteWidth;
            tempSpritesheetCanvas.height = singleSpriteHeight;

            // Loop through each sprite's row and column position
            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                
                    // Clear the temporary canvas and draw the specific sprite region from the spritesheet
                    tempSpritesheetCtx.clearRect(0, 0, singleSpriteWidth, singleSpriteHeight);
                    tempSpritesheetCtx.drawImage(
                        spritesheet,
                        col * singleSpriteWidth,
                        row * singleSpriteHeight,
                        singleSpriteWidth,
                        singleSpriteHeight,
                        0,
                        0,
                        singleSpriteWidth,
                        singleSpriteHeight
                    );
    
                    // assign it to the corresponding Image object
                    const index = row * cols + col;
                    this.animationData.animationSprites[index].src = tempSpritesheetCanvas.toDataURL();
                }
            }
        });
    }

    switchCurrentSprites = function (firstSpriteIndex, lastSpriteIndex) {
        this.animationData.currentSpriteIndex = firstSpriteIndex;
        this.animationData.firstSpriteIndex = firstSpriteIndex;
        this.animationData.lastSpriteIndex = lastSpriteIndex;
    }

    animateOnce = function () {
        // Increment the elapsed time for the current sprite
        this.animationData.currentSpriteElapsedTime += global.deltaTime;
    
        // Check if the elapsed time exceeds the time per sprite
        if (this.animationData.currentSpriteElapsedTime >= this.animationData.timePerSprite) {
            this.animationData.currentSpriteIndex++;
            this.animationData.currentSpriteElapsedTime = 0;
    
            // Check if we've reached the end of the animation sequence
            if (this.animationData.currentSpriteIndex > this.animationData.lastSpriteIndex) {
                // Animation complete
                this.active = false; // Mark animation as inactive
                return false; // Animation finished
            }
        }
    
        // Draw the current sprite
        const sprite = this.animationData.animationSprites[this.animationData.currentSpriteIndex];
        global.ctx.drawImage(sprite, this.x, this.y, this.width, this.height);
        return true; // Animation still running
    };
    
    startAnimationOnce = function () {
        this.active = true; // Activate animation
        this.animationData.currentSpriteIndex = this.animationData.firstSpriteIndex; // Reset to the first frame
        this.animationData.currentSpriteElapsedTime = 0; // Reset elapsed time
    };

    getActive = function() {
        return this.active;
    }
    
    
    
}
