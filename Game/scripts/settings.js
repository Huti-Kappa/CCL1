import { global } from "./global.js";
import { gameSettings as gs} from './settings.js';

export const gameSettings = {
    enemy1: {
        name: "EnemyName",  
        health: 100,                 
        attackPatterns: [
            [4,4,4,4,4,4,4,4,4]
        ],
        dialogue: ["asd"],
        enemyCreationInterval: 500,
        distanceX : 500,
        distanceY : 500,
        speedMultiplier: 0.7
    },

    enemy2: {
        name: "EnemyName",  
        health: 100,                 
        attackPatterns: [
            [1,3,2,4,1,2,1,3,2,3,2,4,1],
            [1,2,3,3,3,3,3],
            [4,4,4,4,4,4,4,4,4]
        ],
        enemyCreationInterval: 500,
        distanceX : 500,
        distanceY : 500,
        speedMultiplier: 0.7
    },
    
    enemy3: {
        name: "EnemyName",  
        health: 100,                 
        attackPatterns: [
            [1,3,2,4,1,2,1,3,2,3,2,4,1],
            [1,2,3,3,3,3,3],
            [4,4,4,4,4,4,4,4,4]
        ],
        enemyCreationInterval: 500,
        distanceX : 500,
        distanceY : 500,
        speedMultiplier: 0.7
    },
    
    enemy4: {
        name: "EnemyName",  
        health: 100,                 
        attackPatterns: [
            [1,3,2,4,1,2,1,3,2,3,2,4,1],
            [1,2,3,3,3,3,3],
            [4,4,4,4,4,4,4,4,4]
        ],
        enemyCreationInterval: 500,
        distanceX : 500,
        distanceY : 500,
        speedMultiplier: 0.7
    },
    

    game: {
        screenWidth: 1366,
        screenHeight: 768,
        stages: [1,2,3,4],
        textGap: 30,
    },

    player: {
        health: 3,
        speed: 5,
        attackPower: 20,
    },
    
    mainScreen:{
        screenID: 0,
        top: "Ergenekon",
        text: [""],
        buttons: [
            {
                label: "Start",
                action: () => {
                    console.log("Game Started!");
                    global.currentScreen++;
                }
            },
            {
                label: "Settings",
                action: () => {
                    console.log("Settings Opened!");
                }
            },
            {
                label: "Credits",
                action: () => {
                    console.log("Credits Displayed!");
                }
            },
        ],
        font: "Tiny5",
        size: 30,
        width: 200,
        height: 80,
        x: 100,
        y: 300,
        textY: 300,
        gap: 100,
    },

    pauseScreen:{
        text: ["a","b"],
        buttons: ["Resume","Settings","Credits"],
        font: "Tiny5",
        size: 30,
        width: 100,
        height: 100,
        x: 100,
        y: 100,
        gap: 2000
    },

    gameOver:{
        screenID: 2,
        top: "Game Over!",
        text: ["Bevor du leidest, besser du meidest.","– Friedrich Schiller, 2017"],
        buttons: [
            {
                label: "Try Again!",
                action: () => {
                    console.log("test");
                    global.allGameObjects = [];
                    global.enemyCounter = 0;
                    global.enemyAmount = 0;
                    global.hitCounter = 0;
                    global.enemy = gs.dirk;
                    global.hp = gs.player.health;
                    global.attackPatternCount = 0;
                    global.isMouseClicked = false;
                    global.currentScreen = 1;
                    global.currentScreenValue = gs.mainScreen;
                    console.log("Restart!");
                    global.ctx.clearRect(0, 0, global.canvas.width, global.canvas.height);
                }
            },
            {
                label: "Title Screen",
                action: () => {
                    console.log("Title Screen!");
                    global.allGameObjects = [];
                    global.enemyCounter = 0;
                    global.enemyAmount = 0;
                    global.hitCounter = 0;
                    global.enemy = gs.dirk;
                    global.hp = gs.player.health;
                    global.attackPatternCount = 0;
                    global.isMouseClicked = false;
                    global.currentScreen = 0;
                    global.currentScreenValue = gs.mainScreen;
                    console.log("Restart!");
                }
            },
            {
                label: "Stats",
                action: () => {
                    console.log("Credits Displayed!");
                }
            },
        ],
        font: "Tiny5",
        size: 30,
        width: 200,
        height: 80,
        x: 100,
        y: 350,
        textY: 500,
        gap: 100,
        color: "red"
    },
};
