import { global } from "./global.js";
import { Screen } from "./screens.js";
import { gameSettings as gs} from './settings.js';
import { Button } from "./button.js";
import { Text } from "./text.js";
import { State } from "./statemanager.js";

let state = new State();

function gameLoop(totalRunningTime) {
    global.deltaTime = (totalRunningTime - global.prevTotalRunningTime) / 1000; // Convert ms to seconds
    global.prevTotalRunningTime = totalRunningTime;
    global.ctx.clearRect(0, 0, global.canvas.width, global.canvas.height);

    
    if(global.currentScreen!=1){
        global.state.screenStateManager();
    }else {
        global.ctx.fillStyle = "white";
        global.ctx.fillRect(global.canvas.width/2 -100,global.canvas.height/2 -100, 200,200);
        global.ctx.fillStyle = "red";
        global.ctx.fillRect(global.canvas.width/2 -40,global.canvas.height/2 -40, 80,80);

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



// Start the game loop
requestAnimationFrame(gameLoop);
global.state.setupScreen(global.mainScreen,global.currentScreenValue);
document.addEventListener("keypress", controlls);
