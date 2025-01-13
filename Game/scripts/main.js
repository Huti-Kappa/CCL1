import { global } from "./global.js";


function gameLoop(totalRunningTime) {
    global.deltaTime = (totalRunningTime - global.prevTotalRunningTime) / 1000; // Convert ms to seconds
    global.prevTotalRunningTime = totalRunningTime;
    global.ctx.clearRect(0, 0, global.canvas.width, global.canvas.height);
    // Handle enemy creation with a fixed interval
    global.handleEnemyCreation();
    global.ctx.fillRect(global.canvas.width/2 -5,global.canvas.height/2 -5, 10,10);
    // Update and draw all game objects
    for (const key in global.allGameObjects) {
        global.allGameObjects[key].update();
        global.allGameObjects[key].draw();
        if(global.allGameObjects[key].collisionDetection()==2){
            global.allGameObjects[key].changeColor();
            global.hp--;
        }

    }
    global.checkStatus();
    requestAnimationFrame(gameLoop);
}


function controlls(event) {
    for (const key in global.allGameObjects) {
        const gameObject = global.allGameObjects[key];
        if (gameObject.collisionDetection() === 1) {
            switch (event.key) {
                case "w":
                case "a":
                case "s":
                case "d":
                    console.log("HIT");
                    global.allGameObjects[key].changeColor();
                    break;
            }
        }
    }
}




// Start the game loop
requestAnimationFrame(gameLoop);
document.addEventListener("keypress", controlls);
