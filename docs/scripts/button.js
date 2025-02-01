import { global } from "./global.js";

export class Button {
    // Class-level properties for default values
    clickable = true;
    color = "rgba(0, 0, 0, 0.2)";

    constructor(x, y, width, height, text, fontSize, fontFamily, backgroundColor, onClick, screenID) {
        // Button dimensions and appearance
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.text = text;
        this.fontSize = fontSize;
        this.fontFamily = fontFamily;
        this.backgroundColor = backgroundColor;

        // Behavior and functionality
        this.onClick = onClick;
        this.screenID = screenID;
    }

    //Draws the button on the canvas. 
    draw() {
        // Set button background color
        this.color = this.backgroundColor;

        if (global.currentScreen === this.screenID) {
            // Highlight button if clicked
            if (this.isMouseOver()) {
                this.color = "rgba(128, 128, 128, 0.5)"; // Example: semi-transparent gray
            }

            global.ctx.fillStyle = this.color;
            global.ctx.fillRect(this.x, this.y, this.width, this.height);

            // Set button text properties
            global.ctx.fillStyle = "white";
            global.ctx.font = `${this.fontSize}px ${this.fontFamily}`;

            // Center the text within the button
            const textMetrics = global.ctx.measureText(this.text);
            const textY = this.y + (this.height + this.fontSize) / 2.3;
            const textX = this.x + (this.width - textMetrics.width) / 2;

            global.ctx.fillText(this.text, textX, textY);
        }
    }

    
    //Checks if the mouse is currently over the button.
    //@returns {boolean} True if the mouse is over the button, false otherwise.
    isMouseOver() {
        return (
            global.mouseX >= this.x &&
            global.mouseX <= this.x + this.width &&
            global.mouseY >= this.y &&
            global.mouseY <= this.y + this.height
        );
    }

    
    //Handles the button click action.
    handleClick() {
        if (this.clickable && this.isMouseOver()) {
            this.onClick();
        }
    }
}
