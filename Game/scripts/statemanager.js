import { global } from "./global.js";
import { gameSettings as gs} from './settings.js';
import { Button } from "./button.js";
import { Text } from "./text.js";

export class State{
    constructor(){

    }

    setupGame(){}

    setupBattle(){}
    
    setupScreen(s, screenConfig) {
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
                    "rgba(0, 0, 0, 0.2)",            
                    buttonConfig.action,
                    screenConfig.screenID
                )
            );
        }
        let ind = 0;
        let key = 0;
        const intervalId = setInterval(() => {
            if (ind < screenConfig.text.length) {
                if (key === screenConfig.text[ind].length) {
                    ind++;
                    key = 0;  // Reset key when moving to the next set of text
                } else {
                    s.addText(
                        new Text(
                            gs.game.screenWidth / 2 - screenConfig.width / 2 - screenConfig.textX,
                            screenConfig.textY / 2 + gs.game.textGap * ind,
                            screenConfig.width,
                            screenConfig.height,
                            screenConfig.text[ind][key],
                            screenConfig.size,
                            screenConfig.font
                        )
                    );
                    key++;  // Move to the next character
                }
            } else {
                clearInterval(intervalId);  // Stop the interval when all text is added
            }
        }, screenConfig.intervall);  // Adjust the interval time (in milliseconds) as needed
        
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


    screenStateManager() {
        switch (global.currentScreen) {
            case 0:
                const bg = new Image();
                bg.src = "./images/bg.png"
                global.ctx.drawImage(bg,0,0,global.canvas.width,global.canvas.height);
                global.currentScreenValue = gs.mainScreen;
                global.currentScreenButtons = global.mainScreen;
                global.mainScreen.draw();
                break;
            case 2:
                const go = new Image();
                go.src = "./images/gameover.png"
                global.ctx.drawImage(go,0,0,global.canvas.width,global.canvas.height);
                global.gameMusic.stopMusic();
                global.voice.stopMusic();
                global.hit.stopMusic();
                global.miss.stopMusic();
                global.currentScreenValue = gs.gameOver;
                global.currentScreenButtons = global.gameOver;
                global.state.setupScreen(global.gameOver,global.currentScreenValue);
                global.currentScreenButtons.draw();
                break;
            case 5:
                const bs = new Image();
                bs.src = "./images/backstory.png"
                global.ctx.drawImage(bs,global.canvas.width/4,50,global.canvas.width/2,global.canvas.height/2);
                global.gameMusic.stopMusic();
                global.voice.stopMusic();
                global.hit.stopMusic();
                global.miss.stopMusic();
                global.currentScreenValue = gs.explanation;
                global.currentScreenButtons = global.explanation;
                global.state.setupScreen(global.explanation,global.currentScreenValue);
                global.currentScreenButtons.draw();
                break;
            case 6:
                    global.gameMusic.setMusic(global.musicArray[global.currentBoss]);
                    global.gameMusic.stopMusic();
                    global.voice.stopMusic();
                    global.hit.stopMusic();
                    global.miss.stopMusic();
                    global.currentScreenValue = gs.win;
                    global.currentScreenButtons = global.win;
                    global.state.setupScreen(global.win,global.currentScreenValue);
                    global.currentScreenButtons.draw();
                    break;
            case 7:
                global.gameMusic.stopMusic();
                global.voice.stopMusic();
                global.hit.stopMusic();
                global.miss.stopMusic();
                global.currentScreenValue = gs.chooseEnemy;
                global.currentScreenButtons = global.chooseEnemy;
                global.state.setupScreen(global.chooseEnemy,global.currentScreenValue);
                global.currentScreenButtons.draw();
                break;
            case 8:
                global.gameMusic.stopMusic();
                global.voice.stopMusic();
                global.hit.stopMusic();
                global.miss.stopMusic();
                global.currentScreenValue = gs.realWin;
                global.currentScreenButtons = global.realWin;
                global.state.setupScreen(global.realWin,global.currentScreenValue);
                global.currentScreenButtons.draw();
                break;
            default:
                // Handle other cases or default behavior
                break;
        }
    }


}