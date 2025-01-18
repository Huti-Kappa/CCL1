import { global } from "./global.js";


function gameLoop(totalRunningTime) {
    global.deltaTime = (totalRunningTime - global.prevTotalRunningTime) / 1000; // Convert ms to seconds
    global.prevTotalRunningTime = totalRunningTime;
    global.ctx.clearRect(0, 0, global.canvas.width, global.canvas.height);

    
    if(global.currentScreen!=1){
        global.state.screenStateManager();
    }else {
        global.ctx.drawImage(
            global.hitBox,
            global.canvas.width/2 -100,
            global.canvas.height/2 -100, 
            200,
            200
        );

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


        global.drawTextOnCanvas("Hallo",200,200,"arial","red");
    
    }
    
    global.checkStatus();
    requestAnimationFrame(gameLoop);
}




function controlls(event) {
    for (const key in global.allGameObjects) {
        const gameObject = global.allGameObjects[key];
        if (gameObject.collisionDetection() === 1) {
            const dir = gameObject.getDir();
            if (
                (event.key === "w" && dir === 2) ||
                (event.key === "a" && dir === 1) ||
                (event.key === "s" && dir === 4) ||
                (event.key === "d" && dir === 3)
            ) {
                console.log("HIT");
                gameObject.destroyBullet();
            }
        }
    }
}



// Example: Starting the music when the game starts



// Start the game loop
requestAnimationFrame(gameLoop);
global.state.setupScreen(global.mainScreen,global.currentScreenValue);
document.addEventListener("keypress", controlls);
