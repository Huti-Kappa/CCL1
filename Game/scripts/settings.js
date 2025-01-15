import { global } from "./global.js";

export const gameSettings = {
    dirk: {
        name: "EnemyName",  
        health: 100,                 
        attackPatterns: [
            [4,4,4,4,4,4,4,4,4]
        ],
        enemyCreationInterval: 500,
        distanceX : 500,
        distanceY : 500,
        speedMultiplier: 0.7
    },

    gunther: {
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
        screenWidth: 1024,
        screenHeight: 576,
        stages: [1,2,3,4]
    },

    player: {
        health: 3,
        speed: 5,
        attackPower: 20,
    },
    
    mainScreen:{
        text: ["a","b"],
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
        y: 100,
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
        text: ["a","b"],
        buttons: [
            {
                label: "Restart",
                action: () => {
                    console.log("Game Started!");
                    global.currentScreen++;
                }
            },
            {
                label: "Title Screen",
                action: () => {
                    console.log("Settings Opened!");
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
        y: 100,
        gap: 100,
    },
};
