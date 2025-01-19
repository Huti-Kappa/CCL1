import { global } from "./global.js";

function gameLoop(totalRunningTime) {
    global.deltaTime = (totalRunningTime - global.prevTotalRunningTime) / 1000; // Convert ms to seconds
    global.prevTotalRunningTime = totalRunningTime;
    global.ctx.clearRect(0, 0, global.canvas.width, global.canvas.height);

    
    if(global.currentScreen!=1){
        global.state.screenStateManager();
    }else {

        // Draw the sprite
        //global.center.draw();
        global.center.draw();
        

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
    global.checkStatus();
    requestAnimationFrame(gameLoop);
}




function controlls(event) {
    const directionMap = { w: 2, a: 1, s: 4, d: 3 };
    const intendedDirection = directionMap[event.key];

    if (intendedDirection !== undefined) {
        global.hit.hitStart();
        Object.values(global.allGameObjects).forEach(gameObject => {
            global.center.animate();
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
