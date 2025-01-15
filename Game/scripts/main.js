import { global } from "./global.js";
import { Screen } from "./screens.js";
import { gameSettings as gs} from './settings.js';
import { Button } from "./button.js";
import { Text } from "./text.js";

function gameLoop(totalRunningTime) {
    global.deltaTime = (totalRunningTime - global.prevTotalRunningTime) / 1000; // Convert ms to seconds
    global.prevTotalRunningTime = totalRunningTime;
    global.ctx.clearRect(0, 0, global.canvas.width, global.canvas.height);

    
    if(global.currentScreen!=1){
        screenStateManager();
    }else {
        if(global.gameloss==true){
            global.currentScreen++;
            global.currentScreenValue = gs.gameOver;
            console.log("LOSS");
            setupScreen(global.sc,global.currentScreenValue);
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
    for (let key = 0; key < screenConfig.text.length; key++) {
        s.addText(
            new Text(
                gs.game.screenWidth / 2 - screenConfig.width / 2,
                screenConfig.textY/2 + gs.game.textGap * key,          
                screenConfig.width, 
                screenConfig.height,
                screenConfig.text[key], 
                screenConfig.size,  
                screenConfig.font
            )
        );
    }
    if (screenConfig.top && screenConfig.top.trim() !== ""){
        s.addText(
            new Text(
                global.centerY+50,
                170,          
                1, 
                1,
                screenConfig.top, 
                100,  
                screenConfig.font,
                screenConfig.color
            ))
    }
}

function screenStateManager() {
    switch (global.currentScreen) {
        case 0:
            // Handle the case for screen 0 (e.g., main menu, start screen)
            global.s.draw();
            break;
        case 2:
            // Handle the case for screen 2 (e.g., some gameplay screen)
            global.sc.draw();
            break;
        default:
            // Handle other cases or default behavior
            break;
    }
}

// Start the game loop
requestAnimationFrame(gameLoop);
setupScreen(global.s,global.currentScreenValue)
document.addEventListener("keypress", controlls);
