import { global } from "./global.js";

export class Enemy {
    x = global.canvas.width / 2;
    y = global.canvas.height / 2;

    hitboxWidth = 30;
    hitboxHeight = 30;

    colWidth = 40; //innerHitbox
    colHeight = 40;
    hitboxAdd = 80; //outerHitbox

    alreadyHit = false;
    offsetX = 0;
    offsetY = 0;
    posX = 0;
    posY = 0;
    invisible = false;

    // Add an image variable
    enemyImage = new Image();
    
    constructor(direction) {
        this.direction = direction;
        // Calculate initial offsets
        this.offsetX = (direction === 1) ? -global.enemy.distanceX : (direction === 3) ? global.enemy.distanceX : 0;
        this.offsetY = (direction === 4) ? global.enemy.distanceY : (direction === 2) ? -global.enemy.distanceY : 0;
        
        switch (direction) {
            case 1:
                this.enemyImage.src = './images/arrow_1.png';
                break;
            case 2:
                this.enemyImage.src = './images/arrow_2.png';
                break;
            case 3:
                this.enemyImage.src = './images/arrow_3.png';
                break;
            case 4:
                this.enemyImage.src = './images/arrow_4.png';
                break;
        }
    }

    //Calculate X Y Coordinates for movement
    update() {
        this.x -= this.offsetX * global.enemy.speedMultiplier * global.deltaTime;
        this.y -= this.offsetY * global.enemy.speedMultiplier * global.deltaTime;
    }
    
    getDir(){
        return this.direction;
    }

    //Makes projectiles move
    draw() {
        if (this.offsetX || this.offsetY) {
            this.posX = this.x - this.hitboxWidth / 2 + this.offsetX;
            this.posY = this.y - this.hitboxHeight / 2 + this.offsetY;
            if(!this.invisible){
                global.ctx.drawImage(
                    this.enemyImage,
                    this.posX,
                    this.posY,
                    this.hitboxWidth,
                    this.hitboxHeight
                );

            }
        }
    }

    //Returns 1 if Outer Hitbox gets hit
    //Returns 2 if Inner Death Hitbox gets hit
    collisionDetection() {
        if(this.alreadyHit==false){
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
        }
        
        return 0;
    }



    destroyBullet(){
        if( this.alreadyHit==false){
            global.hitCounter++;
        }
        this.alreadyHit = true;
        this.invisible = true;
    }

}
