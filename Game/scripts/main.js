import { global } from "./global.js";
import { Screen } from "./screens.js";
import { gameSettings as gs} from './settings.js';
import { Button } from "./button.js";

function gameLoop(totalRunningTime) {
    global.deltaTime = (totalRunningTime - global.prevTotalRunningTime) / 1000; // Convert ms to seconds
    global.prevTotalRunningTime = totalRunningTime;
    global.ctx.clearRect(0, 0, global.canvas.width, global.canvas.height);

    if(global.currentScreen==0){
        global.s.draw();
    }else {
        if(global.gameloss==true){
            console.log("LOSS");
        }else{
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
            global.ctx.fillRect(global.canvas.width/2 -40,global.canvas.height/2 -40, 80,80);
            global.checkStatus();
            global.drawTextOnCanvas("Hallo",200,200,"arial","red");
        }
    }

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

function setupScreen(s, screenConfig) {
    for (let key = 0; key < screenConfig.buttons.length; key++) {
        const buttonConfig = screenConfig.buttons[key];
        s.addButton(
            new Button(
                gs.game.screenWidth / 2 - screenConfig.width / 2,
                screenConfig.y + screenConfig.gap * key,          
                screenConfig.width, 
                screenConfig.height,
                buttonConfig.label, 
                screenConfig.size,  
                screenConfig.font,  
                "black",            
                buttonConfig.action 
            )
        );
    }
}

// Start the game loop
setupScreen(global.s,gs.mainScreen)
requestAnimationFrame(gameLoop);
document.addEventListener("keypress", controlls);
