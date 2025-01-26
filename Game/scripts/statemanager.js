import { global } from "./global.js";
import { gameSettings as gs } from './settings.js';
import { Button } from "./button.js";
import { Text } from "./text.js";

export class State {
    constructor() {}

    //Sets up the screen layout, including buttons, text elements, and top text.
    setupScreen(s, screenConfig) {
        this.setupButtons(s, screenConfig);
        this.setupText(s, screenConfig);
        this.setupTopText(s, screenConfig);
    }

    //Sets up the buttons for the screen based on configuration.
    setupButtons(s, screenConfig) {
        screenConfig.buttons.forEach((buttonConfig, index) => {
            s.addButton(
                new Button(
                    gs.game.screenWidth / 2 - screenConfig.width / 2,
                    screenConfig.y + screenConfig.gap * index,
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
        });
    }

    //Sets up the text elements for the screen based on configuration.
    setupText(s, screenConfig) {
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
        }, screenConfig.intervall);
    }

    //Sets up the top text for the screen based on configuration.
    setupTopText(s, screenConfig) {
        if (screenConfig.top && screenConfig.top.trim() !== "") {
            s.addText(
                new Text(
                    global.centerY + 50,
                    170,
                    1,
                    1,
                    screenConfig.top,
                    100,
                    screenConfig.font,
                    screenConfig.color
                )
            );
        }
    }

    //Manages the state of the current screen and displays the corresponding content.
    screenStateManager() {
        const screenActions = {
            0: this.setupMainScreen,
            2: this.setupGameOverScreen,
            5: this.setupBackstoryScreen,
            6: this.setupWinScreen,
            7: this.setupChooseEnemyScreen,
            8: this.setupRealWinScreen
        };

        const action = screenActions[global.currentScreen];
        if (action) {
            action.call(this);
        } else {
            // Handle other cases or default behavior
            console.warn("Unhandled screen state:", global.currentScreen);
        }
    }

    
    //Sets up the main screen.
    setupMainScreen() {
        this.setBackground("./images/bg.png");
        global.currentScreenValue = gs.mainScreen;
        global.currentScreenButtons = global.mainScreen;
        global.mainScreen.draw();
    }

    
    //Sets up the game over screen. 
    setupGameOverScreen() {
        this.setBackground("./images/gameover.png");
        this.stopAllMusic();
        global.currentScreenValue = gs.gameOver;
        global.currentScreenButtons = global.gameOver;
        global.state.setupScreen(global.gameOver, global.currentScreenValue);
        global.currentScreenButtons.draw();
    }

    
    //Sets up the backstory screen.
    setupBackstoryScreen() {
        this.setBackground("./images/backstory.png", global.canvas.width / 4, 50, global.canvas.width / 2, global.canvas.height / 2);
        this.stopAllMusic();
        global.currentScreenValue = gs.explanation;
        global.currentScreenButtons = global.explanation;
        global.state.setupScreen(global.explanation, global.currentScreenValue);
        global.currentScreenButtons.draw();
        global.bg.startMusic();
    }

    
    //Sets up the win screen.
    setupWinScreen() {
        this.stopAllMusic();
        global.gameMusic.setMusic(global.musicArray[global.currentBoss]);
        global.currentScreenValue = gs.win;
        global.currentScreenButtons = global.win;
        global.state.setupScreen(global.win, global.currentScreenValue);
        global.currentScreenButtons.draw();
    }

    
    //Sets up the choose enemy screen.
    setupChooseEnemyScreen() {
        this.stopAllMusic();
        global.currentScreenValue = gs.chooseEnemy;
        global.currentScreenButtons = global.chooseEnemy;
        global.state.setupScreen(global.chooseEnemy, global.currentScreenValue);
        global.currentScreenButtons.draw();
    }

    
    //Sets up the real win screen.
    setupRealWinScreen() {
        this.stopAllMusic();
        global.currentScreenValue = gs.realWin;
        global.currentScreenButtons = global.realWin;
        global.state.setupScreen(global.realWin, global.currentScreenValue);
        global.currentScreenButtons.draw();
    }


    //Stops all music currently playing.
    stopAllMusic() {
        global.gameMusic.stopMusic();
        global.voice.stopMusic();
        global.hit.stopMusic();
        global.miss.stopMusic();
    }


    //Sets the background image for the screen.
    setBackground(src, x = 0, y = 0, width = global.canvas.width, height = global.canvas.height) {
        const bg = new Image();
        bg.src = src;
        global.ctx.drawImage(bg, x, y, width, height);
    }
}
