import { global } from "./global.js";

function gameLoop(totalRunningTime) {
    global.deltaTime = (totalRunningTime - global.prevTotalRunningTime) / 1000; // Convert ms to seconds
    global.prevTotalRunningTime = totalRunningTime;
    global.ctx.clearRect(0, 0, global.canvas.width, global.canvas.height);

    
    if(global.currentScreen!=1){
        global.state.screenStateManager();
    }else {
        global.ctx.drawImage(global.nohit1,global.canvas.width/2 -100,global.canvas.height/2-20, 40,40);
        global.ctx.drawImage(global.nohit2,global.canvas.width/2 -20,global.canvas.height/2-100, 40,40);
        global.ctx.drawImage(global.nohit3,global.canvas.width/2 +60,global.canvas.height/2-20, 40,40);
        global.ctx.drawImage(global.nohit4,global.canvas.width/2 -20,global.canvas.height/2+60, 40,40);

        // Draw the sprite

        // Handle enemy creation with a fixed interval
        global.handleEnemyCreation();
        
        if(global.hitCounter==global.enemyAmount){
            global.resetStage();
        }

        // Update and draw all game objects
        for (const key in global.allGameObjects) {
            global.allGameObjects[key].update();
            global.allGameObjects[key].draw();
            if(global.allGameObjects[key].collisionDetection()==2){
                global.allGameObjects[key].destroyBullet();
                global.hp--;
                console.log("Damage")
            }
            
        }


        
    }
    global.try.draw();
    
    global.checkStatus();
    requestAnimationFrame(gameLoop);
}




function controlls(event) {
    const directionMap = { w: 2, a: 1, s: 4, d: 3 };
    const intendedDirection = directionMap[event.key];

    if (intendedDirection !== undefined) {
        Object.values(global.allGameObjects).forEach(gameObject => {
            if (gameObject.collisionDetection() === 1 && gameObject.getDir() === intendedDirection) {
                console.log("HIT");
                gameObject.destroyBullet();
                global.try.switchCurrentSprites(0, 0);
            }
        });
    }
}

requestAnimationFrame(gameLoop);
global.state.setupScreen(global.mainScreen,global.currentScreenValue);
document.addEventListener("keypress", controlls);
