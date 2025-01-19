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
                    "black",            
                    buttonConfig.action,
                    screenConfig.screenID
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
    
    screenStateManager() {
        switch (global.currentScreen) {
            case 0:
                global.currentScreenValue = gs.mainScreen;
                global.currentScreenButtons = global.mainScreen;
                global.mainScreen.draw();
                break;
            case 2:
                global.gameMusic.stopMusic();
                global.currentScreenValue = gs.gameOver;
                global.currentScreenButtons = global.gameOver;
                global.state.setupScreen(global.gameOver,global.currentScreenValue);
                global.currentScreenButtons.draw();
                break;
            default:
                // Handle other cases or default behavior
                break;
        }
    }


}