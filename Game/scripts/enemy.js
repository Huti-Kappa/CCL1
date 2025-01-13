import { global } from "./global.js";

export class Enemy {
    x = global.canvas.width / 2;
    y = global.canvas.height / 2;
    hitboxWidth = 10;
    hitboxHeight = 10;
    colWidth = 10;
    colHeight = 10;
    hitboxAdd = 100;
    offsetX = 0;
    offsetY = 0;
    posX = 0;
    posY = 0;
    color = false;

    constructor(direction) {
        this.direction = direction;
        // Calculate initial offsets
        this.offsetX = (direction === 1) ? -global.enemy.distanceX : (direction === 3) ? global.enemy.distanceX : 0;
        this.offsetY = (direction === 4) ? global.enemy.distanceY : (direction === 2) ? -global.enemy.distanceY : 0;
    }

    update() {
        this.x -= this.offsetX * global.enemy.speedMultiplier * global.deltaTime;
        this.y -= this.offsetY * global.enemy.speedMultiplier * global.deltaTime;
    }

    draw() {
        if (this.offsetX || this.offsetY) {
            this.posX = this.x - this.hitboxWidth / 2 + this.offsetX;
            this.posY = this.y - this.hitboxHeight / 2 + this.offsetY;
            global.ctx.fillStyle = "blue";
            if(this.color==true){
                global.ctx.fillStyle = "white";
            }
            global.ctx.fillRect(
                this.posX,
                this.posY,
                this.hitboxWidth,
                this.hitboxHeight
            );
        }
    }

    collisionDetection() {
        const canvasCenter = { x: global.canvas.width / 2, y: global.canvas.height / 2 };

        const checkCollision = (pos, center, size, add) => {
            const outerMin = center - size - add;
            const outerMax = center + size + add;
            const innerMin = center - size;
            const innerMax = center + size;

            if (pos > outerMin && pos < outerMax) {
                return (pos > innerMin && pos < innerMax) ? 2 : 1;
            }
            return 0;
        };

        if (this.direction === 1 || this.direction === 3) {
            return checkCollision(this.posX, canvasCenter.x, this.colWidth, this.hitboxAdd);
        }

        if (this.direction === 2 || this.direction === 4) {
            return checkCollision(this.posY, canvasCenter.y, this.colHeight, this.hitboxAdd);
        }

        return 0;
    }
    changeColor(){
        this.color = true;
    }

}
